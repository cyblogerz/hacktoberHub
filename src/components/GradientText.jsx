import PropTypes from "prop-types";

const gradientClassNames =
	"bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]";

const GradientText = (props) => {
	return (
		<span className="inline-grid my-1">
			<span
				className={`py-1.5 normal-case col-start-1 row-start-1 bg-clip-text opacity-70 blur-3xl 2xl:text-6xl ${gradientClassNames}`}
				aria-hidden="true"
			>
				{props.text}
			</span>
			<span
				className={`[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-clip-text 2xl:text-6xl ${gradientClassNames}`}
			>
				{props.text}
			</span>
		</span>
	);
};

GradientText.propTypes = {
	text: PropTypes.string,
};

export default GradientText;
