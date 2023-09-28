

import MarqueeButtons from '../components/UI/MarqueeButtons';




const Home = () => {
    

  return (
    <div className='h-screen'>
    <div className="flex flex-col items-center justify-center h-[80%] relative ">
    
    <div className="mb-20 text-center w-[80%]">
    <p className="text-6xl">🧑🏻‍💻</p>
        <h1 className="text-6xl font-bold ">Select your </h1>
        <span className="inline-grid"><span className="normal-case col-start-1
         row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text opacity-70 blur-3xl [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] 
         text-6xl" aria-hidden="true">programming language</span> 
         <span className="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] text-6xl font-bold">programming language</span>
         </span>
   
        <p className="mt-4 text-lg ">Discover exciting repositories to contribute to in this year&apos;s<span className="underline "> Hacktoberfest! </span> 🚀🌟</p>
</div>
 
<MarqueeButtons />
<div className="absolute bottom-0">
<div className="relative group m-3 w-fit inline-block">
  <div className="absolute -inset-0 bg-purple-500 via-blue-500 rounded-lg blur opacity-25 opacity-100 transition duration-1000 group-hover:duration-200"></div>
  <div
    className='relative p-6  btn btn-lg normal-case rounded-2xl leading-none transition duration-300 ring-2 ring-transparent hover:ring-blue-500 hover:shadow-md'
  >
    Other Languages
    
  </div>
</div>
</div>

    </div>
    </div>
  )
}

export default Home