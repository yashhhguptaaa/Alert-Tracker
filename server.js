const express = require("express");
const db= require('./db');
const branchRoutes = require('./routes/branchRoute');
const userRoutes = require('./routes/userRoute')
const EnquiryRoutes = require('./routes/enquiryRoute');
const path = require('path')


const app = express();
app.use(express.json());

app.use('/api/branches',branchRoutes);
app.use('/api/users',userRoutes);
app.use('/api/enquiries',EnquiryRoutes);


if(process.env.NODE_ENV === 'production'){
    app.use('/',express.static('client/build'))

    app.get('*' , (req,res) => {

        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    })
}

// app.get('/',(req,res)=> {
//     res.send("Server Working 🔥");
// });

const port = process.env.PORT || 5000;
app.listen(port,()=>{ console.log(`Server running on port 🔥 : ${port}`)});