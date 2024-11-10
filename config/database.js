const mongoose = require('mongoose');

main().then(() => {
        console.log('>>> DB established');
    }).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://srinismart2:GQRZ1iWxENulb78t@cluster0.6b8qg.mongodb.net/');
}