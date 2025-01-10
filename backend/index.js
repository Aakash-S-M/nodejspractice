const express = require("express");
const cors = require("cors");
const app = express();
const options = {origin:"*"}
app.use(cors(options));
app.use(express.json());

const data=["hello",123,{"key":"value"}];
app.get('/',(req,res) => {
    res.send(data)
})
let studentdata =[

 {
    name: "Aakash",
    age:19,
    rollnumber:123456
},
];
app.post('/student',(req,res) =>{ 
studentdata.push(req.body);
res.send("Done")
})
app.listen(3333,()=>{
    console.log("started hhg")
})