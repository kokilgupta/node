const mongoose=require('mongoose')
const DB=process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log("Success");
}).catch((err)=>{
    console.log("Failed");
})

module.exports=DB;