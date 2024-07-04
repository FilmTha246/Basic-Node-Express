import express from 'express';
// สร้างตัวแปร contactRouter
const contactsRouter = express.Router();
// การส่งข้อมูลภายในเว็บแอปพลิเคชันขั้นสูง
import contacts from '../data/contacts.json' assert { type: 'json' };


// การ Navigate ระหว่างเว็บ และ สร้าง Router
contactsRouter.route("/").get((req, res) => {
    res.render("contacts", {
        contacts,
    }
    );
})

contactsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("contact", {
        contact: contacts[id]
    });
})

export default contactsRouter;