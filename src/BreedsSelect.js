// DO NOT DELETE
import React from "react";

export const BreedsSelect = (props) => {
 const {breeds,onChangeBreed,selectedBreed,selectedBreedImage,setSelectedBreedImage} = props;
const dogList = breeds.map((dog) =>
<option key={dog} value={dog}>{dog}</option>
)

 return(
  <>
   <select value={selectedBreed} onChange={onChangeBreed}>
    <option>犬</option>
    {dogList}
   </select>

   {/* <button value="Show" onClick={onChangeImage}>表示</button> */}

  {/* <ul>{imageUrl}</ul> */}
  </>
 )
}
//表示を押すと、この画面で選んだ犬種の画像を出す
//selectedBreedImageをpropsで渡してもらい、リストで表示する