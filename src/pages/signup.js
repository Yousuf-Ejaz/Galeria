import React, { useContext, useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebase";

export default function SignUp() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [username, setUsername] = useState("");
    const [fullName, setFullName] = useState("");

    const [emailAddress, setEmailaddress] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const isInvalid = password === "" || emailAddress === "";

    const handleSignUp = async (event) => {
        event.preventDefault();

        const usernameExists = await doesUsernameExist(username);
        console.log('usernameExists', usernameExists);
        if (!usernameExists.length) {
            try {
                const createdUserResult = await firebase
                    .auth()
                    .createUserWithEmailAndPassword(emailAddress, password);

                await createdUserResult.user.updateProfile({
                    displayName: username,
                });

                await firebase.firestore().collection("users").add({
                    userId: createdUserResult.user.uid,
                    username: username.toLowerCase(),
                    fullName,
                    emailAddress: emailAddress.toLowerCase(),
                    following: [],
                    dateCreated: Date.now(),
                });

                history.push(ROUTES.DASHBOARD);
            } catch (error) {
                setFullName("");
                setEmailaddress("");
                setPassword("");
                setError(error.message);
            }
        } else {
            setError("That username is already taken, please try another.");
        }

    };

    useEffect(() => {
        document.title = "SignUp - Galeria";
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center h-screen ">
            <div className="flex w-3/5">
                <img
                    src="/images/iphone-with-profile.jpg"
                    alt="iPhone with Instagram app"
                    className="max-w-xs"
                />
            </div>

            <div className="flex flex-col w-2/5">
                <div className=" flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded">
                    <h1 className="flex justify-center w-full">
                        <img
                            src="/images/logo2.png"
                            alt="Galeria"
                            className="mt-2 w-6/12 mb-4"
                        />
                    </h1>
                    {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}

                    <form onSubmit={handleSignUp} method="POST">
                        <input
                            type="text"
                            aria-label="Enter your username"
                            placeholder="Username"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setUsername(target.value)}
                            value={username}
                        />

                        <input
                            type="text"
                            aria-label="Enter your full name"
                            placeholder="Full Name"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setFullName(target.value)}
                            value={fullName}
                        />

                        <input
                            type="text"
                            aria-label="Enter yyour email address"
                            placeholder="Email Address"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setEmailaddress(target.value)}
                            value={emailAddress}
                        />

                        <input
                            type="password"
                            aria-label="Enter yyour password"
                            placeholder="Password"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setPassword(target.value)}
                            value={password}
                        />
                        <button
                            disabled={isInvalid}
                            type="submit"
                            className={`bg-blue-medium text-white w-full rounded h-8 font-bold ${isInvalid && "opacity-50"
                                }`}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-white p-4 border rounded border-gray-primary ">
                    <p className="text-sm">Already have an account?{` `}</p>
                    <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
                        Log In
                    </Link>
                </div>
            </div>
        </div>
    );
}
