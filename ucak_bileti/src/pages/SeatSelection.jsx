import React, { useState } from 'react';
import { Card, Button, Row, Col, Modal } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const seats = Array.from({ length: 30 }, (_, index) => ({
    number: index + 1,
    isAvailable: Math.random() > 0.3,  
}));

const SeatSelection = () => {
    const { flightId } = useParams();
    const [selectedSeat, setSelectedSeat] = useState(null);
    const [cart, setCart] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    const handleSeatSelect = (seat) => {
        setSelectedSeat(seat);
        setIsModalVisible(true);
    };

    const handleAddToCart = () => {
        setCart([...cart, selectedSeat]);
        setIsModalVisible(false);
    };

    const handleOk = () => {
        handleAddToCart();
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleProceedToPayment = () => {
        navigate('/payment');
    };

    return (
        <div style={{ padding: '50px' }}>
            <Card title={`Uçuş ID: ${flightId} için Koltuk Seçimi`} style={{ maxWidth: 600, margin: 'auto' }}>
                <Row gutter={[16, 16]}>
                    {seats.map(seat => (
                        <Col span={4} key={seat.number}>
                            <Button
                                type={seat.isAvailable ? 'primary' : 'default'}
                                disabled={!seat.isAvailable}
                                onClick={() => handleSeatSelect(seat)}
                            >
                                {seat.number}
                            </Button>
                        </Col>
                    ))}
                </Row>
                {cart.length > 0 && (
                    <div style={{ marginTop: '20px', textAlign: 'center' }}>
                        <Button type="primary" onClick={handleProceedToPayment}>
                            Ödemeye Geç
                        </Button>
                    </div>
                )}
            </Card>

            <Modal title="Koltuk Onayı" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                {selectedSeat && <p>Seçtiğiniz Koltuk Numarası: {selectedSeat.number}</p>}
            </Modal>
        </div>
    );
};

export default SeatSelection;
