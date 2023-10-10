import WindowChild from '../WindowChild';

const MockupWindow = () => {
    return (
        <div className="px-10 mt-32 xl:mt-0">
            
            <div className=" md:pt-16 md:w-[50vw] w-screen mt-10 md:mt-0">
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
