import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-box">
      <h2>
        ⚠️ Error {err.status} {err.statusText}
      </h2>
      <p>Something Went Wrong</p>
    </div>
  );
};

export default Error;
