var express = require("express");
var Student= require("../models/Student");
var router = express.Router();

router.put("/", (req, res) => {
    var body = req.body;
   
    let student = new Student();
    student.name=body.name;
    student.email=body.email;
    student.contact=body.contact;
    student.profile_pic=body.profile_pic;
    student.marksheet=body.marksheet;
    student.address=body.address;
    student.save().then((result) => {
        res.end(JSON.stringify({ status: "Success", data: result }))
    },
        (error) => {
            res.end(JSON.stringify({ status: "Failed",data:error }))
        })
});
router.delete("/", async (req, res) => {
    var body = req.body;
    await Student.findByIdAndDelete(body.id);
    res.end(JSON.stringify({ status: "Success" }))
});
router.post("/", async (req, res) => {
    var body = req.body;

    let student = await Student.findById(body.id);
    student.name = body.name;
    student.email = body.email;
    student.contact=body.contact;
    student.profile_pic=body.profile_pic;
    student.marksheet=body.marksheet;
    student.address=body.address;
    student.save().then((result) => {
        res.end(JSON.stringify({ status: "Success", data: result }))
    }, (error) => {
        res.end(JSON.stringify({ status: "Failed", data: result }))
    }
    )
});

router.get("/:id",async(req,res)=>{
    let data=await Student.findById(req.params.id);
    res.end(JSON.stringify({status:"Success",data:data}))
});






module.exports = router;