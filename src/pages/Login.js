import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { SignInMethod, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
const Login = () => {

const [error, setError] = useState(null);
const history = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Check for empty email and password fields
    if (!email || !password) {
        setError("Please enter both email and password.");
        return;
    }

    setError(null); // Clear previous errors

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            // console.log("User successfully logged in.");
            history("/home");
        })
        .catch((error) => {
            // console.error("Login error:", error);
            setError(error.message);
        });

    }
  return (
    <div>
           <div className="flex p-5 sm:p-10 flex-col items-center min-h-screen bg-cover  bgimg  bg-no-repeat sm:justify-center bg-blue-300 ">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold  text-blue-600">
                           Sign In
                        </h3>
                    </a>
                </div>
                <div className="w-full p-2 sm:p-12 border-blue-700 border-2 mt-6 overflow-hidden bg-white bg-opacity-30  shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                    {error && <p style={{ color: 'red' }}>{error}</p>}

                        
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-xl  font-bold text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                placeholder='Enter Email'
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 h-10 px-5 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                               
                                className="block text-xl font-bold text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                 placeholder='Enter Password'
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-gray-300  px-5 h-10 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <Link  to={"/register"} className="text-xl underline hover:text-gray-900">
                              

                                Regsiter
                    
                            </Link>
                            <button
                               
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-blue-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        
    </div>
  )
}

export default Login
