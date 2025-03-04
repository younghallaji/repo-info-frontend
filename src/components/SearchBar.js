import { useState } from "react";

const SearchBar = ({ onSearch, loading }) => {
  const [repoNames, setrepoNames] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (repoNames.trim()) {
      onSearch(repoNames);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container my-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter repo (e.g., facebook/react)"
          value={repoNames}
          onChange={(e) => setrepoNames(e.target.value)}
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
