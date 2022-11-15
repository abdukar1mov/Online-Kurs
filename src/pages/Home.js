import React from 'react'
import CourseCards from '../components/CourseCards/CourseCards';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';
import Pupils from '../components/Pupils/Pupils';
import Teachers from '../components/Teachers/Teachers';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <CourseCards/>
      <Teachers/>
      <Pupils/>
      <Footer/>
    </div>
  )
}

export default Home;