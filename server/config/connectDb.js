const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Database Connected');
    } catch (error) {
        console.error('Database Error', error);
        process.exit(1);
    }
};

module.exports = connectDb;