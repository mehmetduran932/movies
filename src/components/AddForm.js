import React, { useState, useEffect } from "react";
import { Input, Button } from "@chakra-ui/react";
import axios from "axios";

function AddForm() {
  const [name, setName] = useState("");
  const [director, setDirector] = useState("");
  const [src, setSrc] = useState("");
  const [loading, setloading] = useState(false);
  function saveOn() {
    axios
      .post("http://localhost:3000/films", {
        name: name,
        director: director,
        image: src,
      })

      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function (response) {
        //setLoading(false);
      });
  }

  return (
    <>
      <div>
        <label>Film Adı: </label>
        <Input
          type="text"
          name="name"
          placeholder="Film Adı"
          size="md"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></Input>
        <label>Yönetmen: </label>
        <Input
          type="text"
          name="director"
          value={director}
          placeholder="Yönetmen"
          size="md"
          onChange={(e) => setDirector(e.target.value)}
        ></Input>
        <label>Afiş Linki: </label>
        <Input
          type="text"
          name="image"
          placeholder="Afiş Url"
          size="md"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
        ></Input>
      </div>
      <Button colorScheme="blue" isLoading={loading} onClick={() => saveOn()}>
        Film Ekle
      </Button>
    </>
  );
}

export default AddForm;
