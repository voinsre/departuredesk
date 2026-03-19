import sharp from 'sharp';
import { mkdirSync } from 'fs';

const OUTPUT_DIR = './public/images';
mkdirSync(OUTPUT_DIR, { recursive: true });

// Color palette
const NAVY_900 = '#0A1628';
const NAVY_800 = '#12233D';
const NAVY_700 = '#1A3354';
const GOLD_400 = '#C9A84C';
const GOLD_300 = '#D4B95E';
const GOLD_100 = '#F5ECD5';

// ============================================================
// 1. OG IMAGE (1200x630) — Wordmark + tagline on navy
// ============================================================
async function generateOGImage() {
  const width = 1200;
  const height = 630;

  const svg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${NAVY_900}" />
        <stop offset="100%" style="stop-color:${NAVY_800}" />
      </linearGradient>
      <!-- Subtle radial glow -->
      <radialGradient id="glow" cx="50%" cy="50%" r="60%">
        <stop offset="0%" style="stop-color:${NAVY_700};stop-opacity:0.3" />
        <stop offset="100%" style="stop-color:${NAVY_900};stop-opacity:0" />
      </radialGradient>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bg)" />
    <rect width="${width}" height="${height}" fill="url(#glow)" />

    <!-- Gold horizontal line -->
    <rect x="100" y="${height / 2 - 5}" width="1000" height="1.5" fill="${GOLD_400}" opacity="0.6" />

    <!-- Wordmark above line -->
    <text x="${width / 2}" y="${height / 2 - 50}"
          font-family="Georgia, 'Times New Roman', serif"
          font-size="60" font-weight="bold"
          fill="white" text-anchor="middle" letter-spacing="8">
      DEPARTURE DESK
    </text>

    <!-- Tagline below line -->
    <text x="${width / 2}" y="${height / 2 + 55}"
          font-family="Arial, Helvetica, sans-serif"
          font-size="22" font-weight="400"
          fill="${GOLD_100}" text-anchor="middle" letter-spacing="2" opacity="0.8">
      We close your Dubai chapter. You never have to come back.
    </text>

    <!-- Subtle corner accents -->
    <rect x="60" y="60" width="40" height="1.5" fill="${GOLD_400}" opacity="0.4" />
    <rect x="60" y="60" width="1.5" height="40" fill="${GOLD_400}" opacity="0.4" />
    <rect x="${width - 100}" y="${height - 100}" width="40" height="1.5" fill="${GOLD_400}" opacity="0.4" />
    <rect x="${width - 61.5}" y="${height - 100}" width="1.5" height="40" fill="${GOLD_400}" opacity="0.4" />
  </svg>`;

  await sharp(Buffer.from(svg))
    .jpeg({ quality: 90 })
    .toFile(`${OUTPUT_DIR}/og-image.jpg`);

  console.log('✓ og-image.jpg (1200x630)');
}

// ============================================================
// 2. HERO IMAGE (1920x1080) — Atmospheric cityscape mood
// ============================================================
async function generateHeroImage() {
  const width = 1920;
  const height = 1080;

  const svg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Sky gradient: deep navy to warm horizon -->
      <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style="stop-color:#050D1A" />
        <stop offset="35%" style="stop-color:${NAVY_900}" />
        <stop offset="65%" style="stop-color:${NAVY_800}" />
        <stop offset="85%" style="stop-color:#1E2D45" />
        <stop offset="100%" style="stop-color:#2A3A52" />
      </linearGradient>

      <!-- Warm horizon glow -->
      <radialGradient id="horizonGlow" cx="60%" cy="78%" r="45%">
        <stop offset="0%" style="stop-color:#C9A84C;stop-opacity:0.15" />
        <stop offset="50%" style="stop-color:#D4A03A;stop-opacity:0.08" />
        <stop offset="100%" style="stop-color:${NAVY_900};stop-opacity:0" />
      </radialGradient>

      <!-- City lights ambient -->
      <radialGradient id="cityGlow" cx="50%" cy="75%" r="35%">
        <stop offset="0%" style="stop-color:#D4B95E;stop-opacity:0.06" />
        <stop offset="100%" style="stop-color:${NAVY_900};stop-opacity:0" />
      </radialGradient>

      <!-- Subtle warm light spill (from interior) -->
      <radialGradient id="warmLight" cx="25%" cy="65%" r="20%">
        <stop offset="0%" style="stop-color:#E8C96A;stop-opacity:0.08" />
        <stop offset="100%" style="stop-color:${NAVY_900};stop-opacity:0" />
      </radialGradient>

      <!-- Noise filter for texture -->
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.03"/>
        </feComponentTransfer>
        <feBlend in="SourceGraphic" mode="multiply"/>
      </filter>
    </defs>

    <!-- Base sky -->
    <rect width="${width}" height="${height}" fill="url(#sky)" />

    <!-- Horizon glow -->
    <rect width="${width}" height="${height}" fill="url(#horizonGlow)" />
    <rect width="${width}" height="${height}" fill="url(#cityGlow)" />
    <rect width="${width}" height="${height}" fill="url(#warmLight)" />

    <!-- Horizon line -->
    <rect x="0" y="${height * 0.72}" width="${width}" height="1" fill="${GOLD_400}" opacity="0.08" />

    <!-- Abstract building silhouettes -->
    ${generateSkyline(width, height)}

    <!-- Scattered city light dots -->
    ${generateCityLights(width, height)}

    <!-- Subtle balcony frame elements (foreground) -->
    <rect x="0" y="0" width="80" height="${height}" fill="${NAVY_900}" opacity="0.5" />
    <rect x="0" y="${height - 120}" width="${width * 0.35}" height="120" fill="${NAVY_900}" opacity="0.4" />
    <!-- Balcony railing hint -->
    <rect x="80" y="${height - 120}" width="${width * 0.3}" height="2" fill="#3A4A5E" opacity="0.5" />
    <rect x="80" y="${height - 120}" width="2" height="120" fill="#3A4A5E" opacity="0.3" />

    <!-- Film grain overlay -->
    <rect width="${width}" height="${height}" filter="url(#noise)" opacity="0.4" />

    <!-- Vignette -->
    <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
      <stop offset="60%" style="stop-color:transparent" />
      <stop offset="100%" style="stop-color:${NAVY_900};stop-opacity:0.6" />
    </radialGradient>
    <rect width="${width}" height="${height}" fill="url(#vignette)" />
  </svg>`;

  await sharp(Buffer.from(svg))
    .webp({ quality: 85 })
    .toFile(`${OUTPUT_DIR}/hero.webp`);

  console.log('✓ hero.webp (1920x1080)');
}

