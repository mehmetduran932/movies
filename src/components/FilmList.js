import React, { useState, useEffect } from "react";
import BoxForm from "./BoxForm";
import axios from "axios";
import "../../src/Box.css";
import { Button, Spinner } from "@chakra-ui/react";

function FilmList() {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const fetchData = async () => {
    const response = await axios
      .get("http://localhost:3000/films")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };
  useEffect(() => {
    fetchData();
    console.log(error);
    console.log(loading);
  }, []);
  function handleClick() {
    fetchData();
    console.log("tetiklendi...");
    setloading(true);
  }
  return (
    <>
      <Button colorScheme="blue" onClick={handleClick}>
        reFetch
      </Button>
      {loading ? (
        <div>
          <Spinner color="red.500" thickness="40px" speed="0.65s" />
        </div>
      ) : (
        <div className="container">
          {data.map((m) => {
            console.log(m.id);
            return (
              <BoxForm
                id={m.id}
                name={m.name}
                director={m.director}
                src={m.image}
                counter={m.id}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
export default FilmList;
