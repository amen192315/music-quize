import React from 'react';
import { Form, Input } from 'antd';
import { NamePath } from 'antd/es/form/interface';
type CustomPassInp = {
  name: string;
  placeholder: string;
  dependencies?: NamePath[];
};

const CustomPassInp = ({ name, placeholder, dependencies }: CustomPassInp) => {
  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      hasFeedback
      rules={[
        { required: true, message: 'Обязательное поле' },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value) {
              return Promise.resolve();
            }

            if (name == 'confirmPassword') {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Пароли должны совпадать'));
            } else {
              if (value.length < 6) {
                return Promise.reject(
                  new Error('Пароль должен быть длиннее 5-ти символов')
                );
              }
            }
          },
        }),
      ]}
    >
      <Input.Password placeholder={placeholder} size="large" />
    </Form.Item>
  );
};

export default CustomPassInp;
