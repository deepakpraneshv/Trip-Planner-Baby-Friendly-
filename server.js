const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Use consistent port (matches frontend fetch)
const PORT = 5000;

// ✅ Connect to MongoDB
const DB_URI = process.env.MONGO_URI || 'mongodb+srv://ddeepak1106:kvd12345@cluster0.tpattwn.mongodb.net/babytrips?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// ✅ Mongoose schema
const TripSchema = new mongoose.Schema({
  destination: { type: String, required: [true, 'Destination is required'] },
  startDate: { type: String, required: [true, 'Start Date is required'] },
  endDate: { type: String, required: [true, 'End Date is required'] },
  transportMode: { type: String, required: [true, 'Transport Mode is required'] },
  notes: String,
  items: { type: [String], required: [true, 'At least one item is required'] }
});

const Trip = mongoose.model('Trip', TripSchema);

// ✅ POST /trips
app.post('/trips', async (req, res) => {
  try {
    console.log('Received POST data:', req.body);
    const trip = new Trip(req.body);
    await trip.save();
    res.status(201).json({ message: 'Trip added', data: trip });
  } catch (error) {
    console.error('❌ Error saving trip:', error.message);
    res.status(400).json({ message: 'Error saving trip', error: error.message });
  }
});

app.get('/trips', async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json({ message: 'Trips fetched successfully', data: trips });
  } catch (err) {
    console.error('Error fetching trips:', err);
    res.status(500).json({ message: 'Error fetching trips', error: err });
  }
});


// Handle unhandled promise rejections
process.on('unhandledRejection', (error) => {
  console.error('Unhandled Rejection:', error);
  process.exit(1);
});

// ✅ Start server
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
mongoose.set('debug', true);
