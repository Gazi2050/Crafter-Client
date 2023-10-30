import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    updateProfile,
} from 'firebase/auth';

import toast, { Toaster } from 'react-hot-toast';
import auth from "../../Firebase/firebase.config";
import { AuthContext } from "../Provider/AuthProvider";

const SignUp = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignUp = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const username = e.target.username.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user)

            })
            .catch(error => {
                console.error(error)
            })
        setLoading(true);

        try {
            if (password.length < 6) {
                toast.error('Password should be at least 6 characters or longer');
            } else if (!/[A-Z]/.test(password)) {
                toast.error('Your password should contain uppercase characters');
            } else if (!/[a-z]/.test(password)) {
                toast.error('Your password should contain lowercase characters');
            } else if (!/[0-9]/.test(password)) {
                toast.error('Your password should contain numbers');
            } else if (!/[$@#&]/.test(password)) {
                toast.error('Your password should contain special characters ($, @, #, &)');
            } else {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                await updateProfile(user, {
                    displayName: username,
                });

                toast.success(`Signed up as ${email}`);

                // Clear the input fields on successful sign-up
                setUsername('');
                setEmail('');
                setPassword('');
                navigate('/')
            }
        } catch (error) {
            const errorMessage = error.message;
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="m-2">
                <div className="w-full max-w-sm p-6 m-auto mx-auto bg-slate-50 rounded-lg shadow-md dark:bg-gray-800">
                    <div className="flex justify-center mx-auto">
                        <img className="w-[17%]" src="/logo.png" alt="" />
                    </div>
                    <div className="text-center">
                        <p className="text-3xl font-medium">Create account</p>
                        <p className="text-slate-400">It's quick and easy.</p>
                    </div>

                    <form className="mt-6" onSubmit={handleSignUp}>
                        <div>
                            <label className="block text-sm text-gray-800 dark:text-gray-200">Username</label>
                            <input value={username}
                                onChange={(e) => setUsername(e.target.value)} required type="text" name="username" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-800 dark:text-gray-200">Email</label>
                            <input value={email}
                                onChange={(e) => setEmail(e.target.value)} required type="email" name="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email" />
                        </div>

                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <label className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                            </div>

                            <input value={password}
                                onChange={(e) => setPassword(e.target.value)} required type={showPassword ? 'text' : 'password'} name="password" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                            <div className="m-0.5" onClick={() => setShowPassword(!showPassword)}>
                                <span className="text-blue-500 dark:text-blue-400 hover:underline cursor-pointer text-sm font-medium">{showPassword ? 'Hide Password' : 'Show Password'}</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-900 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                                disabled={loading}
                            >
                                {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Sign Up'}
                            </button>
                            <Toaster />
                        </div>
                    </form>

                    <p className="mt-8 text-md font-light text-center text-gray-600">Already have an account? <NavLink to='/login' className="font-medium text-gray-700 dark:text-gray-200 hover:underline">LogIn</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
