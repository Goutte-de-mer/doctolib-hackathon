import { DoctorCardProps } from "@/types/DoctorCard";
import Image from "next/image";

const DoctorCard = ({ image, name, specialty }: DoctorCardProps) => {
  return (
    <div className="p-3 bg-white   rounded-2xl shadow  flex w-full  gap-5  items-center ">
      <Image
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-full w-14 h-14 object-cover"
      />
      <div className=" flex flex-col ">
        <h1 className=" font-bold">{name}</h1>
        <p>{specialty}</p>
      </div>
    </div>
  );
};

export default DoctorCard;
