import  { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RepoCard from "../components/UI/RepoCard";

const RepoList = () => {
  const { lang } = useParams();
  const apiUrl = `https://api.github.com/search/repositories?q=topic%3Ahacktoberfest+language%3A${lang}&per_page=28`;

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
    <div>
      <h2 className="normal-case text-2xl text-center">Repositories for Language: {lang}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {Array.isArray(repos) && repos.length > 0 ? (
            repos.map((repo) => (
              <RepoCard repo={repo} key={repo.id}/>
            ))
          ) : (
            <p>No repositories found.</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default RepoList;
