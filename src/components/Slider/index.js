import React from "react";
import images from './images';
import { Wrapper, Image } from "./styles";

function calculateNumberOfImageGroups() {
  const availableScreenWidth = window.screen.availWidth;
  const imageWidth = 184;
  const neededImagesCount = Math.ceil(availableScreenWidth/imageWidth);
  const availableImagesCount = images.length;

  return Math.ceil(neededImagesCount/availableImagesCount);
}

const numberOfImageGroups = calculateNumberOfImageGroups() + 1;
console.log(numberOfImageGroups);

const imageComponentsGroup =  images.map((image) => <Image src={image}/>);
let imageComponents = [];
for (let i = 1; i <= numberOfImageGroups; i++ ) {
  imageComponents = [... imageComponents, ... imageComponentsGroup];
}

export const Slider = () => (
<Wrapper>
  {imageComponents}
</Wrapper>
);

