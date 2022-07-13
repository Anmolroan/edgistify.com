import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Home from './Home'
import WhyUs from './WhyUs';
import Solutions from './Solutions'
import Team from './Team';
import Media from './Media';
import JoinUs from './JoinUs';
import Contact from './Contact';
function Allrouter() {
  return (
    <div>
        <Routes>

            <Route path="/team" element={<Team/>}></Route>
            <Route path="/media" element={<Media/>}></Route>
            <Route path="/joinus" element={<JoinUs/>}></Route>
            <Route path ="contact" element={<Contact/>}></Route>
        </Routes>
    </div>
  )
}

export default Allrouter