import SearchBar from "../components/SearchBar";
import RepoDetails from "../components/RepoDetails";
import useFetchRepo from "../hooks/useFetchRepo";

const Home = () => {
  const { repos, loading, getRepoInfo } = useFetchRepo();

  return (
    <div className="container text-center my-5">
      <h1 className="fw-bold mb-4">GitHub Repo Info</h1>

      <SearchBar onSearch={getRepoInfo} loading={loading}/>

      {loading && (
        <div className="text-center my-4">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      

      <RepoDetails repos={repos} />
    </div>
  );
};

export default Home;
