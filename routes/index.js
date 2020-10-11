var express = require('express');
var router = express.Router();
var EmModel=require('../model/employee');
var employee=EmModel.find({});

/* GET home page. */
router.post('/',async (req,res)=>
{
  const data =new EmModel({
    name:req.body.name,
    jobId:req.body.jobId,
    sal:req.body.sal,
    email:req.body.email
})
try {
    const save= await data.save();
    res.send(save);

} catch (error) {
    console.log('Errror={$error}');
    res.send(`Error:${error}`);
    
}
})
router.get('/', function(req, res, next) {
  employee.exec((err,data)=>
  {
    if(err) throw err;  
    res.render('index', { title: 'Employee Records',records:data });
  })
});

module.exports = router;
