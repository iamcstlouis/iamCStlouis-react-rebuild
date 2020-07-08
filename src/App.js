import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProfileAndContactInfo from './components/ProfileAndContactInfo';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

import AOS from 'aos'
import 'aos/dist/aos.css'

import './assets/scss/reset.scss'
import './assets/scss/base.scss'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1800,
      delay: 500,
      once: true
    })
  }, []);

  return (
    <div>
      <Header />
      <ScrollToTop />

      <main>
        <Container>
          <div className='profile-socials-wrapper'>
            <ProfileAndContactInfo />
          </div>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/about' component={About} />
            <Route path='/testimonials' component={Testimonials} />
            <Route path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
