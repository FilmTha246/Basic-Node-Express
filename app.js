// เรียกใช้งาน express
import express from 'express';
// เรียนใช้งาน chalk
import chalk from 'chalk';
// เรียกใช้งาน debug
import createDebug from 'debug'
const debug = createDebug('app')
// เรียกใช้งาน morgan
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 4000;

// การส่งข้อมูลภายในเว็บแอปพลิเคชันขั้นสูง
// const contacts = require("./data/contacts.json");
import contacts from './data/contacts.json' assert { type: 'json' };

// สร้างตัวแปร contactRouter
const contactRouter = express.Router();

app.use(morgan('combined'));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

app.set("views", "./src/views");
app.set("view engine", "ejs");

// การ Navigate ระหว่างเว็บ และ สร้าง Router
contactRouter.route("/").get((req, res) => {
    res.render("contacts",
        contacts,
    );
})

contactRouter.route("/1").get((req, res) => {
    res.send("Hi! I'm John");
})

app.use("/contactus", contactRouter)

// จัดการกับ request ที่เข้ามา
app.get("/", (req,res) => {
    // คำสั่ง
    res.render('index',{username: 'Filmfimi', customers: ["Kitti", "Kittikorn111", "Kitty"]});
})

// รอฟังที่ port ของเรา
app.listen(PORT, () => {
    // คำสั่ง
    debug("Listening on port " + chalk.green(PORT));
})