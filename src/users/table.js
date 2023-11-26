import React, { useState, useEffect } from "react";
import { BsFillCheckCircleFill, BsPencil, BsPlusCircleFill, BsTrash3Fill } from "react-icons/bs";
import * as client from "./client";
import { Link } from "react-router-dom";

function UserTable() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState({ username: "", password: "", firstName: "", lastName: "", role: "USER" });

    const createUser = async () => {
        try {
            console.log("in createUser");
            const newUser = await client.createUser(user);
            console.log("newUser we get back: ", newUser);
            setUsers([newUser, ...users]);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };

    const selectUser = async (user) => {
        try {
            const u = await client.findUserById(user._id);
            setUser(u);
        } catch (err) {
            console.log(err);
        }
    }

    const updateUser = async () => {
        try {
            const status = await client.updateUser(user);
            setUsers(users.map((u) => (u._id === user._id ? user : u)));
        } catch (err) {
            console.log(err);
        }
    }

    const deleteUser = async (user) => {
        try {
            await client.deleteUser(user);
            setUsers(users.filter((u) => u._id !== user._id));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchUsers(); 
    }, []);

    return (
        <div className="container mt-4">
            <h1>User List</h1>
            <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="text" className="form-control" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </div>
            <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control" value={user.firstName} onChange={(e) => setUser({ ...user, firstName: e.target.value })} />
            </div>
            <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control" value={user.lastName} onChange={(e) => setUser({ ...user, lastName: e.target.value })} />
            </div>
            <div className="mb-3">
                <label className="form-label">Role</label>
                <select className="form-select" value={user.role} onChange={(e) => setUser({ ...user, role: e.target.value })}>
                    <option value="USER">User</option>
                    <option value="ADMIN">Admin</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="STUDENT">Student</option>
                </select>
            </div>
            <div className="d-flex w-25" style={{flexDirection: "column"}}>
            <button className="btn btn-primary mb-3" onClick={updateUser}>Update User <BsFillCheckCircleFill/></button>
            <button className="btn btn-primary mb-3" onClick={createUser}>Add User <BsPlusCircleFill/></button>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td><Link to={`/project/account/${user._id}`}>{user.username}</Link></td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td><button className="btn btn-warning mt-2 mb-2 me-2" onClick={() => selectUser(user)}><BsPencil className=""/></button>
                            <button className="btn btn-danger mt-2 mb-2" onClick={() => deleteUser(user)}><BsTrash3Fill/></button></td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;
