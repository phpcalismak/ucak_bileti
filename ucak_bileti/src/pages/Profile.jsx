import React from 'react';
import { Card, Typography, Divider } from 'antd';

const { Title, Text } = Typography;

const ProfilePage = () => {
   
    const user = {
        name: 'Beyda Bucak',
        username: 'byydbck',
        email: 'byydbck@gmail.com',
        address: {
            street: '123 Fake Sk',
            city: 'Edirne',
            zipcode: '12345',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'byydbck.com',
        company: {
            name: 'Trakya Üni',
            catchPhrase: 'Selam',
            bs: 'Üniversite'
        }
    };

    return (
        <div style={{ padding: '50px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
            <Card title="Profil Bilgilerim" style={{ width: '100%', maxWidth: 600, margin: 'auto', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <div style={{ marginBottom: 20 }}>
                    <Title level={3} style={{ marginBottom: 0 }}>{user.name}</Title>
                    <Text type="secondary">@{user.username}</Text>
                </div>
                <Divider />
                <div style={{ marginBottom: 12 }}>
                    <Text strong>Email:</Text> {user.email}
                </div>
                <Divider />
                <div style={{ marginBottom: 12 }}>
                    <Text strong>Telefon:</Text> {user.phone}
                </div>
                <Divider />
                <div style={{ marginBottom: 12 }}>
                    <Text strong>Website:</Text> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a>
                </div>
                <Divider />
                <div style={{ marginBottom: 12 }}>
                    <Text strong>Adres:</Text> {user.address.street}, {user.address.city} {user.address.zipcode}
                </div>
                <Divider />
                <div style={{ marginBottom: 12 }}>
                    <Text strong>Şirket:</Text> {user.company.name}
                </div>
                <Divider />
                <div style={{ marginBottom: 12 }}>
                    <Text strong>Şirket Hakkında:</Text> {user.company.catchPhrase}
                </div>
                <Divider />
                <div style={{ marginBottom: 12 }}>
                    <Text strong>İş Alanı:</Text> {user.company.bs}
                </div>
            </Card>
        </div>
    );
};

export default ProfilePage;
