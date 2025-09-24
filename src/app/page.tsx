import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src={"/Doctolib-logo-blue.gif"}
        alt="Doctolib logo gif"
        width={300}
        height={300}
      />
    </main>
  );
}
