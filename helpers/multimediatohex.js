const fs = require('fs');

const imagePath = '../view/src/public/audios/KC3000.m4a';

fs.readFile(imagePath, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const hexCode = Buffer.from(data).toString('hex');
  console.log(hexCode);
});
