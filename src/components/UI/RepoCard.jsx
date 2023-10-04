/* eslint-disable react/prop-types */
import { GoRepoForked } from 'react-icons/go';
import { AiTwotoneStar } from 'react-icons/ai'




function RepoCard ({ repo }) {
  return (
    <div className="shadow-sm hover:shadow-2xl  hover:bg-black hover:scale-105 transform transition-transform duration-300 card  ring-1">
      <div className="relative card-body">
        <div className="avatar">
          <div className="w-10 h-10 mb-2 rounded-full">
            <a
              href={ repo.owner.html_url }
              title={ repo.owner.login }
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={ repo.owner.avatar_url }
                width={ 50 }
                height={ 50 }
                alt={ repo.owner.login }
                className="rounded-xl"
              />
            </a>
          </div>
        </div>

        <a
          href={ repo.html_url }
          title={ repo.name }
          target="_blank"
          rel="noreferrer"
          className={ `text-3xl card-title link link-hover ` }
        >
          { repo.name }
        </a>

        <p className="mb-2 text-left">{ repo.description }</p>

        <div className="card-actions">
          { repo.topics.map((topic) => (
            <a
              key={ topic }
              href={ `https://github.com/topics/${topic}` }
              target="_blank"
              rel="noreferrer"
              className={ `badge  ${topic === 'hacktoberfest'
                ? 'badge-accent'
                : 'badge-primary'
                }` }
            >
              { topic }
            </a>
          )) }
        </div>

        <div className="items-end justify-center h-full card-actions mt-10">
          <div className="shadow stats bg-transparent ring-1 ">
            <div className="stat">
              <div className="text-center stat-title items-center inline-flex">
                <AiTwotoneStar className='text-yellow-500' /> <span className="ml-0.5">Stars</span>
              </div>
              <div className="text-center stat-value">
                { repo.stargazers_count }
              </div>
            </div>
          </div>
          <div className="shadow stats bg-transparent ring-1 ">
            <div className="stat">
              <div className="text-center stat-title items-center inline-flex">
                <GoRepoForked /> <span className="ml-0.5">Forks</span>
              </div>
              <div className="text-center stat-value">{ repo.forks }</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;