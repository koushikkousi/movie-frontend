import React from 'react'

const Footer = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",paddingBlock:"30px",backgroundColor:"#fff",paddingINline:"40px"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"12px",width:"40%" }}>
        <h2 style={{textAlign:"left",paddingLeft:"20px"}}>MOVIE HUB</h2><br/>
        <p style={{textAlign:"left",paddingLeft:"20px",fontFamily:"sans-serif",fontSize:"20px"}}>
        Movie Hub Entertainment Private Limited was incorporated in 1997 and has since developed in
         its sprawling 27 Acres campus along the scenic East Coast Road 
        (ECR) in Chennai a Family Entertainment Centre
        </p>
        </div>
        <div style={{width:"60%",display:"flex",justifyContent:"space-between"}}>
        <div style={{display:"flex",flexDirection:"column",gap:"12px",
       }}>
        <h2 style={{textAlign:"left",paddingLeft:"20px"}}>COMPANY</h2><br/>
        <a href='#' style={{textAlign:"left",paddingLeft:"20px",fontFamily:"EB Garamord",fontSize:"20px"}}>
             Home        </a>
        <a href='/home_page.js' style={{textAlign:"left",paddingLeft:"20px",fontFamily:" EB Garamord",fontSize:"20px",}}>
             Gallery       </a>
        <a href='#'target="_blank" style={{textAlign:"left",paddingLeft:"20px",fontFamily:"EB Garamord",fontSize:"20px"}}>
            About Us       </a>
        <a href='#' style={{textAlign:"left",paddingLeft:"20px",fontFamily:"EB Garamord",fontSize:"20px"}}>
             Advertise      </a>
        </div>

        <div style={{display:"flex",flexDirection:"column",gap:"12px" }}>
        <h2 style={{textAlign:"left",paddingLeft:"20px"}}>CONTACT INFO</h2><br/>
        <a href='#' style={{textAlign:"left",paddingLeft:"20px",fontFamily:"EB Garamord",fontSize:"20px"}}>
            PHONE:044-40435050        </a>
        <a href='#' style={{textAlign:"left",paddingLeft:"20px",fontFamily:"EB Garamord",fontSize:"20px"}}>
            Email:       </a>
        <a href='#' style={{textAlign:"left",paddingLeft:"20px",fontFamily:"EB Garamord",fontSize:"20px"}}>
            moviehub@gmail.com       </a>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"12px" }}>
        <h2 style={{textAlign:"left",paddingLeft:"20px"}}>ADDRESS</h2><br/>
        <a href='#' style={{textAlign:"left",paddingLeft:"20px",fontFamily:"EB Garamord",fontSize:"20px"}}>
            Chennai        </a>
<a href='#' style={{textAlign:"left",paddingLeft:"20px",fontFamily:"EB Garamord",fontSize:"20px"}}>
Kerala      </a>
<a href='#' style={{textAlign:"left",paddingLeft:"20px",fontFamily:"",fontSize:"20px"}}>
coimbatore       </a>
        </div>
        </div>
        </div>
  )
}

export default Footer
