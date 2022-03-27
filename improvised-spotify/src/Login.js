import React from 'react'
import {Container} from 'react-bootstrap'
const AUTH_URL = "https://accounts.spotify.com/en/authorize?client_id=da87daea0c734324b74a7d7a1048947b&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"//scope are is accesible method which allow us to stream,read,play,add songs scopes like user-read-private is for specific job and %20 is space that seperate them
export default function Login (){
  return (
    <Container className='d-flex justify-content-center align-items-center rex' style={{minHeight:"100vh",minWidth:"100vw" }} >
      <a className='btn btn-success btn-lg' href={AUTH_URL} >Login with Spotify </a>
    </Container>
  )
}
