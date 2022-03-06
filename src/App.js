import React, { Component } from 'react';
import { Route , Routes , Navigate  } from 'react-router-dom';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import DetailProduct from './components/DetailProduct';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
        <Route path='/products' element={<Products/>}/>
        <Route path='/' element={<Landing/>}/>
        <Route path='/products/:id' element={<DetailProduct/>}/>
        <Route path='/NotFound' element={<NotFound/>}/>
        <Route path='/*' element={<Navigate to="/NotFound"/>}/>
        <Route path='/aboutUs/*' element={<AboutUs/>}>
            <Route path='Shirazcenter' element={<h2>this is shiraz center</h2>}/>
            <Route path='Tehrancenter' element={<h2>this is Tehran center</h2>}/>
        </Route>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;