import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Divider, Form, Table, Modal, Input, Button } from 'antd';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom'

export default function Courselist() {

    const initialData = {
        imageUrl: '',
        title: '',
        category: '',
        description: '',
        videos: [{ subtitle: '', videoUrl: [''] }]
      }

      const [courseData, setCourseData] = useState([]);
      const [visible, setVisible] = useState(false);
      const [viewRow, setViewRow] = useState(null);
      const [data, setData] = useState(initialData);
      const [selectedVideos, setSelectedVideos] = useState([]);
      const [showModal, setShowModal] = useState(false);
    
      const fetchData = async () => {
          try {
              const response = await axios.get('http://localhost:5000/course/');
              setCourseData(response.data);
          } catch (error) {
              console.error('Error fetching course data:', error);
          }
      };
      useEffect(() => {

        fetchData();

    }, [data]);
    
    const handleChange = (e, subtitleIndex, videoIndex) => {
        const { name, value } = e.target;
        const updatedVideos = [...data.videos];
        if (name === 'subtitle') {
          updatedVideos[subtitleIndex].subtitle = value;
        } else if (name === 'videoUrl') {
          updatedVideos[subtitleIndex].videoUrl[videoIndex] = value;
        }
        setData({ ...data, videos: updatedVideos });
      };
    
      const handleAddsubtitle = () => {
        setData({
          ...data,
          videos: [...data.videos, { subtitle: '', videoUrl: [''] }]
        });
      };

      const handleAddVideo = (subtitleIndex) => {
        const updatedVideos = [...data.videos];
        updatedVideos[subtitleIndex].videoUrl.push('');
        setData({ ...data, videos: updatedVideos });
      };
    
      const handleDeletesubtitle = (subtitleIndex) => {
        const updatedVideos = [...data.videos];
        updatedVideos.splice(subtitleIndex, 1);
        setData({ ...data, videos: updatedVideos });
      };
    
      const handleDeleteVideo = (subtitleIndex, videoIndex) => {
        const updatedVideos = [...data.videos];
        updatedVideos[subtitleIndex].videoUrl.splice(videoIndex, 1);
        setData({ ...data, videos: updatedVideos });
      };

      
    const handleShowModal = (videos) => {
        setSelectedVideos(videos);
        setShowModal(true);
    };

    const handleView = (record) => {
        setViewRow(record);
        setVisible(true);
        setData(record);
    };

    const handleClose = () => {
        setVisible(false);
    };

    const handleInputChange = (key, value) => {
        setData(prevData => ({
            ...prevData,
            [key]: value
        }));
    };
    const DescriptionCell = ({ description }) => {
        const [readMore, setReadMore] = React.useState(false);
    
        const toggleReadMore = () => {
            setReadMore(!readMore);
        };
    
        const displayText = readMore ? description : description.slice(0, 80);
    
        return (
            <div>
                <p>{displayText}</p>
                {description.length > 80 && (
                    <Button type="link" onClick={toggleReadMore}>
                        {readMore ? 'See less' : 'See more'}
                    </Button>
                )}
            </div>
        );
    };
    
    const handleVideoChange = (index, key, value) => {
        setData(prevData => ({
            ...prevData,
            videos: prevData.videos.map((video, i) => i === index ? { ...video, [key]: value } : video)
        }));
    };

    const handleRemoveVideo = index => {
        setData(prevData => ({
            ...prevData,
            videos: prevData.videos.filter((_, i) => i !== index)
        }));
    };

    const handleFormSubmit = async () => {
        try {
            const userInfoJSON = localStorage.getItem('userInfo');
            const userInfo = JSON.parse(userInfoJSON);
            const { token } = userInfo;
            const JWTtoken = token;
            console.log(token);
            const config = {
                headers: {
                    Authorization: `Bearer ${JWTtoken}`,
                },
            };
            const response = await axios.put(`http://localhost:5000/course/${data._id}`, data, config);
            handleClose(false)
            fetchData()
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    };

    console.log(data);
    

    const columns = [
        {
            title: 'SNo',
            dataIndex: '_id',
            key: '_id'
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category'
        },
        {
                        title: 'Description',
                        dataIndex: 'description',
                        key: 'description',
                        render: (text, record) => (
                            <DescriptionCell description={text} />
                        )
                    },
        {
            title: 'CreatedAt',
            dataIndex: 'createdAt',
            key: 'createdAt'
        },
        {
            title: 'UpdatedAt',
            dataIndex: 'updatedAt',
            key: 'updatedAt'
        },
        {
            title: 'Image',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
            render: (record) =>(
                <img src={record} />
            )
        },
        {
            title: 'Videos',
            dataIndex: 'videos',
            key: 'videos',
            render: (record) => (
                <Button onClick={() => {
                    setSelectedVideos(record)
                    setShowModal(true)
                }}>
                    View Videos
                </Button>
            ),
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <span className="flex"> {/* Add className="flex" to make the buttons display side by side */}
                    <button
                        onClick={() => {
                            handleView(record);
                            setData(record);
                        }}
                        className="action-button border border-blue text-blue px-5 py-1 mr-2 edit"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => handleDelete(record)}
                        className="action-button border border-red text-red px-5 py-1 delete"
                    >
                        Delete
                    </button>
                </span>
            )
            
        }        
    ];
 
