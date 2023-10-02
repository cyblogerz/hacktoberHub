import AnimatedText from "./UI/AnimatedText"
import PropTypes from 'prop-types';
import {AiFillHeart} from 'react-icons/ai'

const RepoListHeader = ({lang}) => {
  return (
    <div className="w-5/6 max-w-md mx-auto mb-10">
            <h1 className="mb-2 mt-10 text-4xl font-mono">
              Repositories for :
            </h1>
            <p className="btn btn-ghost normal-case  font-bold text-5xl text-accent">
              <AnimatedText lang={lang} />
            </p>
            <div className="flex flex-row gap-4 mt-16 justify-center">
            <button className="btn text-lg">Language {`</>`}</button>
            <button className="btn btn-neutral text-lg">
            <AiFillHeart className="text-lg" />
            Best Match</button>
            </div>
          </div>
  )
}

RepoListHeader.propTypes = {
    lang : PropTypes.string,
}

export default RepoListHeader