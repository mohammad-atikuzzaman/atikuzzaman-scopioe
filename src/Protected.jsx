import { useContext } from "react";
import { MyContext } from "./contexts/ContextComponent";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { user, loading } = useContext(MyContext);

  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/createaccount"></Navigate>;
};

export default Protected;
