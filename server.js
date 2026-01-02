import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

/* ---------------- API ---------------- */

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello 55 from Node.js on Render 🚀' });
});

/* ---------------- START ---------------- */

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
