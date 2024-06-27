import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Select, Card, List, Radio, Slider } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const airlines = ['Turkish Airlines', 'Pegasus Airlines', 'SunExpress'];

const FlightSearch = () => {
    const [flights, setFlights] = useState([]);
    const navigate = useNavigate();

    const onFinish = (values) => {
        const mockFlights = [
            {
                id: 1,
                departure: values.departure,
                destination: values.destination,
                date: values.date.format('YYYY-MM-DD'),
                airline: values.airline,
                price: 100,
                duration: 120,
                isDirect: true
            },
            {
                id: 2,
                departure: values.departure,
                destination: values.destination,
                date: values.date.format('YYYY-MM-DD'),
                airline: values.airline,
                price: 120,
                duration: 180,
                isDirect: false
            },
            {
                id: 3,
                departure: values.departure,
                destination: values.destination,
                date: values.date.format('YYYY-MM-DD'),
                airline: values.airline,
                price: 90,
                duration: 150,
                isDirect: true
            }
        ];

        const filteredFlights = mockFlights.filter(flight => {
            return flight.isDirect === (values.flightType === 'direct')
                && flight.price <= values.price[1]
                && flight.price >= values.price[0]
                && flight.duration <= values.duration[1]
                && flight.duration >= values.duration[0];
        });
        
        setFlights(filteredFlights);
    };

    const selectFlight = (flightId) => {
        navigate(`/seat-selection/${flightId}`);
    };

    return (
        <div style={{ padding: '50px' }}>
            <Card title="Uçak Bileti Arama" style={{ maxWidth: 600, margin: 'auto' }}>
                <Form
                    name="flight_search"
                    onFinish={onFinish}
                    layout="vertical"
                >
                    <Form.Item
                        label="Kalkış Yeri"
                        name="departure"
                        rules={[{ required: true, message: 'Lütfen kalkış yerini girin!' }]}
                    >
                        <Input placeholder="Kalkış yeri" />
                    </Form.Item>

                    <Form.Item
                        label="Varış Yeri"
                        name="destination"
                        rules={[{ required: true, message: 'Lütfen varış yerini girin!' }]}
                    >
                        <Input placeholder="Varış yeri" />
                    </Form.Item>

                    <Form.Item
                        label="Tarih"
                        name="date"
                        rules={[{ required: true, message: 'Lütfen tarihi seçin!' }]}
                    >
                        <DatePicker style={{ width: '100%' }} />
                    </Form.Item>

                    <Form.Item
                        label="Havayolu Şirketi"
                        name="airline"
                        rules={[{ required: true, message: 'Lütfen havayolu şirketini seçin!' }]}
                    >
                        <Select placeholder="Havayolu şirketi seçin">
                            {airlines.map((airline, index) => (
                                <Option key={index} value={airline}>{airline}</Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Uçuş Türü"
                        name="flightType"
                        rules={[{ required: true, message: 'Lütfen uçuş türünü seçin!' }]}
                    >
                        <Radio.Group>
                            <Radio value="direct">Direkt</Radio>
                            <Radio value="transfer">Aktarmalı</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        label="Fiyat Aralığı (USD)"
                        name="price"
                        initialValue={[50, 200]}
                    >
                        <Slider range min={0} max={500} />
                    </Form.Item>

                    <Form.Item
                        label="Uçuş Süresi (dakika)"
                        name="duration"
                        initialValue={[60, 300]}
                    >
                        <Slider range min={30} max={600} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Ara
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

            {flights.length > 0 && (
                <Card title="Arama Sonuçları" style={{ maxWidth: 600, margin: '50px auto' }}>
                    <List
                        itemLayout="horizontal"
                        dataSource={flights}
                        renderItem={flight => (
                            <List.Item onClick={() => selectFlight(flight.id)} style={{ cursor: 'pointer' }}>
                                <List.Item.Meta
                                    title={`${flight.departure} - ${flight.destination}`}
                                    description={`
                                        Tarih: ${flight.date}, 
                                        Havayolu: ${flight.airline}, 
                                        Fiyat: ${flight.price} USD, 
                                        Süre: ${flight.duration} dakika, 
                                        ${flight.isDirect ? 'Direkt' : 'Aktarmalı'}
                                    `}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            )}
        </div>
    );
};

export default FlightSearch;
