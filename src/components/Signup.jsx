import React from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import { Col, Row } from 'antd';
import axios from 'axios';

import Config from '../config';



const Signup = () => {

    const onFinish = (values) => {
     axios.post(`${Config.REMOTEURL}/auth/signup2`,values).then(response=>{
        console.log(response);

     }).catch(err=>{
        console.log(err);

     })

      //  console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };


  return (

    <Row style={{marginTop:"200px"}}>
    <Col span={11} offset={5}>
        <h1>Signup Here</h1>
    <div>
         <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >


      <Form.Item
        label="Name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name!',
          },
        ]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>


    </div>
    </Col>
  </Row>
  
  )
}

export default Signup