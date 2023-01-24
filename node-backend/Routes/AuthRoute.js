import AccessTokenGenerator from "../Helpers/AccessTokenGenerator.js";
import express from "express";
import bcrypt from "bcryptjs";
import mongoConnection from "./../mongoConnection.js";
import { nanoid  } from "nanoid";
const Router = express.Router();

// route = /auth/regiser
Router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    let _dbCon = await mongoConnection.getDbCon();
    let collection = _dbCon.collection("users");
    const findOneRes = await collection.findOne({ email });

    if (findOneRes) {
      res.status(401).json({
        error: "user already exists",
      });
    } else {
      const saltrounds = parseInt(process.env.SALT_ROUNDS)
      const salt =  await bcrypt.genSalt(saltrounds);
      const hashedPassword = await bcrypt.hash(password, salt);
      const userID = nanoid(10);
      const userDetails = {
        userID : userID,
        firstName,
        lastName,
        email,
        password: hashedPassword,
      };
      const insertOneRes = await collection.insertOne(userDetails); // inserting into users collection
      collection = _dbCon.collection("userDetails"); // changed collection of the database
      const insertUserDetails = collection.insertOne({
        userID: userID,
        firstName : firstName,
        lastName : lastName,
        email : email,
      });   // inserting into userDetails collection
      res.status(201).json({
        success: "registered successfully",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      error: "database error",
    });
  }
});

//route /auth/login
Router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let _dbCon = await mongoConnection.getDbCon();
    let collection = _dbCon.collection("users");
    const findOneRes = await collection.findOne({ email });
    const isMatch = await bcrypt.compare(password, findOneRes.password);
    if (isMatch) {
      const AccessToken = AccessTokenGenerator(findOneRes.userID);
      res.status(200).json({
        firstName: findOneRes.firstName,
        lastName: findOneRes.lastName,
        accessToken: AccessToken,
      });
    } else {
      res.status(400).json({
        error: "incorrect password",
      });
    }
  } catch (err) {
    res.status(400).json({
      error: "database error",
    });
  }
});

export default Router;
