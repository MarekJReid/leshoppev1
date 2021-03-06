import React from "react"
import styled from "styled-components"
import { P } from "../../../styled-components/GlobalStyles"
import Renderer from "../rich-text-renderers/FooterContact"
const FooterContact = ({ venueInfoDescription }) => {
  return (
    <FooterContactContainer>
      <Heading>CONTACT DETAILS</Heading>
      <Address>
        <PaddressDesktop bc3>
          <Renderer node={venueInfoDescription.address} />
        </PaddressDesktop>
        <PaddressMob>
          <Renderer node={venueInfoDescription.address} />
        </PaddressMob>
      </Address>
      <OpeningHoursContainer>
        <Renderer node={venueInfoDescription.openingTimes} />
        {/* Le Shoppe is currently closed and will reopen early 2022 */}
        {/* Monday - Tuesday: 7.00am - 4.00pm <br/>
        Wednesday - Friday: 7.00am - 9.00pm 
          <Days>
            <ul>
              <li>
                <Text>Monday</Text>
              </li>
              <li>
                <Text>Tuesday</Text>
              </li>
              <li>
                <Text>Wednesday</Text>
              </li>
              <li>
                <Text>Thursday</Text>
              </li>
              <li>
                <Text>Friday</Text>
              </li>
              <li>
                <Text>Saturday</Text>
              </li>
              <li>
                <Text>Sunday</Text>
              </li>
            </ul>
          </Days>
          <Hours>
            <ul>
              <li>
                <Text>11:30am–9pm</Text>
              </li>
              <li>
                <Text>11:30am–9pm</Text>
              </li>
              <li>
                <Text>11:30am–9pm</Text>
              </li>
              <li>
                <Text>11:30am–9pm</Text>
              </li>
              <li>
                <Text>11:30am–11:30pm
</Text>
              </li>
              <li>
                <Text>11:30am–11:30pm
</Text>
              </li>
              <li>
                <Text>11:30am–9pm</Text>
              </li>
            </ul>
          </Hours> */}
      </OpeningHoursContainer>
    </FooterContactContainer>
  )
}

export default FooterContact

export const FooterContactContainer = styled.div`
  width: 41.3%;
  padding: 0;

  @media screen and (max-width: 450px) {
    width: 100%;
    margin-top: 1.25rem;
    margin-bottom: 1.25rem;
    font-size: 0.75rem;
  }
`
export const Heading = styled.div`
  margin-bottom: 1.75rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 1.5rem;
    font-size: 0.75rem;
  }
`

export const Address = styled.div`
  margin-bottom: 2.25rem;
  @media screen and (max-width: 450px) {
    margin-bottom: 1rem;
    font-size: 0.75rem !important;
  }
`
export const PaddressDesktop = styled(P)`
  @media screen and (max-width: 450px) {
    display: none;
  }
`

export const PaddressMob = styled.div`
  @media screen and (max-width: 450px) {
    display: block;
  }
  @media screen and (min-width: 451px) {
    display: none;
  }
`
export const OpeningHoursContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  ul {
    list-style-type: none;
  }
  li {
    font-size: 0.75rem;
  }
`
export const Days = styled.div`
  width: 36%;

  font-size: 1rem;
  @media screen and (max-width: 450px) {
    margin-right: -2.25rem;
  }
`
export const Hours = styled.div`
  width: 70%;
`

export const Text = styled(P)`
  font-size: 1rem;
  @media screen and (max-width: 450px) {
    margin-right: 1.5rem;
    font-size: 0.75rem !important;
  }
`
