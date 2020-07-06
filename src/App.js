import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Header from './components/Header';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ProfileAndContactInfo from './components/ProfileAndContactInfo';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio'
import CanvasGallery from './pages/Portfolio/MainContent/CanvasGallery'
import SheetMusicGallery from './pages/Portfolio/MainContent/SheetMusicGallery'
import CommissionedGallery from './pages/Portfolio/MainContent/CommissionedGallery';
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

import './assets/scss/reset.scss'
import './assets/scss/base.scss'

function App() {
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
            <Route exact path='/portfolio' component={Portfolio} />
            <Route path='/portfolio/sheetMusic-paintings' component={SheetMusicGallery} />
            <Route path='/portfolio/canvas-paintings' component={CanvasGallery} />
            <Route path='/portfolio/commissioned-paintings' component={CommissionedGallery} />
            <Route path='/about' component={About} />
            <Route path='/testimonials' component={Testimonials} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </Container>
      </main>

      <Footer />
    </div>
  );
}

export default App;
