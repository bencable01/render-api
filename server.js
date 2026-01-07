import express from 'express';
import { db } from './db.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/* ----------- CORS ----------- */
const allowedOrigins = [
  'http://localhost:4200',
  'https://hello-render-dplb.onrender.com/'
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('CORS blocked'));
    }
  }
}));


/* ---------------- API ---------------- */

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello 55 from Node.js on Render 🚀' });
});

app.get('/api/users', (req, res) => {
  db.all('select username from test_users where id = 2', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows[0]['username']);
  });
});

/* ---------------- START ---------------- */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
