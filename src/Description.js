// DO NOT DELETE
import React from 'react'
import { useState } from 'react';
import { DogImage } from './DogImage';

export const Description = () => {
  const [url, setDogUrl] = useState("https://images.dog.ceo/breeds/spitz-japanese/tofu.jpg");

  const onClickChangeImg = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res =>res.json())
    .then(
      (result) => {
        setDogUrl(result.message);
      }
    )
  }

 return (
  <>
    <h2 className='sub-title'>可愛い犬の画像を表示するサイトです。</h2>
    <DogImage url={url} />
    <button onClick={onClickChangeImg}>更新</button>
  </>

 )
}
