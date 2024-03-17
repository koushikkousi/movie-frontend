import React from "react";
import { useNavigate } from "react-router-dom";
import Homenavbar from "../navbar/home_navbar";
import Footer from "./Footer";


function Homepage() {
  const navigate = useNavigate();
  return (
    <div>
      <Homenavbar />
      <div className="project__title">
      <img id="js-promotion-banner"   loading="lazy" onclick="handleBannerClick(event)"
       src="https://assets-in.bmscdn.com/promotions/cms/creatives/1710317102557_partnerweb.jpg" alt="promotion-banner">
        
       </img>
        <p
          style={{
            fontFamily: "EB Garamord",
            fontSize: "40px",
            lineHeight: "1.7",
            color: "white",
            margin: "0px"
          }}
          
        >
          MOVIE- HUB
        </p>
        <button
          onClick={() => navigate("/userlogin")}
          type="button"
          class="btn btn-warning"
        >
          Book Now
        </button>
      </div>
      <br/>  <br/>  <br/>  <br/>
     <Footer/>
     
    
    </div>
  );
}

export default Homepage;
