import React from "react"
import styled from "styled-components"
import { Img } from "gatsby-image"
import img from "../../../images/placeholders/contactLandscape.jpg"
import { P } from "../../styled-components/GlobalStyles"
const ContactInfo = () => {
  return (
    <ContactInfoContainer>
      <ContactImage>
        <img src={img} alt="landscape img" />
      </ContactImage>
      <ContactText>
        <PC bc1>
        Le Shoppe by Chancery Lane is the latest addition to the Scott Pickett Group venues. 
Follow the links in the footer to our social channels so you don’t miss any of the action. We’ll share catering updates, new menu items and more.
          </PC>
          <PC bc1>
          
            Follow the links at the bottom of the page to our social pages so
            you don’t miss any of the action.
          </PC>
        
        {/* <P bc1>Le Shoppe</P>
        <P bc1>513 Elizabeth Street </P>
        <PC bc1>Melbourne 3000</PC> */}
        <P bc1> For all enquiries, please fill out the form below: </P>
        {/* <OpeningHoursContainer>
          <Days>
            <ul>
              <li>
                <P bc1>Monday</P>
              </li>
              <li>
                <P bc1>Tuesday</P>
              </li>
              <li>
                <P bc1>Wednesday</P>
              </li>
              <li>
                <P bc1>Thursday</P>
              </li>
              <li>
                <P bc1>Friday</P>
              </li>
              <li>
                <P bc1>Saturday</P>
              </li>
              <li>
                <P bc1>Sunday</P>
              </li>
            </ul>
          </Days>
          <Hours>
            <ul>
              <li>
                <P bc1>11:30am–9pm</P>
              </li>
              <li>
                <P bc1>11:30am–9pm</P>
              </li>
              <li>
                <P bc1>11:30am–9pm</P>
              </li>
              <li>
                <P bc1>11:30am–9pm</P>
              </li>
              <li>
                <P bc1>11:30am–11:30pm
</P>
              </li>
              <li>
                <P bc1>11:30am–11:30pm
</P>
              </li>
              <li>
                <P bc1>11:30am–9pm</P>
              </li>
            </ul>
          </Hours>
        </OpeningHoursContainer> */}
      </ContactText>
    </ContactInfoContainer>
  )
}

export default ContactInfo

export const ContactInfoContainer = styled.div`
  width: 100%;
 
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 6rem;
`

export const ContactImage = styled.div`
  width: 58%;
  @media screen and (max-width: 450px) {
    width: 75%;
    order: 2;
    
}

  img {
    width: 100%;
  }

`

export const ContactText = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-flow: column;
  @media screen and (max-width: 450px) {
    width: 100%;
    order: 1;
    margin-bottom: 3.5rem;
}
`
export const PC = styled(P)`
  margin-bottom: 2rem;
`
export const OpeningHoursContainer = styled.div`
  width: 100%;
  display: flex;

  ul {
    list-style-type: none;
  }
  li{
    padding-bottom: .25rem;
  }
`
export const Days = styled.div`
  width: 43%;
  margin-right: 1.5rem;
`
export const Hours = styled.div`
  width: 75%;
`