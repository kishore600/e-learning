import React from 'react'


function CardProducts(props) {
  let {title,desc,img} = props;
  return (
    <div className='container rounded-lg grid grid-cols-3 mt-10 '>
        <div className='text-[#FA5119] p-2 grid grid-row-2 justify-self-center'>
            <h2 className='font-bold  text-lg justify-self-center '>{title}</h2>
            <img src={img} alt="" className="m-7" />
        </div>
       
        <div className='col-span-2 m-20'>
            <p className=' text-xl text-gray font-bold text-justify leading-10'>{desc}</p>
        </div>
    </div>
  )
}

export default CardProducts