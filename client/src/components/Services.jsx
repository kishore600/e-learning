import React from 'react'
import Card from '../components/CardProducts'
import DataScience from '../assets/Data_Science_Consulting.png'
import ChatBotDevelopment from '../assets/chatbot_development.png'
import QASystem from '../assets/Q&ASystems.png'
import OCR from '../assets/OCR_solutions.png'
import DOC from '../assets/Document_Summarizer.png'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const articles = [{

   "title": "Data Science Consulting",
   "desc": "Our experienced data scientists provide expert guidance and consulting services to help you identify and implement data-driven solutions.We work closely with your team to understand your business objectives and develop tailored strategies.From data exploration and modeling to predictive analytics and machine learning, we offer insights and recommendations to optimize your operations. ",
   "img": DataScience,
},
{
   "title": "Chat Bot Development",
   "desc": "Our team specializes in building intelligent chatbots that enhance customer interactions and streamline business processes. Leveraging natural language processing and machine learning algorithms, we develop chatbots that can handle customer inquiries, we develop chatbots that can handle customer inquiries, provide personalized recommendations, and automate routine tasks. Whether it's for customer support,lead support, lead generation, or virtual assistants, our chatbots deliver exceptional user experiences.",
   "img": ChatBotDevelopment,
},{
   "title": "Q&A Systems",
   "desc": "We design and develop question-and-answer (Q&A) systems that enable efficient information retrieval from vast knowledge bases. Our Q&A systems utilize advanced natural language understanding techniques and employ machine learning algorithms to comprehend and respond to user queries accurately. These systems can be customized for internal knowledge bases, customer support portals, or self-service platforms.",
   "img": QASystem,
},
{
   "title": "Document Summarizer",
   "desc": "We offer Optical Character Recognition (OCR) solutions that transform paper-based documents into digital assets. Our OCR technology accurately extracts text from images or scanned documents, enabling efficient data processing and searchability. Whether its's digitizing invoices, extracting data from forms, or automating data entry processes, our OCR solutions improve productivity and eliminate manual effort.",
   "img": DOC,
},
{
   "title": "OCR Solutions",
   "desc": "We offer Optical Character Recognition (OCR) solutions that transform paper-based documents into digital assets. Our OCR technology accurately extracts text from images or scanned documents, enabling efficient data processing and searchability. Whether its's digitizing invoices, extracting data from forms, or automating data entry processes, our OCR solutions improve productivity and eliminate manual effort.",
   "img": OCR,
}
]

export default function Services(props) {
   return (
      <>
      <div className='container'>
         <div className='m-4 grid grid-cols-1 place-items-center'>
            <h1 className="text-[#FA5119] text-4xl mt-32 font-extrabold m-20">Services</h1>
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