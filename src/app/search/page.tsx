"use client";
import { useState } from "react";
import HistoryCard from "@/components/HistortyCard";
import SearchBar from "@/components/SearchBar";
import historyData from "@/data/histories.json";
import doctors from "@/data/doctors.json";
import SearchResult from "@/components/SearchResult";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const hasSearch = searchQuery.trim() !== "";
  const trimmedQuery = searchQuery.trim().toLowerCase();
  const filteredDoctors = trimmedQuery
    ? doctors.filter(
        (doc) =>
          doc.name.toLocaleLowerCase().includes(trimmedQuery) ||
          doc.specialty.toLocaleLowerCase().includes(trimmedQuery)
      )
    : [];

  return (
    <main className=" flex flex-col items-center  gap-5">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        autoFocus
      />

      {hasSearch && filteredDoctors.length === 0 && <p>Aucun résultat</p>}

      {hasSearch && filteredDoctors.length > 0 ? (
        <div className="w-full">
          <div className="w-full flex justify-between items-center mb-3.5">
            <p>{filteredDoctors.length} résultat(s)</p>
            <p>Afficher la carte</p>
          </div>
          <div className="space-y-4">
            {filteredDoctors.map((doc, i) => (
              <SearchResult {...doc} key={i} />
            ))}
          </div>
        </div>
      ) : (
        <div className=" flex flex-col gap-4 w-full">
          <h1 className=" text-blue-dark">Historique</h1>

          <div className=" flex flex-col gap-4 w-full">
            {historyData.map((his, index) => (
              <HistoryCard
                key={index}
                name={his.name}
                city={his.city}
                specialty={his.specialty}
                image={his.image}
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
