import React from "react";
import { ProfilOptionProps } from "@/types/ProfilOption.types";
  const  ProfilOption: React.FC<ProfilOptionProps> = ({ image, title }) => {


    return( <div className="bg-gray-light p-4  flex justify-between  items-center rounded-2xl ">

        <div className=" flex gap-4  items-center">        <img src={image} className="  w-16 " /> 
        <p className="text-blue-dark font-bold">{title}</p>
        
        </div>




        <a href="">
            <img className=" w-8 h-8" src="/images/icons/next.png" alt="next" />

        </a>
        

    </div>)


}


export default ProfilOption