import { Card, Form, Row, Space, Typography } from 'antd';
import React from 'react';
import CustomInp from '../../custom/customInp';
import CustomPassInp from '../../custom/CustomPassInp';
import CustomBtn from '../../custom/customBtn';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <Row align="middle" justify="center">
        <Card title="Войдите или зарегистрируйтесь" style={{ width: '30rem' }}>
          <Form onFinish={() => null}>
            <CustomInp type="email" name="email" placeholder="Email" />
            <CustomPassInp name="password" placeholder="Пароль" />
            <CustomBtn type="primary" htmlType="submit">
              Войти
            </CustomBtn>
          </Form>
          <Space direction="vertical" size="large">
            <Typography.Text>
              Нет аккаунта?{' '}
              <Link className="link-register" to="/register">
                Зарегистрируйтесь
              </Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </div>
  );
};

export default Login;
