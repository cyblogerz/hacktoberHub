import AnimatedText from "./UI/AnimatedText"
import PropTypes from 'prop-types';
import { AiFillHeart } from 'react-icons/ai'

const RepoListHeader = ({ lang }) => {
  return (
    <div className="w-5/6 max-w-md mx-auto mb-10 sm:mx-0 sm:w-[100vw]">
      <h1 className="mb-2 mt-10 text-4xl font-mono sm:text-xl">
        Repositories for :
      </h1>
      <p className="btn btn-ghost normal-case  font-bold text-5xl text-accent sm:text-2xl">
        <AnimatedText lang={lang} />
      </p>
      <div className="flex flex-row gap-4 mt-16 justify-center sm:w-[100vw]">
        <button className="btn text-lg">Language {`</>`}</button>
        <button className="btn btn-neutral text-lg">
          <AiFillHeart className="text-lg" />
          Best Match</button>
      </div>
    </div>
  )
}

RepoListHeader.propTypes = {
  lang: PropTypes.string,
}

export default RepoListHeader