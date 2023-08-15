import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './assets/components/Navigation/Navigations'
import ContactHeader from './assets/components/ContactHeader/ContactHeader'
import ContactForm from './assets/components/ContactForm/ContactForm'
function App() {

  return <div>
    <Navigation />
    <main className="main_container">
    <ContactHeader />
    <ContactForm />
   
    </main>
    
  </div>

}

export default App
