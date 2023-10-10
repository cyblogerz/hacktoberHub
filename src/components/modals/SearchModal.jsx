import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";

const SearchModal = ({ mainLanguages, closeModal }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const inputRef = useRef(null);

  //by default cursor on searchbox
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const filteredLanguages = mainLanguages.filter((lang) =>
    lang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed z-10 inset-0 flex items-center justify-center bg-opacity-70 backdrop-blur-md bg-gray-800">
      <div className="bg-[#191e24] p-8 rounded-lg w-[60%] h-[60%] relative">
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="Search languages..."
            className="w-full bg-[#1d232a] p-2 focus:outline-none mb-4"
            ref={inputRef}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="h-[40px] items-center my-auto pl-1 ">
            <AiOutlineCloseCircle
              className="text-gray-200  hover:text-gray-500"
              onClick={closeModal}
              size={20}
            />
          </div>
        </div>
        <div className="overflow-y-scroll max-h-[70%]">
          {filteredLanguages.map((lang) => (
            <div className="flex flex-col" key={lang}>
              <Link to={`/repos/${lang}`}>
                <div className="hover:bg-[#1d232a] border-b border-b-slate-800 text-md text-gray-200 p-2">
                  {lang}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
