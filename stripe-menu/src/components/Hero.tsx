import { useGlobalContext } from "../context";

const Hero = () => {
  const data = useGlobalContext();
  console.log("from hero", data)
  return <h1 className="text-3xl font-bold underline">Hero</h1>;
}


export default Hero;