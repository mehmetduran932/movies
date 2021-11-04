import React, { useState, useEffect } from "react";
import { Box, Image, Badge, Button } from "@chakra-ui/react";
import axios from "axios";

function BoxForm({ src, name, director, counter, films }) {
  const [data, setData] = useState([]);
  const[list,setList]=useState([]);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);
  const [status, setStatus] = "";
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3000/films");
    setData(response.data);
  };
   const removeFilms = (films) => {
     const url = `http://localhost:3000/films/${films.id}`;
     axios
       .delete(url)
       .then((response) => {
         return {
           films: response.films.filter((m) => m.id !== films.id),
          
        };
       })
       .catch((err) => {
         console.log(err);
       });

     fetchData();
   };
  

  useEffect(() => {
    fetchData();
    console.log(error);
    console.log(loading);
  }, []);

  return (
    <>
      <Box maxW="200px" borderWidth="8px" borderRadius="lg" overflow="hidden">
        <Image src={src} alt={src} />

        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              {name}
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            ></Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          ></Box>

          <Box>{director}</Box>
          <Box>
            <Button colorScheme="blue" onClick={() => removeFilms(films.id)}>
              Delete
            </Button>
          </Box>

          <Box display="flex" mt="2" alignItems="center">
            <Box as="span" ml="2" color="gray.600" fontSize="sm"></Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
export default BoxForm;
