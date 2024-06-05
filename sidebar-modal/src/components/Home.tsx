import React, { useContext } from "react";
import { AppContext } from "./context.tsx";
import { FaBars } from "react-icons/fa";

const Home = () => {
  const data = useContext(AppContext);
  console.log(data);
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars />
      </button>
      <button className="btn">
        show modal
      </button>
    </main>
  );
};

export default Home;
