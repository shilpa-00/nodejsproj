import express from "express";
import mongoConnection from "../mongoConnection.js";
const Router = express.Router();

const Arraytypes = ['skills', 'sports', 'interests']

Router.post("/search", async (req, res) => {
    const { searchvalue, type } = req.body;
    try {
        let _dbCon = await mongoConnection.getDbCon();
        let collection = _dbCon.collection("userDetails");
        let queryObj = {}
        if (Arraytypes.includes(type)) {
            queryObj = {
                [type]: { $in: [searchvalue] }
            }
        } else {
            queryObj = { [type]: searchvalue }
        }

        const searchRes = await collection.find(queryObj, {
            projection: {
                _id: 0,
                userID: 1,
                firstName: 1,
                lastName: 1,
                email: 1,
                phonenumber: 1,
            }
        }).toArray();
        res.status(201).json({
            success: "searched successfully",
            data: searchRes
        })


    } catch (error) {
        res.status(401).json({
            error: "database error",
        })
    }
});



export default Router;