
// import React from 'react'
// import { FaPlus, FaMinus } from 'react-icons/fa'
// import { MdDeleteOutline } from 'react-icons/md'
// import image1 from "../assets/image1.avif";
// import { useDispatch } from 'react-redux';
// import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice';
// import { toast } from 'react-toastify';

// export const Card2 = ({name,id,price,image,qty}) => {
//     let dispatch=useDispatch()
//     return (
//         <div className='w-full flex gap-3 sm:gap-4 items-center border-b border-[#eadfd5] pb-5 sm:pb-6 mt-4'>

//             {/* Food Image */}
//             <img
//                 src={image}
//                 alt="Pancake"
//                 className='w-[20%] h-[20%] min-w-[90px] sm:min-w-[90px] object-cover rounded-xl shrink-0 aspect-square md:mt-4'
//             />

//             {/* Food Details */}
//             <div className='flex-1 min-w-0'>

//                 <h3 className='text-base sm:text-3xl md:text-4xl font-serif font-bold text-[#3D2925] break-words'>
//                     {name}
//                 </h3>

//                 <p className='text-[#CC5B38] font-bold text-base sm:text-xl mt-2'>
//                     Price: ₹{price}
//                 </p>

//                 {/* Quantity */}
//                 <div className='flex items-center gap-4 sm:gap-5 mt-3 border border-[#eadfd5] rounded-lg w-fit px-3 sm:px-4 py-2.5'>

//                     <FaMinus className='text-[#3D2925] text-lg cursor-pointer' onClick={()=>{
//                         qty>1?dispatch(DecrementQty(id)):1
//                     }} />

//                     <span className='text-lg sm:text-xl font-semibold'>
//                         {qty}
//                     </span>

//                     <FaPlus className='text-[#CC5B38] text-lg cursor-pointer'onClick={()=>{
//                         dispatch(IncrementQty(id))
//                     }} />

//                 </div>

//             </div>

//             {/* Delete Icon */}
//             <MdDeleteOutline className='text-[#927D70] text-xl sm:text-5xl cursor-pointer self-start shrink-0' onClick={() => {
//         dispatch(RemoveItem(id))
//         toast.error(`${name} removed from cart!`, {
//             position: "top-right",
//             autoClose: 2000,
//             theme: "light"
//         })
//     }} />

//         </div>
//     )
// }


import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { DecrementQty, IncrementQty, RemoveItem } from '../redux/cartSlice'
import { toast } from 'react-toastify'

export const Card2 = ({ name, id, price, image, qty }) => {

    let dispatch = useDispatch()

    return (

        <div className='w-full flex gap-3 items-center border-b border-[#eadfd5] pb-4 mt-4'>

            {/* Food Image */}
            <img
                src={image}
                alt={name}
                className='w-[75px] h-[75px] object-cover rounded-lg shrink-0'
            />

            {/* Food Details */}
            <div className='flex-1 min-w-0'>

                <h3 className='text-base font-serif font-bold text-[#3D2925] break-words'>
                    {name}
                </h3>

                <p className='text-[#CC5B38] font-bold text-sm mt-1'>
                    Price: ₹{price}
                </p>

                {/* Quantity */}
                <div className='flex items-center gap-3 mt-2 border border-[#eadfd5] rounded-lg w-fit px-2 py-1.5'>

                    <FaMinus
                        className='text-[#3D2925] text-xs cursor-pointer'
                        onClick={() => {
                            qty > 1 ? dispatch(DecrementQty(id)) : 1
                        }}
                    />

                    <span className='text-sm font-semibold'>
                        {qty}
                    </span>

                    <FaPlus
                        className='text-[#CC5B38] text-xs cursor-pointer'
                        onClick={() => {
                            dispatch(IncrementQty(id))
                        }}
                    />

                </div>

            </div>

            {/* Delete Icon */}
            <MdDeleteOutline
                className='text-[#927D70] text-xl cursor-pointer self-start shrink-0'
                onClick={() => {
                    dispatch(RemoveItem(id))

                    toast.error(`${name} removed from cart!`, {
                        position: "top-right",
                        autoClose: 2000,
                        theme: "light"
                    })
                }}
            />

        </div>

    )
}
