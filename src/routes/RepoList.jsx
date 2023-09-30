import  { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import RepoCard from "../components/UI/RepoCard";
import GradientText from "../components/GradientText";

const RepoList = () => {
  const { lang } = useParams();
  const apiUrl = `https://api.github.com/search/repositories?q=topic%3Ahacktoberfest+language%3A${lang}&per_page=21`;

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRepos(data.items || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [apiUrl]);

  return (
    <div className="container mx-auto h-full pt-16">
    <div className="min-h-screen pt-5">

    <div className="text-center">
            <div className="w-5/6 max-w-md mx-auto mb-10">
            <h1 className="mb-2 mt-10 text-4xl font-mono">
            Repositories for : 
            </h1>
            <GradientText text={lang}/>
            </div>
           
      
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
  
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(repos) && repos.length > 0 ? (
            repos.map((repo) => (
              <RepoCard repo={repo} key={repo.id}/>
            ))
          ) : (
            <p>No repositories found.</p>
          )}
        </div>
     
      )}
      </div>
      </div>
      <div className="w-full flex flex-row gap-4 justify-center items-center">
      <button className="btn  btn-primary my-10 ">Next Page</button>
      <Link to='/' className="btn  btn-secondary my-10 ">Go Home</Link>
      </div>
      
      </div>
   
  );
};

export default RepoList;

