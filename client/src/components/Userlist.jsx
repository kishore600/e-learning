import React, { useState } from 'react';
import { Divider, Table, Modal, Input, Button } from 'antd';
import axios from 'axios';
import {Link} from 'react-router-dom'
export default function Userlist() {

    const columns = [
        {
            title: 'SNo',
            dataIndex: '_id',
            key: '_id'
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            title: 'UpdatedAt',
            dataIndex: 'updatedAt',
            key: 'updatedAt'
        },
        {
            title: 'Admin',
            dataIndex: 'isAdmin',
            key: 'isAdmin'
        },
        {
            title: 'Action',
            dataIndex: 'action', 
            key: 'action',
            render: (text, record) => (
                <span>
                    <button onClick = {() => handleView(record)} className="action-button border border-blue text-blue px-5 py-1 mr-2 edit">Edit</button>
                    <button className="action-button border border-red text-red px-5 py-1 delete">Delete</button>
                </span>
            )
        }
    ];

    const [table, setTable] = useState([]);
    const [visible, setVisible] = useState(false)
    const [editedRow, setEditedRow] = useState(null);
    const [isAdminValue, setIsAdminValue] = useState(false);

    const fetching = async () => {
        try {
          const userInfoJSON = localStorage.getItem('userInfo');
          const userInfo = JSON.parse(userInfoJSON);
          const { token } = userInfo;
          const JWTtoken = token;
          console.log(token);
          const config = {
            headers: {
              Authorization: 'Bearer ' + JWTtoken,
            },
          };
          const response = await axios.get('http://localhost:5000/user', config);
          setTable(response.data);
        } catch (error) {
          console.log(error.message);
        }
      };
    
      React.useEffect(() => {
        fetching();
      }, []);

    const handleView = (record) =>{
        setEditedRow({...record})
        setVisible(true)
    }

    const handleClose = () =>{
        setVisible(false)
    }
    
    const handleInputChange = (key, value) =>{
        setEditedRow({...editedRow, [key]: value})
    }

    // const handleSave = () => {
    //     const updatedRow = { ...editedRow, isAdmin: isAdminValue };
    //     const updatedTable = table.map((row) =>
    //         row.id === editedRow.id ? updatedRow : row
    //     );
    //     setTable(updatedTable);
    //     setVisible(false);
    //     setEditedRow(null);
    // };
    
    

    return (
        <div className="flex flex-col min-h-screen">
        <div className='mt-32'>
    <div className='flex justify-between'>
        <div className="font-semibold text-2xl text-subtitle ml-12">
            <h1 className='user-select-none'>User Info</h1>
        </div>
        <Link to ='/createuser'>
        <button className='border px-2 text-green mr-5'>+ Add New</button>
        </Link>
    </div>
            <div>
            <div className="flex-grow overflow-y-auto ml-12">
                <Divider />
                <Table
                    columns={columns}
                    dataSource={table.map(item => ({
                        key: item._id,
                        _id: item._id,
                        username: item.username,
                        email: item.email,
                        createdAt: item.createdAt,
                        updatedAt: item.updatedAt,
                        isAdmin: item.isAdmin ? <span style={{ color: 'green', fontWeight: 'bold' }}>True</span> : <span style={{ color: 'red', fontWeight: 'bold' }}>False</span> 
                    }))}
                />
                <Modal
                    title="Edit Details"
                    visible={visible}
                    onCancel={handleClose}
                    footer={[
                        <Button key="cancel" onClick={handleClose}>
                            Cancel
                        </Button>,
                        <Button key="submit" type="primary"  style={{ backgroundColor: 'blue', borderColor: 'blue' }} > 
                            Save
                        </Button>
                    ]}
                >
                   {editedRow &&  ( 
                   <div>
                    <p>
                       <strong>ID:</strong> {editedRow.id}
                    </p>
                    <p>
                        <strong>Username:</strong>{' '}
                        <Input
                           key = 'username'
                           value={editedRow.username}
                           onChange={(e) =>{
                                handleInputChange('username' , e.target.value)
                           }}
                        />
                    </p>
                    <p>
                        <strong>Email:</strong>{' '}
                        <Input
                           key = 'email'
                           value={editedRow.email}
                           onChange={(e) =>{
                                handleInputChange('email',e.target.value)
                           }}
                        />
                    </p>
                <fieldset>
                    <legend><strong>Make Admin?</strong></legend>
                    <input 
                        type="radio"
                        id="true"
                        name="isAdmin"
                        // checked={isAdminValue}
                        // onChange={() => setIsAdminValue(true)}
                    />
                    <label htmlFor="true"> Yes</label>
                    <br />
                                
                    <input 
                        type="radio"
                        id="false"
                        name="isAdmin"
                        // checked={!isAdminValue}  
                        // onChange={() => setIsAdminValue(false)}
                    />
                    <label htmlFor="false"> No</label>
                    <br />
                </fieldset>
                    </div>
                )}
                </Modal>   
                </div> 
            </div>
        </div>
        </div>
    );
}

