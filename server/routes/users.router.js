const express = require("express");
const users_router = express.Router();
const users_controller = require("../controllers/userControllers");
// const UsersAuthMiddleWare = require ("../middlewares/users.middlewares.js")
users_router.get("/users", users_controller.getAll);
users_router.get("/users/:id", users_controller.getOne);
users_router.post("/users/register", users_controller.post);
users_router.get("/users/verify/:token", users_controller.verify);
users_router.post("/users/login", users_controller.login);
users_router.delete("/users/:id", users_controller.delete);


module.exports = users_router