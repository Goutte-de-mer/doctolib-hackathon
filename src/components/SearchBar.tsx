"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type Props = {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  autoFocus?: boolean;
};

export default function SearchBar({
  searchQuery,
  setSearchQuery,
  autoFocus = false,
}: Props) {
  // const [searchQuery, setSearchQuery] = useState<string>("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     const trimmed = searchQuery.trim();

  //     if (trimmed) {
  //       router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  //     }
  //   }
  // };

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
        ref={inputRef}
        type="text"
        className="flex-1 blue-text focus-visible:outline-none"
        placeholder="Cherchez un médecin, un soin, un établissement de santé ..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        // onKeyDown={handleKeyDown}
      />
    </div>
  );
}
