import React from 'react'

const Login = () => {
    return (
        <div className="bg-gray-400 min-h-screen flex items-center justify-center">
            <div className="container mx-auto">
                <div className="flex justify-center px-6 my-6">
                    <div className="w-full h-[650px] xl:w-3/4 lg:w-11/12 flex">
                        <div
                            className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                            style={{
                                backgroundImage: "url('/images/login.jpg')",
                            }}
                        ></div>
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Login</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                                        Username
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                                        Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                    />
                                </div>
                                <div className="mb-4 flex items-center">
                                    <input className="mr-2 leading-tight" type="checkbox" id="remember" />
                                    <label className="text-sm text-gray-700" htmlFor="remember">
                                        Remember Me
                                    </label>
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                    >
                                        Login
                                    </button>
                                </div>
                                <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="#"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="text-center">
                                    <a
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="#"
                                    >
                                        Sign up Here
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
