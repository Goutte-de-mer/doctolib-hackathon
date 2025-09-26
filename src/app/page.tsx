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
    <main className="flex flex-col min-h-screen  items-center gap-12 pt-9 ">
      <h1 className="big-title text-center text-blue-dark">
        Mon <span className="text-primary-light-blue">compagnon</span> de santé
      </h1>

      <Link
        href={"/search"}
        className=" flex bg-white rounded-xl py-3 px-4 w-full gap-4 shadow-md"
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
          className="flex-1 blue-text focus-visible:outline-none placeholder:text-sm"
          placeholder="Cherchez un médecin, un soin..."
        />
      </Link>

      <div className=" flex flex-col items-start w-full">
        <h1 className="text-xl font-bold text-center text-blue-dark mb-3.5">
          Mon prochain rendez-vous
        </h1>
        <AppointmentItem {...nextAppointment} />
      </div>

      <div className=" grid grid-cols-2 xxs:grid-cols-3 gap-4">
        <div className=" p-3 rounded-2xl shadow flex flex-col justify-center items-center bg-gradient-to-bl from-[#107ACA] to-[#5AB0F2]">
          <h1 className="md-title text-center text-white">Mes documents</h1>
          <Image
            alt="icone"
            width={70}
            height={70}
            className="w-20"
            src="/images/docs.png"
          />
        </div>

        <div className=" p-3 rounded-2xl shadow flex flex-col justify-center items-center bg-gradient-to-bl from-[#00BFFF] to-[#75DDFF]">
          <h1 className="md-title text-center text-white">
            Mes données de santé
          </h1>
          <Image
            alt="icone"
            width={70}
            height={70}
            className=" w-20"
            src="/images/data.png"
          />
        </div>

        <div className=" p-3 rounded-2xl shadow flex flex-col justify-center items-center bg-gradient-to-bl from-[#FF4773] to-[#FF99A1] col-span-2 xxs:col-span-1">
          <h1 className="md-title text-center text-blue-dark">
            Mes rappels de traitements{" "}
          </h1>
          <Image
            alt="icone"
            width={70}
            height={70}
            className="w-20"
            src="/images/medicament.png"
          />
        </div>
      </div>

      <div className=" flex flex-col items-start w-full gap-5">
        <h1 className="text-xl font-bold text-center text-blue-dark">
          Mes soignants les plus vus
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
            voir plus
          </Link>
        </div>
      </div>
    </main>
  );
}
