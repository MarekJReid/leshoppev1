import React, { useState } from "react"
import styled from "styled-components"
import font from "../../.././../fonts/TT-Norms-Pro.ttf"
import axios from 'axios'
import { P } from "../../../styled-components/GlobalStyles"
const Subscribe = () => {
  const [email, setEmail] = useState("")
  const [emailErr, setEmailErr] = useState(false)
  const [signUp, setSignup] = useState(true)
  const [thankyou, setThankyou] = useState(true)
  const handleChange = event => {
    setEmail(event.target.value)
    !email.includes(".") || !email.includes("@")  ? setEmailErr(true) : setEmailErr(false)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (email.includes(".") || email.includes("@")) 
    axios.post("https://jsonplaceholder.typicode.com/posts", email)
     .then(res => {
       console.log(res)
       setSignup(false)
      setThankyou(true)
     })
     .catch(err => {
       console.log(`err`, err)
     })
     else {
       setEmailErr(true)
       console.log(`emailErr`, emailErr)
     }
  }

  return (
    <SubContainer>
      
      {signUp ?
      (
        <SignUp onSubmit={handleSubmit}>
        <p>EMAIL ADDRESS</p>
        <form>
        <Input
          placeholder="Please enter your email address"
          name="email"
          type="text"
          value={email}
          onChange={handleChange}
          err={emailErr}
        />
        {emailErr ? <P error style={{marginTop: `1rem`}}>Please enter a valid email address</P> : null}
        <SignUpSubmit err={emailErr} type="submit">SUBSCRIBE</SignUpSubmit>
      </form>
    </SignUp>
      ) : (
      <>
       <P bc2>Thank you</P>
       <P bc2>You are now signed up to our mailing list.</P>
       
       </>
      )
    }
       
    </SubContainer>
  )
}

export default Subscribe

const SubContainer = styled.div`
  width: 100%;

  overflow: visible;
  margin-top: 1rem;
  p {
    font-size: 1rem;
  }
`

const SignUp = styled.div`
  font-size: 0.75rem;

  
`
const Input = styled.input `
  width: 95%;
  height: 2rem;
  background: #fdf9ee;
  border: none;
  padding: 1.5rem 0;
  font-size: 0.75rem;
  line-height: none;
  border-bottom: 1px solid ${props => props.err ? 'red' : '#153e35'};
  ::placeholder {
    color: darkgrey;
    font-size: 1rem;
    margin-bottom: 10rem;
  }
  :focus {
    outline: none;
    background: #fdf9ee;

    height: 3rem;
    font-size: 150%;
  }
  :valid {
    font-size: 1rem;
  }
  ::-moz-focus-outer {
    color: white;
  }
`

const SignUpSubmit = styled.button`
  background: none;

  padding: 0.5rem 2rem;
  border: 1px solid ${props => props.err ? 'red' : '#153e35'};
  color: ${props => props.err ? 'red' : '#153e35'};
  margin-top: 1.75rem;
  font-size: 120%;
  transition: all 0.2s ease;
  :hover {
    background: ${props => props.err ? 'red' : '#153e35'};
    color: ${props => props.err ? 'white' : 'white'};
  }
`
