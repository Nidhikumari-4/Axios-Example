// import axios from "axios";
import axios from "./axios";
import { useEffect, useState } from "react";
import React from "react";
import "./App.css";

const API = "https://jsonplaceholder.typicode.com";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // ********using Promises********
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     .catch((error) => setIsError(error.message));
  // }, []);

  // ******** using Async await ********
  // const getApiData = async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //   setMyData(res.data);
  // };

  //  calling the function
  // useEffect(() => {
  //   getApiData();
  // }, []);

  // try and catch
  // const getApiData = async () => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     setMyData(res.data);
  //   } catch (error) {
  //     setIsError(error.message);
  //   }
  // };

  //  calling the function
  // useEffect(() => {
  //   getApiData();
  // }, []);

  const getApiData = async () => {
    try {
      const res = await axios.get("/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  //  calling the function
  useEffect(() => {
    // getApiData(`${API}/posts`);
    getApiData();
  }, []);

  return (
    <>
      <h1>Axios Example</h1>
      {isError !== " " && <h2>{isError}</h2>}
      <div className="grid">
        {myData.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 15).toUpperCase()}</h2>
              <p>{body.slice(0, 150)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
