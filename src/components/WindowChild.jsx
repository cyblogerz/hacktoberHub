import MarqueeButtons from "./UI/MarqueeButtons";

const WindowChild = () => {
  return (
    <>
      <div className="flex absolute -z-0 top-14 border-b border-dashed shadow-lg w-full justify-center">
        <p className="font-bold text-lg py-2 ">Select your language 🚀</p>
      </div>
      <MarqueeButtons />
    </>
  );
};

export default WindowChild;
