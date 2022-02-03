import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import Backdesign from '../Design/Backdesign';
import { Col, Row, Space } from 'antd';



function Home() {
    return (
        
        <Row>
             <Col md={8}>
                    <div id="home">
                        <h1 className="big-hd-text">Hi!<br />I'm Alicia.</h1>
                        <p className="small-hd-text">I’m a junior software engineer based in Melbourne, VIC.<br />
            I like writing <span id="code">codes</span>, as well as writing <span id="song">songs</span>.</p>
                        <Space>
                            <Link to='/about'>
                                <Button className="hm-btn" id="abt-btn" type="primary">About me</Button>
                            </Link>
                            <Button className="hm-btn" id="rs-btn" type="primary"><a href="https://drive.google.com/file/d/16396HVNYezejYh8JMZu6eZ_kBnC-CwdO/view?usp=sharing" target="_blank" rel="noreferrer"
                            >Resume</a></Button>
                        </Space>
                    </div>
                </Col>
                {/* <Col><Backdesign/></Col> */}
            </Row>
            
                    
                    




    );
}

export default Home;