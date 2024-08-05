import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { MyContext } from "../contexts/ContextComponent";
import SignUpForm from "../component/SignUpForm";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(false);

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
      .then(() => {
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
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  return (
    <div>
      {/* this is desktop register form */}
      <div className="hidden md:grid grid-cols-2 gap-32 mx-auto px-[110px] py-[107px]">
        <div className="text-[#152A16]">
          <h2 className="text-[40px] text-[#4285F3]">SCOPIOE</h2>
          <h3 className="font-semibold text-3xl mt-8 mb-6">
            Sign In To Your Account
          </h3>
          <div className="text-[#5C635A] leading-7">
            Welcome Back! By click the sign up button, you're agree toZenitood
            Terms and Service and acknlowledge the <span> </span>
            <a href="#" className="text-blue-500">
              Privacy and Policy
            </a>
          </div>
         <SignUpForm handleCreateAccount={handleCreateAccount}></SignUpForm>

          <div className="text-center font-medium mt-4">
            Already Have an Account?{" "}
            <Link to="/login" className="text-[#156BCA]">
              Log in
            </Link>
          </div>
        </div>
        <div className="bg-[url('signupbg.png')] bg-cover bg-center rounded-2xl w-full min-h-[671px] flex justify-center items-center">
          <div className="bg-[#152A16] bg-opacity-70 text-center px-14 py-10 rounded-xl font-medium text-2xl">
            <p className="text-[#156BCA]">Create Account</p>
            <p className="text-white">Fill in Your Information</p>
          </div>
        </div>
      </div>

      {/* this is mobile register form */}
      <div className="md:hidden bg-[url('bgphone.png')] bg-cover bg-center w-full min-h-screen">
        <h2 className="text-[#4285F3] text-4xl text-center pt-16">SCOPIOE</h2>
        <div className={`${display ? "hidden" : "block"}`}>
          <h3 className="font-semibold text-2xl text-center text-[#1A2531] mt-8">
            Sign In To Your Account
          </h3>
          <div className="text-center text-[#D1D1D1] mt-3 px-6">
            elcome Back! By click the sign up button, you're agree toZenitood
            Terms and Service and acknlowledge the{" "}
            <a href="#" className="text-[#4285F3]">
              Privacy and Policy
            </a>
            <div className="bg-[#1F2833] bg-opacity-70 text-center px-14 py-10 rounded-xl font-medium text-2xl mt-20">
              {/* this toggle button for show form on mobile view */}
              <button
                onClick={() => setDisplay(!display)}
                className="text-[#156BCA]">
                Create Account
              </button>
              <p className="text-white">Fill in Your Information</p>
            </div>
          </div>
        </div>

        <div className={`${display ? "block" : "hidden"}`}>
          <h4 className="font-semibold text-lg text-center text-white mt-6 w-1/2 mx-auto">
            Create Account Fill in Your Description{" "}
          </h4>
          <div className="bg-white rounded-t-[40px] mt-16 p-4">
            <h2 className="text-center font-semibold text-2xl">Sign in</h2>
          <SignUpForm handleCreateAccount={handleCreateAccount}></SignUpForm>
            <div className="text-center font-medium mt-4">
              Already Have an Account?{" "}
              <Link to="/login" className="text-[#156BCA]">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
