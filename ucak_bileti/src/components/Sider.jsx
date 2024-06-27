import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

const items = [
  { key: '1', icon: <UserOutlined />, label: <Link to="/fsearch">Ana Sayfa</Link> },
  { key: '4', icon: <UserOutlined />, label: <Link to="/login">Giriş</Link> },
  { key: '5', icon: <UserOutlined />, label: <Link to="/profile">Profil</Link> },
  {
    key: 'logout',
    icon: <LogoutOutlined />,
    label: 'Çıkış Yap',
  },
];

const AppSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  }

  return (
    <Sider theme='light' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={{ backgroundColor: 'black' }}>
      <div className="demo-logo-vertical" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        {items.map(item => (
          <Menu.Item key={item.key} icon={item.icon} onClick={item.key === 'logout' ? handleLogout : null}>
            {item.key === 'logout' ? item.label : <Link to={item.label.props.to}>{item.label}</Link>}
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
};

export default AppSider;
