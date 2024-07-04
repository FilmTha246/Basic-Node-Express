// เรียกใช้งาน express
import express from 'express';
// เรียนใช้งาน chalk
import chalk from 'chalk';
// เรียกใช้งาน debug
import createDebug from 'debug'
const debug = createDebug('app')
// เรียกใช้งาน morgan
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('combined'));

// จัดการกับ request ที่เข้ามา
app.get("/", (req,res) => {
    // คำสั่ง
    res.send("Hello borntoDev Co., Ltd.");
})

// รอฟังที่ port ของเรา
app.listen(port, () => {
    // คำสั่ง
    debug("Listening on port " + chalk.green(port));
})