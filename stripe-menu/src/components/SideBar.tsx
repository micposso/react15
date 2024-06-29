import { useGlobalContext } from "../context";

const SideBar = () => {
  const { data } = useGlobalContext();
  console.log("from sidebar", data);
  return <h1>SideBar</h1>;  
};

export default SideBar;
