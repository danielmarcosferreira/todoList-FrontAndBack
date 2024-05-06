import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const users = []

app.post("/sign-up", (req, res) => {
    const { username, image, email, password } = req.body

    if (!username || !image || !email || !password) {
        console.log("ERROR!! You wrote something wrong ")
        return res.status(400).send({ message: "You wrote something wrong! Please confirm the data " })
    }

    const doesUserExist = users.find(user => user.username === username || user.email === email || user.image === image) 
    if (doesUserExist) {
        return res.status(409).send({message: "Conflict!! Try again !!"})
    }

    const newUser = { username, image, email, password }

    users.push(newUser)
    return res.send({message: "OK!"})
})

app.get("/sign-up", (req, res) => {
    console.log("OK!!")
    res.send(users)

})

app.listen(5151, () => console.log("App Runing in port 5151"))