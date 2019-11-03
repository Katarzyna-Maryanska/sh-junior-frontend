import React from "react";
import images from './images';
import {Wrapper, ImageTrain, Image} from "./styles";

function calculateNumberOfImagesNeeded(imageWidth) {
    const availableScreenWidth = window.screen.availWidth;
    return Math.ceil(availableScreenWidth / imageWidth);
}

function calculateRepetition(numberOfNeededImages, availableImages) {
    return Math.ceil(numberOfNeededImages / availableImages);
}

function createImagesForTrain(images) {
    const neededImagesCount = calculateNumberOfImagesNeeded(184);
    const availableImagesCount = images.length;
    const repetitionCount = calculateRepetition(neededImagesCount, availableImagesCount);

    const imagesCollection = [];
    for (let i = 1; i <= repetitionCount; i++) {
      imagesCollection.push(images.map((image, index) => <Image src={image} key={index}/>));
    }

    return [...imagesCollection, ...imagesCollection, ...imagesCollection];
}

const imageCollection = createImagesForTrain(images);

export const Slider = () => (
    <Wrapper>
      <ImageTrain>{imageCollection}</ImageTrain>
    </Wrapper>
);

