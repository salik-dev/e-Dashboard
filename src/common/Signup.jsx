import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';

const SignUp = () => {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        console.log(`name = ${name}`);
        console.log(`mail = ${mail}`);
        console.log(`password = ${password}`);
    };

    return (
        <>
            <h1>Sign Up Components</h1>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                style={{ margin: 'auto', width: '550px', padding: '78px' }}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Name!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name"
                        value={name}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setName(e.target.value);
                        }} />
                </Form.Item>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="email"
                        placeholder="Email"
                        value={mail}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setMail(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setPassword(e.target.value);
                        }}
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        register now
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default SignUp;
