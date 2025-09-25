"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-white p-3 rounded-xl grid grid-cols-5 gap-x-2 fixed bottom-0 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] left-1/2 transform -translate-x-1/2 w-full">
      <Link href={"/"} className="flex flex-col items-center">
        <Image
          src={`${pathname === "/" ? "/house-yellow.png" : "/house.png"}`}
          alt=""
          width={25}
          height={25}
        />
        <p className="text-xs mt-1 font-semibold text-blue-dark text-center">
          Accueil
        </p>
      </Link>

      <Link href={"/appointments"} className="flex flex-col items-center">
        <Image
          src={`${
            pathname === "/appointments"
              ? "/calendar-day-yellow.png"
              : "/calendar-day.png"
          }`}
          alt=""
          width={25}
          height={25}
        />
        <p className="text-xs mt-1 font-semibold text-blue-dark text-center">
          Rendez-vous
        </p>
      </Link>
      <Link href={"/"} className="flex flex-col items-center">
        <Image src={`/heart.png`} alt="" width={25} height={25} />
        <p className="text-xs mt-1 font-semibold text-blue-dark text-center">
          Santé
        </p>
      </Link>
      <Link href={"/"} className="flex flex-col items-center">
        <Image src={`/envelope.png`} alt="" width={25} height={25} />
        <p className="text-xs mt-1 font-semibold text-blue-dark text-center">
          Messages
        </p>
      </Link>
      <Link href={"/"} className="flex flex-col items-center">
        <Image src={`/user-gear.png`} alt="" width={25} height={25} />
        <p className="text-xs mt-1 font-semibold text-blue-dark text-center">
          Compte
        </p>
      </Link>
    </nav>
  );
};

export default Navbar;
