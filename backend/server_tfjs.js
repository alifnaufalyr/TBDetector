const express = require('express');
const tf = require('@tensorflow/tfjs');
const path = require('path');
const cors = require('cors');
const db = require('./db');  

const app = express();
const port = process.env.PORT || 3001;
const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';

app.use(cors({
  origin: ['https://tb-paru-capstone-production.up.railway.app', 'http://localhost:5173'],
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Serve model files
app.use('/model', express.static(path.join(__dirname, 'model')));

let model;

async function loadModel() {
  try {
    // In production, use local file path since we're serving it via express static
    const modelPath = process.env.NODE_ENV === 'production'
      ? '/model/model.json'  // Changed this line
      : 'http://localhost:3001/model/model.json';
    
    console.log('Loading model from:', modelPath);
    model = await tf.loadLayersModel(modelPath);
    console.log('✅ Model loaded successfully');
    return true;
  } catch (err) {
    console.error('Failed to load model:', err);
    return false;
  }
}

app.post('/predict', async (req, res) => {
  if (!model) {
    const loaded = await loadModel();
    if (!loaded) {
      return res.status(500).json({ error: 'Model not loaded' });
    }
  }

  try {
    const { fitur } = req.body;
    console.log('Received features:', fitur); // Debug log
    
    const tensor = tf.tensor2d([fitur]);
    const prediction = model.predict(tensor);
    const result = prediction.dataSync()[0];
    
    tensor.dispose();
    prediction.dispose();
    
    const predictionResult = {
      hasil_prediksi: result > 0.5 ? "Ya" : "Tidak",
      nilai_probabilitas: result
    };

    console.log('Prediction result:', predictionResult); // Debug log

    res.json(predictionResult);
  } catch (err) {
    console.error('Prediction error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Handle SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, host, async () => {
  console.log(`🚀 Express backend running in ${process.env.NODE_ENV} mode on ${host}:${port}`);
  await loadModel();
});
