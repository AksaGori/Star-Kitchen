// import React from 'react'
// import { LuLeafyGreen } from 'react-icons/lu'
// import { GiChickenOven } from 'react-icons/gi'
// import { useDispatch } from 'react-redux'
// import { AddItem } from '../redux/cartSlice'
// import { toast } from 'react-toastify'

// export const Card = ({ name, image, id, price, type }) => {
//   let dispatch=useDispatch()
//   return (
//     <div className='w-full min-w-0 h-auto lg:w-[650px] lg:h-[780px] bg-white p-2 lg:p-3 rounded-[25px] lg:rounded-[35px] border border-[#eadfd5] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-3 mb-4 lg:mb-10 lg:ml-10 lg:mr-10 ease-in-out hover:-translate-y-1'>

//       {/* Food Image */}
//       <div className='w-full h-[200px] sm:h-[250px] lg:h-[450px] shrink-0 overflow-hidden rounded-[18px] relative'>

//         <img
//           src={image}
//           alt={name}
//           className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
//         />

//         {/* Veg / Non-Veg Badge */}
//         <div className='absolute top-3 left-3 bg-white px-2 lg:px-3 py-1 rounded-full flex items-center gap-2 shadow-md'>

//           {type === "veg" ?
//             <LuLeafyGreen className='text-green-600 text-sm lg:text-xl' /> :
//             <GiChickenOven className='text-orange-600 text-sm lg:text-xl' />
//           }

//           <span className='text-xs lg:text-xl font-bold text-[#3D2925] uppercase'>
//             {type}
//           </span>
//         </div>
//       </div>

//       {/* Food Name */}
//       <div className='text-xl sm:text-2xl lg:text-4xl font-serif font-bold text-[#3D2925] px-2 pt-2 lg:pt-6'>
//         {name}
//       </div>

//       {/* Price */}
//       <div className='text-xl sm:text-2xl lg:text-4xl font-bold text-[#D45B36] px-2 pt-2 lg:pt-9'>
//         ₹{price}
//       </div>

//       {/* Add to Cart Button */}
//       <button className='w-full p-3 lg:p-6 bg-[#CC5B38] text-white font-semibold rounded-xl hover:bg-[#B94C2D] transition-all duration-300 text-lg sm:text-xl lg:text-4xl mt-2 lg:mt-5 cursor-pointer' onClick={()=>{dispatch(AddItem({id:id, name:name, price:price, image:image,qty:1}));
//     toast.success("Item added!")}
//     } >
//         Add to Cart
//       </button>

//     </div>
//   )
// }


import React from 'react'
import { LuLeafyGreen } from 'react-icons/lu'
import { GiChickenOven } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { AddItem } from '../redux/cartSlice'
import { toast } from 'react-toastify'

export const Card = ({ name, image, id, price, type }) => {

    let dispatch = useDispatch()

    return (

        <div className='w-full min-w-0 bg-white p-2 rounded-[18px] border border-[#eadfd5] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-2 ease-in-out hover:-translate-y-1'>

            {/* Food Image */}
            <div className='w-full h-[200px] sm:h-[200px] lg:h-[240px] shrink-0 overflow-hidden rounded-[12px] relative'>

                <img
                    src={image}
                    alt={name}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-500'
                />

                {/* Veg / Non-Veg Badge */}
                <div className='absolute top-2 left-2 bg-white px-2 py-1 rounded-full flex items-center gap-1 shadow-md'>

                    {type === "veg" ?
                        <LuLeafyGreen className='text-green-600 text-sm' /> :
                        <GiChickenOven className='text-orange-600 text-sm' />
                    }

                    <span className='text-[11px] font-bold text-[#3D2925] uppercase'>
                        {type}
                    </span>

                </div>

            </div>

            {/* Food Name */}
            <div className='text-lg sm:text-lg font-serif font-bold text-[#3D2925] px-1 pt-2 min-h-[32px]'>
                {name}
            </div>

            {/* Price */}
            <div className='text-lg font-bold text-[#D45B36] px-1 pt-1'>
                ₹{price}
            </div>

            {/* Add to Cart Button */}
            <button
                className='w-full py-3 bg-[#CC5B38] text-white font-semibold rounded-lg hover:bg-[#B94C2D] transition-all duration-300 text-base mt-1 cursor-pointer'
                onClick={() => {
                    dispatch(AddItem({
                        id: id,
                        name: name,
                        price: price,
                        image: image,
                        qty: 1
                    }))
                    toast.success("Item added!")
                }}
            >
                Add to Cart
            </button>

        </div>

    )
}

