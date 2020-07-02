import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header';
import Home from './pages/Home'
// import Portfolio from './pages/Portfolio'
// import About from './pages/About'
// import Testimonials from './pages/Testimonials'
// import Contact from './pages/Contact'

import './assets/scss/reset.scss'
import './assets/scss/base.scss'

function App() {
  return (
    <div>
      <Header />

      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route path='/portfolio' component={Portfolio} />
        <Route path='/about' component={About} />
        <Route path='/testimonials' component={Testimonials} />
        <Route path='/contact' component={Contact} /> */}
        </Switch>
      </main>

    </div>
  );
}

export default App;