function generateSkyline(w, h) {
  const buildings = [];
  const baseY = h * 0.72;
  // Generate varied building silhouettes
  const buildingData = [
    { x: w * 0.15, width: 30, height: 180 },
    { x: w * 0.18, width: 22, height: 140 },
    { x: w * 0.22, width: 45, height: 260 },
    { x: w * 0.26, width: 20, height: 120 },
    { x: w * 0.30, width: 35, height: 200 },
    { x: w * 0.33, width: 18, height: 320 }, // Tall tower
    { x: w * 0.35, width: 28, height: 160 },
    { x: w * 0.40, width: 50, height: 220 },
    { x: w * 0.44, width: 15, height: 380 }, // Very tall - Burj-like
    { x: w * 0.46, width: 25, height: 170 },
    { x: w * 0.50, width: 40, height: 240 },
    { x: w * 0.54, width: 22, height: 190 },
    { x: w * 0.58, width: 35, height: 280 },
    { x: w * 0.61, width: 18, height: 150 },
    { x: w * 0.65, width: 42, height: 210 },
    { x: w * 0.69, width: 20, height: 300 },
    { x: w * 0.72, width: 30, height: 170 },
    { x: w * 0.76, width: 25, height: 230 },
    { x: w * 0.80, width: 38, height: 190 },
    { x: w * 0.84, width: 15, height: 260 },
    { x: w * 0.87, width: 32, height: 140 },
  ];

  buildingData.forEach(b => {
    const opacity = 0.3 + Math.random() * 0.2;
    buildings.push(
      `<rect x="${b.x}" y="${baseY - b.height}" width="${b.width}" height="${b.height + 50}" fill="${NAVY_900}" opacity="${opacity}" />`
    );
    // Random lit windows
    for (let wy = baseY - b.height + 15; wy < baseY - 10; wy += 18) {
      for (let wx = b.x + 4; wx < b.x + b.width - 4; wx += 10) {
        if (Math.random() > 0.6) {
          const lightColor = Math.random() > 0.5 ? '#F5ECD5' : '#E8D59A';
          buildings.push(
            `<rect x="${wx}" y="${wy}" width="4" height="5" fill="${lightColor}" opacity="${0.15 + Math.random() * 0.25}" />`
          );
        }
      }
    }
  });

  return buildings.join('\n    ');
}

