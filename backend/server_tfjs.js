const express = require('express');
const tf = require('@tensorflow/tfjs');
const path = require('path');
const cors = require('cors');
const db = require('./db');  

const app = express();
const port = process.env.PORT || 3001;
const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';

app.use(cors());
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Serve model files
app.use('/model', express.static(path.join(__dirname, 'model')));

let model;

async function loadModel() {
  try {
    // Ubah path model untuk production
    const modelPath = process.env.NODE_ENV === 'production'
      ? '/model/model.json'  
      : `file://${path.resolve(__dirname, 'model', 'model.json')}`;
    
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
    const { fitur } = req.body; // Mengambil fitur dari request body
    
    // Create tensor and make prediction
    const tensor = tf.tensor2d([fitur]);
    const prediction = model.predict(tensor);
    const result = prediction.dataSync()[0];
    
    // Cleanup tensors
    tensor.dispose();
    prediction.dispose();
    
    // Format response sesuai yang diharapkan frontend
    const predictionResult = {
      hasil_prediksi: result > 0.5 ? "Ya" : "Tidak",
      nilai_probabilitas: result
    };

    // Simpan ke database
    db.run(
      'INSERT INTO history (input, result) VALUES (?, ?)',
      [JSON.stringify(fitur), JSON.stringify(predictionResult)],
      (err) => {
        if (err) console.error('Database error:', err);
      }
    );

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
