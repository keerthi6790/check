import React from 'react';
import errorimg from './img/error.jpg'
function Error(){
    return(
       <div style={{flexDirection:"column",display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",fontSize: "3em",fontWeight:"100"}}>
           <img src={errorimg} width={1000} height={700}/>
       </div>
    )
}
export default Error;