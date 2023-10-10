import WindowChild from "../WindowChild";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import SearchModal from "../modals/SearchModal";
import { useState } from "react";
import languages from "../data/languages.json";

const MockupWindow = () => {
  const { main: mainLanguages } = languages;

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };
  return (
    <div className="px-10 ">
      <div className=" md:pt-16 md:w-[50vw] w-screen mt-10 md:mt-0 mx-10">
        <div className="mockup-browser  bg-base-300">
          <div className="text-5xl absolute w-fit ml-3  h-[50px] p-1">
            <BiDotsHorizontalRounded color={"grey"} />
          </div>
          <div className="flex justify-center">
            <div className="w-2/3 px-4 h-[52px] py-2">
              <div className="relative flex flex-row">
                <div className="flex">
                  <div className="bg-[#191e24] p-1 rounded-l-xl my-auto h-[34px] text-2xl">
                    <AiOutlineSearch />
                  </div>
                </div>
                <input
                  onClick={openSearchModal}
                  type="text"
                  placeholder="Quick Search"
                  className="w-full h-[34px] py-3 pl-1 pr-4 text-gray-500 rounded-r-xl outline-none bg-[#191e24] "
                />
                {isSearchModalOpen && (
                  <SearchModal
                    mainLanguages={mainLanguages}
                    closeModal={closeSearchModal}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full justify-center items-center px-4 py-16 bg-base-200">
            <WindowChild />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockupWindow;
