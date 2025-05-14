import { useState } from 'react'
import viteLogo from '/vite.svg'
import { React, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import './index.css'
import Error from './pages/Error'
import Navbar from './components/Navbar';
const AboutPage = lazy(() => import('./pages/About/AboutPage'))
const SkillsPage = lazy(() => import('./pages/Skills/SkillsPage'))
const ProjectPage = lazy(() => import('./pages/Projects/ProjectPage'))
const ContactPage = lazy(() => import('./pages/Contact/ContactPage'))
import WhatsApp from './components/WhatsApp';


function Loading(){
  <div className='bg-[#181918] h-screen w-screen fixed'>
    <div className='flex items-center justify-center'>
      <p className='text-white text-xl'>Loading...</p>
    </div>
  </div>
}

function App() {
  const location = useLocation();

  return (
    <>
      <div className='w-full h-screen overflow-y-scroll bg-[#181918] px-[10%]'>
      <Navbar/>
      <WhatsApp/>
        <div className='flex items-center justify-center h-[80vh] py-5 relative'>
         
          <div className='w-full h-full text-white'>
            <Routes location={location} key={location.key}>
              <Route path='/'
              element={
                <Suspense fallback={<Loading/>}>
                  <AboutPage/>
                </Suspense>
              }
              />
              <Route path='/skills'
              element={
                <Suspense fallback={<Loading/>}>
                  <SkillsPage/>
                </Suspense>
              }
              />
              <Route path='/projects'
              element={
                <Suspense fallback={<Loading/>}>
                  <ProjectPage/>
                </Suspense>
              }
              />
              <Route path='/contact'
              element={
                <Suspense fallback={<Loading/>}>
                  <ContactPage/>
                </Suspense>
              }
              />
              <Route
              path='*'
              element={
                <Suspense fallback={<Loading/>}>
                  <Error/>
                </Suspense>
              }
              />
            </Routes>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
