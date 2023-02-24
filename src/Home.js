import  React from 'react'
// import {  AppContext } from './Context';
// import { useGloablContext } from './Context';
import  Search  from './Search';
import Movies from './Movies';

const Home = () => {
// const name = useContext(AppContext);
// const name = useGloablContext();

  return (
    <>
    <Search/>
    <Movies/>
    
    </>
  )
}

export default Home;