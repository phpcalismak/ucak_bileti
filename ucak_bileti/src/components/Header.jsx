import React from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../assets/a.png';
const { Header } = Layout;

const AppHeader = () => (
  <Header style={{  backgroundColor:'black', display: 'flex', alignItems: 'center' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={logo} alt="Logo" style={{ height: '40px', marginRight: '103px' }} />
    </div>
   
  </Header>
);

export default AppHeader;
