import  { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import RepoCard from "../components/UI/RepoCard";

const RepoList = () => {
  const { lang } = useParams();
  const apiUrl = `https://api.github.com/search/repositories?q=topic%3Ahacktoberfest+language%3A${lang}&per_page=21`;

  // State to store the fetched data
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from the GitHub API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Set the fetched data in the state and mark loading as false
        setRepos(data.items || []); // Ensure 'repos' is an array or an empty array if undefined
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
            <div className="w-5/6 max-w-md mx-auto">
            <h1 className="mb-16 mt-10 text-4xl font-bold">
            Repositories for Language: {lang}
            </h1>
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
      <button className="btn text-xl btn-primary my-10 ">Next Page</button>
      <Link to='/' className="btn text-xl btn-secondary my-10 ">Go Home</Link>
      </div>
      
      </div>
   
  );
};

export default RepoList;

