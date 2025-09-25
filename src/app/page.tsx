import DoctorCard from "@/components/DoctorCard";
import SearchBar from "@/components/SearchBar";
import doctorsData from "@/data/doctors.json";

export default function Home() {
  const lastThreeDoctors = doctorsData.slice(-3);

  return (
    <main className="flex flex-col min-h-screen  items-center gap-8 py-9 ">
      <h1 className="big-title text-center">
        Bienvenue Caroline, <br />
        ravi de vous revoir ! <br /> <br /> Vous allez bien aujourd’hui ?
      </h1>

      <SearchBar />

      <div className=" grid grid-cols-2 gap-4">
        <div
          className=" p-4 rounded-2xl shadow flex flex-col justify-center items-center  "
          style={{ background: "linear-gradient(to bottom, #FFCD4D, #FFECB2)" }}
        >
          <h1 className="md-title text-center ">Prenez un rendez-vous</h1>
          <img className=" w-44" src="images/calendrier.png" />
        </div>

        <div
          className=" p-4 rounded-2xl shadow flex flex-col justify-center items-center  "
          style={{ background: "linear-gradient(to bottom, #107ACA, #5AB0F2)" }}
        >
          <h1 className="md-title text-center  text-white">
            Voici vos documents
          </h1>
          <img className=" w-44" src="images/docs.png" />
        </div>

        <div
          className=" p-4 rounded-2xl shadow flex flex-col justify-center items-center  "
          style={{ background: "linear-gradient(to bottom, #00BFFF, #75DDFF)" }}
        >
          <h1 className="md-title text-center text-white">
            Rentrez vos données de santé
          </h1>
          <img className=" w-44" src="images/data.png" />
        </div>

        <div
          className=" p-4 rounded-2xl shadow flex flex-col justify-center items-center  "
          style={{ background: "linear-gradient(to bottom, #FF4773, #FF99A1)" }}
        >
          <h1 className="md-title text-center ">
            Retrouvez vos rappels de traitements{" "}
          </h1>
          <img className=" w-44" src="images/medicament.png" />
        </div>
      </div>

      <div className=" flex flex-col items-start w-full">
        <h1 className="big-title text-center text-blue-dark">
          Vos prochains rendez-vous
        </h1>
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
              speciality={doc.speciality}
            />
          ))}

          <a href="#" className="blue-button">
            {" "}
            VOIR PLUS{" "}
          </a>
        </div>
      </div>
    </main>
  );
}
