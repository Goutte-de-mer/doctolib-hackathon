import Image from "next/image";
interface Doctor {
  image: string;
  name: string;
  specialty: string;
  address: string;
  phone: string;
  availability: string[];
  acceptsNewPatients: boolean;
}

const SearchResult = ({
  image,
  name,
  specialty,
  address,
  phone,
  availability,
  acceptsNewPatients,
}: Doctor) => {
  return (
    <div className="bg-white shadow-md rounded-xl px-5 py-4 w-full max-w-sm">
      <div className="flex gap-x-3 items-center">
        <Image
          src={image}
          alt="docteur"
          width={70}
          height={70}
          className="rounded-full h-15 w-15 object-cover"
        />
        <div className="">
          <p className="font-primary-light-blue font-semibold">{name}</p>
          <p className="flex gap-x-3 items-center">
            <Image
              src={"/stethoscope.png"}
              alt="icone stethoscope"
              width={70}
              height={70}
              className=" w-6"
            />{" "}
            {specialty}
          </p>
        </div>
      </div>
      <div className="space-y-2.5">
        <div className="flex gap-x-3 items-center mt-3.5">
          <Image
            src={"/location-dot.png"}
            alt="icone pin"
            width={70}
            height={70}
            className="w-6"
          />{" "}
          {address}
        </div>
        <div className="flex gap-x-3 items-center">
          <Image
            src={"/phone.png"}
            alt="icone tel"
            width={70}
            height={70}
            className="w-6"
          />
          {phone}
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
