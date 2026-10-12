
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const dir = path.join(__dirname, "public", "images");

async function main() {
  const files = fs.readdirSync(dir).filter((file) =>
    /\.(png|jpe?g)$/i.test(file)
  );

  for (const file of files) {
    const input = path.join(dir, file);
    const output = path.join(
      dir,
      `${path.parse(file).name}.webp`
    );

    await sharp(input)
      .rotate()
      .webp({ quality: 80, effort: 5 })
      .toFile(output);

    const originalSize = fs.statSync(input).size;
    const optimizedSize = fs.statSync(output).size;
    const savings = ((1 - optimizedSize / originalSize) * 100).toFixed(1);

    console.log(
      `${file}: ${(originalSize / 1024).toFixed(1)} KB -> ` +
      `${(optimizedSize / 1024).toFixed(1)} KB (${savings}% smaller)`
    );
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
