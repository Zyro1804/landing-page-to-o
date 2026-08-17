import './App.css'
import HeaderComponent from './components/Header'
import Hero from './components/Hero'
import Proposals from './components/Propuestas'
import Biography from './components/Biografia'
import Volunteer from './components/Volunteer'
import Footer from './components/Foooter'
import News from './components/New'

import AboutMorena from './components/AboutMorena'

function App() {
  return (
    <>
      <HeaderComponent />

      <main>
        <Hero />
        <Proposals />
         <News />
        <Biography />
         
        <Volunteer />
        <AboutMorena />

      </main>

      <Footer />
    </>
  );
}

export default App
