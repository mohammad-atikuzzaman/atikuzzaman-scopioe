import { useState } from 'react';
import { FaRegEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const LoginForm = ({ handleLoginWithEmailPass }) => {
  const [passType, setPassType] = useState(true);
  return (
    <form onSubmit={handleLoginWithEmailPass} className="mt-4">
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
      <div className="flex justify-between">
        <div>
          <input type="checkbox" name="acceptterms" />
          <label htmlFor="acceptterms" className="ml-2">
            Remember me
          </label>
        </div>
        <Link className="text-[#4285F3] underline">Forgot password</Link>
      </div>
      <br />
      <div className="flex justify-center">
        <input
          type="submit"
          value="Sign in"
          className="bg-[#4285F3] py-4 px-32 rounded-[10px] font-semibold text-white cursor-pointer hover:scale-105 transition-all"
        />
      </div>
    </form>
  );
};

export default LoginForm;