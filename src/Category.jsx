import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { MdFreeBreakfast, MdOutlineFoodBank } from "react-icons/md";
import { CiBowlNoodles } from 'react-icons/ci';
import { TbSoup } from 'react-icons/tb';
import { GiFullPizza, GiHamburger } from 'react-icons/gi';

export const categories=[
    {
        id:1,
        name:"All",
        icon:<PiStarFourFill  className="w-[40px] h-[40px] text-[#81746D] " />
    },
       {
        id:2,
        name:"breakfast",
        icon:<MdFreeBreakfast className="w-[40px] h-[40px] text-[#81746D]" />
    },
       {
        id:3,
        name:"soups",
        icon:<TbSoup className="w-[40px] h-[40px] text-[#81746D]" />
    },
       {
        id:4,
        name:"pasta",
        icon:<CiBowlNoodles className="w-[40px] h-[40px] text-[#81746D]" />
    },
       {
        id:5,
        name:"main_course",
        icon:<MdOutlineFoodBank className="w-[40px] h-[40px] text-[#81746D]" />
    },
       {
        id:6,
        name:"pizza",
        icon:<GiFullPizza className="w-[40px] h-[40px] text-[#81746D]" />
    },
       {
        id:7,
        name:"burger",
        icon:<GiHamburger className="w-[40px] h-[40px] text-[#81746D]" />
    }
]