import React from "react";
import { DoctorCardProps } from "@/types/DoctorCard.types";

const DoctorCard: React.FC<DoctorCardProps> = ({ image, name, speciality }) => {
  return (
    <div className="p-3 bg-white   rounded-2xl shadow  flex w-full  gap-5  items-center ">
      <img src={image} alt={name} className=" rounded-full w-14 h-14 " />
      <div className=" flex flex-col ">
        <h1 className=" font-bold">{name}</h1>
        <p>{speciality}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
