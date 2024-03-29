import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
import nodemailer from 'nodemailer'
import multer from 'multer'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family: 4
}, () => {
    console.log("DB connected")
})


// Upload image functionality start//
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix);
    }
});

const upload = multer({ storage: storage });

// Upload image functionality end//

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

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    image: String // add a new field for the image filename
});

const Form = mongoose.model("Form", formSchema);

//Routes
app.post("/login", (req, res) => {
    const { email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) {
                res.status(200).send({ message: "Login Successfull", user: user })
            } else {
                console.log(err);
                res.status(401).send({ error: "Password didn't match" })
            }
        } else {
            res.send({ message: "User not registered" })
        }
    })
})

app.post("/register", (req, res) => {
    const { name, email, password } = req.body
    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send({ message: "User already registerd" })
        } else {
            const user = new User({
                name,
                email,
                password
            })
            user.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Registered, Please login now." })
                }
            })
        }
    })

})

app.post("/contact", (req, res) => {
    const { name, email, company, mobile, message } = req.body
    Contact.findOne({ email: email }, (err, contact) => {
        if (contact) {
            res.send({ message: "User already registerd" })
        } else {
            const contact = new Contact({
                name,
                email,
                company,
                mobile,
                message
            })
            contact.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({ message: "Successfully Conatct, Save.." })
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

app.post('/formdata', upload.single('image'), (req, res) => {
    const { name, email, password } = req.body;

    const form = new Form({
        name,
        email,
        password,
        image: req.file ? req.file.filename : null // check if req.file exists before accessing its properties
    });

    form.save()
        .then(() => {
            res.status(201).json({ message: 'Data created successfully' });
        })
        .catch(error => {
            res.status(500).json({ error });
        });
});


// Email code Start using Nodemailer //

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_ID,
//         pass: process.env.PASSWORD
//     }
// });

// var mailOptions = {
//     from: 'nillvaghela11@gmail.com',
//     to: 'vaghelanill22@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy to send mail from Nill vaghela to send email first time via nodemailer!'
// };

// transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

// Email code end using Nodemailer //

// Email code Start using Nodemailer //

// app.post('/send-email', (req, res) => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_ID,
//             pass: process.env.PASSWORD
//         }
//     });

//     const mailOptions = {
//         from: 'nillvaghela11@gmail.com',
//         to: 'vaghelanill22@gmail.com',
//         subject: 'Sending Email using Node.js',
//         text: 'That was easy to send mail from Nill vaghela to send email first time via nodemailer!'
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//             res.status(500).send('Error sending email');
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.send('Email sent successfully');
//         }
//     });
// });

// Email code end using Nodemailer //

// Email code Start using Nodemailer //

app.post('/send-email', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.PASSWORD
        }
    });

    const { from, to, subject, text } = req.body;
    const mailOptions = {
        from,
        to,
        subject,
        text
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('Email sent successfully');
        }
    });
});

// Email code end using Nodemailer //

app.listen(9002, () => {
    console.log("BE started at port 9002");
});