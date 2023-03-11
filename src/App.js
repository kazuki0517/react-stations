// DO NOT DELETE
import React from 'react';
import { Header } from './Header';
import { Description } from './Description';
import { DogListContainer} from './DogListContainer';
// import { DogImage } from './DogImage';
import './App.css'

/**
 * 
 * @type {React.FC}
 */

export const App = () => {

  return (
    <>
      <Header />
      <Description />
      <DogListContainer />
      {/* <DogImage /> */}
    </>

  )
}

