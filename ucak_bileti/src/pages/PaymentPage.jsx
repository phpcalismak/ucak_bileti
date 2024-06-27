import React, { useState } from 'react';
import { Form, Input, Button, Card, notification } from 'antd';

const PaymentPage = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handlePayment = (values) => {
        setLoading(true);

       
        setTimeout(() => {
            setLoading(false);
            notification.success({
                message: 'Ödeme Başarılı',
                description: 'Rezervasyonunuz başarıyla tamamlandı. Onay maili gönderildi.',
            });
            form.resetFields();
        }, 2000);
    };

    return (
        <div style={{ padding: '50px' }}>
            <Card title="Ödeme Sayfası" style={{ maxWidth: 600, margin: 'auto' }}>
                <Form
                    form={form}
                    name="payment"
                    onFinish={handlePayment}
                    layout="vertical"
                >
                    <Form.Item
                        label="Kart Numarası"
                        name="cardNumber"
                        rules={[{ required: true, message: 'Lütfen kart numarasını girin!' }]}
                    >
                        <Input placeholder="Kart numarası" />
                    </Form.Item>

                    <Form.Item
                        label="Son Kullanma Tarihi"
                        name="expiryDate"
                        rules={[{ required: true, message: 'Lütfen son kullanma tarihini girin!' }]}
                    >
                        <Input placeholder="MM/YY" />
                    </Form.Item>

                    <Form.Item
                        label="CVV"
                        name="cvv"
                        rules={[{ required: true, message: 'Lütfen CVV numarasını girin!' }]}
                    >
                        <Input placeholder="CVV" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Ödeme Yap
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default PaymentPage;
