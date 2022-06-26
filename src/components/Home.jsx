import React ,{useState,useEffect}from 'react'
import { Button, Space, Table, Tag,Modal,Form,Input } from 'antd';
import axios from 'axios';
import Config from '../config';
import { Col, Row } from 'antd';


//http://rustycoder.live:8080/user/data
const Home = () => {

    const [data,setData]=useState([]);
    const [trigger,setTrigger]=useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editState,setEditState]=useState({
      name:"",
      email:""
    })



    const getApiData=()=>{

        axios.get(`${Config.LOCALURL}/user/data`).then(response=>{

           // console.log(response.data.data);
            setData(response.data.data);

        }).catch(err=>{
            console.log(err);
        })
    }

    const deleteData=(id)=>{

        ///delete/:id
        axios.delete(`${Config.LOCALURL}/user/delete/${id}`).then(response=>{
            console.log(response);
       

            // I have to call the getApi again
           // getApiData();
           setTrigger(!trigger);

        }).catch(err=>{
            console.log(err);
        })
}

const showEditPopup=(data)=>{

  //debugger;
  setEditState(data)
  setIsModalVisible(true);

}



    useEffect(()=>{
        getApiData();

    },[trigger,isModalVisible])

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


        {
          title: 'Edit',
          key: '_id',
          render: (data, record) => (
            <Button type="primary" onClick={()=>showEditPopup(record)}>
              Edit
            </Button>
          ),
        },
        
    
      ];

      const showModal = () => {
        setIsModalVisible(true);
      };
    
      const handleOk = () => {

        // Calling the api from here ---

        axios.put(`${Config.LOCALURL}/user/edit`,editState).then(response=>{
          console.log(response);
          setIsModalVisible(false);
  
       }).catch(err=>{
          console.log(err);
  
       })
  
       // setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };


      // Form methods 


   const handleEditChange=(event)=>{

    setEditState({...editState,[event.target.name]:event.target.value});

   }
    

  return (
    <div style={{marginTop:"120px"}}>



        <Row>
      <Col span={10} offset={5}>
      <Table columns={columns} dataSource={data} />
      </Col>
    </Row>


    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

      <Input type={"text"}  value={editState.name} name="name" onChange={handleEditChange} placeholder="Name"/><br/>


      <Input type={"text"}  value={editState.email} name="email"  onChange={handleEditChange}  placeholder="Email"/>
  

      </Modal>
    </div>
  )
}

export default Home