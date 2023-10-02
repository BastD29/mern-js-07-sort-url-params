import express from "express";
import { users } from "./users.js";

const app = express();

const port = 7070;

app.use(express.json());

app.get("/users", (req, res) => {
  const sort = req.query.sort || "asc";
  const sortedUsers = users.sort((a, b) => {
    if (sort === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  res.json(sortedUsers);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
