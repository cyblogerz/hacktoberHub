import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    <div className="container mx-auto">
    <div className="min-h-screen pt-5">

    <div className="text-center">
            <div className="w-5/6 max-w-md mx-auto">
            <h1 className="mb-5 text-5xl font-bold uppercase">
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
      </div>
   
  );
};

export default RepoList;

{/* <div className="container mx-auto">
        <div className="min-h-screen pt-5">
          <div className="text-center">
            <div className="w-5/6 max-w-md mx-auto">
              <h1 className="mb-5 text-5xl font-bold uppercase">
                {repos.total_count} repositories for{' '}
                <span className="font-mono text-2023-bavarian-gold-2">
                  {router.query.q
                    ? router.query.q + ' in ' + languageName
                    : languageName}
                </span>
              </h1>
            </div>
          </div>
          <Sort />
          <StarsFilter />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {repos.items.map(repo => (
              <Card key={repo.id} repo={repo} />
            ))}
          </div>
        </div>
        <Pagination page={page} totalCount={repos.total_count} />
      </div> */}