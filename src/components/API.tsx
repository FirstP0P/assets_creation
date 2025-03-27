import { useEffect, useState } from "react";

// Define a User type
interface User {
  id: number;
  name: string;
}

function API() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState<string>("");

  // ✅ Fetch Data (GET)
  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data)) // Type assertion
      .catch((err) => console.error("Error fetching users:", err));
  }, []);

  // ✅ Send Data (POST)
  const addUser = () => {
    if (!name.trim()) return;

    const newUser: Omit<User, "id"> = { name };

    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((createdUser: User) => setUsers([...users, createdUser]))
      .catch((err) => console.error("Error adding user:", err));

    setName(""); // Clear input after submission
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User List</h1>

      {/* Display Users */}
      <ul className="mt-2">
        {users.map((user) => (
          <li key={user.id} className="py-1">
            {user.name}
          </li>
        ))}
      </ul>

      {/* Input & Button */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name"
        className="border p-2 mr-2"
      />
      <button onClick={addUser} className="bg-blue-500 text-white p-2">
        Add User
      </button>
    </div>
  );
}

export default API;
