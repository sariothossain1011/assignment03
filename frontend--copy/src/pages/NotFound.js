import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000); // redirect to home page after 5 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className="container pt-5 text-center">
      <div className="row pt-5">
        <div className="col-md-12 pt-5">
          <h1 className="pt-5">Page Not Found</h1>
          <h5 className="py-3">The page you are looking for does not exist.</h5>
          <button className="btn btn-primary btn-small" onClick={handleBackClick}>Go Back</button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
