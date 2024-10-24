import { Button, Form } from 'antd';
import React from 'react';

type customBtn = {
  children: React.ReactNode;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  type?: 'default' | 'link' | 'text' | 'primary' | 'dashed' | undefined;
  danger?: boolean;
  loading?: boolean;
  shape?: 'default' | 'circle' | 'round' | undefined;
  icon?: React.ReactNode;
};

const CustomBtn = ({
  children,
  htmlType = 'button',
  type,
  danger,
  loading,
  shape,
  icon,
  onClick,
}: customBtn) => {
  return (
    <Form.Item>
      <Button
        htmlType={htmlType}
        type={type}
        danger={danger}
        loading={loading}
        shape={shape}
        icon={icon}
        onClick={onClick}
      >
        {children}
      </Button>
    </Form.Item>
  );
};

export default CustomBtn;
