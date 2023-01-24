import express from 'express'
import AccessTokenVerifier from '../Middlewares/AccessTokenVerifier.js';
import mongoConnection from '../mongoConnection.js'


const Router = express.Router()
Router.use(AccessTokenVerifier)
Router.post("/getdetails", async (req, res) => {
    try {
        const _dbCon = await mongoConnection.getDbCon();
        const collection = _dbCon.collection("userDetails");
        const { userID } = req.body
        const findOneRes = await collection.findOne({ userID: userID })
        res.status(201).json(findOneRes)
    }
    catch (error) {
        res.status(404).json({
            error: "database error"
        })
    }
})

Router.post("/update", async (req, res) => {
    try {
        const _dbCon = await mongoConnection.getDbCon()
        const collection = _dbCon.collection("userDetails")
        const { userID } = req.body
        const {
            empID,
            phonenumber,
            experiences,
            skills,
            interests,
            sports,
            tshirtSize,
            food
        } = req.body
        const updateOneRes = await collection.updateOne({ userID: userID }, {
            $set: {
                empID,
                phonenumber,
                experiences,
                skills,
                interests,
                sports,
                tshirtSize,
                food
            }
        })
        res.status(200).json({
            success: "updated successfully"
        })
    } catch (err) {
        console.log(err)
        res.status(401).json({
            error: "database error",
        })
    }
})

export default Router  