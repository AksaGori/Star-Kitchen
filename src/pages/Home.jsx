// import React, { useContext, useState } from 'react'
// import { Nav } from '../components/Nav'
// import { categories } from '../Category'
// import { Card } from '../components/Card'
// import { food_items } from '../food'
// import { dataContext } from '../context/UserContext'
// import { ImCross } from 'react-icons/im'
// import { MdOutlineShoppingBag } from 'react-icons/md'
// import { Card2 } from '../components/Card2'
// import { useDispatch, useSelector } from 'react-redux'
// import { ClearCart } from '../redux/cartSlice'
// import { toast } from 'react-toastify'

// export const Home = () => {
//  let {cate,setCate,input,showCart,setShowCart,setInput}=useContext(dataContext)
//   let [selectedCategory, setSelectedCategory] = useState("All")

//   function filter(Category) {
//     setSelectedCategory(Category)

//     if (Category === "All") {
//       setCate(food_items)
//     } else {
//       let newList = food_items.filter((item) =>
//         item.food_category.trim().toLowerCase() === Category.trim().toLowerCase()
//       )
//       setCate(newList)
//     }
//   }

// let items=useSelector(state=>state.cart)
//   let subtotal= items.reduce((total,item)=>total+item.qty*item.price,0)
//   let deliveryFees=20;
//   let Taxes=Math.floor(subtotal*0.5/100);
//   let total=Math.floor(subtotal+deliveryFees+Taxes)
// let dispatch = useDispatch()
//   function handlePlaceOrder() {

//     toast.success("Your order has been placed successfully!")

//     dispatch(ClearCart())
//     setShowCart(false)
//     setInput("")
//     setCate(food_items)
//     setSelectedCategory("All")
// }
//   return (
//     <div className='bg-[#fff9f2] w-full min-h-screen overflow-x-hidden'>

//       <Nav />
//       {!input?<div>
//               <div className='ml-4 mr-4 md:ml-[5%] md:mr-0 mt-[5%] md:mt-[2%]'>
//         <p className='text-orange-600 text-[20px] md:text-[30px] font-mono m-0 leading-none'>
//           Curated for your table
//         </p>

//         <p className='text-[#3D2925] text-[35px] sm:text-[55px] md:text-[90px] font-serif m-0 leading-tight mt-3'>
//           <b>What are you craving?</b>
//         </p>
//       </div>

//       <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-3 mt-10 px-4 md:px-6 lg:px-8'>

//         {categories.map((item) => {
//           return (
//             <div
//               key={item.id}
//               className={`group w-full min-w-0 p-3 rounded-full border-4 transition-all duration-300 flex flex-row items-center justify-center gap-3 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-bold cursor-pointer font-serif
//   ${selectedCategory === item.name
//                   ? 'bg-[#CC5B38] border-[#CC5B38] text-white'
//                   : 'border-[#c2bebec1] text-[#3D2925] hover:bg-[#f1e2d1]'
//                 }`}
//               onClick={() => filter(item.name)}
//             >
//               {React.cloneElement(item.icon, {
//                 className: `${item.icon.props.className} w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] md:w-[35px] md:h-[35px] transition-colors duration-300 shrink-0 ${selectedCategory === item.name
//                     ? 'text-white'
//                     : 'group-hover:text-orange-600'
//                   }`
//               })}

//               <span className="text-center break-words">
//                 {item.name}
//               </span>
//             </div>
//           )
//         })}

//       </div>
//        <div className='flex justify-between items-center mx-4 md:mx-[5%] mt-8 lg:mt-12 mb-6'>

//         <h2 className='text-2xl md:text-3xl font-serif font-bold text-[#3D2925] lg:text-5xl mb-4'>
//           Popular Dishes
//         </h2>

//         <span className='text-sm text-[#927D70]'>
//           {food_items.length} dishes
//         </span>

//       </div>
//       </div>:null};
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 px-4 md:px-[5%] pb-10 items-stretch'>
//       {cate.length>0?cate.map((item) => (
//           <Card
//             key={item.id}
//             name={item.food_name}
//             image={item.food_image}
//             price={item.price}
//             id={item.id}
//             type={item.food_type}
//           />
//         )):<div className='col-span-full min-h-[450px] flex flex-col justify-center items-center text-center px-5'>

//             <h2 className='text-3xl md:text-7xl font-serif font-bold text-[#3D2925] mb-3'>
//                 No dishes found
//             </h2>

