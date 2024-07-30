import { FormEvent, useState } from "react";
import RegBanner from "../../ui/RegBanner";
import { Link } from "react-router-dom";
import { validateSignup } from "../../services/Authentication";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    console.log("Hello From the Submit button 👋👋");
    e.preventDefault();

    validateSignup({ name, email, password });
  }

  return (
    <div className="flex">
      <div className="w-1/2 h-screen flex items-center justify-center bg-gray-100">
        <div className="w-[70%] lg:w-[50%] ">
          <h1 className="text-center font-semibold text-5xl mb-10 font-cabinSketch">
            Create Account
          </h1>
          <form action="POST" className="font-oxygen" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="fullname" className=" block mb-2 font-semibold">
                FullName
              </label>
              <input
                type="text"
                id="fullname"
                className="bg-gray-300 rounded-md block w-full focus:outline-none py-2 px-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className=" block mb-2 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-300 rounded-md block w-full focus:outline-none py-2 px-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className=" block mb-2 font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-300 rounded-md block w-full focus:outline-none py-2 px-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 block w-full py-2 text-white rounded"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="text-center mt-5">
            <h3>Already have an account?</h3>
            <Link to="/" className="text-blue-600 font-semibold">
              Login
            </Link>
          </div>
        </div>
      </div>
      <RegBanner />
    </div>
  );
}

export default Signup;
