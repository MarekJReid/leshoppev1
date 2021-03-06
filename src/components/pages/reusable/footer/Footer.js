import React from 'react'
import styled from 'styled-components'
import FooterContact from './FooterContact'
import FooterLinks from './FooterLinks'
import FooterSocials from './FooterSocials'
import FooterSubscribe from './FooterSubscribe'
const Footer = ({venueInfoDescription}) => {
    return (
        <FooterContainer>
            <LeftContainer>
                <SubContainer>
                <FooterLinks/>
                <FooterContact venueInfoDescription={venueInfoDescription}/>
                <FooterSocials/>
                </SubContainer>
            </LeftContainer>
            <FooterSubscribe/>
        </FooterContainer>
    )
}

export default Footer

export const FooterContainer = styled.div`
width: 99vw;

display: flex;
position: relative;
z-index: 2;
margin: 2.25rem 0 6rem 0;
flex-wrap: wrap;
padding: 0 4.4%;

@media screen and (max-width: 450px) {
    flex-wrap: wrap;
    padding: 0;
    width: 100vw !important;
    margin: 0 ;
    justify-content: flex-start;
    padding: 0 1rem;
    
  }
`

export const LeftContainer = styled.div`
width: 75%;

flex-wrap: wrap;
@media screen and (max-width: 450px) {
    width: 100%;
}
`

export const SubContainer = styled.div`
width: 66.66%;
display: flex;
@media screen and (max-width: 450px) {
    flex-direction: column;
    width: 100%;
}
`