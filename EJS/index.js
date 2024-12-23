import express from "express"; 

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const today = new Date("October 18, 2024 11:23:00");
let day = today.getDay();

let type =  "A weekDay"
let adv = "It's time to work"

if ( day === 1 || day === 6) {
    type = " A Weekend",
    adv = "It's time to rest"
}
res.render("index.ejs", { dayType: type, advice: adv });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});