function generateCityLights(w, h) {
  const lights = [];
  const baseY = h * 0.72;

  // Scattered lights along horizon
  for (let i = 0; i < 60; i++) {
    const x = w * 0.1 + Math.random() * w * 0.8;
    const y = baseY - 5 + Math.random() * 20;
    const size = 1 + Math.random() * 2;
    const colors = ['#F5ECD5', '#E8C96A', '#FFFFFF', '#D4B95E'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    lights.push(
      `<circle cx="${x}" cy="${y}" r="${size}" fill="${color}" opacity="${0.1 + Math.random() * 0.3}" />`
    );
  }

  // Water reflections below horizon
  for (let i = 0; i < 40; i++) {
    const x = w * 0.3 + Math.random() * w * 0.5;
    const y = baseY + 10 + Math.random() * (h - baseY - 130);
    const rw = 3 + Math.random() * 15;
    lights.push(
      `<rect x="${x}" y="${y}" width="${rw}" height="1" fill="${GOLD_400}" opacity="${0.02 + Math.random() * 0.06}" rx="0.5" />`
    );
  }

  return lights.join('\n    ');
}

// ============================================================
// 3. SERVICES HEADER (1920x800) — Luxury empty interior mood
// ============================================================
async function generateServicesHeader() {
  const width = 1920;
  const height = 800;

  const svg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="svcBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:${NAVY_900}" />
        <stop offset="50%" style="stop-color:${NAVY_800}" />
        <stop offset="100%" style="stop-color:#0D1B30" />
      </linearGradient>

      <!-- Golden hour light from right side (window light) -->
      <radialGradient id="windowLight" cx="85%" cy="40%" r="50%">
        <stop offset="0%" style="stop-color:${GOLD_400};stop-opacity:0.12" />
        <stop offset="40%" style="stop-color:${GOLD_100};stop-opacity:0.05" />
        <stop offset="100%" style="stop-color:${NAVY_900};stop-opacity:0" />
      </radialGradient>

      <!-- Secondary ambient light -->
      <radialGradient id="ambientLight" cx="70%" cy="80%" r="40%">
        <stop offset="0%" style="stop-color:#D4A03A;stop-opacity:0.06" />
        <stop offset="100%" style="stop-color:${NAVY_900};stop-opacity:0" />
      </radialGradient>

      <filter id="noiseS">
        <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.03"/>
        </feComponentTransfer>
        <feBlend in="SourceGraphic" mode="multiply"/>
      </filter>
    </defs>

    <rect width="${width}" height="${height}" fill="url(#svcBg)" />
    <rect width="${width}" height="${height}" fill="url(#windowLight)" />
    <rect width="${width}" height="${height}" fill="url(#ambientLight)" />

    <!-- Floor line -->
    <rect x="0" y="${height * 0.75}" width="${width}" height="1" fill="#2A3A52" opacity="0.3" />

    <!-- Abstract floor-to-ceiling window frames (right side) -->
    <rect x="${width * 0.6}" y="40" width="2" height="${height * 0.7}" fill="#2A3A52" opacity="0.25" />
    <rect x="${width * 0.72}" y="40" width="2" height="${height * 0.7}" fill="#2A3A52" opacity="0.2" />
    <rect x="${width * 0.84}" y="40" width="2" height="${height * 0.7}" fill="#2A3A52" opacity="0.15" />
    <!-- Horizontal window dividers -->
    <rect x="${width * 0.6}" y="${height * 0.35}" width="${width * 0.35}" height="1" fill="#2A3A52" opacity="0.15" />

    <!-- Light beam on floor from window -->
    <polygon points="${width * 0.55},${height * 0.75} ${width * 0.85},${height * 0.75} ${width * 0.95},${height} ${width * 0.45},${height}"
             fill="${GOLD_400}" opacity="0.03" />

    <!-- Abstract art mark shadow on wall (left side) -->
    <rect x="${width * 0.12}" y="${height * 0.2}" width="120" height="90" fill="#0D1B30" opacity="0.3" rx="1" />
    <!-- Hanging wire hint -->
    <rect x="${width * 0.12 + 60}" y="${height * 0.15}" width="0.5" height="${height * 0.05}" fill="#3A4A5E" opacity="0.3" />

    <!-- Single box on floor -->
    <rect x="${width * 0.30}" y="${height * 0.65}" width="60" height="50" fill="#1A2A42" opacity="0.5" rx="1" />
    <rect x="${width * 0.30}" y="${height * 0.65}" width="60" height="1" fill="#2A3A52" opacity="0.3" />

    <!-- Subtle wall texture lines -->
    <rect x="${width * 0.4}" y="0" width="0.5" height="${height * 0.75}" fill="#1A2A42" opacity="0.15" />

    <!-- Film grain -->
    <rect width="${width}" height="${height}" filter="url(#noiseS)" opacity="0.35" />

    <!-- Vignette -->
    <radialGradient id="vignetteS" cx="50%" cy="50%" r="70%">
      <stop offset="50%" style="stop-color:transparent" />
      <stop offset="100%" style="stop-color:${NAVY_900};stop-opacity:0.5" />
    </radialGradient>
    <rect width="${width}" height="${height}" fill="url(#vignetteS)" />
  </svg>`;

  await sharp(Buffer.from(svg))
    .webp({ quality: 85 })
    .toFile(`${OUTPUT_DIR}/services-header.webp`);

  console.log('✓ services-header.webp (1920x800)');
}

// ============================================================
// 4. FORM HEADER (1920x800) — Airplane window / departure mood
// ============================================================
async function generateFormHeader() {
  const width = 1920;
  const height = 800;

  const svg = `
  <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Sunset gradient: warm to cool transition -->
      <linearGradient id="sunsetSky" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" style="stop-color:#1A1028" />
        <stop offset="25%" style="stop-color:${NAVY_800}" />
        <stop offset="50%" style="stop-color:#2A3550" />
        <stop offset="70%" style="stop-color:#3D4A5E" />
        <stop offset="85%" style="stop-color:#6B5A3E" />
        <stop offset="95%" style="stop-color:#8B6E42" />
        <stop offset="100%" style="stop-color:#C49A3C" />
      </linearGradient>

      <!-- Warm sun glow -->
      <radialGradient id="sunGlow" cx="90%" cy="70%" r="35%">
        <stop offset="0%" style="stop-color:#E8C96A;stop-opacity:0.2" />
        <stop offset="50%" style="stop-color:#D4A03A;stop-opacity:0.08" />
        <stop offset="100%" style="stop-color:transparent" />
      </radialGradient>

      <!-- Window oval mask -->
      <clipPath id="windowClip">
        <ellipse cx="${width / 2}" cy="${height / 2}" rx="${width * 0.32}" ry="${height * 0.42}" />
      </clipPath>

      <filter id="noiseF">
        <feTurbulence type="fractalNoise" baseFrequency="0.55" numOctaves="3" stitchTiles="stitch"/>
        <feColorMatrix type="saturate" values="0"/>
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.04"/>
        </feComponentTransfer>
        <feBlend in="SourceGraphic" mode="multiply"/>
      </filter>

      <filter id="blur1">
        <feGaussianBlur stdDeviation="2" />
      </filter>
    </defs>

    <!-- Dark cabin background -->
    <rect width="${width}" height="${height}" fill="#08101E" />

    <!-- Window view area -->
    <g clip-path="url(#windowClip)">
      <!-- Sky through window -->
      <rect width="${width}" height="${height}" fill="url(#sunsetSky)" />
      <rect width="${width}" height="${height}" fill="url(#sunGlow)" />

      <!-- Distant skyline silhouette (Dubai receding) -->
      <g filter="url(#blur1)" opacity="0.3">
        ${generateDistantSkyline(width, height)}
      </g>

      <!-- Scattered clouds -->
      <ellipse cx="${width * 0.35}" cy="${height * 0.35}" rx="120" ry="15" fill="white" opacity="0.04" />
      <ellipse cx="${width * 0.55}" cy="${height * 0.45}" rx="80" ry="10" fill="white" opacity="0.03" />
      <ellipse cx="${width * 0.7}" cy="${height * 0.3}" rx="100" ry="12" fill="#F5ECD5" opacity="0.04" />

      <!-- Window grain -->
      <rect width="${width}" height="${height}" filter="url(#noiseF)" opacity="0.3" />
    </g>

    <!-- Window frame (dark oval border) -->
    <ellipse cx="${width / 2}" cy="${height / 2}" rx="${width * 0.32}" ry="${height * 0.42}"
             fill="none" stroke="#1A2030" stroke-width="40" />
    <!-- Inner window rim -->
    <ellipse cx="${width / 2}" cy="${height / 2}" rx="${width * 0.32 + 20}" ry="${height * 0.42 + 20}"
             fill="none" stroke="#0D1520" stroke-width="30" />
    <!-- Outer cabin area -->
    <ellipse cx="${width / 2}" cy="${height / 2}" rx="${width * 0.32 + 35}" ry="${height * 0.42 + 35}"
             fill="none" stroke="#08101E" stroke-width="60" />

    <!-- Cabin ambient darkness around window -->
    <radialGradient id="cabinDark" cx="50%" cy="50%" r="55%">
      <stop offset="40%" style="stop-color:transparent" />
      <stop offset="100%" style="stop-color:#08101E;stop-opacity:0.95" />
    </radialGradient>
    <rect width="${width}" height="${height}" fill="url(#cabinDark)" />

    <!-- Subtle reflection on window -->
    <ellipse cx="${width * 0.42}" cy="${height * 0.35}" rx="80" ry="150" fill="white" opacity="0.015" transform="rotate(-15, ${width * 0.42}, ${height * 0.35})" />

    <!-- Overall film grain -->
    <rect width="${width}" height="${height}" filter="url(#noiseF)" opacity="0.2" />
  </svg>`;

  await sharp(Buffer.from(svg))
    .webp({ quality: 85 })
    .toFile(`${OUTPUT_DIR}/form-header.webp`);

  console.log('✓ form-header.webp (1920x800)');
}

function generateDistantSkyline(w, h) {
  const shapes = [];
  const baseY = h * 0.65;

  // Small distant buildings
  const buildings = [
    { x: w * 0.35, width: 8, height: 40 },
    { x: w * 0.38, width: 5, height: 25 },
    { x: w * 0.40, width: 12, height: 55 },
    { x: w * 0.43, width: 4, height: 90 }, // Burj-like spire
    { x: w * 0.45, width: 10, height: 35 },
    { x: w * 0.48, width: 7, height: 45 },
    { x: w * 0.50, width: 15, height: 30 },
    { x: w * 0.53, width: 6, height: 50 },
    { x: w * 0.56, width: 9, height: 38 },
    { x: w * 0.58, width: 5, height: 60 },
    { x: w * 0.60, width: 11, height: 42 },
    { x: w * 0.63, width: 7, height: 32 },
  ];

  buildings.forEach(b => {
    shapes.push(
      `<rect x="${b.x}" y="${baseY - b.height}" width="${b.width}" height="${b.height + 30}" fill="#2A3550" />`
    );
  });

  // Ground/water line
  shapes.push(
    `<rect x="${w * 0.3}" y="${baseY}" width="${w * 0.4}" height="40" fill="#1A2540" opacity="0.5" />`
  );

  return shapes.join('\n        ');
}

// ============================================================
// RUN ALL
// ============================================================
async function main() {
  console.log('Generating images...\n');

  await generateOGImage();
  await generateHeroImage();
  await generateServicesHeader();
  await generateFormHeader();

  console.log('\n✓ All images generated in', OUTPUT_DIR);
}

main().catch(console.error);
