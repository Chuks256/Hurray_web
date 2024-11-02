import './App.css'
import {Routes,Route } from 'react-router-dom';;
import Splash from "./Pages/Splash.jsx"
import Danger from "./Pages/Danger.jsx";
import Main from "./Pages/Main.jsx"
import Swap from "./Pages/Swap.jsx"
import Premium from "./Pages/Premium.jsx"
import Congratulations from "./Pages/Congratulations.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Splash />}></Route>
        <Route path='/app' element={<Main />}></Route>
        <Route path='/swap' element={<Swap />}></Route>
        <Route path='/congratulation' element={<Congratulations />}></Route>
        <Route path='/danger' element={<Danger />}></Route>
        <Route path='/premium' element={<Premium />}></Route>
      </Routes>
    </>
  )
}

export default App
