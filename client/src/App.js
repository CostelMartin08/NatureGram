import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* -------------------------------------------------------------------------- */
/*                                 sectiunea1                                 */
/* -------------------------------------------------------------------------- */
import Home from './components/Sectiunea1/Home';
import Connect from './components/Sectiunea1/Connect';
import Register from './components/Sectiunea1/Register';
import SuccesRegister from './components/Sectiunea1/RegisterConfirmPage';
/* -------------------------------------------------------------------------- */
/*                                 Sectiunea2                                 */
/* -------------------------------------------------------------------------- */
import Users from './components/Sectiunea2//MainComponents/ScrollPage';
import Posteaza from './components/Sectiunea2/MainComponents/ScrollPagePost';
import { ThemeProvider } from "./components/Sectiunea2/HelpComponents/ThemeContext";
import ThemeSwitcher from './components/Sectiunea2/HelpComponents/schimbatema';
/* -------------------------------------------------------------------------- */
/*                                 Sectiunea3                                 */
/* -------------------------------------------------------------------------- */
import MyPage from './components//Sectiunea3/MainComponents/ProfilePage';


const App = () => {



      return (
            <ThemeProvider>
                  <Routes>
                        <Route path='/users/upload' element={<Posteaza />}></Route>
                        <Route path='/users/schimba' element={< ThemeSwitcher />}></Route>
                        <Route path='/' element={< Home />}></Route>
                        <Route path='/register' element={< Register />}></Route>
                        <Route path='/login' element={< Connect />}></Route>
                        <Route path='/users' element={< Users />}></Route>
                        <Route path='/profil' element={<MyPage/>}></Route>
                        <Route path='/sucCesRegisTer' element={< SuccesRegister />}></Route>
                  </Routes>
            </ThemeProvider>
      );
}

export default App;
