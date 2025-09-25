import Image from "next/image";

const Header = () => {
  return (
    <div className=" flex  justify-between p-4">
      <Image
        src="/images/logo.png"
        width={200}
        height={100}
        alt="logo"
        className="w-32"
      />

      <Image
        src="/images/language.png"
        width={200}
        height={100}
        alt="drapeau"
        className="  w-9 rounded-full"
      />
    </div>
  );
};

export default Header;
