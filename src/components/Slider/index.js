import React from "react";
import slide1 from "./assets/photos/slide-1.jpg"
import slide2 from "./assets/photos/slide-2.jpg"
import slide3 from "./assets/photos/slide-3.jpg"
import slide4 from "./assets/photos/slide-4.jpg"
import slide5 from "./assets/photos/slide-5.jpg"
import { Wrapper, Image } from "./styles";

export const Slider = () => (
<Wrapper>
  <Image src={slide1}/>
  <Image src={slide2}/>
  <Image src={slide3}/>
  <Image src={slide4}/>
  <Image src={slide5}/>
</Wrapper>
);
