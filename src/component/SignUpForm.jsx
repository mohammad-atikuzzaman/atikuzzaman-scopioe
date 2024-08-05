import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";

const SignUpForm = ({ handleCreateAccount }) => {
  const [passType, setPassType] = useState(true);
  const [rePassType, setRePassType] = useState(true);
  return (
    <form onSubmit={handleCreateAccount} className="space-y-4">
      <div className="space-y-4">
        <label htmlFor="username" className="font-medium">
          Name
        </label>
        <br />
        <input
          type="text"
          name="username"
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
        <input type="checkbox" name="acceptterms" />
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
          className="bg-[#4285F3] py-4 px-32 rounded-[10px] font-semibold text-white cursor-pointer hover:scale-105 transition-all"
        />
      </div>
    </form>
  );
};

export default SignUpForm;
