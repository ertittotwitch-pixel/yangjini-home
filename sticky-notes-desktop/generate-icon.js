// Generate a 16x16 yellow dot PNG for the tray icon
const zlib = require('zlib');
const fs = require('fs');

function crc32(buf) {
  let crc = 0xFFFFFFFF;
  const table = new Int32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    table[i] = c;
  }
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const t = Buffer.from(type, 'ascii');
  const combined = Buffer.concat([t, data]);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(combined));
  return Buffer.concat([len, combined, crcBuf]);
}

const W = 16, H = 16;
const raw = Buffer.alloc((W * 4 + 1) * H);
for (let y = 0; y < H; y++) {
  raw[y * (W * 4 + 1)] = 0; // filter none
  for (let x = 0; x < W; x++) {
    const off = y * (W * 4 + 1) + 1 + x * 4;
    const cx = x - 7.5, cy = y - 7.5, d = Math.sqrt(cx*cx + cy*cy);
    if (d < 5) {
      raw[off] = 0xF0; raw[off+1] = 0xE2; raw[off+2] = 0xAE; raw[off+3] = 255;
    } else if (d < 6.5) {
      raw[off] = 0xE0; raw[off+1] = 0xD0; raw[off+2] = 0x9A; raw[off+3] = 220;
    } else {
      raw[off] = 0; raw[off+1] = 0; raw[off+2] = 0; raw[off+3] = 0;
    }
  }
}

const ihdr = Buffer.alloc(13);
ihdr.writeUInt32BE(W, 0);
ihdr.writeUInt32BE(H, 4);
ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA

const png = Buffer.concat([
  Buffer.from([137,80,78,71,13,10,26,10]),
  chunk('IHDR', ihdr),
  chunk('IDAT', zlib.deflateSync(raw)),
  chunk('IEND', Buffer.alloc(0)),
]);

fs.writeFileSync(__dirname + '/icon.png', png);
console.log('icon.png generated');
