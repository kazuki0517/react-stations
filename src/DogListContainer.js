// DO NOT DELETE
import React from 'react';
import { BreedsSelect } from './BreedsSelect';
import { useState } from 'react';
import { useEffect } from 'react';

export const DogListContainer = () => {
 const [breeds, setBreeds] = useState([]);
 const [selectedBreed, setSelectedBreed] = useState("");
 const [selectedBreedImage, setSelectedBreedImage] = useState([]);

 const imageUrl = selectedBreedImage.map((image, index) =>
    <li key={index}><img src={image}></img></li>
 );

 const onChangeBreed = (e) => {
  setSelectedBreed(e.target.value);
} //犬種をリストから選択する関数

const onChangeImage = () => {
 if(selectedBreed) {
  fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
  .then(response => response.json())
  .then(data => {
    setSelectedBreedImage(data.message)
  })
 } else {
  return
}
}

 useEffect(() => {
   fetch("https://dog.ceo/api/breeds/list/all")
   .then(res =>res.json())
    .then(
    (result) => {
     return setBreeds(Object.keys(result.message));
    }
  )
 }, []);

 return (
  <>
   <BreedsSelect
      breeds={breeds}
      onChangeBreed={onChangeBreed}
      selectedBreed={selectedBreed}
    />
    <button onClick={onChangeImage}>表示</button>
    <ul>{imageUrl}</ul>
  </>
 );
};