import React ,{useState,useEffect}from 'react'
import { Button, Space, Table, Tag } from 'antd';
import axios from 'axios';
import Config from '../config';
import { Col, Row } from 'antd';


//http://rustycoder.live:8080/user/data
const Home = () => {

    const [data,setData]=useState([]);
    const [trigger,setTrigger]=useState(false);


    const getApiData=()=>{

        axios.get(`${Config.REMOTEURL}/user/data`).then(response=>{

           // console.log(response.data.data);
            setData(response.data.data);

        }).catch(err=>{
            console.log(err);
        })
    }

    const deleteData=(id)=>{

        ///delete/:id
        axios.delete(`${Config.REMOTEURL}/user/delete/${id}`).then(response=>{
            console.log(response);
       

            // I have to call the getApi again
           // getApiData();
           setTrigger(!trigger);

        }).catch(err=>{
            console.log(err);
        })

       

    }

    useEffect(()=>{
        getApiData();

    },[trigger])

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

        {
            title: 'Delete',
            key: '_id',
            render: (data, record) => (
              <Button type="primary" onClick={()=>deleteData(record._id)}>
                Delete
              </Button>
            ),
          },
        
    
      ];
  return (
    <div style={{marginTop:"120px"}}>
        <Row>
      <Col span={10} offset={5}>
      <Table columns={columns} dataSource={data} />
      </Col>
    </Row>


    </div>
  )
}

export default Home