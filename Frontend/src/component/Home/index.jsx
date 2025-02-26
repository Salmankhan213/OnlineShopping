import React from 'react'
import "./home.css"
import { addtocart} from "../../features/product/CartSlice"
import { useDispatch } from 'react-redux';


function Home() {
  const Productdata = [
      {
          id :1,
          name:'Krunch Burger',
          desc:'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
          img:'/Prod1.png',
          price:250
      },
      {
          id :2,
          name:'Hot Wings Bucket',
          desc:'10 Pcs of our Signature Hot & Crispy Wings',
          img:'/Prod2.png',
          price:600
      },
      {
          id :3,
          name:'Krunch Combo',
          desc:'1 Krunch burger + 1 Regular fries + 1 Regular drink',
          img:'/Prod3.png',
          price:550
      },
      {
          id :3,
          name:'Krunch Combo',
          desc:'1 Krunch burger + 1 Regular fries + 1 Regular drink',
          img:'/Prod3.png',
          price:550
      },
      {
          id :3,
          name:'Krunch Combo',
          desc:'1 Krunch burger + 1 Regular fries + 1 Regular drink',
          img:'/Prod4.png',
          price:550
      },
     
  ]
  

  const handleaddtocard = (product)=>{
      dispatch(addtocart(product))
  }
 
  const dispatch = useDispatch()


  return (
     <div className="home-container">
       <h1>New Arrivals</h1>
       <div className="products">
        {Productdata?.map((product)=> <div key={product.id} className='product'>
          <h2>{product.name}</h2>
          <img src={product.img} alt={product.name}/>
          <div className="detail">
            <span className='mt-2 mb-5'>{product.desc}</span>
            <h4>PKR-{product.price}</h4>
            
          </div>
          <button className='btn btn-danger' onClick={()=>handleaddtocard(product)} >Add to cart</button>
          
        </div>
        )}
       </div>    
     </div>
  )
}

export default Home