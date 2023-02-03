import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    company: String,
    mobile: Number,
    message: String
})

const Contact = new mongoose.model("Contact", contactSchema)

//Routes
app.post("/login", (req, res)=> {
    const { email, password} = req.body
    User.findOne({ email: email}, (err, user) => {
        if(user){
            if(password === user.password ) {
                res.status(200).send({message: "Login Successfull", user: user})
            } else {
                console.log(err);
                res.status(401).send({ error: "Password didn't match"})
            }
        } else {
            res.send({message: "User not registered"})
        }
    })
}) 

app.post("/register", (req, res)=> {
    const { name, email, password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registerd"})
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                }
            })
        }
    })
    
}) 

app.post("/contact", (req, res)=> {
    const { name, email, company, mobile, message } = req.body
    Contact.findOne({email: email}, (err, contact) => {
        if(contact){
            res.send({message: "User already registerd"})
        } else {
            const contact = new Contact({
                name,
                email,
                company,
                mobile,
                message
            })
            contact.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Conatct, Save.." })
                }
            })
        }
    })
    
}) 

app.get("/contactlist", async (req, resp) => {
    const contact = await Contact.find();
    if (contact.length > 0) {
        resp.send(contact)
    } else {
        resp.send({ result: "No Contact found" })
    }
});

app.listen(9002,() => {
    console.log("BE started at port 9002");
});