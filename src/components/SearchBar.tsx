import Image from "next/image";
export default function SearchBar() {
  return (
    <div className=" flex bg-white rounded-2xl py-4 px-5 w-full gap-4">
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
    </div>
  );
}
