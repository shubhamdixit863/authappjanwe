import React ,{useState}from 'react'
import { Space, Table, Tag } from 'antd';

//http://rustycoder.live:8080/user/data
const Home = () => {

    const [data,setData]=useState([]);

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Password',
          dataIndex: 'password',
          key: 'password',
        },
        
    
      ];
  return (
    <div>

<Table columns={columns} dataSource={data} />
    </div>
  )
}

export default Home