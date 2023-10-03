import WindowChild from '../WindowChild';

const MockupWindow = () => {
    return (
        <div className="transform translate-x-40 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-transparent opacity-20 blur-lg "></div>
            <div className="h-[60vh] w-[50vw] flex">
                <div className="mockup-browser  bg-base-300">
                    <div className="mockup-browser-toolbar">
                        <div className="input">https://hacktoberfest.com</div>
                    </div>
                    <div className="flex flex-col  h-full justify-center items-center px-4 py-16 bg-base-200">
                        <WindowChild />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MockupWindow;
