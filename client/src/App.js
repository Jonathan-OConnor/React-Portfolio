import React, {useEffect, useState} from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./App.css"

//pages
import AboutMe from './pages/AboutMe'


function App() {
  const [isMobile, setIsMobile] = useState(false)
  const mql = window.matchMedia('(max-width: 990px)')
  let mobileView = mql.matches

  mql.addEventListener('change', (e) => {
    const mobileView = e.matches;
    if (mobileView) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  useEffect(() => {
    if (mobileView) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }, [])
  return (
    <div style={{ height: "100%", backgroundImage: "url('https://i.imgur.com/ebn2GCd.png')" }}>
      <BrowserRouter>
        <Switch>
          <Route path='*' render={(props) => (<AboutMe mobile={isMobile} />)} />
        </Switch>
      </BrowserRouter>

    </div>




  )
}

export default App