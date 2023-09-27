const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] ">
    <div className="mb-20 text-center">
    <p className="text-6xl">🧑🏻‍💻</p>
        <h1 className="text-6xl font-bold text-white">Select your </h1>
        <span className="inline-grid"><span className="pointer-events-none col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text opacity-70 blur-3xl [-webkit-text-fill-color:transparent] [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] text-6xl" aria-hidden="true">programming language</span> <span class="[&amp;::selection]:text-base-content relative col-start-1 row-start-1 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text [-webkit-text-fill-color:transparent] [&amp;::selection]:bg-blue-700/20 [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)] text-6xl font-bold">programming language</span></span>
</div>
 
        <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3 gap-4 w-1/2">
  <div className="btn">Java</div>
  <div className="btn">JavaScript</div>
  <div className="btn">Java</div>
  <div className="btn">Java</div>
  <div className="btn">Java</div>
  <div className="btn">Java</div>
  <div className="btn">Other Languages -></div>
</div>
    </div>
  )
}

export default Home