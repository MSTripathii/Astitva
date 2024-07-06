import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import dog1 from '../src/assets/dog1.png'
import dog2 from '../src/assets/dog2.png'
import cat1 from '../src/assets/cat1.png'
import Donate from './Components/Donate'
import ContactUs from './Components/ContactUs'
import AboutUs from './Components/AboutUs'
import Savings from './Components/Savings';
import Team from './Components/Team';
import Form from './Components/Form'

function App() {

  return (
    <>
      <Router>
        <Navbar></Navbar>
        <div className="lg:mx-20 mx-8">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
          <Route path="/savings" element={<Savings/>}></Route>
          <Route path='/aboutus' element={<AboutUs/>}></Route>
          <Route path='/contactus' element={<ContactUs/>}></Route>
          <Route path='/Donate' element={<Donate/>}></Route>
          <Route path='/form' element={<Form/>}></Route>
        </Routes>
        </div>
      </Router>
      
      {/* <img src={cat1} alt="cat1" className='lg:top-20 absolute hidden lg:inline-flex lg:ml-0 h-[300px] w-[300px]'/> */}
      {/* <img src={dog1} alt="dog1" className='bottom-0 -z-10 lg:right-20'/> */}
      {/* <img src={dog2} alt="dog2" className='lg:-left-32 lg:bottom-0 hidden lg:inline absolute -z-10'/> */}
      {/* <div className="hidden xl:inline-block rounded-full h-96 w-96 border border-teal-400 top-44 absolute left-[400px] -z-10"></div> */}
    </>
  )
}

export default App
