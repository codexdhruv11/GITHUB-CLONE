import { FaGithub } from "react-icons/fa";
import { FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleLoginWithGithub } from "../lib/function";

const LoginPage = () => {
    return (
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0 text-gray-200'>
            <div className='w-full max-w-md bg-gray-900/40 border border-gray-700/50 rounded-xl shadow-lg p-8 space-y-6'>
                <h1 className='text-2xl font-bold text-center text-gray-100'>Sign in to GitHub Explorer</h1>
                <button
                    type='button'
                    onClick={handleLoginWithGithub}
                    className='w-full flex items-center justify-center gap-2 p-3 bg-gray-800 hover:bg-gray-700/60 rounded-lg transition-colors'
                >
                    <FaGithub className='w-5 h-5' />
                    Continue with GitHub
                </button>

                <p className='text-gray-300 text-sm text-center'>
                    By signing in, you unlock all features of the app.
                    <FaUnlockAlt className='w-4 h-4 inline mx-1' />
                </p>

                <p className='text-sm font-light text-gray-300 text-center'>
                    Don't have an account?{" "}
                    <Link to='/signup' className='font-medium text-blue-500 hover:underline'>
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};
export default LoginPage;
