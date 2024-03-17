import express from "express";
import mongoose from "mongoose";
import db from "./model/registermodel.js";
import Complaint from "./model/complaint.model.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/complaint", async (req, res) => {
  const response = await Complaint.create(req.body);
  res.json(response);
});
app.post("/api/citizen", async (req, res) => {
  const response = await db.create(req.body);
  res.json(response);
});

app.post("/api/login", async (req, res) => {
  const { email, username, password } = req.body;
  const response = await db.findOne({
    email: email,
    username: username,
    password: password,
  });
  res.json(response);
});

app.get("/api/complaint", async (req, res) => {
  try {
    const result = await Complaint.find();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/citizen", async (req, res) => {
  try {
    const result = await db.find();
    res.send(result);
  } catch (error) {
    res.send(error);
  }
});

app.patch("/api/citizen/:_id", async (req, res) => {
  try {
    const _id = req.params._id;
    const up = await db.findByIdAndUpdate(_id, req.body);
    res.send(up);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/api/citizen/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const del = await db.findByIdAndDelete(_id);
    res.send(del);
  } catch (err) {
    res.send(err);
  }
});
app.get("/api/details/:email", async (req, res) => {
  try {
    const email = req.params.email;
    const data = await db.findOne(email, email);
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

// Define a new GET API endpoint that accepts email as a parameter
app.get("/api/complaints/:email", async (req, res) => {
  const userEmail = req.params.email;

  try {
    // Query the database to find data where the email matches
    const userComplaints = await Complaint.find({ email: userEmail });

    // Return the matching data as a JSON response
    res.json(userComplaints);
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ error: "Internal server error" });
  }
});

const mongo = mongoose
  .connect("mongodb://localhost:27017/citizen")
  .then(() => {
    console.log("connected");
    app.listen(5000, () => {
      console.log("port 5000");
    });
  })
  .catch((err) => {
    console.log("not working", err);
  });
