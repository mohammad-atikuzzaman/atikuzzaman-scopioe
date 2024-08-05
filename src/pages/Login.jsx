import { useContext } from "react";
import { FaFacebookF } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MyContext } from "../contexts/ContextComponent";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "../component/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  const { logInWithEmailPass, logInWithGoogle } = useContext(MyContext);

  const handleLoginWithEmailPass = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "You must provide your email",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (!password) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Provie a valid password",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    logInWithEmailPass(email, password)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleGoogleLogin = () => {
    logInWithGoogle()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log in successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      {/* this is desktop view  */}
      <div className="hidden md:grid grid-cols-2 gap-32 mx-auto px-[110px] py-[107px]">
        <div className="text-[#152A16]">
          <h2 className="text-[40px] text-[#4285F3]">SCOPIOE</h2>
          <h3 className="font-semibold text-3xl mt-8 mb-6">
            Log In To Your Account
          </h3>
          <p className="text-[#5C635A] leading-7">
            Welcome Back! Select a method to log in:
          </p>
          <div className="flex items-center justify-between my-6">
            <button
              onClick={handleGoogleLogin}
              className="bg-gradient-to-r from-[#a1a0a0] to-[#f1eded] text-[#152A16] flex items-center py-4 px-12 gap-4 rounded-xl shadow-lg hover:scale-105 transition-all">
              <FcGoogle className="text-2xl" /> Google
            </button>
            <button className="bg-[#0778F5] text-white flex items-center py-4 px-12 gap-4 rounded-xl shadow-lg hover:scale-105 transition-all">
              <FaFacebookF /> Facebook
            </button>
          </div>
          <div className="divider">Or Continue with Email</div>
          <LoginForm
            handleLoginWithEmailPass={handleLoginWithEmailPass}></LoginForm>
          <div className="text-center font-medium mt-4">
            Don’t Have an Account?
            <Link to="/createaccount" className="text-[#156BCA]">
              {" "}
              Create Account
            </Link>
          </div>
        </div>
        <div className="bg-[url('signupbg.png')] bg-cover bg-center rounded-2xl w-full min-h-[671px] flex justify-center items-center">
          <div className="bg-[#152A16] bg-opacity-70 text-center px-14 py-10 rounded-xl font-medium text-2xl">
            <p className="text-white">
              <span className="text-blue-500">Sign In</span> to view all the
            </p>
            <p className="text-white">massage therapists</p>
          </div>
        </div>
      </div>

      {/* this is mobile view */}

      <div>
        <div className="md:hidden bg-[url('bgphone.png')] bg-cover bg-center w-full min-h-screen">
          <h2 className="text-[#4285F3] text-4xl text-center pt-16">SCOPIOE</h2>

          <div>
            <h4 className="font-semibold text-lg text-center text-white mt-6 w-1/2 mx-auto">
              Sign In to view all the massage therapists
            </h4>
            <div className="bg-white rounded-t-[40px] mt-16 p-4">
              <div>
                <h2 className="text-center font-semibold text-2xl mt-8 mb-4">
                  Log In To Your Account
                </h2>
                <p className="text-center text-[14px]">
                  Welcome Back! Select a method to log in:
                </p>
              </div>
              <div className="flex items-center justify-around mt-14 mb-8">
                <button
                  onClick={handleGoogleLogin}
                  className="bg-gradient-to-r from-[#a1a0a0] to-[#f1eded] text-[#152A16] flex items-center py-3 px-6 gap-4 rounded-lg shadow-lg hover:scale-105 transition-all">
                  <FcGoogle className="text-2xl" /> Google
                </button>
                <button className="bg-[#0778F5] text-white flex items-center py-3 px-6 gap-4 rounded-lg shadow-lg hover:scale-105 transition-all">
                  <FaFacebookF /> Facebook
                </button>
              </div>
              <div className="divider">Or Continue with Email</div>
              <LoginForm
                handleLoginWithEmailPass={handleLoginWithEmailPass}></LoginForm>
              <div className="text-center font-medium mt-4">
                Don't Have an Account?{" "}
                <Link to="/createaccount" className="text-[#156BCA]">
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
