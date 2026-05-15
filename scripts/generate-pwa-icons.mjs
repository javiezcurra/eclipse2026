#!/usr/bin/env node
/**
 * Render the PWA icon PNG set from a source image.
 *
 * Drop your icon at:
 *   public/pwa-icon.svg   (preferred — scales infinitely, no quality loss)
 *   public/pwa-icon.png   (1024×1024 or larger recommended)
 *   public/pwa-icon.jpg
 *
 * For best results on Android, optionally also drop a "maskable" variant
 * where the logo sits inside the inner 80% (the "safe zone"):
 *   public/pwa-icon-maskable.svg  or  .png
 * If you skip the maskable file, this script auto-pads your standard icon
 * with a 10% border so OS-applied circle/squircle masks don't crop the logo.
 *
 * Output:
 *   public/icons/icon-192.png
 *   public/icons/icon-512.png
 *   public/icons/icon-512-maskable.png
 *   public/apple-touch-icon.png      (180×180, for iOS home screen)
 *
 * Run with: npm run icons
 */
import sharp from 'sharp';
import { readFileSync, existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const root = process.cwd();

const standardCandidates = [
  'public/pwa-icon.svg',
  'public/pwa-icon.png',
  'public/pwa-icon.jpg',
  'public/pwa-icon.jpeg',
];
const maskableCandidates = [
  'public/pwa-icon-maskable.svg',
  'public/pwa-icon-maskable.png',
  'public/pwa-icon-maskable.jpg',
  'public/pwa-icon-maskable.jpeg',
];

const standardPath = standardCandidates.find((p) => existsSync(resolve(root, p)));
if (!standardPath) {
  console.error('No standard icon source found. Save one of:');
  for (const p of standardCandidates) console.error('  ' + p);
  process.exit(1);
}
console.log('• standard source:', standardPath);
const standard = readFileSync(resolve(root, standardPath));

let maskable;
const maskablePath = maskableCandidates.find((p) => existsSync(resolve(root, p)));
if (maskablePath) {
  console.log('• maskable source:', maskablePath);
  maskable = readFileSync(resolve(root, maskablePath));
} else {
  // Auto-pad the standard icon to fit inside the 80% safe zone. Background
  // matches the manifest's background_color so the padding blends.
  console.log('• maskable source: (none — auto-padding the standard icon to fit the safe zone)');
  maskable = await sharp(standard)
    .resize(410, 410, { fit: 'contain', background: { r: 11, g: 18, b: 32, alpha: 1 } })
    .extend({
      top: 51, bottom: 51, left: 51, right: 51,
      background: { r: 11, g: 18, b: 32, alpha: 1 }, // #0b1220
    })
    .png()
    .toBuffer();
}

mkdirSync(resolve(root, 'public/icons'), { recursive: true });

const jobs = [
  { src: standard, out: 'public/icons/icon-192.png', size: 192 },
  { src: standard, out: 'public/icons/icon-512.png', size: 512 },
  { src: standard, out: 'public/apple-touch-icon.png', size: 180 },
  { src: maskable, out: 'public/icons/icon-512-maskable.png', size: 512 },
];

for (const { src, out, size } of jobs) {
  await sharp(src).resize(size, size).png({ compressionLevel: 9 }).toFile(resolve(root, out));
  console.log('✓ wrote', out, `(${size}×${size})`);
}
