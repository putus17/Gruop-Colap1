import React from 'react';
import { Typography, List } from 'antd';
import { DatabaseFilled, CloudServerOutlined, CodeOutlined, ApiOutlined, ProjectOutlined } from '@ant-design/icons';

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
            <Title level={3} style={{ textAlign: 'center' }}>Course Highlights</Title>
            <List
                dataSource={courseHighlights}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<div style={{ fontSize: '20px', color: 'green' }}>{item.icon}</div>}
                            title={<span>{item.text}</span>}
                        />
                    </List.Item>
                )}
                style={{ maxWidth: '600px', margin: '0 auto' }}
            />
        </div>
    );
};

export default HighlightContainer;
