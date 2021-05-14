import React from "react"
import styled from "styled-components"
import { P } from "../../../../../../styled-components/GlobalStyles"
import Title from "./Title"
const Video = ({
  videoSrc,
  videoTitle,
  zIndex,
  transform,
  slideLive,
  description,
  setDescription,
  ...props
}) => (
  <VideoContainer
  transform={`translateX(${59 * slideLive}vw)`}
  >
    <VideoSlide
      src="https://www.youtube.com/embed/watch?v=BXdhI_Qpt-k"
      title="W3Schools Free Online Web Tutorials"
    ></VideoSlide>

    
    {slideLive * slideLive + 1 === zIndex ? <Title imgTitle={videoTitle} /> : null}
  </VideoContainer>
)
export default Video

export const VideoContainer = styled.div`
height: 100%;
width: 53vw;
margin-right: 1.5rem;
@media screen and (max-width: 450px) {
    min-width: 85vw;
    height: 100%;
    margin-right: 1rem;
  }
`

export const VideoSlide = styled.iframe`
width: 53vw;

  @media screen and (max-width: 450px) {
    width: 85vw;
    height: 56vw;
    margin-right: 1rem;
  }
  margin-right: 1.5rem;
  height: 100%;
  z-index: ${props => props.zIndex};
  transform: ${props => props.transform + 1.5};
`
