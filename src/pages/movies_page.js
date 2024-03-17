import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Usernavbar from "../navbar/user_navbar";
import "../css/movielist.css";

function Moviespage() {
  const [movielist, setmovielist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("https://movieproject-y883.onrender.com/api/movielist").then(response => {
      setmovielist(response.data);
    });
  }, []);

  return (
    <div>
      <Usernavbar />
      <br />
      <h1
        style={{
          textAlign: "left",
          paddingLeft: "112px",
          color: "white",
          fontFamily: "cursive"
        }}
      >
        New Releases
      </h1>
      <br />
      <br />
      <div className="row" style={{ paddingLeft: "50px" }}>
        {movielist.map(val => {
          return (
            <div className="column">
              <div class="card">
                <img src={val.movieimageurl} width="260px" height="350px" />
                <br />
                <button
                  className="btn btn-warning"
                  style={{ width: "80%" }}
                  onClick={() => {
                    navigate("/moviedetails", {
                      state: {
                        viedourl: val.movievideourl,
                        moviename: val.moviename,
                        description: val.moviedescription,
                        actorname: val.actorname,
                        directorname: val.directorname,
                        releasedate: val.startdate,
                        outdate: val.enddate
                      }
                    });
                  }}
                >
                  View Details
                </button>
                <br />
                <button
                  className="btn btn-success"
                  style={{ width: "80%" }}
                  onClick={() => {
                    navigate("/bookingform", {
                      state: {
                        releasedate: val.startdate,
                        outdate: val.enddate,
                        moviename: val.moviename,
                        ticketcost: val.ticketcost
                      }
                    });
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Moviespage;
