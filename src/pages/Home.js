import React from "react";
import { useState } from "react";
import Page1 from "../pages/Page1";
import { Link } from "react-router-dom";
import Par from "./Par";
import Price from "../pages/Price";
export default function Home() {
  function HandleApi() {
    fetch("https://www.boredapi.com/api/activity")
      .then((response) => response.json())
      .then((data) => setActivity(data.activity));
  }
  const [activity, setActivity] = useState([]);

  return (
    <>
      {/* { useEffect(() =>{
        HandleApi();
    })} */}
      <h1>{activity}</h1>
      <button onClick={HandleApi}>Click</button>
      <br />
      <br />

      <Link to="/pages/Page1">
        <button>Type</button>
      </Link>
      <br />
      <br />
      <Link to="/pages/Par">
        <button>Participate</button>
      </Link>
      <br />
      <br />
      <Link to="/pages/Price">
        <button>Key</button>
      </Link>
    </>
  );
}
