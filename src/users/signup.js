import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";

function Signup() {
    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({ username: "", password: "" });
    const navigate = useNavigate();

    const signup = async () => {
        try {
            await client.signup(credentials);
            navigate("/project/account");
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const isPasswordEmpty = credentials.password.length === 0;

    return (
        <div className="container mt-4">
            <h1>Signup</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={credentials.username}
                    onChange={(e) => setCredentials({
                        ...credentials,
                        username: e.target.value
                    })} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({
                        ...credentials,
                        password: e.target.value
                    })} />
            </div>
            <button className="btn btn-primary" onClick={signup} disabled={isPasswordEmpty}>
                Signup
            </button>
        </div>
    );
}

export default Signup;
