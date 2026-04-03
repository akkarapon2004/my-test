const express = require('express');
const path = require('path');
const { title } = require('process');

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
        { id: 1,img: "/image/works/ระบบสั่งกาแฟ.png",title: "ระบบสั่งกาแฟ และรับออเดอร์แบบเรียลไทม์", content: "ระบบจัดการและรับออเดอร์แบบเรียลไทม์ พัฒนาฝั่ง Back-end ด้วย Node.js เป็นหลัก พร้อมประยุกต์ใช้เทคโนโลยี Socket.io เพื่อจัดการการรับ-ส่งข้อมูลแบบสองทาง ช่วยให้ระบบสามารถอัปเดตสถานะคำสั่งซื้อได้ทันที ตอบสนองรวดเร็วโดยที่ผู้ใช้งานไม่ต้องรีเฟรชหน้าจอ"},
        { id: 2,img: "/image/works/line-chat.png",title: "ไลน์แชทบอท AI (โปรเจคจบมหาลัย)", content: "ระบบแชทบอทอัจฉริยะบนแพลตฟอร์ม LINE พัฒนา Webhook ด้วย Node.js เพื่อเชื่อมต่อกับโมเดลภาษา (DeepSeek API) พร้อมบูรณาการฐานข้อมูล Qdrant (Vector Database) ในการช่วยให้ AI สามารถค้นหาข้อมูลเชิงความหมายและตอบคำถามได้อย่างแม่นยำ"},
    ];
  
  // ส่งตัวแปร skillsData ไปที่ไฟล์ index.ejs ในชื่อ "skills"
    res.render('index.ejs', { skills: skillsData, works: workData});
})

module.exports = app;

