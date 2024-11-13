import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store = {store}>
        <App />
    </Provider>
  </React.StrictMode>
);



// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Header from './Components/Header';
// import Home from './Components/Home';
// import {Routes,Route,} from "react-router-dom"
// import Login from './Components/Login';
// import Details from './Components/Details';
// import Track from "./Components/Track"; // Complaints page component
// import CreateComplaint from "./Components/CreateComplaint"; // Users page component
// import Userinfo from "./Components/Userinfo";

// function App() {
//   return (
//   <>
//   <Header />
//   <Routes>
      {/* <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} /> */}
      {/* <Route path="/track" element={<Track />} />
      <Route path="/createcomplaint" element={<CreateComplaint />} /> */}
      {/* <Route path='/user_info' element={<Userinfo />} />

  </Routes>
  </>
  )
}

export default App */}