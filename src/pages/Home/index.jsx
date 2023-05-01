import React, { useState } from 'react'
import { FloatButton } from 'antd'
import Education from '@components/Education/index'
import Projects from '@components/Projects/index'
import Articles from '@components/Articles/index'
import AboutMe from '@components/AboutMe/index'
import Spinner from '@components/Spinner/index'
import Header from '@components/Header/index'
import Skills from '@components/Skills/index'
import Footer from '@components/Footer/index'
import Lives from '@components/Lives/index'
import Publis from '@components/Publis/index'
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
          <Publis />
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
