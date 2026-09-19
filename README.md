# Anjali Chilukuri - Professional Portfolio

A full-stack, production-quality MERN portfolio showcasing my projects, skills, and experience as a Software Engineer.

## 🚀 Features
- **Dynamic UI**: Beautiful, dark-themed, and responsive interface using React and Tailwind CSS.
- **Smooth Animations**: Integrated Framer Motion for scroll reveals, hover effects, and transitions.
- **Interactive Projects Gallery**: Filter projects by category with a detailed modal view.
- **RESTful API**: Custom Node.js/Express.js backend providing data for projects, experience, and contact messages.
- **Admin Dashboard**: Secure JWT-authenticated dashboard to manage portfolio content (CRUD operations) and read incoming messages.
- **SEO Optimized**: Semantic HTML and metadata configured for high visibility.

## 💻 Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, React Router DOM, Framer Motion, Axios, Lucide React
- **Backend**: Node.js, Express.js, JWT, bcrypt
- **Database**: MongoDB, Mongoose

## 🏗 Architecture & Folder Structure
```text
portfolio/
├── frontend/             # Vite + React Frontend
│   ├── public/           # Static assets (Resume PDF)
│   ├── src/
│   │   ├── assets/       # Images (Profile photo)
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Admin Login & Dashboard
│   │   └── services/     # Axios API configuration
│   └── package.json
├── backend/              # Node.js + Express Backend
│   ├── config/           # Database configuration
│   ├── controllers/      # Route controllers
│   ├── middleware/       # JWT Auth middleware
│   ├── models/           # Mongoose schemas
│   ├── routes/           # Express routes
│   ├── seeder.js         # Script to populate database
│   └── server.js         # Entry point
├── .env.example          # Environment variables template
└── README.md
```

## 🛠 Installation & Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

### 2. Environment Variables
Rename `.env.example` to `.env` in the root directory and configure your MongoDB connection:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

### 3. Backend Setup
```bash
cd backend
npm install
npm run seed  # (Optional: If you add a script in package.json to run seeder.js)
node seeder.js # Run this once to populate initial data and create admin user
node server.js # Starts backend on port 5000
```

### 4. Frontend Setup
Open a new terminal window:
```bash
cd frontend
npm install
npm run dev # Starts frontend on localhost:5173
```

## 🔑 Admin Setup
When you run `node seeder.js`, a default admin user is created:
- **Email**: admin@example.com
- **Password**: password123

Login at `http://localhost:5173/admin/login` to access the dashboard. **Change this password immediately** in a production environment or modify the seeder script before running it.

## 🚀 Deployment
- **Frontend**: Can be easily deployed to Vercel, Netlify, or GitHub Pages. Just run `npm run build` and serve the `dist` folder.
- **Backend & Database**: Can be deployed to Render, Heroku, or AWS. Ensure you set your environment variables correctly on the hosting provider and use MongoDB Atlas.
