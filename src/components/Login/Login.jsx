import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import auth from "../../Firebase/firebase.config";
import toast, { Toaster } from 'react-hot-toast';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = async () => {
        setLoading(true);

        try {
            const googleSignInResult = await signInWithPopup(auth, googleProvider);
            const googleUser = googleSignInResult.user;
            console.log(googleUser);
            toast.success(`Logged in as ${googleUser.displayName}`);
            navigate('/');
        } catch (error) {
            const errorMessage = error.message;
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const handleLogIn = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.error(error)
            })
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            toast.success('User logged in successfully');
            console.log(user);
            // Clear the input fields after successful login
            setEmail('');
            setPassword('');
            navigate('/');


        } catch (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
            toast.error('Invalid email or password, Please check');
        } finally {
            setLoading(false);

        }

    };

    return (
        <div>
            <div className="m-2">
                <div className="w-full max-w-sm p-6 m-auto mx-auto bg-slate-50 rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex justify-center mx-auto">
                        <img className="w-[17%]" src="/logo.png" alt="" />
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-medium">Welcome Back</p>
                        <p className="text-slate-400">Login or create account</p>
                    </div>

                    <form className="mt-6" onSubmit={handleLogIn}>
                        <div>
                            <label className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)} required type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="email" />
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <label className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                            </div>

                            <input value={password}
                                onChange={(e) => setPassword(e.target.value)} required type={showPassword ? 'text' : 'password'} name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="password" />
                            <div className="m-0.5" onClick={() => setShowPassword(!showPassword)}>
                                <span className="text-blue-500 dark:text-blue-400 hover:underline cursor-pointer text-sm font-medium">{showPassword ? 'Hide Password' : 'Show Password'}</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button type="submit" className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Log In'}
                            </button>
                        </div>
                    </form>

                    <div className="flex items-center justify-between mt-4">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/3"></span>

                        <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-black hover:underline">
                            or login with
                        </a>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/3"></span>
                    </div>

                    <div className="flex items-center mt-6 -mx-2">
                        <button onClick={handleGoogleLogin} type="button" className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-800 focus:bg-blue-400 focus:outline-none">
                            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
                                <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z">
                                </path>
                            </svg>
                            <span className="mx-2">Sign in with Google</span>
                        </button>
                        <Toaster />
                    </div>

                    <p className="mt-8 text-md font-light text-center text-gray-600"> Don't have an account? <NavLink to='/signUp' href="#" className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Create One</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
