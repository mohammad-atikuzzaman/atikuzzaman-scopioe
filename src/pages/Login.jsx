import { useContext, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MyContext } from "../contexts/ContextComponent";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.init";

const Login = () => {
  const navigate = useNavigate();
  const [passType, setPassType] = useState(true);

  const { logInWithEmailPass } = useContext(MyContext);

  const handleCreateAccount = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!email) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "You must provie your email",
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

    logInWithEmailPass( email, password)
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Log in successfull",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/home");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="grid grid-cols-2 gap-32 mx-auto px-[110px] pt-[107px]">
      <div className="text-[#152A16]">
        <h2 className="text-[40px] text-[#4285F3]">SCOPIOE</h2>
        <h3 className="font-semibold text-3xl mt-8 mb-6">
          Log In To Your Account
        </h3>
        <p className="text-[#5C635A] leading-7">
          Welcome Back! Select a method to log in:
        </p>
        <form onSubmit={handleCreateAccount} className="space-y-4">
          <div className="space-y-4">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 rounded-md w-full p-3"
              placeholder="Enter Your Email"
            />
          </div>
          <br />
          <div className="space-y-4 relative">
            <label htmlFor="password" className="font-medium">
              Password
            </label>
            <br />
            <input
              type={passType ? "password" : "text"}
              name="password"
              id="password"
              className="border-2 rounded-md w-full p-4"
              placeholder="Enter your password"
            />
            <FaRegEyeSlash
              className="absolute top-12 right-5 text-xl "
              onClick={() => setPassType(!passType)}
            />
          </div>
          <br />
          <div>
            <input type="checkbox" name="acceptterms" id="acceptterms" />
            <label
              htmlFor="acceptterms"
              className="text-[14px] text-[#4285F3] ml-2">
              Accept Terms and Service
            </label>
          </div>
          <br />
          <div className="flex justify-center">
            <input
              type="submit"
              value="Sign up"
              className="bg-[#4285F3] py-4 px-32 rounded-[10px] font-semibold text-white cursor-pointer"
            />
          </div>
        </form>
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
  );
};

export default Login;
