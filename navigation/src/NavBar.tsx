
import { useState, useRef, useEffect } from "react";
// hook that accepts an agument and returns a mutable ref object used for persisting values between renders. No like state that causes re-rendering, useRef does not. useState returns and array with two elements, the current state value and a function that lets you update it. useRef returns a mutable ref object that persists for the full lifetime of the component.

// useEffect is for side effects, it is a hook that lets you perform side effects in your function components. It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount. It is called after every render of the component. It is used to perform data fetching, subscriptions, or manually changing the DOM in React components.
import { IoLogoAppleAr } from "react-icons/io5";
import { links, social } from "./data";
import './App.css';


const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linksRef = useRef(null);

  // function to detect the size of the links container
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linkContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav className="bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-[60px] w-full pl-4 pr-4 flex items-center justify-between">
      <div>
        <IoLogoAppleAr />
      </div>
      <button
        onClick={() => setShowLinks(!showLinks)}
        className="px-3 py-1 bg-[#a6c1ee] text-white rounded hover:bg-blue-500"
      >
        {showLinks ? "Hide Links" : "Show Links"}
      </button>

      {showLinks && (
        <div className="flex space-x-4" ref={linksRef}>
          {links.map((items: { text: any; link: any }) => {
            const { text, link } = items;
            return (
              <div key={text} ref={linkContainerRef}>
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
      )}

      <ul className="flex space-x-4">
        {social.map((items: { id: any; text: any; url: any; icon: any }) => {
          const { id, url, icon, text } = items;
          const SocialIconComponent = icon;
          return (
            <li key={id}>
              <a
                href={url}
                className="text-blue-500 hover:text-blue-700"
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <SocialIconComponent alt={text} />
              </a>
            </li>
          );
        })}
      </ul>

      <div>
        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#fff] hover:text-black">
          Sign in
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
