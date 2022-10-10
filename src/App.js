import React from 'react';
import { 
  Route, 
  Routes } from 'react-router-dom';
import './App.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import MyNavbar from './components/navbar/myNavbar';
import About  from './components/about/about';
import Home from './components/home/home';
import MyProjects from './components/myProjects/myProjects';
import Work from './components/work/work';
import Academics from './components/academics/academics';
import Contact from './components/contact/contact';
import Resume from './components/resume/resume';
import Footer from './components/footer/footer';

let App = () => {

  return (
    <>
    <MyNavbar></MyNavbar>
    <ThemeProvider
        breakpoints={['xl', 'lg', 'md', 'sm', 'xs']}
        minBreakpoint="xs"
        >


    <Routes basename={process.env.PUBLIC_URL}>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<MyProjects />} />
      <Route path="/work" element={<Work />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
