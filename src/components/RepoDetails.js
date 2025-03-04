const RepoDetails = ({ repos }) => {
    if (!repos || repos.length === 0) return null;
  
    return (
      <div className="container mt-4">
        <h3 className="text-center mb-3">Repository Details</h3>
        <div className="row">
          {repos.map((repo, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-sm mb-4">
                <div className="card-body">
                  <h5 className="card-title">{repo.name}</h5>
                  {repo.error ? (
                    <p className="text-danger">{repo.error}</p>
                  ) : (
                    <>
                      <p className="card-text text-muted">{repo.data.description}</p>
                      <span className="badge bg-primary">⭐ Stars: {repo.data.stars}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default RepoDetails;
  