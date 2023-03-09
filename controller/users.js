const { data } = require("../data");

const getAllUsers = (req, res) => {
  const { sort = "asc", search, limit } = req.query; //query param, default val = asc

  let newData = data.map((d) => {
    const { id, name } = d;
    return { id, name };
  });

  if (sort === "desc") newData.sort((a, b) => b.id - a.id);
  if (limit) newData = newData.slice(0, limit);
  if (search)
    newData = newData.filter((u) => u.name.toLowerCase().includes(search));

  return res.status(200).json(newData); // can add return as well, to ensure only one res in a route
};

const getUserById = (req, res) => {
  const { userID } = req.params;
  const user = data.filter((u) => u.id === Number(userID));
  user.length > 0
    ? res.status(200).json(user)
    : res.status(404).send("No Data Found");
};

module.exports = { getAllUsers, getUserById };
