import React from "react";
import { HealthReminderProps } from "@/types/HealthReminder.types";
  const  HealthReminder: React.FC<HealthReminderProps> = ({ image, title, description }) => {


    return( <div className= "bg-gray-light  flex flex-col gap-4 p-6 rounded-2xl ">
        <div className=" flex gap-4">
            <img  className=" w-12 h-12  rounded-full" src={image} />

            <div className=" flex flex-col">

                <p className=" text-brand font-bold text-sm">{title}</p>
                <p className=" text-sm">{description}</p>

            </div>


            <img className=" w-8 h-8" src="/images/icons/next.png" alt="next" />






        </div>

        <button  className=" w-full bg-white rounded-2xl  text-sm  p-5 flex items-center justify-center gap-3">
            <img src="images/icons/agenda.png" alt="agenda" className="w-8"/>
            Prendre rendez-vous </button>



    </div>)


}


export default HealthReminder