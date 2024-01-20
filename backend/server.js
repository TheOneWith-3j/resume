// const express = require('express');
// const mysql = require('mysql');
// const cors = require('cors');
// const session = require('express-session');


// const app = express()
// app.use(cors())
// app.use(express.json());
// app.use(
//     session({
//       secret: 'f9e61ab609986b72597ca0c0845bc22e3c1d6daabd9873b17ef534adc90eacb9', // Change this to a secure secret
//       resave: false,
//       saveUninitialized: true,
//     })
//   );




// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'jejeprograms',
//     database: 'resume'
// })

// db.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL database:', err);
//     } else {
//       console.log('Connected to MySQL database');
//     }
//   });

//   app.post('/visit', (req, res) => {
//     const arrivalTime = new Date();
//     const departureTime = null;
  
//     // Check if a session variable exists indicating the user has already visited
//     if (!req.session.visited) {
//       // Insert a new record into the table
//       const insertQuery = 'INSERT INTO website_visits (arrival_time, departure_time) VALUES (?, ?)';
//       db.query(insertQuery, [arrivalTime, departureTime], (err, result) => {
//         if (err) {
//           console.error('Error inserting visit record:', err);
//           res.status(500).send('Internal Server Error');
//         } else {
//           // Set the session variable to indicate that the user has visited
//           req.session.visited = true;
//           res.status(200).send('Visit recorded successfully');
//         }
//       });
//     } else {
//       res.status(200).send('Visit already recorded');
//     }
//   });
  
//   // API to update departure time when the base URL changes
//   app.post('/update-departure', (req, res) => {
//     const departureTime = new Date();
//     const updateQuery = 'UPDATE website_visits SET departure_time = ? WHERE departure_time IS NULL';
//     db.query(updateQuery, [departureTime], (err, result) => {
//       if (err) {
//         console.error('Error updating departure time:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         // Clear the session variable indicating the user has visited
//         req.session.visited = false;
//         res.status(200).send('Departure time updated successfully');
//       }
//     });
//   });
  
//   // API to get website visit count
//   app.get('/visit-count', (req, res) => {
//     // Count the number of records in the table
//     const countQuery = 'SELECT COUNT(*) AS visitCount FROM website_visits WHERE departure_time IS NOT NULL';
//     db.query(countQuery, (err, result) => {
//       if (err) {
//         console.error('Error counting visits:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         const visitCount = result[0].visitCount;
//         res.status(200).json({ visitCount });
//       }
//     });
//   });

// app.get('/', (req,res)=>{
//     return res.json("Backend Connected");
// })

// // app.get('/site-count', (req,res)=>{
// //     const sql = "SELECT * From count";
// //     const cnt = db.visit.count();
// //     db.query(sql, (err,data)=>{
// //         if (err) return res.json(err);
// //         return res.json(data);
// //     })
// // })

// const PORT = process.env.PORT || 8081;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });













// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql');

// const app = express();
// const port = 8081;

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'jejeprograms',
//   database: 'resume',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection error:', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });

// // Store user sessions in memory (for simplicity; consider using a more robust solution in production)
// const userSessions = {};

// app.post('/visit', (req, res) => {
//   const { sessionId } = req.body;

//   if (!userSessions[sessionId]) {
//     // New user session
//     const arrivalTime = new Date();
//     userSessions[sessionId] = { arrivalTime, departureTime: null };

//     const insertQuery = 'INSERT INTO website_visits (arrival_time, departure_time) VALUES (?, ?)';
//     db.query(insertQuery, [arrivalTime, null], (err) => {
//       if (err) {
//         console.error('Error inserting visit record:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('Visit recorded successfully');
//       }
//     });
//   } else {
//     // Existing user session
//     res.status(200).send('Existing user session');
//   }
// });

// app.post('/leave', (req, res) => {
//   const { sessionId } = req.body;

//   if (userSessions[sessionId]) {
//     // Update departure time for the user session
//     const departureTime = new Date();
//     userSessions[sessionId].departureTime = departureTime;

//     const updateQuery = 'UPDATE website_visits SET departure_time = ? WHERE arrival_time = ?';
//     db.query(updateQuery, [departureTime, userSessions[sessionId].arrivalTime], (err) => {
//       if (err) {
//         console.error('Error updating departure time:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('Departure time updated successfully');
//         // Remove the user session from memory
//         delete userSessions[sessionId];
//       }
//     });
//   } else {
//     res.status(404).send('User session not found');
//   }
// });

// app.get('/visit-count', (req, res) => {
//   const countQuery = 'SELECT COUNT(*) AS visitCount FROM website_visits';
//   db.query(countQuery, (err, result) => {
//     if (err) {
//       console.error('Error counting visits:', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       const visitCount = result[0].visitCount;
//       res.status(200).json({ visitCount });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });














// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql');

// const app = express();
// const port = 8081;

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'jejeprograms',
//   database: 'resume',
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Database connection error:', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });

// // Store user sessions in memory (for simplicity; consider using a more robust solution in production)
// const userSessions = {};

