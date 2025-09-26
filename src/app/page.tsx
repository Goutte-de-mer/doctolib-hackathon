// "use client";
import DoctorCard from "@/components/DoctorCard";
import SearchBar from "@/components/SearchBar";
import doctorsData from "@/data/doctors.json";
import Image from "next/image";
import Link from "next/link";
import appointments from "@/data/appointments.json";
import AppointmentItem from "@/components/AppointmentItem";
// import { useRouter } from "next/navigation";

export default function Home() {
  const lastThreeDoctors = doctorsData.slice(-3);
  const now = new Date();
  // const router = useRouter();

  const futureAppointments = appointments
    .filter((apt) => new Date(apt.date) > now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  4;
  const nextAppointment = futureAppointments[0] || null;

  // const handleClick = () => {
  //   router.push("/search");
  // };

  return (
    <main className="flex flex-col min-h-screen  items-center gap-8 py-9 ">
      <h1 className="big-title text-center">
        Bienvenue Caroline, <br />
        ravi de vous revoir !
      </h1>
      <h2 className="font-bold text-xl">Vous allez bien aujourd’hui ?</h2>

      <Link
        href={"/search"}
        className=" flex bg-white rounded-2xl py-4 px-5 w-full gap-4"
      >
        <Image
          width={60}
          height={60}
          alt="icone loupe"
          src="/images/icons/iconamoon_search.png"
          className="w-6 h-6"
        />

        <input
          type="text"
          className="flex-1 blue-text focus-visible:outline-none"
          placeholder="Cherchez un médecin, un soin, un établissement de santé ..."
        />
      </Link>

      <div className=" grid grid-cols-2 grid-rows-2 gap-4">
        <div className="h-44 p-2 rounded-2xl shadow flex flex-col justify-center items-center bg-gradient-to-bl from-[#FFCD4D] to-[#FFECB2] ">
          <h1 className="md-title text-center text-blue-dark">
            Mes rendez-vous
          </h1>
          <Image
            alt="icone"
            width={70}
            height={70}
            className="w-24"
            src="/images/calendrier.png"
          />
        </div>

        <div className="h-44 p-2 rounded-2xl shadow flex flex-col justify-center items-center bg-gradient-to-bl from-[#107ACA] to-[#5AB0F2]">
          <h1 className="md-title text-center text-white">Mes documents</h1>
          <Image
            alt="icone"
            width={70}
            height={70}
            className="w-24"
            src="/images/docs.png"
          />
        </div>

        <div className="h-44 p-2 rounded-2xl shadow flex flex-col justify-center items-center bg-gradient-to-bl from-[#00BFFF] to-[#75DDFF]">
          <h1 className="md-title text-center text-white">
            Mes données de santé
          </h1>
          <Image
            alt="icone"
            width={70}
            height={70}
            className=" w-24"
            src="/images/data.png"
          />
        </div>

        <div className="h-44 p-2 rounded-2xl shadow flex flex-col justify-center items-center bg-gradient-to-bl from-[#FF4773] to-[#FF99A1]">
          <h1 className="md-title text-center text-blue-dark">
            Mes rappels de traitements{" "}
          </h1>
          <Image
            alt="icone"
            width={70}
            height={70}
            className="w-24"
            src="/images/medicament.png"
          />
        </div>
      </div>

      <div className=" flex flex-col items-start w-full">
        <h1 className="big-title text-center text-blue-dark mb-3.5">
          Vos prochains rendez-vous
        </h1>
        <AppointmentItem color="blue" {...nextAppointment} />
      </div>

      <div className=" flex flex-col items-start w-full gap-5">
        <h1 className="big-title text-center text-blue-dark">
          Vos practiciens les plus vus
        </h1>

        <div className=" w-full flex flex-col items-center gap-3">
          {lastThreeDoctors.map((doc, index) => (
            <DoctorCard
              key={index}
              name={doc.name}
              image={doc.image}
              specialty={doc.specialty}
            />
          ))}

          <Link href="#" className="blue-button">
            {" "}
            VOIR PLUS{" "}
          </Link>
        </div>
      </div>
    </main>
  );
}
