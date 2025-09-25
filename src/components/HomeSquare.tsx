import HomeSquareProps from "@/types/homeSquareProps";
const HomeSquare = ({ title, image, bg }: HomeSquareProps) => {
  return (
    <div className={`rounded-xl`}>
      <h1 className="md-title text-center ">{title}</h1>
      <img className="w-40" src={image} />
    </div>
  );
};

export default HomeSquare;
// background: "linear-gradient(to bottom, #FFCD4D, #FFECB2)"
