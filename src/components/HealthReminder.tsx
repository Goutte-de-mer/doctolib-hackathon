import { HealthReminderProps } from "@/types/HealthReminder";
import Image from "next/image";
const HealthReminder = ({ image, title, description }: HealthReminderProps) => {
  return (
    <div className="bg-gray-light  flex flex-col gap-4 px-3 py-4 rounded-2xl ">
      <div className=" flex gap-4">
        <Image
          alt="docteur"
          width={70}
          height={70}
          className="w-12 h-12 rounded-full object-cover"
          src={image}
        />

        <div className=" flex flex-col">
          <p className=" text-brand font-bold text-sm">{title}</p>
          <p className=" text-sm">{description}</p>
        </div>

        <Image
          width={70}
          height={70}
          className=" w-8 h-8"
          src="/images/icons/next.png"
          alt="next"
        />
      </div>

      <button className="w-full bg-white rounded-xl text-sm py-3 px-4 flex items-center justify-center gap-3">
        <Image
          width={70}
          height={70}
          src="/images/icons/agenda.png"
          alt="agenda"
          className="w-8"
        />
        Prendre rendez-vous{" "}
      </button>
    </div>
  );
};

export default HealthReminder;
