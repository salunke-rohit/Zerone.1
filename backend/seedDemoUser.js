require('dotenv').config();

const { UserModel } = require('./model/UserModel');

const demoUser = {
  name: 'Demo User',
  email: 'demo@demo.test',
  password: 'Demo1234',
};

// Exported function: assumes mongoose is already connected.
async function seedDemoUser() {
  try {
    const existing = await UserModel.findOne({ email: demoUser.email });
    if (existing) {
      console.log('Demo user already exists:', existing.email);
      return existing;
    }

    const user = await UserModel.create(demoUser);
    console.log('Created demo user:', user.email);
    return user;
  } catch (err) {
    console.error('Seeding failed:', err.message || err);
    throw err;
  }
}

// If run directly, manage DB connection lifecycle for standalone seeding.
if (require.main === module) {
  const mongoose = require('mongoose');
  const uri = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/zerone';

  (async () => {
    try {
      await mongoose.connect(uri, { serverSelectionTimeoutMS: 5000 });
      console.log('Connected to MongoDB for seeding.');
      await seedDemoUser();
    } catch (err) {
      console.error('Seeding failed:', err.message || err);
    } finally {
      await mongoose.disconnect();
      console.log('Disconnected from MongoDB.');
    }
  })();
}

module.exports = { seedDemoUser };
