import { useState } from "react";

const SearchBar = ({ onSearch, loading }) => {
  const [repoName, setrepoName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (repoName.trim()) {
      onSearch(repoName);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container my-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter repo (e.g., facebook/react)"
          value={repoName}
          onChange={(e) => setrepoName(e.target.value)}
        />
        <button disabled={loading} className="btn btn-primary" type="submit">
          {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Searching...
              </>
            ) : (
              "Search"
            )}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
