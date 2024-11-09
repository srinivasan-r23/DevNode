const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect("mongodb+srv://srini23:srini23@devtinder.u15vr.mongodb.net/");
}

connectDB().then(() => {
    console.log('>>> DB established');
}).catch(err => {
    console.log('>>> err', err)
})
