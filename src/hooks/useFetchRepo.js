import { useState } from "react";
import { fetchRepoInfo } from "../api/githubApi";
import Swal from "sweetalert2";

const useFetchRepo = () => {
  const [repos, setRepo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRepoInfo = async (repoNames) => {
    setLoading(true);
    setRepo([]);
    setError(null);
    try {
      const data = await fetchRepoInfo(repoNames);
      setRepo(data.data);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err,
        footer: "Please check the repo name and try again.",
      });
      setError(err);
    } finally {
      setLoading(false); 
    }
  };

  return { repos, loading, error, getRepoInfo };
};

export default useFetchRepo;
