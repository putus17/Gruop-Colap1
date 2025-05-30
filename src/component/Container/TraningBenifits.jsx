import React from 'react';
import { Typography, Row, Col, Card } from 'antd';

const { Title, Text, Paragraph } = Typography;

const benefits = [
  {
    title: 'Hands-on Experience',
    description: 'Build real-world applications from scratch',
  },
  {
    title: 'Industry Expert Mentors',
    description: 'Learn from experienced MERN developers',
  },
  {
    title: 'Job Ready Skills',
    description: 'Get prepared for full-stack developer roles',
  }
];

const TrainingBenefits = () => {
  return (
    <div style={{ padding: '40px 20px', background: '#f0f2f5' }}>
      <Card
        hoverable
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          borderRadius: '12px',
          padding: '24px',
          textAlign: 'center'
        }}
      >
        <Title level={3} style={{ color: 'green' }}>Training Benefits</Title>
        <Row gutter={[32, 32]} justify="center">
          {benefits.map((benefit, index) => (
            <Col key={index} xs={24} sm={22} md={8}>
              <div>
                <Text strong style={{ fontSize: '18px' }}>{benefit.title}</Text>
                <Paragraph style={{ marginTop: '10px' }}>{benefit.description}</Paragraph>
              </div>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default TrainingBenefits;
