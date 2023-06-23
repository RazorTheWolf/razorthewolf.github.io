import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/RazorTricksele.svg";

export default function Navbar(props) {
  const { toggleDarkMode, darkMode } = props;
  return (
    <>
      <nav className="flex justify-between items-center m-5">
        <Link
          to="#"
          className="flex gap-3 text-lg font-semibold items-center dark:text-cs-light text-cs-gray transition-colors ease-in-out duration-200"
        >
          <img src={logo} alt="" className="h-10" />
          Razor ✦
        </Link>
        <ul className="flex items-center gap-4">
          <button
            onClick={() => toggleDarkMode()}
            className="active:rotate-180 transition ease-in-out duration-200"
          >
            {darkMode ? (
              <svg
                className="text-cs-light transition-colors ease-in-out duration-200"
                height="26"
                width="26"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3H13ZM11 4C11 4.55228 11.4477 5 12 5C12.5523 5 13 4.55228 13 4H11ZM13 20C13 19.4477 12.5523 19 12 19C11.4477 19 11 19.4477 11 20H13ZM11 21C11 21.5523 11.4477 22 12 22C12.5523 22 13 21.5523 13 21H11ZM4 13C4.55228 13 5 12.5523 5 12C5 11.4477 4.55228 11 4 11V13ZM3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13V11ZM5.60701 7.02122C5.99753 7.41175 6.6307 7.41175 7.02122 7.02122C7.41175 6.6307 7.41175 5.99753 7.02122 5.60701L5.60701 7.02122ZM6.20711 4.79289C5.81658 4.40237 5.18342 4.40237 4.79289 4.79289C4.40237 5.18342 4.40237 5.81658 4.79289 6.20711L6.20711 4.79289ZM16.9788 5.60702C16.5882 5.99755 16.5883 6.63072 16.9788 7.02124C17.3693 7.41175 18.0025 7.41174 18.393 7.02121L16.9788 5.60702ZM19.2071 6.20709C19.5976 5.81656 19.5976 5.1834 19.2071 4.79288C18.8165 4.40236 18.1834 4.40237 17.7929 4.79291L19.2071 6.20709ZM7.01945 18.3989C7.41095 18.0093 7.41253 17.3762 7.02299 16.9847C6.63344 16.5932 6.00028 16.5916 5.60878 16.9811L7.01945 18.3989ZM4.79466 17.7912C4.40316 18.1807 4.40158 18.8139 4.79113 19.2054C5.18068 19.5969 5.81384 19.5985 6.20534 19.2089L4.79466 17.7912ZM18.3912 16.9811C17.9997 16.5916 17.3666 16.5932 16.977 16.9846C16.5875 17.3761 16.589 18.0093 16.9805 18.3989L18.3912 16.9811ZM17.7946 19.2089C18.1861 19.5985 18.8193 19.5969 19.2088 19.2054C19.5984 18.8139 19.5968 18.1808 19.2053 17.7912L17.7946 19.2089ZM21 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11V13ZM20 11C19.4477 11 19 11.4477 19 12C19 12.5523 19.4477 13 20 13V11ZM11 3V4H13V3H11ZM11 20V21H13V20H11ZM4 11H3V13H4V11ZM7.02122 5.60701L6.20711 4.79289L4.79289 6.20711L5.60701 7.02122L7.02122 5.60701ZM18.393 7.02121L19.2071 6.20709L17.7929 4.79291L16.9788 5.60702L18.393 7.02121ZM5.60878 16.9811L4.79466 17.7912L6.20534 19.2089L7.01945 18.3989L5.60878 16.9811ZM16.9805 18.3989L17.7946 19.2089L19.2053 17.7912L18.3912 16.9811L16.9805 18.3989ZM21 11H20V13H21V11ZM15 12C15 13.6569 13.6569 15 12 15V17C14.7614 17 17 14.7614 17 12H15ZM12 15C10.3431 15 9 13.6569 9 12H7C7 14.7614 9.23858 17 12 17V15ZM9 12C9 10.3431 10.3431 9 12 9V7C9.23858 7 7 9.23858 7 12H9ZM12 9C13.6569 9 15 10.3431 15 12H17C17 9.23858 14.7614 7 12 7V9Z"
                  fill="currentColor"
                />
              </svg>
            ) : (
              <svg
                className="text-cs-gray transition-colors ease-in-out duration-200"
                height="26"
                width="26"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3444 20.6768 15.032C19.6402 15.4486 18.5059 15.6835 17.3203 15.6835C12.3497 15.6835 8.32031 11.654 8.32031 6.68345C8.32031 5.50341 8.55165 4.36262 8.96453 3.32999C5.65605 4.66031 3.32031 7.89915 3.32031 11.6835Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            )}
          </button>
          <a href="https://github.com/RazorTheWolf" target="_blank">
            <svg
              className="dark:text-cs-light text-cs-gray transition-colors ease-in-out duration-200"
              height="26"
              width="26"
              fill="currentColor"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
            </svg>
          </a>
        </ul>
      </nav>
    </>
  );
}
