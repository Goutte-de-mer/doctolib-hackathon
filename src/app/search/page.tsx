import HistoryCard from "@/components/HistortyCard";
import SearchBar from "@/components/SearchBar";
import historyData from "@/data/histories.json";

export default function Page() {
  return (
    <main className=" flex flex-col items-center  gap-5">
      <SearchBar autoFocus />

      <div className=" flex flex-col gap-4 w-full">
        <h1 className=" text-blue-dark">Historique</h1>

        <div className=" flex flex-col gap-4 w-full">
          {historyData.map((his, index) => (
            <HistoryCard
              key={index}
              name={his.name}
              city={his.city}
              speciality={his.speciality}
              image={his.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
