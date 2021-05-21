import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'
import { P } from '../../../../../../styled-components/GlobalStyles'
import { TweenLite, Power3, gsap } from "gsap"
gsap.registerPlugin()

const Title = ({titleText}) => {
 
let title = useRef(null)
    useEffect(() => {
      
        gsap.fromTo(title, 1, {
         opacity: 0
       },
       {
           opacity: 1,
           delay: 1
       })
    })
    return (
       <TitleEl 
       ref={el => (title = el)}
       >{titleText.charAt(0).toUpperCase() + titleText.slice(1)}</TitleEl>
    )
}

export default Title


export const TitleEl = styled(P)`
margin-top: -3px;
`