//             <p className='text-[#927D70] text-base md:text-2xl mb-7'>
//                 Try another search or explore our menu.
//             </p>

//             <button
//                 className='bg-[#CC5B38] text-white md:text-2xl px-7 py-4 rounded-xl font-bold hover:bg-[#B94C2D] transition-all cursor-pointer'
//                  onClick={() => {
//         setInput("")
//         setCate(food_items)
//         setSelectedCategory("All")
//     }}
//             >
//                 Explore menu
//             </button>

//         </div>}
        

//       </div>

      
// {/* Cart Overlay */}
// {showCart && (
//     <div
//         className='w-full h-full bg-[#00000030] backdrop-blur-sm fixed top-0 left-0 z-40'
//         onClick={() => setShowCart(false)}
//     ></div>
// )}
// {/* Cart Drawer */}
// <div className={`w-[90%] sm:w-[420px] lg:w-[30vw] h-screen bg-white fixed top-0 right-0 z-50 shadow-2xl flex flex-col transition-transform duration-500 transition-all ${showCart ? "translate-x-0" : "translate-x-full"}`}>
//     {/* Header */}
//     <header className='w-full flex justify-between items-center p-5 border-b border-[#eadfd5]'>

//         <div>
//             <h2 className='text-2xl md:text-5xl font-serif font-bold text-[#3D2925]'>
//                 Your Cart
//             </h2>

//             <p className='text-xl text-[#927D70]'>
//                 Ready when you are
//             </p>
//         </div>

//         <ImCross className='w-7 h-7 cursor-pointer text-[#3D2925]' onClick={()=>setShowCart(false)}  />

//     </header>
//    {items.length > 0 ? (

//     <>
//         {/* Cart Items */}
//         <div className='flex-1 min-h-0 flex flex-col p-5'>

//             <div className='flex-1 overflow-y-auto'>
//                 {items.map((item) => (
//                     <Card2
//                         key={item.id}
//                         name={item.name}
//                         price={item.price}
//                         image={item.image}
//                         id={item.id}
//                         qty={item.qty}
//                     />
//                 ))}
//             </div>

//         </div>

//         {/* Total and Place Order - Bottom */}
//         <div className='shrink-0 border-t border-[#eadfd5] p-5 bg-[#fffdfb]'>

//             <div className='flex justify-between mb-3 text-[#927D70] sm:text-3xl'>
//                 <span>Subtotal</span>
//                 <span className='font-semibold text-[#3D2925]'>₹{subtotal}</span>
//             </div>

//             <div className='flex justify-between mb-3 text-[#927D70] sm:text-3xl'>
//                 <span>Delivery fee</span>
//                 <span className='font-semibold text-[#3D2925]'>₹{deliveryFees}</span>
//             </div>

//             <div className='flex justify-between mb-4 text-[#927D70] sm:text-3xl'>
//                 <span>Taxes</span>
//                 <span className='font-semibold text-[#3D2925]'>₹{Taxes}</span>
//             </div>

//             <div className='border-t border-[#eadfd5] pt-4 flex justify-between items-center'>
//                 <span className='text-xl font-serif font-bold text-[#3D2925]  sm:text-3xl'>
//                     Total
//                 </span>

//                 <span className='text-2xl font-bold text-[#CC5B38]  sm:text-3xl'>
//                     ₹{total}
//                 </span>
//             </div>

//             <button className='w-full bg-[#CC5B38] text-white py-4 rounded-xl font-bold mt-5 hover:bg-[#B94C2D]  sm:text-3xl' onClick={handlePlaceOrder}>
//                 Place Order →
//             </button>

//         </div>
//     </>

// ) : (

//     /* Empty Cart - Center */
//     <div className='flex-1 flex flex-col justify-center items-center text-center px-5'>

//         <div className='w-[120px] h-[120px] bg-[#fcece5] rounded-full flex justify-center items-center mb-7'>

//             <MdOutlineShoppingBag className='text-[#CC5B38] w-[55px] h-[55px]' />

//         </div>

//         <h2 className='text-2xl md:text-3xl font-serif font-bold text-[#3D2925] mb-3 md:text-5xl'>
//             Your cart is empty
//         </h2>

//         <p className='text-[#927D70] text-base mb-7 md:text-3xl'>
//             Discover something delicious from our menu.
//         </p>

