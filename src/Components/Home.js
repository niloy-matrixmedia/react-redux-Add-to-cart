import React from 'react'

const Home = (props) => {
    console.log(props.data,'home');
  return (
    <div>
           <div className='cart-wrapper item'>
            <span className='cart'>{props.data.length}</span>
                <img src='https://previews.123rf.com/images/val2014/val20141603/val2014160300005/54302312-shopping-cart-icon.jpg'/>
            </div>
       
        <h1>hello tehre....</h1>
        <div>
            <div className='img-wrapper item'>
                <img src='https://boip.in/61105-thickbox_default/oneplus-9-pro-12gb-256gb-refurbished-very-good.jpg'/>
            </div>
            <div className='text-wrapper item'>
                <span>One-plus 9</span>
                <span>price:55000</span>
            </div>
            <div className='text-wrapper item'>
                <button onClick={()=>props.addToCartHandeler({price:55000,name:'one plus 9'})}>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}
export default Home