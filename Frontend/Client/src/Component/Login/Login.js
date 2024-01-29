import React from "react"
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "../../Styles/Login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setAccessToken } from '../Auth/token';

const Login = () => {

  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/login', values);
      const accessToken = response.data.token;

      setAccessToken(accessToken);

      localStorage.setItem('token', accessToken);

      navigate('/sidebar');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  return (
    <div className="login-container">
      <div className="login-content-container">
        <div className="login-header">
          <h1>OrelBuy</h1>
          <h3>Hello, Welcome to OrelBuy</h3>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="example@gmail.com"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="******"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <div className="loging-questions">
              <div className="loging-questions-signup">
                Do you have an account ?{" "}
                <u>
                  <a href="">Sign up</a>
                </u>
              </div>
              <div className="loging-questions-pws">
                Forget your password ?{" "}
                <u>
                  <a href="">Reset it</a>
                </u>
              </div>
            </div>
          </Form.Item>
          <div className="continue-as-guest">
            <div>Continue as Guest</div>
            <div className="privacy-terms">
              <div>Privacy</div>
              <div>Terms</div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
