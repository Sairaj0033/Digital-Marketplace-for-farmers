// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');
// // // const productRoutes = require('./routes/authRoutes');
// // // const authRoutes = require('./routes/authRoutes');
// // // require('dotenv').config();

// // // const app = express();

// // // const corsOptions={
// // //     origin:"http://localhost:5173",
// // //     methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
// // //     Credentials:true,
// // // };
// // // app.use(cors());
// // // app.use(express.json());

// // // // Routes
// // // app.use('/api/products', productRoutes);
// // // app.use('/api/auth', authRoutes);

// // // // Database Connection
// // // const PORT = process.env.PORT || 5000;
// // // mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// // //     .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
// // //     .catch(err => console.log(err));

// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const productRoutes = require('./routes/productRoutes');
// // const authRoutes = require('./routes/authRoutes');
// // require('dotenv').config();

// // const app = express();

// // // Middleware
// // app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// // app.use(express.json());

// // // API Routes
// // app.use('/api/products', productRoutes);
// // app.use('/api/auth', authRoutes);

// // // Database Connection and Server Start
// // const PORT = process.env.PORT || 5000;
// // mongoose
// //     .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// //     .then(() => {
// //         app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
// //     })
// //     .catch((err) => console.error('Database connection error:', err));

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const productRoutes = require('./routes/productRoutes');
// const authRoutes = require('./routes/authRoutes');
// require('dotenv').config();

// const app = express();

// // Middleware
// const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];
// app.use(cors({
//     origin: (origin, callback) => {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true,
// }));
// app.use(express.json());

// // API Routes
// app.use('/api/products', productRoutes);
// app.use('/api/auth', authRoutes);

// // Database Connection and Server Start
// const PORT = process.env.PORT || 5000;
// mongoose
//     .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
//     })
//     .catch((err) => console.error('Database connection error:', err));

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// const productRoutes = require('./routes/productRoutes');
// require('dotenv').config();

// const app = express();

// const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

// app.use(cors({
//     origin: (origin, callback) => {
//         if (!origin || allowedOrigins.includes(origin)) {
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     },
//     credentials: true,
// }));
// app.use(express.json());

// // API Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);

// // MongoDB Connection and Server Initialization
// const PORT = process.env.PORT || 5000;
// const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/farmer-marketplace'; // Local fallback for development

// mongoose
//     .connect(mongoUri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     })
//     .then(() => {
//         console.log('Connected to MongoDB');
//         app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
//     })
//     .catch((err) => {
//         console.error('Database connection error:', err);
//     });


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
require('dotenv').config();

const app = express();

// Allowed Origins for CORS
const allowedOrigins = ['http://localhost:3000', 'http://localhost:5173'];

// CORS Middleware
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// Body Parsing Middleware with Increased Payload Size Limit
app.use(express.json({ limit: '10mb' })); // Increased JSON payload limit for large data
app.use(express.urlencoded({ limit: '10mb', extended: true })); // For handling form data

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// MongoDB Connection and Server Initialization
const PORT = process.env.PORT || 5000;
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/farmer-marketplace'; // Local fallback for development

mongoose
    .connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((err) => {
        console.error('Database connection error:', err);
    });

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});
