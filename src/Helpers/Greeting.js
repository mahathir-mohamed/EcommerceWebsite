import React from 'react'

export default function Greeting() {
  return (
    <div style={{width:"100%",height:30,backgroundColor:"#f2f2f2"}}>
       <h3>Welcome Mahathir <img style={{height:20,width:20}} src={process.env.PUBLIC_URL+"/Emoji.png"}/></h3>
    </div>
  )
}
