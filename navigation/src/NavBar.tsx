
import { IoLogoAppleAr } from "react-icons/io5";
import { links } from "./data";
import './App.css';


const NavBar = () => {
  return (
    <nav className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-[60px] w-full pl-4 pr-4 flex items-center justify-between">
      <div>
        <IoLogoAppleAr />
      </div>
      <div className="flex space-x-4">
        {links.map((items: { text: any; link: any; }) => {
        
          const { text, link } = items;
          return (
            <div key={text}>
              <a
                className="block hover:bg-blue-500 hover:text-white px-2 py-1 rounded-md"
                href={link}
              >
                {text}
              </a>
            </div>
          );
        })}

      </div>
      <div>
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#fff] hover:text-black">Sign in</button>

      </div>
    </nav>
  );
}

export default NavBar;