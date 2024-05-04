
import './App.css'
import Air from './components/Air/Air'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hello from './components/Hello/Hello'
import Hero from './components/Hero/Hero'
import Info from './components/Info/Info'

function App() {



  return (
    <>
      <Header />
      <div className="container">
        <Hero />
        <Info />
        <Hello />
        <Air />
        <Footer />
      </div>
      
    </>
  )
}

export default App
