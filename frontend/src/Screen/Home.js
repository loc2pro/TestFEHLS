import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import api from "../api";
import Content from "../components/Content";
import Pagenotfound from "../components/Pagenotfound";
import { useCookies } from "react-cookie";

function Home() {
  const [content, setContent] = useState([]);
  const [cookies, setCookie] = useCookies([]);
  const [dem, setDem] = useState(0);
  useEffect(() => {
    axios.get(`${api}/api/contents/`).then((response) => {
      console.log("1", response);
      console.log(response.data[1]);
      setContent(response.data);
    });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setCookie(content[dem].title, e.target.value);
    setDem(dem + 1);
    if (dem >= content.length) {
      alert("That's all the jokes for today! Come back another day!");
    }
  };

  return (
    <div className="row">
      <div className="content">
        {content.length > dem ? (
          <Content content={content[dem]} />
        ) : (
          <Pagenotfound />
        )}
      </div>
      <div className="row">
        <div className="btn">
          <button
            value="Funny"
            style={{ backgroundColor: "blue" }}
            onClick={(e) => handleClick(e)}
          >
            This is Funny !
          </button>
          <button value="Not Funny" onClick={(e) => handleClick(e)}>
            This is not Funny.
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
