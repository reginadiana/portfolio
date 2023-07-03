import React, { useState } from 'react'
import { FloatButton } from 'antd'
import Education from '@components/Education'
import Projects from '@components/Projects'
import Articles from '@components/Articles'
import AboutMe from '@components/AboutMe'
import Spinner from '@components/Spinner'
import Header from '@components/Header'
import Skills from '@components/Skills'
import Footer from '@components/Footer'
import Lives from '@components/Lives'
import Publications from '@components/Publications'
import Copyright  from '@components/Copyright'
import './style.css'

const TIME_LOADING_MILLISECONDS = 1000

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  setTimeout(() => setIsLoading(false), TIME_LOADING_MILLISECONDS)

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Header />
          <AboutMe />
          <Projects />
          <Lives />
          <Articles />
          <Publications />
          <Education />
          <Skills />
          <Footer />
          <Copyright />
          <FloatButton.BackTop />
        </>
      )}
    </>
  )
}

export default Home