const handleDelete = async (record) => {
    console.log(record);
        try {
            const userInfoJSON = localStorage.getItem('userInfo');
            const userInfo = JSON.parse(userInfoJSON);
            const { token } = userInfo;
            const JWTtoken = token;
            console.log(token);
            const config = {
                headers: {
                    Authorization: `Bearer ${JWTtoken}`,
                },
            };
            const response = await axios.delete(`http://localhost:5000/course/${record._id}`, config);
            fetchData()
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
};
    console.log(data);
    return (
        <div className='mt-32'>
    <div className='flex justify-between'>
        <div className="font-semibold text-2xl text-subtitle ml-12">
            <h1 className='user-select-none'>Course Info</h1>
        </div>
        <Link to ='/create'>
        <button className='border px-2 text-green mr-5'>+ Add New</button>
        </Link>
    </div>
            <div className='ml-12 mt-4'>
            <Divider />
<div className="table-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
    <Table
        columns={columns}
        dataSource={courseData}
    />
</div>
                <Modal
                    title="Edit Details"
                    visible={visible}
                    onCancel={handleClose}
                    footer={null}
                >
                    {viewRow && (
                        <Form onFinish={handleFormSubmit}>
                    <p>
                        <strong>Image URL:</strong>{' '}
                        <Input
                           key = 'Image'
                           value={data.imageUrl}
                           onChange={(e) =>{
                                handleInputChange('imageUrl' , e.target.value)
                           }}
                        />
                    </p>
                    <p>
                        <strong>Title:</strong>{' '}
                        <Input
                           key = 'title'
                           value={data.title}
                           onChange={(e) =>{
                                handleInputChange('title' , e.target.value)
                           }}
                        />
                    </p>

                    <p>
                        <strong>category:</strong>{' '}
                        <Input
                           key = 'category'
                           value={data.category}
                           onChange={(e) =>{
                                handleInputChange('category' , e.target.value)
                           }}
                        />
                    </p>

                    <p>
                        <strong>description:</strong>{' '}
                        <Input
                           key = 'description'
                           value={data.description}
                           onChange={(e) =>{
                                handleInputChange('description' , e.target.value)
                           }}
                        />
                    </p>
                           <p className='mb-5 mt-5'>Modules</p>
                           {data.videos.map((subtitle, subtitleIndex) => (
                            <div key={subtitleIndex} className="mb-4">
                                <label htmlFor={`subtitle${subtitleIndex}`} className="block mb-2 font-semibold">subtitle {subtitleIndex + 1}</label>
                                <input type="text" id={`subtitle${subtitleIndex}`} name="subtitle" value={subtitle.subtitle} onChange={(e) => handleChange(e, subtitleIndex)} className="w-full border rounded px-3 py-2" />
                                {subtitle.videoUrl.map((videoUrl, videoIndex) => (
                                <div key={videoIndex} className="mb-2">
                                    <label htmlFor={`videoUrl${subtitleIndex}-${videoIndex}`} className="block mb-1 font-semibold">Video URL {videoIndex + 1}</label>
                                    <input type="text" id={`videoUrl${subtitleIndex}-${videoIndex}`} name="videoUrl" value={videoUrl} onChange={(e) => handleChange(e, subtitleIndex, videoIndex)} className="w-full border rounded px-3 py-2" />
                                    <button type="button" onClick={() => handleDeleteVideo(subtitleIndex, videoIndex)} className="bg-purple text-white px-2 py-1 rounded-full ml-2">Delete Video</button>
                                </div>
                                ))}
                                <button type="button" onClick={() => handleAddVideo(subtitleIndex)} className="bg-purple text-white px-4 py-2 rounded-full">+ Add Video</button>
                                <button type="button" onClick={() => handleDeletesubtitle(subtitleIndex)} className="bg-purple text-white px-2 py-1 rounded-full ml-2">Delete subtitle</button>
                            </div>
                            ))}
                            <button type="button" onClick={handleAddsubtitle} className="bg-purple text-white px-4 py-2 rounded-full">+ Add subtitle</button>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className='mt-4' style={{ backgroundColor: 'blue', borderColor: 'blue' }}>Submit</Button>
                            </Form.Item>
                        </Form>
                    )}
                </Modal>

                <Modal
                    title="Videos"
                    visible={showModal}
                    onCancel={() => setShowModal(false)}
                    footer={null}
                >
                    <div>
                        {selectedVideos.map((video, index) => (
                            <div key={index}>
                                <p>subtitle: {video.subtitle}</p>
                                <div  >
                                <ReactPlayer width="80%" url={video.videoUrl} controls={true} />
                                    </div>
                            </div>
                        ))}
                    </div>
                </Modal>
            </div>
        </div>
    )
}
