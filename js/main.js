import {generatePictures} from '../js/data.js';
import { renderPictures } from '../js/popup.js';
import { showModal } from '../js/form.js';
import { showBigPicture } from '../js/bigPicture.js'

const arrayPictures = generatePictures();
renderPictures(arrayPictures);
// showModal();
// showBigPicture();

console.log(arrayPictures);


