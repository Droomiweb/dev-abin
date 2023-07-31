
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from './Nav';
import Mob from './mob';

import round from './round.png'
import Welcome from './Content'

import linkedin from './icons/linked.png'
import whatsapp from './icons/whatsapp.png'
import github from './icons/github.png'
import insta from './icons/insta.png'
import mail from './icons/mail.png'
import telegram from './icons/telegram.png'
import threads from './icons/threads.png'


//Navigation 

import About from './about';
import Contact from './contact';
import Projects from './project';


function Ico(){
  return(
    <div className="contact-nav">
    <a href="https://www.instagram.com/hey_abin"><img src={insta} /></a>
    <a href="https://github.com/Albert-Einstein-007"><img src={github} /></a>
    <a href="https://wa.me/+918590814463?text=Halo%20Abin"><img src={whatsapp} /></a>
    <a href="https://t.me/Mrpops7"><img src={telegram} /></a>
    <a href="https://www.linkedin.com/in/abin-abi-bbb17b24b/"><img src={linkedin} /></a>
  </div>
  )
}




function App() {
  return (
   <>
   <BrowserRouter >
    <Nav />
    <section className="content">
      <div>
      <Routes>
          <Route index element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
      </Routes>
      </div>

    </section>      
    <div className='circle1'></div>
      <div className='circle2'></div>
      <div className="around">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 46 30">
          <path d="M44.4258 16.4142C45.2069 15.6332 45.2069 14.3668 44.4258 13.5858L31.6979 0.857864C30.9169 0.0768156 29.6505 0.0768156 28.8695 0.857864C28.0884 1.63891 28.0884 2.90524 28.8695 3.68629L40.1832 15L28.8695 26.3137C28.0884 27.0948 28.0884 28.3611 28.8695 29.1421C29.6505 29.9232 30.9169 29.9232 31.6979 29.1421L44.4258 16.4142ZM0 17H43.0116V13H0V17Z" fill='white' />
        </svg>
        <img src={round} />
      </div>
      <Ico/>
      </BrowserRouter>
   </>
  );
  }

export default App;