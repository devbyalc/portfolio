import React from 'react';
import {Link} from 'react-router-dom';
import { PageHeader, Button } from 'antd';
// const { Text } = Typography;

function NavBar() {
    return (
      
        <PageHeader
            style={{ backgroundColor:'#02012B',color:'#FEFFD1'}}
            ghost={false}
            extra={[
                <Link to='/home'><Button  style={{ backgroundColor:'#02012B',color:'#FEFFD1'}} key={3}>Home</Button></Link>,
                <Link to='/about'><Button  style={{ backgroundColor:'#02012B',color:'#FEFFD1'}}key={2}>About</Button></Link>,
                <Link to='/projects'><Button  style={{ backgroundColor:'#02012B',color:'#FEFFD1'}}key={1}>Projects</Button></Link>,
            ]}
        >
        </PageHeader>

    );
}

export default NavBar;