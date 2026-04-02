const express = require('express');
const path = require('path');

const app = express();
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    const skillsData = [
        { id: 1, img: "/image/html.png", skill: 80 },
        { id: 2, img: "/image/css.png", skill: 80 },
        { id: 3, img: "/image/js.png", skill: 80 },
        { id: 4, img: "/image/py.png", skill: 50 },
        { id: 5, img: "/image/node.png", skill: 70 },
        { id: 6, img: "/image/mysql.png", skill: 80 },
        { id: 7, img: "/image/mongo.png", skill: 50 },
        { id: 8, img: "/image/github.svg", skill: 50 },
        { id: 9, img: "/image/git.png", skill: 50 },
    ];
    const workData = [
        { id: 1,img: "/image/works/1.png",content: "ระบบ"},
        { id: 2,img: "/image/works/1.png",content: "ระบบ"},
    ];
  
  // ส่งตัวแปร skillsData ไปที่ไฟล์ index.ejs ในชื่อ "skills"
    res.render('index.ejs', { skills: skillsData, works: workData});
})

module.exports = app;

