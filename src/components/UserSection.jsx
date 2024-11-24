import React, { useState, useEffect } from "react";
import { FaUserPlus, FaPen, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

const UserSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [
      { id: 1, name: "John Okafor", email: "john@example.com", role: "Admin", status: "Active" },
      { id: 2, name: "Ngozi Eze", email: "ngozi@example.com", role: "Teacher", status: "Active" },
      { id: 3, name: "Emeka Obi", email: "emeka@example.com", role: "Student", status: "Inactive" },
      { id: 4, name: "Chinonso Nwankwo", email: "chinonso@example.com", role: "Teacher", status: "Active" },
      { id: 5, name: "Adebayo Ogunleye", email: "adebayo@example.com", role: "Student", status: "Active" },
    ];
  });
  const [userRole, setUserRole] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 4;
  const [modalVisible, setModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "Teacher",
    status: "Active",
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (userRole === "All" || user.role === userRole)
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      const newUserWithId = { ...newUser, id: users.length + 1 };
      setUsers([...users, newUserWithId]);
      setNewUser({
        name: "",
        email: "",
        role: "Teacher",
        status: "Active",
      });
      setModalVisible(false);
    }
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setNewUser({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
    });
    setModalVisible(true);
  };

  const handleSaveEditUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === editingUser.id ? { ...user, ...newUser } : user
    );
    setUsers(updatedUsers);
    setModalVisible(false);
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="user-section p-6">
      <div className="flex flex-col md:flex-row items-center justify-between mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">User Management</h2>
        <div className="flex gap-4 items-center mt-4 md:mt-0">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-3 border rounded-full w-full md:w-72 shadow-md"
          />
          <button
            className="flex items-center gap-2 bg-blue-600 text-white p-3 rounded-full"
            onClick={() => setModalVisible(true)}
          >
            <FaUserPlus /> Add User
          </button>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex gap-4 mb-4">
          <select
            className="p-3 border rounded-full shadow-md"
            value={userRole}
            onChange={(e) => setUserRole(e.target.value)}
          >
            <option value="All">All Roles</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full table-auto hidden md:table">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Email</th>
                <th className="p-4 text-left">Role</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user) => (
                <motion.tr
                  key={user.id}
                  className="border-b hover:bg-gray-50"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <td className="p-4">{user.name}</td>
                  <td className="p-4">{user.email}</td>
                  <td className="p-4">{user.role}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full ${
                        user.status === "Active"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 flex gap-2">
                    <button
                      onClick={() => handleEditUser(user)}
                      className="text-yellow-500 hover:text-yellow-600"
                    >
                      <FaPen />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(user.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {/* Stacked view for mobile */}
          <div className="md:hidden">
            {currentUsers.map((user) => (
              <div key={user.id} className="bg-gray-50 p-4 mb-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold">{user.name}</h3>
                <p>{user.email}</p>
                <p>Role: {user.role}</p>
                <p>Status: <span className={`px-2 py-1 rounded-full ${user.status === "Active" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>{user.status}</span></p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEditUser(user)}
                    className="text-yellow-500 hover:text-yellow-600"
                  >
                    <FaPen />
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <button
            className="px-4 py-2 mx-1 border bg-primary text-white rounded-full"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 mx-1 border bg-primary text-white rounded-full"
            disabled={currentPage === Math.ceil(filteredUsers.length / usersPerPage)}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>

      {modalVisible && (
        <div className="modal bg-gray-800 bg-opacity-50 fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
            <h3 className="text-2xl font-semibold mb-4">{editingUser ? "Edit User" : "Add User"}</h3>
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              className="w-full p-3 border rounded-full mb-4"
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              className="w-full p-3 border rounded-full mb-4"
            />
            <select
              className="w-full p-3 border rounded-full mb-4"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="Teacher">Teacher</option>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
            </select>
            <select
              className="w-full p-3 border rounded-full mb-4"
              value={newUser.status}
              onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="flex justify-between">
              <button
                className="bg-gray-500 text-white p-3 rounded-full"
                onClick={() => setModalVisible(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white p-3 rounded-full"
                onClick={editingUser ? handleSaveEditUser : handleAddUser}
              >
                {editingUser ? "Save Changes" : "Add User"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSection;
