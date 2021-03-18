import Image from './js_cup.jpg';

export const addImage = () => {
    const img = document.createElement('img');
    img.alt = 'image';
    img.width = 300;
    img.src = Image;
    document.querySelector('body').appendChild(img)
}
