// const express = require('express');
// const cors = require('cors');
// const app = express();
// const port = 3000;

// app.use(express.json());
// app.use(cors({ origin: 'https://ubiquitous-enigma-49r5j667q5vf74vj-4200.app.github.dev' })); 

// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });

// // Example API endpoint
// app.get('/api/health', (req, res) => {
//   res.json({ status: 'ok' });
// });

// // Register endpoint
// app.post('/register', (req, res) => {
//   const { username, password } = req.body;
//   // Simple example: just echo back the username (no real user storage)
//   if (!username || !password) {
//     return res.status(400).json({ success: false, message: 'Username and password are required' });
//   }
//   // In a real app, you would save the user to a database here
//   res.json({ success: true, message: 'User registered', user: { username } });
// });

// // Login endpoint
// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   // Simple example: hardcoded credentials
//   // if (username === 'admin' && password === 'password') {
//   //   res.json({ success: true, message: 'Login successful' });
//   // } else {
//   //   res.status(401).json({ success: false, message: 'Invalid credentials' });
//   // }
//   console.log('Login attempt for user:', JSON.stringify(req.body));
//   res.json({ success: true, message: 'Login successful' });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
