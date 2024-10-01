import React from 'react'
import { Link } from 'react-router-dom'
const images =[
    {
        imageSrc:require("../../assets/images/books/budget.png"),
        name:"Da Vinci Code",
         path:"/basics"
    },
    {
        imageSrc:require("../../assets/images/books/analysis.png"),
         name:"Basics of technical Analysis",
         path:"/basics"
    },
    {
        imageSrc:require("../../assets/images/books/book1.png"),
         name:"Angels and Demons",
         path:"/basics"
    },
    {
        imageSrc:require("../../assets/images/books/butch.png"),
         name:"TFIOS",
         path:"/basics"
    },
    {
        imageSrc:require("../../assets/images/books/blueprint.jpg"),
         name:"The Budgeting Blueprint",
         path:"/budgetBlue"
    },
    {
        imageSrc:require("../../assets/images/books/guide2.png"),
         name:"Kite Runner",
         path:"/basics"
    },
    {
        imageSrc:require("../../assets/images/books/guide3.png"),
         name:"Castle in sky",
         path:"/basics"
    },
    {
        imageSrc:require("../../assets/images/books/guide1.png"),
         name:"Immortals of Meluha",
         path:"/basics"
    },
]

const Budgetings = () => {
  return (
    <div className='p-[5%]'>
    <h1 className="finwise-blue text-5xl md:text-5xl font-bold mb-[8%] text-center">Budgeting</h1>
   
    <div className='grid grid-cols-4 gap-[-10%] px-[8%]'>
       
        {images.map((image, index) => (
            <div key={index} className="m-0 p-0">
                <Link to={image.path}>
                <img
                    src={image.imageSrc}
                    alt={`Book ${index}`}
                    className="w-[100%] h-[100%] mt-[-20%] m-0"
                />
                </Link>
                <h2 className='font-bold mt-[8%] mb-[4%] text-sm text-center  text-black'>{image.name}</h2>
            </div>
        ))}
        
    </div>
    
</div>

  )
}

export default Budgetings