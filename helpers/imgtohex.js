const fs = require('fs');

const imagePath = '../model/assets/imgs/CP-INTEL-BX8070110400F-1.webp';

fs.readFile(imagePath, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const hexCode = Buffer.from(data).toString('hex');
  console.log(hexCode);
});
