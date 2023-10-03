import PropTypes from 'prop-types';


const GradientText = (props) => {
  return (
    <div className='sm:flex sm:flex-col sm:content-center sm:items-center sm:max-h-8'>
    <span className="inline-grid "><span className="normal-case 
    col-start-1
         row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text opacity-70 blur-3xl [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] 
         text-6xl" aria-hidden="true">{props.text}</span> 
         <span className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] 
         text-5xl mt-2 font-bold sm:text-2xl">{props.text}</span>
         </span>
         </div>
  )
}

GradientText.propTypes = {
    text : PropTypes.string,
}

export default GradientText