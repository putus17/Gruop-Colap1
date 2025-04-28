import React from 'react';
import { 
  DatabaseOutlined, 
  SafetyCertificateOutlined, 
  CloudUploadOutlined, 
  CodeSandboxOutlined,
   // Add missing import here
} from '@ant-design/icons';

import { Typography, List } from 'antd';

const { Title } = Typography;

const learningItems = [
  { text: 'Full-Stack JavaScript Development', icon: <CodeSandboxOutlined />  },
  { text: 'Database Design & Integration', icon: <DatabaseOutlined /> },
  { text: 'Authentication & Authorization', icon: <SafetyCertificateOutlined /> },
  { text: 'Deployment & DevOps Basics', icon: <CloudUploadOutlined /> },
];

const LearningSection = () => (
  <div style={{ padding: '40px', background: '#ffffff' }}>
    <Title level={1} style={{ textAlign: 'center' }}>What You'll Learn</Title>
    <List
      itemLayout="horizontal"
      dataSource={learningItems}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={<div style={{ fontSize: '20px', color: 'green' }}>{item.icon}</div>}
            title={<span>{item.text}</span>}
          />
        </List.Item>
      )}
    />
  </div>
);

export default LearningSection;
