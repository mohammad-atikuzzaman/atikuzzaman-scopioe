import { useContext, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MyContext } from "../contexts/ContextComponent";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import auth from "../firebase/firebase.init";

const CreateAccount = () => {
    const navigate = useNavigate();
  const [passType, setPassType] = useState(true);
  const [rePassType, setRePassType] = useState(true);

  const { registerWithEmailPass, updateUserProfile } = useContext(MyContext);

  const handleCreateAccount = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const confpass = form.confpass.value;
    const photo =
      "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg";
    const check = form.acceptterms.checked;


    if (!name) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Please Provie Name",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (!email) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "You must provie your email",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    if (password !== confpass) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Password doesn't match",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (password.length < 6) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Please provide minimum 6 digit password ",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (!check) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Please accept terms and service",
        showConfirmButton: false,
        timer: 1500,
      });
    }


    registerWithEmailPass(email, password)
      .then((res) => {
        updateUserProfile(name, photo)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account Create successfull",
          showConfirmButton: false,
          timer: 1500,
        });
       navigate("/home")
        
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
          Sign In To Your Account
        </h3>
        <p className="text-[#5C635A] leading-7">
          Welcome Back! By click the sign up button, you're agree toZenitood
          Terms and Service and acknlowledge the <span> </span>
          <a href="#" className="text-blue-500">
            Privacy and Policy
          </a>
        </p>
        <form onSubmit={handleCreateAccount} className="space-y-4">
          <div className="space-y-4">
            <label htmlFor="username" className="font-medium">
              Name
            </label>
            <br />
            <input
              type="text"
              name="username"
              id="username"
              className="border-2 rounded-md w-full p-4"
              placeholder="@username"
            />
          </div>
          <br />
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
          <div className="space-y-4 relative">
            <label htmlFor="confpass" className="font-medium">
              Confirm Password
            </label>
            <br />
            <input
              type={rePassType ? "password" : "text"}
              name="confpass"
              id="confpass"
              className="border-2 rounded-md w-full p-4"
              placeholder="Re-type password"
            />
            <FaRegEyeSlash
              className="absolute top-12 right-5 text-xl "
              onClick={() => setRePassType(!rePassType)}
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
          Already Have an Account?{" "}
          <Link to="/login" className="text-[#156BCA]">Log in</Link>
        </div>
      </div>
      <div className="bg-[url('signupbg.png')] bg-cover bg-center rounded-2xl w-full min-h-[671px] flex justify-center items-center">
        <div className="bg-[#152A16] bg-opacity-70 text-center px-14 py-10 rounded-xl font-medium text-2xl">
          <p className="text-[#156BCA]">Create Account</p>
          <p className="text-white">Fill in Your Information</p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
