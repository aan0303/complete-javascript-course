'use strict';

// const loadNPause = async function () {};
let currImage;
const imagesContainer = document.querySelector('.images');

const createImg = async function (imgPath) {
  return new Promise(function (resolve, reject) {
    const image = document.createElement('img');
    image.src = `${imgPath}`;

    image.addEventListener('load', function () {
      imagesContainer.append(image);
      resolve(image);
    });

    image.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  });
};

const wait = async function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const loadNPause = async function (img1, img2) {
  const createImage = await createImg(`${img1}`);
  currImage = createImage;
  const wait2secs = await wait(2);
  currImage.style.display = 'none';

  const createImage2 = await createImg(`${img2}`);
  currImage = createImage2;
  const wait2secsagain = await wait(2);
  currImage.style.display = 'none';
};

loadNPause(`/img/img-1.jpg`, `/img/img-2.jpg`);
