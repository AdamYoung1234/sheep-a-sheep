import * as fromConstants from './constants'
const loadImage = (src) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(img);
    img.onerror = reject;
  });

const initAssets = async () => {
  const promises = [];
  for (let i = 0; i < fromConstants.NUM_CARD_TYPE; i++) {
    promises.push(loadImage(`assets/type${i}.bmp`));
  }

  const assets = await Promise.all(promises);

  return assets;
};

export default initAssets
