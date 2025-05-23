import { useState } from 'react'
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
import MobileFooter from './components/Footer';


function Loading() {
  return (
    <div className='bg-[#181918] h-screen w-screen fixed top-0 left-0 z-1000 flex items-center justify-center'>
      <div className=''>
        <p className='text-white text-2xl'>Loading...</p>
      </div>
    </div>
  )
}

function App() {
  const location = useLocation();

  return (
    <>
      <div className='w-full min-h-screen bg-[#181918] px-[5%] lg:px-[10%]'>
        <Navbar />
        <WhatsApp />
        <div className='flex items-center justify-center py-6 mb-7 lg:mb-0 relative'>

          <div className='w-full h-full text-white'>
            <Routes location={location} key={location.key}>
              <Route path='/'
                element={
                  <Suspense fallback={<Loading />}>
                    <AboutPage />
                  </Suspense>
                }
              />
              <Route path='/skills'
                element={
                  <Suspense fallback={<Loading />}>
                    <SkillsPage />
                  </Suspense>
                }
              />
              <Route path='/projects'
                element={
                  <Suspense fallback={<Loading />}>
                    <ProjectPage />
                  </Suspense>
                }
              />
              <Route path='/contact'
                element={
                  <Suspense fallback={<Loading />}>
                    <ContactPage />
                  </Suspense>
                }
              />
              <Route
                path='*'
                element={
                  <Suspense fallback={<Loading />}>
                    <Error />
                  </Suspense>
                }
              />
            </Routes>
          </div>
        </div>

        <MobileFooter />

      </div>
    </>
  )
}

export default App
