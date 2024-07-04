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
const port = 3000;

app.use(morgan('combined'));

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));

// จัดการกับ request ที่เข้ามา
app.get("/", (req,res) => {
    // คำสั่ง
    res.send("Hello Node-Express");
})

// รอฟังที่ port ของเรา
app.listen(port, () => {
    // คำสั่ง
    debug("Listening on port " + chalk.green(port));
})