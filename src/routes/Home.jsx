import { Link } from "react-router-dom";
import GradientText from "../components/GradientText";
import MockupWindow from "../components/UI/MockupWindow";
import OtherLangButton from "../components/modals/OtherLangButton";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
	return (
		<div className="flex  md:flex-row flex-col items-center justify-between w-screen min-h-screen  ">
			<div className="md:text-left text-center md:px-20 pt-32 md:pt-0 xl:pb-20 pb-0">
				<div>
					<a
						href="https://hacktoberfest.com"
						className="badge badge-neutral rounded-4xl font-mono mb-2"
					>
						hacktoberfest.com
					</a>
					<p className="2xl:text-6xl md:text-5xl text-3xl font-bold dark:text-[white] light:">
						Find your perfect <br />
						<GradientText text={"Hacktoberfest Project"} /> <br />
						and contribute today
					</p>
				</div>

				<p className="mt-4 text-lg w-[95%]  ">
					Discover exciting repositories to contribute to in this year&apos;s
					<a
						href="https://hacktoberfest.com/"
						target="blank"
						className="underline hover:text-blue-500"
					>
						{" "}
						Hacktoberfest!{" "}
					</a>{" "}
				</p>
				<div className="flex flex-row mt-16 md:block absolute ">
					<OtherLangButton />
					<Link
						to="/blogs"
						className="btn normal-case text-xl ml-4  transform hover:scale-110"
					>
						Resources <AiOutlineArrowRight />
					</Link>
				</div>
			</div>
			<MockupWindow />
		</div>
	);
};

export default Home;
