const express = require("express")
const app = express()

app.use(express.json());	

//CREATING A ROOM
const rooms =[]

app.post("/rooms",(req,res)=>{
    req.body.id = rooms.length + 1;
    const roomDetails = req.body
   // console.log(roomDetails)
    if(roomDetails){
        rooms.push(roomDetails)
       // console.log(rooms)
        res.json({message:"Rooms Created"})
    }
    else{
        res.status(401).json({message:"something went wrong"})
    }
   
})

app.get("/roomsdetails",(req,res)=>{
    res.json(rooms)
})

//BOOKING A ROOM
const bookingRoom = []

app.post("/bookroom",(req,res)=>{
    req.body.id = bookingRoom.length + 1;
    const bookingRoomdetails = req.body;
    if(bookingRoomdetails){
        bookingRoom.push(bookingRoomdetails)
        res.json({message:"Room Booked"})
    }
    else{
        res.status(401).json({message:"something went wrong"})
    }
})

app.get("/bookroomsdetails",(req,res)=>{
    res.json(bookingRoom)
})

//list all rooms with booked data

const bookedData = []

app.post("/bookeddata",(req,res)=>{
    req.body.id = bookedData.length + 1;
    const bookedDatadetails = req.body;
    if(bookedDatadetails){
        bookedData.push(bookedDatadetails)
        res.json({message:"Room is booking"})
    }
    else{
        res.status(401).json({message:"something went wrong"})
    }
})

app.get("/bookeddatadetails",(req,res)=>{
    res.json(bookedData)
})

//list all customers with booked data

const customer = []

app.post ("/customer",(req,res)=>{
    req.body.id = customer.length + 1;
    const customerDetails = req.body;
    if(customerDetails){
        customer.push(customerDetails)
        res.json({message:"customer added"})
    }
    else{
        res.status(401).json({message:"something went wrong"})
    }
})

app.get("/customerdetails",(req,res)=>{
    res.json(customer)
})

app.listen(process.env.PORT || 3007)