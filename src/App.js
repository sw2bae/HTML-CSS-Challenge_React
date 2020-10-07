import React, { useState, useEffect } from "react";
import Menu from './components/menu';
import Content from './components/content';
import Footer from './components/footer';
import API from './util/API';
import './App.css';



function App() {

  const [dogName, setDogName] = useState(["beagle", "DINGO", "Shiba", "husky", "pUG", "saMOyEd"]);
  const [dogData, setDogData] = useState([]);
  const [currentDogBreed, setCurrentDogBreed] = useState();

  async function getDogImgs(e) {
    let breed = e.target.id;
    const { data } = await API.getDogs(breed);
    setDogData(data.message);
    setCurrentDogBreed(breed.toUpperCase());
  }

  useEffect(() => {
    API.getDogs("beagle").then((res) => {
      setDogData(res.data.message);
      setCurrentDogBreed("beagle");
    })
  }, []);


  return (
    <>
      <Menu dogName={dogName} getDogImgs={getDogImgs} />
      <Content dogData={dogData} currentDogBreed={currentDogBreed} />
      <Footer />
    </>
  );
}

export default App;
