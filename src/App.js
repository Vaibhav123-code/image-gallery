
import { useState } from 'react';
import './App.css';
import SearchBar from './Component/SearchBar';
import ImageList from './Component/ImageList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './page1/Home';
import Blog from './page1/blog';
import About from './page1/About';
import Contact from './page1/Contact';
import Nav from './page1/Nav';
import Error from './page1/Error';
import UserInfo from './Page2/UserInfo';
import User from './Page2/User';


function App() {
  const [images, setImages] = useState([]);
  
  return (
    // <div className="App">
    //   <SearchBar  addImages={setImages}/>
    //   <ImageList images={images}/>
    // </div>
    <div>
      <BrowserRouter >
      {/* <Nav /> */}
         {/* <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="*" element={<Error />} />
            <Route path='/users/:id' element={<Contact />} />
         </Routes> */}
         <Routes>
            <Route path='/user' element={<User />} />
            <Route path='/user/:id' element={<UserInfo />} />
            
         </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
