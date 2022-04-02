
import React,{useState,useEffect} from 'react'
import axios from 'axios'
export default function useAuth(code){
    const [accessToken,setAccessToken]= useState()
    const [refreshToken,setRefreshToken]= useState()
    const [expressIn,setExpressIn]= useState()
    useEffect(()=>{
        axios.post("http://localhost:3001/login",{
            code,
        }).then(res=>{
            console.log(res.data)
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpressIn(res.data.expressIn)
            window.history.pushState({},null,'/')
        }).catch(()=>{
            window.location='/'
        })
    },[code])
    useEffect(()=>{
        axios.post("http://localhost:3001/refresh",{
           refreshToken,
        }).then(res=>{
            setAccessToken(res.data.accessToken)
            setExpressIn(res.data.expressIn)
        }).catch(()=>{
            window.location='/'
        })

    },[refreshToken,expressIn])
  return accessToken
}
