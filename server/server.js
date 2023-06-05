// getting-started.js
import "dotenv/config";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";

// AUTHENTICATION
import { authenticateToken, refreshToken } from "./controllers/Auth/auth.controller.js";

// HANDLERS
// USER HANDLERS
import { handleRegister } from "./controllers/register.controller.js";
import { handleSignIn } from "./controllers/signin.controller.js";
import { handleSignOut } from "./controllers/signout.controller.js";

// EVENTS HANDLERS
import {
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
} from "./controllers/events.controller.js";

//  DATABSE INITIALIZATION
main()
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log("Something wrong with database connection", err));

async function main() {
  await mongoose.connect(process.env.DB_CONNECTION);
}

const app = express();
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES

// EVENT ROUTES
app.get("/events", authenticateToken, refreshToken, getEvents());
app.post("/events", authenticateToken, refreshToken, addEvent());
app.put("/events", authenticateToken, refreshToken, updateEvent());
app.delete("/events", authenticateToken, refreshToken, deleteEvent());

// USER ROUTES
app.post("/register", handleRegister(bcrypt));
app.post("/signin", handleSignIn(bcrypt));
app.delete("/signout", handleSignOut());

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
