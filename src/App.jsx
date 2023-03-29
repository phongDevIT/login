import React, { useState } from "react";

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailName = document.getElementById("email").value;
        const passUser = document.getElementById("password").value;
        console.log(emailName, passUser);
        emailName === "nguyenngocphong@gmail.com" && passUser === "123456"
            ? alert("successful")
            : alert("Fail");
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                autoComplete="off"
                onSubmit={handleSubmit}
                className="bg-white p-10 rounded-lg shadow-md w-[500px] h-[400px]"
            >
                <h2 className="text-2xl font-bold mb-5 p-5">Login</h2>
                <div className="mb-5">
                    <label htmlFor="email" className="block font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-400 p-2 rounded-lg"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="password" className="block font-bold mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-400 p-2 rounded-lg"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                    Login
                </button>
                <div className="mb-5">
                    <p className="text-center">
                        Don't have an account?{" "}
                        <a href="#" className="text-blue-500">
                            Register here
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default App;
