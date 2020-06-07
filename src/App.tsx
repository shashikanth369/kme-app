import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Navbar from './components/menu/Navbar';
import image from './images/kme-logo.png';
import LeftMenu from './components/menu/LeftMenu';
import Slider from './components/slider/Slider';


const App: React.FC<{}> = (props, state) => (<div>
    <Navbar/>
    <Slider/>
    </div>);

export default App;
