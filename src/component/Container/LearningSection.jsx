import React from 'react';
import { Typography, Card } from 'antd';

const { Title } = Typography;

const learningItems = [
  'Full-Stack JavaScript Development',
  'RESTful API Development',
  'Database Design & Integration',
  'Authentication & Authorization',
  'Deployment & DevOps Basics'
];

const LearningSection = () => (
  <div style={{ padding: '40px', background: '#f0f2f5' }}>
    
      <Title level={2} style={{ textAlign: 'center', marginBottom: '24px' }}>
        What You'll Learn
      </Title>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        {learningItems.map((item, index) => (
          <li key={index} style={{ fontSize: '16px', marginBottom: '10px', position: 'relative', paddingLeft: '25px' }}>
            <span style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', color: 'green' }}>
              &#10003; {/* Checkmark symbol */}
            </span>
            {item}
          </li>
        ))}
      </ul>
    
  </div>
);

export default LearningSection;
