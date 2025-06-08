const express = require('express');
const tf = require('@tensorflow/tfjs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;
const isProduction = process.env.NODE_ENV === 'production';

app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Serve model files
app.use('/model', express.static(path.join(__dirname, 'model')));

let model;

async function loadModel() {
  try {
    // In production use a relative path, in development use full URL
    const modelPath = isProduction
      ? './model/model.json'  // Use relative path in production
      : `http://localhost:${port}/model/model.json`;
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
    const input = req.body;
    const inputArray = [
      input.CO, input.NS, input.BD, input.FV, 
      input.CP, input.SP, input.IS, input.LP,
      input.CH, input.LC, input.IR, input.LA, 
      input.LE, input.LN, input.SB, input.BMI
    ];
    
    // Create tensor and make prediction
    const tensor = tf.tensor2d([inputArray]);
    const prediction = model.predict(tensor);
    const result = prediction.dataSync()[0];
    
    // Cleanup tensors
    tensor.dispose();
    prediction.dispose();
    
    res.json({
      prediction: result > 0.5 ? "Ya" : "Tidak",
      probability: result
    });
  } catch (err) {
    console.error('Prediction error:', err);
    res.status(500).json({ error: err.message });
  }
});

// Handle SPA routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, '0.0.0.0', async () => {
  console.log(`🚀 Express backend running in ${isProduction ? 'production' : 'development'} mode on port ${port}`);
  await loadModel();
});