// app.post('/visit', (req, res) => {
//   const { sessionId } = req.body;

//   if (!userSessions[sessionId]) {
//     // New user session
//     const arrivalTime = new Date();
//     userSessions[sessionId] = { arrivalTime, departureTime: null };

//     const insertQuery = 'INSERT INTO website_visits (arrival_time, departure_time) VALUES (?, ?)';
//     db.query(insertQuery, [arrivalTime, null], (err) => {
//       if (err) {
//         console.error('Error inserting visit record:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('Visit recorded successfully');
//       }
//     });
//   } else {
//     // Existing user session
//     res.status(200).send('Existing user session');
//   }
// });

// app.post('/leave', (req, res) => {
//   const { sessionId } = req.body;

//   if (userSessions[sessionId]) {
//     // Update departure time for the user session
//     const departureTime = new Date();
//     userSessions[sessionId].departureTime = departureTime;

//     const updateQuery = 'UPDATE website_visits SET departure_time = ? WHERE arrival_time = ?';
//     db.query(updateQuery, [departureTime, userSessions[sessionId].arrivalTime], (err) => {
//       if (err) {
//         console.error('Error updating departure time:', err);
//         res.status(500).send('Internal Server Error');
//       } else {
//         res.status(200).send('Departure time updated successfully');
//         // Remove the user session from memory
//         delete userSessions[sessionId];
//       }
//     });
//   } else {
//     res.status(404).send('User session not found');
//   }
// });

// app.get('/visit-count', (req, res) => {
//   const countQuery = 'SELECT COUNT(*) AS visitCount FROM website_visits';
//   db.query(countQuery, (err, result) => {
//     if (err) {
//       console.error('Error counting visits:', err);
//       res.status(500).send('Internal Server Error');
//     } else {
//       const visitCount = result[0].visitCount;
//       res.status(200).json({ visitCount });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });







const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = 8081;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jejeprograms',
  database: 'resume',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Store user sessions in memory (for simplicity; consider using a more robust solution in production)
const userSessions = {};

app.post('/visit', (req, res) => {
  const { sessionId } = req.body;

  if (!userSessions[sessionId]) {
    // New user session
    const arrivalTime = new Date();
    userSessions[sessionId] = { arrivalTime, departureTime: null };

    const insertQuery = 'INSERT INTO website_visits (arrival_time, departure_time) VALUES (?, ?)';
    db.query(insertQuery, [arrivalTime, null], (err) => {
      if (err) {
        console.error('Error inserting visit record:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('Visit recorded successfully');
      }
    });
  } else {
    // Existing user session
    res.status(200).send('Existing user session');
  }
});

app.post('/leave', (req, res) => {
  const { sessionId } = req.body;

  if (userSessions[sessionId]) {
    // Update departure time for the user session
    const departureTime = new Date();
    userSessions[sessionId].departureTime = departureTime;

    const updateQuery = 'UPDATE website_visits SET departure_time = ? WHERE arrival_time = ?';
    db.query(updateQuery, [departureTime, userSessions[sessionId].arrivalTime], (err) => {
      if (err) {
        console.error('Error updating departure time:', err);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).send('Departure time updated successfully');
        // Remove the user session from memory
        delete userSessions[sessionId];
      }
    });
  } else {
    res.status(404).send('User session not found');
  }
});

app.get('/visit-count', (req, res) => {
  const countQuery = 'SELECT COUNT(*) AS visitCount FROM website_visits';
  db.query(countQuery, (err, result) => {
    if (err) {
      console.error('Error counting visits:', err);
      res.status(500).send('Internal Server Error');
    } else {
      const visitCount = result[0].visitCount;
      res.status(200).json({ visitCount });
    }
  });
});

// New endpoint for client-side polling
app.post('/poll', (req, res) => {
  const { sessionId } = req.body;

  if (userSessions[sessionId]) {
    // Reset departure time to keep the session active
    userSessions[sessionId].departureTime = null;
    res.status(200).send('Session polled successfully');
  } else {
    res.status(404).send('User session not found');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




// const express = require('express');
// const app = express();
// const cors = require('cors');
// const fs = require('fs');

// app.use(cors()); // Prevents CORS error

// app.get('/api', function(req, res) {

//     if (req.url === '/favicon.ico') {
//         res.end();
//     } 
//     // Ends request for favicon without counting

//     const json = fs.readFileSync('count.json', 'utf-8');
//     const obj = JSON.parse(json);
//     // Reads count.json and converts to JS object

//     obj.pageviews = obj.pageviews+1;
//     if (req.query.type === 'visit-pageview') {
//         obj.visits = obj.visits+1;
//     }
//     // Updates pageviews and visits (conditional upon URL param value)

//     const newJSON = JSON.stringify(obj);
//     // Converts result to JSON

//     fs.writeFileSync('count.json', newJSON);
//     res.send(newJSON);
//     // Writes result to file and sends to user as JSON

// })

// app.listen(8081, () => {
//     console.log("Server running on port 8081");
// })