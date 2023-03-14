import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home';
import About from '../pages/About/about';
import Blog from '../pages/blog/blog';
import Contact from '../pages/contact/contact';
import Resume from '../pages/Resume/resume';
import Project from '../pages/project/project';
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/resume" element={<Resume></Resume>}></Route>
        <Route path="/project" element={<Project></Project>}></Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
