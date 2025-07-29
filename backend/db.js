const mongoose = require('mongoose');

// Use const for safety
const mongoURI = 'mongodb+srv://kumarbisho02:kumarbisho02@foodapp1.aitryoc.mongodb.net/foodApp?retryWrites=true&w=majority&appName=foodApp1';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('✅ Connected to MongoDB');

    // const fetch_data = await mongoose.connection.db.collection('foodItem');
    // console.log('📦 Fetching food categories from the database...');

    // const data = await fetch_data.find({}).toArray(); // 👈 Await here!
    // console.log('🍽️ Food categories fetched successfully:', data);

    // console.log('🎉 Database connection established successfully');
  } catch (err) {
    console.error('❌ Error connecting to MongoDB:', err.message);
  }
};







// const mongoDB =async () => {
//     await mongoose.connect(mongoURI, () =>{
//         console.log("mongodb conected successfully");
//     })
// }

module.exports = mongoDB
