import React, { useEffect } from "react";
import UserCreator from "../../src/user/user";
// import { useRouter } from 'next/router'

import { useState } from "react";


export default function login() {
    const [number, setNumber] = useState("");
    const [username, setUsername] = useState("");


    // useEffect(() => {

    // });

    function signIn(event) {
        // const router = useRouter();
        const user = new UserCreator(username, number)
        user.login();
        // if (localStorage.getItem("user_id").length > 0) {
        //     router.push("/home")
        // }
        event.preventDefault();

    }
    // const background = "https://media.istockphoto.com/vectors/customer-support-related-seamless-pattern-and-background-with-line-vector-id1201667381";
    return (
        <div className="h-screen w-full bg-gray-300"
        //  style={{ backgroundImage: `url(${background})` }}
        >

            <div className="max-w-screen-xl mx-auto flex justify-center items-center">
                <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 w-11/12 md:9/12 lg:w-2/5">
                    <div className="sm:mx-auto sm:w-full sm:max-w-xl">

                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to Whatsapp</h2>

                    </div>

                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
                        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="Phone Number" className="block text-sm font-medium text-gray-700">
                                        Username
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="Username"
                                            name="Username"
                                            type="text"
                                            onChange={(e) => setUsername(e.target.value)}
                                            value={username}
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="Phone Number" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="phone number"
                                            name="phone number"
                                            type="number"
                                            onChange={(e) => setNumber(e.target.value)}
                                            value={number}
                                            required
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>





                                <div>
                                    <button
                                        onClick={signIn}
                                        type="submit"
                                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}