import React from 'react';
import { useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import { LogoutOutlined } from '@ant-design/icons';

const LogOut = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout}>
      Çıkış Yap
    </Menu.Item>
  );
};

export default LogOut;
