import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./App.css"
//components
import Navbar from './components/Navbar'
//pages
import AboutMe from './pages/AboutMe'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import NotFound from './pages/NotFound'
import NewPortfolio from './pages/NewPortfolio/NewPortfolio'


function App() {
  return (
    <div style={{height: "100%", backgroundImage: "url('https://i.imgur.com/ebn2GCd.png')"}}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={AboutMe} />
          <Route exact path='/portfolio' component={NewPortfolio} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/resume' component={Resume} />
          <Route path='*' component={NotFound} />
        </Switch>

      </BrowserRouter>

    </div>




  )
}

export default App