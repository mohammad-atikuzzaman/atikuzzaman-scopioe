import { useContext } from "react";
import { MyContext } from "./contexts/ContextComponent";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user, loading } = useContext(MyContext);

  if (loading) {
    return (
      <div className="max-w-[1440px] min-h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-md"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/createaccount"></Navigate>;
};

export default Protected;
