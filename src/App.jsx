import './App.css'
import Brand from "./components/Brand/Brand"
import Cta from './components/Cta/Cta'
import Navbar from "./components/Navbar/Navbar"
import Blog from './containers/Blog/Blog'
import Features from './containers/Features/Features'
import Footer from './containers/Footer/Footer'
import Header from './containers/Header/Header'
import Possibility from './containers/Possibility/Possibility'
import WhatGPT3 from './containers/WhatGPT3/WhatGPT3'

function App() {

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
