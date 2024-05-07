import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { MongoClient } from "mongodb"
import Joi from "joi"
import bcrypt from "bcrypt"

const newUserScheme = Joi.object({
    name: Joi.string().min(3).max(20).required(),
    image: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required()
})

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const mongoClient = new MongoClient(process.env.MONGO_URI)

try {
    await mongoClient.connect()
} catch (err) {
    console.log(err)
}

const db = mongoClient.db("users")
const userCollection = db.collection("users")

app.post("/sign-up", async (req, res) => {
    const body = req.body
    const { name, image, email, password } = req.body

    try {
        const isValid = await userCollection.findOne({ name })
        if (isValid) {
            return res.status(409).send({ message: "User already registered" })
        }

        const validation = newUserScheme.validate(body, { abortEarly: false })
        if (validation.error) {
            const errors = validation.error.details.map(error => error.message)
            return res.status(422).send(errors)
        }

        const hashPassword = bcrypt.hashSync(password, 10)

        await userCollection.insertOne({...body, password: hashPassword})
        res.status(201)
    } catch (err) {
        console.log(err)
        return res.status(409).send({ message: "ERROR" })
    }

    return res.send()
})

app.get("/sign-up", async (req, res) => {
    try {
        const participants = await userCollection.find().toArray()
        res.send(participants)
    } catch (err) {
        console.log(err)
        return res.status(400).send({message: "Error to get the participants"})
    }

})

app.listen(5151, () => console.log("App Runing in port 5151"))