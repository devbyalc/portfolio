import React from 'react';
import { Button } from 'antd';
import {Link} from 'react-router-dom';
import Backdesign from '../Design/Backdesign';
import {Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;


function Home(){
    return (
        <Content className="home">
            <Backdesign />
            <h1 className="big-hd-text">Hi!<br/>I'm Alicia.</h1>
            <p className="small-hd-text">I’m a junior software engineer based in Melbourne, VIC.<br/> 
            I like writing <span id="code">codes</span>, as well as writing <span id="song">songs</span>.</p>
            <Link to='/about'>
            <Button  className="hm-btn" id="abt-btn" type="primary">About me</Button>
            </Link>
            <Button  className="hm-btn" id="rs-btn" type="primary"><a href="https://damp-atoll-82498.herokuapp.com/uploads/Margareta_A_Hadisaputra_2021_software_Engineer_0a0e8d417e.pdf" target="_blank">Resume</a></Button>
        </Content>
        );
}

export default Home;