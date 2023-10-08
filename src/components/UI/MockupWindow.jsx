import WindowChild from '../WindowChild';

const MockupWindow = () => {
    return (
      

            <div className="h-[60vh] w-[50vw] flex">
                <div className="mockup-browser  bg-base-300 shadow-lg">
                    <div className="mockup-browser-toolbar">
                        <div className="input">https://hacktoberfest.com</div>
                    </div>
                    <div className="flex flex-col  h-full justify-center items-center px-4 py-16 bg-base-200">
                        <WindowChild />
                    </div>
                </div>
            </div>
    
    );
};

export default MockupWindow;
