import { HistoryCardProps } from "@/types/HistoryCard";
import Image from "next/image";

const HistoryCard = ({ image, name, specialty, city }: HistoryCardProps) => {
  return (
    <div className="p-3 bg-gray-light rounded-2xl shadow flex w-full gap-5 items-center">
      <Image
        src={image}
        alt={name}
        width={50}
        height={50}
        className="rounded-full w-14 h-14 object-cover"
      />

      <div className="flex flex-col w-full">
        <h1 className="font-bold sm:text-xl text-sm truncate text-brand">
          {name}
        </h1>
        <p className="sm:text-lg text-sm truncate">{specialty}</p>

        <p className="sm:text-lg text-sm truncate">{city}</p>
      </div>
    </div>
  );
};

export default HistoryCard;
