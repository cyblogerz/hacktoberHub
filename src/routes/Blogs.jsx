
const Blogs = () => {
  return (
    <div className="grid grid-cols-3 container mx-auto pt-20 ">
        <div className="grid grid-rows w-1/2 gap-2 ">
        <button className="btn btn-shadow ">
            🏡 Home
        </button>
        <button className="btn btn-ghost">
            🔥 Trending
        </button>
        <button className="btn btn-ghost">
            📕 Resources
        </button>
        <button className="btn btn-ghost">
            🤓 Getting started
        </button>
        <button className="btn btn-ghost">
            🧑🏻‍💻 About
        </button>
        </div>
    </div>
  )
}

export default Blogs