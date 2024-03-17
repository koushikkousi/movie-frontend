import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Adminnavbar from "../navbar/admin_navbar";
import Usernavbar from "../navbar/user_navbar";

function Deletemovies() {
  const [movielist, setmovielist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("https://movieproject-y883.onrender.com/api/movielist").then(response => {
      setmovielist(response.data);
    });
  }, []);

  return (
    <div>
      <Adminnavbar />
      <br />
      <h1
        style={{
          textAlign: "left",
          paddingLeft: "73px",
          color: "white",
          fontFamily: "EB Garamord"
        }}
      >
        Theater Movies
      </h1>
      <div className="row" style={{ padding: "50px" }}>
        {movielist.map(val => {
          return (
            <div className="column">
              <div className="card" style={{ textAlign: "left" }}>
                <img src={val.movieimageurl} width="260px" height="350px" />
                <br />
                <button
                  className="btn btn-danger"
                  style={{ width: "85%" }}
                  onClick={() => {
                    Axios.delete("https://movieproject-y883.onrender.com/api/deletemovie/", {
                      params: {
                        moviename: val.moviename
                      }
                    }).then(response => {
                      if (response.data === "Movie Deleted Successfully") {
                        alert("Movie Deleted Successfully");
                      }
                    });
                  }}
                >
                  Delete
                </button>
              </div>
              <br /> <br />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Deletemovies;
