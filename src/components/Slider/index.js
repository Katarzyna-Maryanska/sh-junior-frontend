import React from "react";
import images from './images';
import {Wrapper, ImageTrain, Image} from "./styles";

function calculateNumberOfImagesNeeded() {
    const availableScreenWidth = window.screen.availWidth;
    const imageWidth = 184;
    return Math.ceil(availableScreenWidth / imageWidth);
}

function calculateRepetition(numberOfNeededImages, availableImages) {
    return Math.ceil(numberOfNeededImages / availableImages);
}

function createImageCollection() {
    const neededImagesCount = calculateNumberOfImagesNeeded();
    const availableImagesCount = images.length;
    const repetitionCount = calculateRepetition(neededImagesCount, availableImagesCount);

    const imagesCollection = [];
    for (let i = 1; i <= repetitionCount; i++) {
      imagesCollection.push(images.map(image => <Image src={image}/>));
    }

    return [... imagesCollection, ...imagesCollection, ...imagesCollection];
}

const imageCollection = createImageCollection();


export const Slider = () => (
    <Wrapper>
      <ImageTrain>{imageCollection}</ImageTrain>
    </Wrapper>
);

