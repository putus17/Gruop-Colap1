import React from 'react';
import { Typography, List, Card } from 'antd';
import {
  DatabaseFilled,
  CloudServerOutlined,
  CodeOutlined,
  ApiOutlined,
  ProjectOutlined
} from '@ant-design/icons';

const { Title } = Typography;

const courseHighlights = [
  { text: 'MongoDB Database Management', icon: <DatabaseFilled /> },
  { text: 'Express.js Backend Development', icon: <CloudServerOutlined /> },
  { text: 'React.js Frontend Development', icon: <CodeOutlined /> },
  { text: 'Node.js Server-Side Programming', icon: <ApiOutlined /> },
  { text: 'Real-world Project Development', icon: <ProjectOutlined /> }
];

const HighlightContainer = () => {
  return (
    <div style={{ padding: '40px', background: '#f0f2f5' }}>
      
      
        <Title level={3} style={{ textAlign: 'center', marginBottom: '24px' }}>
          Course Highlights
        </Title>
        <List
          dataSource={courseHighlights}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<div style={{ fontSize: '24px', color: 'green' }}>{item.icon}</div>}
                title={<span style={{ fontSize: '16px' }}>{item.text}</span>}
              />
            </List.Item>
          )}
        />
    
    </div>
  );
};

export default HighlightContainer;
