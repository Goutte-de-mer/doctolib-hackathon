import Image from "next/image";
import AppointmentProps from "@/types/appointmentProps";
import { convertDate } from "@/utils/convertDate";

const AppointmentItem = ({
  date,
  doctorName,
  doctorSpecialty,
  appointmentType,
  patientName,
}: AppointmentProps) => {
  const appointmentDate = new Date(date);
  const now = new Date();

  return (
    <div className="bg-white rounded-2xl overflow-hidden w-full">
      <div
        className={`flex gap-7 text-white px-3 py-2.5 bg-gradient-to-tr ${
          appointmentDate < now
            ? "from-[#5AB0F2] to-brand"
            : "from-[#FFECB2] to-[#FFCD4D]"
        }`}
      >
        <div className="flex items-center gap-2">
          <Image
            src={"/calendar-day.png"}
            alt="calendrier icone"
            width={70}
            height={70}
            className="w-7"
          />
          <p className="text-sm">{convertDate(date).date}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={"/clock.png"}
            alt="horloge icone"
            width={70}
            height={70}
            className="w-7"
          />
          <p className="text-sm">{convertDate(date).time}</p>
        </div>
      </div>
      <div className="p-3 space-y-3">
        <div className="flex items-center gap-6">
          <Image
            src={"/doctor_04.png"}
            alt="horloge icone"
            width={50}
            height={50}
            className="rounded-full w-12 h-12 object-cover"
          />
          <p>
            <span className="font-semibold">{doctorName}</span>
            <br />
            <span>{doctorSpecialty}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src={"/stethoscope.png"}
            alt="stethoscope icone"
            width={70}
            height={70}
            className="w-7"
          />
          <p>{appointmentType}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-3 border-t-2 border-black/20 py-2.5">
        <Image
          src={"/user.png"}
          alt="utilisateur icone"
          width={70}
          height={70}
          className="w-7"
        />
        <p>{patientName}</p>
      </div>
    </div>
  );
};

export default AppointmentItem;
