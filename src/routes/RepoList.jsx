import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const RepoList = () => {
    const {lang} = useParams();
    const[repos,setRepos] = useState([]);
    const [loading,setLoading] = useState(true);
    const apiUrl = `https://api.github.com/search/repositories?q=topic%3Ahacktoberfest+language%3A${lang}&per_page=21`;

    useEffect(()=>{
        fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            setRepos(data.items);
            setLoading(false)
        })
    },[apiUrl])


    
  return (
    <div>
      <h2>Repositories for Language: {lang}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>

  );
}

export default RepoList