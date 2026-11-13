// import React, { useContext, useEffect } from 'react'
// import { IoSearch } from "react-icons/io5";
// import { MdFastfood, MdOutlineShoppingBag } from "react-icons/md";
// import { dataContext } from '../context/UserContext';
// import { food_items } from '../food';
// import { useSelector } from 'react-redux';

// export const Nav = () => {
//     let {input,setInput,cate,setCate,showCart,setShowCart}=useContext(dataContext)
//     useEffect(()=>{
//         let newlist=food_items.filter((item)=>item.food_name.includes(input)||item.food_name.toLowerCase().includes(input))
//         setCate(newlist)
//     },[input])
//       let items=useSelector(state=>state.cart)
//       console.log(items);
      
//     return (
//         <div className='w-full min-h-[200px] flex flex-wrap justify-between items-center gap-4 px-2 sm:px-4 md:px-8 pt-5 md:pt-10 pb-5 md:border-3 md:border-[#f2f0f0c1] pl-5 pr-5 '>

//             {/* Logo */}
//             <div className='flex gap-3 ml-0 md:ml-[5%] items-center'>
//                 <div className='w-[55px] h-[55px] md:w-[80px] md:h-[80px] bg-[#3D2925] text-white flex justify-center items-center rounded-xl shadow-xl mt-0 md:mt-5 ml-0 md:ml-10 shrink-0'>
//                     <MdFastfood className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]' />
//                 </div>

//                 <div className='mt-0 md:mt-5 ml-0 md:ml-2'>
//                     <p className='text-[#3D2925] text-[35px] md:text-[50px] font-serif m-0 leading-none'>
//                         <b>Star</b>
//                     </p>
//                     <p className='text-orange-600 text-[20px] md:text-[25px] font-mono m-0 leading-none'>
//                         Kitchen
//                     </p>
//                 </div>
//             </div>

//             {/* Search Bar */}
//             <form className='order-3 md:order-none w-full md:w-[50%] h-[55px] md:h-[80px] bg-white flex items-center px-4 md:px-5 gap-3 md:gap-5 rounded-xl border-2 border-[#f2f0f0c1] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl' onSubmit={(e)=>e.preventDefault()}>
//                 <IoSearch className='text-orange-600 w-[25px] h-[25px] md:w-[30px] md:h-[30px] shrink-0' />

//                 <input
//                     type='text'
//                     placeholder='Search Item....'
//                     onChange={(e)=>setInput(e.target.value)}
//                     value={input}
//                     className='w-full min-w-0 outline-none text-[18px] md:text-[30px]'
//                 />
//             </form>

//             {/* Shopping Bag */}
//             <div className='w-[55px] h-[55px] md:w-[80px] md:h-[80px] bg-white text-orange-700 flex justify-center items-center rounded-xl mr-0 md:mr-[5%] relative transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-xl shrink-0 cursor-pointer' onClick={()=>{setShowCart(true)}}>
//                 <span className='absolute top-1 right-2 md:right-3 font-bold text-[14px] md:text-[18px]'>
//                     {items.length}
//                 </span>

//                 <MdOutlineShoppingBag className='w-[35px] h-[35px] md:w-[50px] md:h-[50px]' />
//             </div>

//         </div>
//     )
// }



import React, { useContext, useEffect } from 'react'
import { IoSearch } from "react-icons/io5";
import { MdFastfood, MdOutlineShoppingBag } from "react-icons/md";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

export const Nav = () => {

    let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext)

    useEffect(() => {
        let newlist = food_items.filter((item) =>
            item.food_name.toLowerCase().includes(input.toLowerCase())
        )
        setCate(newlist)
    }, [input])

    let items = useSelector(state => state.cart)

    return (
        <div className='w-full min-h-[105px] flex flex-wrap justify-between items-center gap-4 px-2 sm:px-4 md:px-8 pt-5 md:pt-5 pb-5 md:border-3 md:border-[#f2f0f0c1] pl-5 pr-5'>

            {/* Logo */}
            <div className='flex gap-2 ml-0 md:ml-[5%] items-center'>
                <div className='w-[45px] h-[45px] md:w-[44px] md:h-[44px] bg-[#3D2925] text-white flex justify-center items-center rounded-lg shadow-xl shrink-0'>
                    <MdFastfood className='w-[25px] h-[25px]' />
                </div>

                <div className='ml-1'>
                    <p className='text-[#3D2925] text-[30px] md:text-[32px] font-serif m-0 leading-none'>
                        <b>Star</b>
                    </p>
                    <p className='text-orange-600 text-[16px] md:text-[14px] font-mono m-0 leading-none'>
                        Kitchen
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <form
                className='order-3 md:order-none w-full md:w-[50%] h-[45px] md:h-[44px] bg-white flex items-center px-3 md:px-3 gap-3 rounded-lg border border-[#f2f0f0c1] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl'
                onSubmit={(e) => e.preventDefault()}
            >
                <IoSearch className='text-orange-600 w-[18px] h-[18px] shrink-0' />

                <input
                    type='text'
                    placeholder='Search Item....'
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    className='w-full min-w-0 outline-none text-[16px] md:text-[16px]'
                />
            </form>

            {/* Shopping Bag */}
            <div
                className='w-[45px] h-[45px] md:w-[44px] md:h-[44px] bg-white text-orange-700 flex justify-center items-center rounded-lg mr-0 md:mr-[5%] relative transition-all duration-300 ease-in-out hover:-translate-y-1 shadow-xl shrink-0 cursor-pointer'
                onClick={() => setShowCart(true)}
            >
                <span className='absolute top-0 right-1 font-bold text-[11px] md:text-[12px]'>
                    {items.length}
                </span>

                <MdOutlineShoppingBag className='w-[27px] h-[27px]' />
            </div>

        </div>
    )
}
