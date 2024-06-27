import React from 'react';
import { Layout, theme } from 'antd';
import { Routes, Route } from 'react-router-dom';
import FlightSearch from '../pages/FlightSearch';
import PaymentPage from '../pages/PaymentPage';
import SeatSelection from '../pages/SeatSelection';
import Profile from '../pages/Profile';



const { Content } = Layout;

const AppContent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content style={{ padding: '0 24px', minHeight: 280 }}>
      <div
        style={{
          background: colorBgContainer,
          minHeight: 360,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        <Routes>
          <Route path="/fsearch" element={<FlightSearch />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/seat-selection/:flightId" element={<SeatSelection />} />
          <Route path="/profile" element={<Profile />} />

        </Routes>
      </div>
    </Content>
  );
};

export default AppContent;
