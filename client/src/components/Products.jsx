import React from 'react'
import OCR from '../assets/OCR_solutions.png'
import DOC from '../assets/Document_Summarizer.png'
import ChatBotDevelopment from '../assets/chatbot_development.png'
import Card from '../components/CardProducts'
import Nav from './Nav'
import Footer from './Footer'

const articles = [
 {
    "title": "Chatbots",
    "desc": "Our advanced chatbot solutions integrate natural language processing and machine learning algorithms to provide seamless customer interactions. Enhance your customer experience and streamline your business operations with our customizable chatbot platform.",
    "img": ChatBotDevelopment,
 },
 {
    "title": "Document Summarizer",
    "desc": "Tackle information overload with our document summarization solution. Automatically generate concise summaries of lengthy texts, saving time and effort while maintaining the key insights.",
    "img": DOC,
 },
 {
    "title": "OCR (Optical Character Recognition)",
    "desc": "Transform paper-based documents into digital assets with our OCR technology. Extract text from images or documents accurately and efficiently, enabling easy data processing and information retrieval.",
    "img": OCR,
 }
 ]

function Products(props) {
  return (
   <>

   <div className='container'>
    <div className='grid grid-cols-1 place-items-center'>
       <h1 className="text-[#FA5119] text-4xl mt-32 font-extrabold m-20">Products</h1>
    </div>
    {
       articles.map((elements) => {
          return <div className='mx-16 mb-16'>
             <Card title={elements.title} desc={elements.desc} img={elements.img} />
          </div>

       })
    }
    </div>

   
   
   </>
  )
    
}

export default Products