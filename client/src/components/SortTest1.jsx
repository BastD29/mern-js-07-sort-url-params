import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SortTest1() {
  const navigate = useNavigate();
  const location = useLocation();

  const [users, setUsers] = useState([]);
  // const [sort, setSort] = useState("asc");

  const query = new URLSearchParams(location.search);
  const sort = query.get("sort") || "asc";

  useEffect(() => {
    fetchUsers();
  }, [sort]);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`/api/?sort=${sort}`);
      console.log("response:", response);
      const data = await response.json();
      console.log("data:", data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users", users);
    }
  };

  const handleSortChange = (e) => {
    // setSort(e.target.value);
    const newSort = e.target.value;
    navigate(`?sort=${newSort}`);
  };

  return (
    <>
      {/* <button onClick={() => setSort("asc")}>asc</button> */}
      {/* <button onClick={() => setSort("desc")}>desc</button> */}
      <label>
        Sort by:
        <select value={sort} onChange={handleSortChange}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </label>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} - {user.city}
          </li>
        ))}
      </ul>
    </>
  );
}