//         <button className='bg-[#CC5B38] md:text-2xl text-white px-7 py-4 rounded-xl font-bold hover:bg-[#B94C2D] transition-all cursor-pointer'onClick={()=>setShowCart(false)}>
//             Explore Menu
//         </button>

//     </div>

// )}
    
   

   
//     </div>

//     </div>
//   )
// }



import React, { useContext, useState } from 'react'
import { Nav } from '../components/Nav'
import { categories } from '../Category'
import { Card } from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { ImCross } from 'react-icons/im'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { Card2 } from '../components/Card2'
import { useDispatch, useSelector } from 'react-redux'
import { ClearCart } from '../redux/cartSlice'
import { toast } from 'react-toastify'

export const Home = () => {

    let { cate, setCate, input, showCart, setShowCart, setInput } = useContext(dataContext)

    let [selectedCategory, setSelectedCategory] = useState("All")

    function filter(Category) {
        setSelectedCategory(Category)

        if (Category === "All") {
            setCate(food_items)
        } else {
            let newList = food_items.filter((item) =>
                item.food_category.trim().toLowerCase() === Category.trim().toLowerCase()
            )
            setCate(newList)
        }
    }

    let items = useSelector(state => state.cart)

    let subtotal = items.reduce((total, item) => total + item.qty * item.price, 0)
    let deliveryFees = 20
    let Taxes = Math.floor(subtotal * 0.5 / 100)
    let total = Math.floor(subtotal + deliveryFees + Taxes)

    let dispatch = useDispatch()

    function handlePlaceOrder() {

        toast.success("Your order has been placed successfully!")

        dispatch(ClearCart())
        setShowCart(false)
        setInput("")
        setCate(food_items)
        setSelectedCategory("All")
    }

    return (
        <div className='bg-[#fff9f2] w-full min-h-screen overflow-x-hidden'>

            <Nav />

            {/* Hero Section */}
            {!input && (
                <div>

                    <div className='mx-4 md:mx-[5%] mt-6 md:mt-8'>

                        <p className='text-orange-600 text-[16px] md:text-[16px] font-mono m-0 leading-none'>
                            Curated for your table
                        </p>

                        <p className='text-[#3D2925] text-[32px] sm:text-[40px] md:text-[50px] font-serif m-0 leading-tight mt-3'>
                            <b>What are you craving?</b>
                        </p>

                    </div>

                    {/* Categories */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-2 mt-6 px-4 md:px-5'>

                        {categories.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={`group w-full min-w-0 min-h-[38px] px-2 py-2 rounded-full border-2 transition-all duration-300 flex flex-row items-center justify-center gap-2 text-[13px] md:text-[14px] font-bold cursor-pointer font-serif
                                    ${selectedCategory === item.name
                                            ? 'bg-[#CC5B38] border-[#CC5B38] text-white'
                                            : 'border-[#c2bebec1] text-[#3D2925] hover:bg-[#f1e2d1]'
                                        }`}
                                    onClick={() => filter(item.name)}
                                >

                                    {React.cloneElement(item.icon, {
                                        className: `${item.icon.props.className} w-[16px] h-[16px] md:w-[17px] md:h-[17px] transition-colors duration-300 shrink-0 ${selectedCategory === item.name
                                            ? 'text-white'
                                            : 'group-hover:text-orange-600'
                                            }`
                                    })}

                                    <span className='text-center break-words'>
                                        {item.name}
                                    </span>

                                </div>
                            )
                        })}

                    </div>

                    {/* Popular Dishes Heading */}
                    <div className='flex justify-between items-center mx-4 md:mx-[5%] mt-6 mb-5'>

                        <h2 className='text-2xl md:text-[28px] font-serif font-bold text-[#3D2925]'>
                            Popular Dishes
                        </h2>

                        <span className='text-[11px] text-[#927D70]'>
                            {food_items.length} dishes
                        </span>

                    </div>

                </div>
            )}

            {/* Food Cards */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 px-4 md:px-[5%] pb-10 items-stretch'>

                {cate.length > 0 ? cate.map((item) => (

                    <Card
                        key={item.id}
                        name={item.food_name}
                        image={item.food_image}
                        price={item.price}
                        id={item.id}
                        type={item.food_type}
                    />

                )) : (

                    <div className='col-span-full min-h-[350px] flex flex-col justify-center items-center text-center px-5'>

                        <h2 className='text-3xl md:text-5xl font-serif font-bold text-[#3D2925] mb-3'>
                            No dishes found
                        </h2>

                        <p className='text-[#927D70] text-base mb-6'>
                            Try another search or explore our menu.
                        </p>

                        <button
                            className='bg-[#CC5B38] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#B94C2D] transition-all cursor-pointer'
                            onClick={() => {
                                setInput("")
                                setCate(food_items)
                                setSelectedCategory("All")
                            }}
                        >
                            Explore menu
                        </button>

                    </div>

                )}

            </div>

            {/* Cart Overlay */}
            {showCart && (
                <div
                    className='w-full h-full bg-[#00000030] backdrop-blur-sm fixed top-0 left-0 z-40'
                    onClick={() => setShowCart(false)}
                ></div>
            )}

            {/* Cart Drawer */}
            <div className={`w-[90%] sm:w-[380px] md:w-[420px] max-w-full h-screen bg-white fixed top-0 right-0 z-50 shadow-2xl flex flex-col transition-transform duration-500 ${showCart ? "translate-x-0" : "translate-x-full"}`}>

                {/* Cart Header */}
                <header className='w-full flex justify-between items-center p-4 border-b border-[#eadfd5]'>

                    <div>
                        <h2 className='text-2xl font-serif font-bold text-[#3D2925]'>
                            Your Cart
                        </h2>

                        <p className='text-sm text-[#927D70] mt-1'>
                            Ready when you are
                        </p>
                    </div>

                    <ImCross
                        className='w-4 h-4 cursor-pointer text-[#3D2925]'
                        onClick={() => setShowCart(false)}
                    />

                </header>

                {items.length > 0 ? (

                    <>

                        {/* Cart Items */}
                        <div className='flex-1 min-h-0 flex flex-col p-4'>

                            <div className='flex-1 overflow-y-auto'>

                                {items.map((item) => (
                                    <Card2
                                        key={item.id}
                                        name={item.name}
                                        price={item.price}
                                        image={item.image}
                                        id={item.id}
                                        qty={item.qty}
                                    />
                                ))}

                            </div>

                        </div>

                        {/* Cart Total */}
                        <div className='shrink-0 border-t border-[#eadfd5] p-4 bg-[#fffdfb]'>

                            <div className='flex justify-between mb-3 text-sm text-[#927D70]'>
                                <span>Subtotal</span>
                                <span className='font-semibold text-[#3D2925]'>₹{subtotal}</span>
                            </div>

                            <div className='flex justify-between mb-3 text-sm text-[#927D70]'>
                                <span>Delivery fee</span>
                                <span className='font-semibold text-[#3D2925]'>₹{deliveryFees}</span>
                            </div>

                            <div className='flex justify-between mb-3 text-sm text-[#927D70]'>
                                <span>Taxes</span>
                                <span className='font-semibold text-[#3D2925]'>₹{Taxes}</span>
                            </div>

                            <div className='border-t border-[#eadfd5] pt-3 flex justify-between items-center'>

                                <span className='text-lg font-serif font-bold text-[#3D2925]'>
                                    Total
                                </span>

                                <span className='text-xl font-bold text-[#CC5B38]'>
                                    ₹{total}
                                </span>

                            </div>

                            <button
                                className='w-full bg-[#CC5B38] text-white py-3 rounded-xl font-bold mt-4 hover:bg-[#B94C2D] transition-all cursor-pointer'
                                onClick={handlePlaceOrder}
                            >
                                Place Order →
                            </button>

                        </div>

                    </>

                ) : (

                    /* Empty Cart */
                    <div className='flex-1 flex flex-col justify-center items-center text-center px-5'>

                        <div className='w-[85px] h-[85px] bg-[#fcece5] rounded-full flex justify-center items-center mb-5'>

                            <MdOutlineShoppingBag className='text-[#CC5B38] w-[40px] h-[40px]' />

                        </div>

                        <h2 className='text-2xl font-serif font-bold text-[#3D2925] mb-3'>
                            Your cart is empty
                        </h2>

                        <p className='text-[#927D70] text-sm mb-6'>
                            Discover something delicious from our menu.
                        </p>

                        <button
                            className='bg-[#CC5B38] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#B94C2D] transition-all cursor-pointer'
                            onClick={() => setShowCart(false)}
                        >
                            Explore Menu
                        </button>

                    </div>

                )}

            </div>

        </div>
    )
}
