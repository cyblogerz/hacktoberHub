

import MarqueeButtons from '../components/UI/MarqueeButtons';




const Home = () => {
    

  return (
    <div className='container mx-auto w-full h-full pt-20'>
  
    <div className="flex flex-col  items-center justify-center min-h-screen relative ">
    
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

<button className="btn my-20 btn-primary normal-case text-xl ">Other Languages</button>


    </div>
    </div>
  )
}

export default Home