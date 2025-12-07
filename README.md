# 🧳 Job Portal

A full-stack job board and recruitment platform built with the **MERN stack** — connecting job seekers and employers seamlessly.

🔗 **Live Demo:** [https://job-portal-gb9w.onrender.com](https://job-portal-gb9w.onrender.com)

---

## 🚀 Features

### For Job Seekers
- 🔍 Search and filter jobs by title, location, and keywords
- � Create and manage your profile
- 📄 Upload resume (PDF support)
- 📥 Apply to jobs and track application status

### For Recruiters/Employers
- 🏢 Register and manage company profiles
- 📋 Post new job listings
- 👁️ View applicants and their resumes
- ✅ Accept or reject applications

### General
- � Secure authentication with JWT
- 🍪 Cookie-based session management
- 📱 Responsive design for all devices

---

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React.js, Vite, Tailwind CSS, ShadCN UI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JWT, bcrypt, HTTP-only cookies |
| **File Storage** | Cloudinary |
| **Deployment** | Render |

---

## 📁 Project Structure

```
Job-Portal/
├── frontend/          # React frontend (Vite)
│   ├── src/
│   │   ├── components/    # UI components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── redux/         # Redux state management
│   │   └── utils/         # Utility functions
│   └── dist/              # Production build
│
├── backend/           # Express backend
│   ├── controllers/       # Route handlers
│   ├── models/            # Mongoose schemas
│   ├── routes/            # API routes
│   ├── middlewares/       # Auth middleware
│   └── utils/             # Cloudinary, DB config
│
└── README.md
```

---

## � Setup Instructions

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Cloudinary account

### 1. Clone the Repository
```bash
git clone https://github.com/Itwgd98/Job-Portal.git
cd Job-Portal
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret_key
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Run Development Servers
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

The frontend will run on `http://localhost:5173` and backend on `http://localhost:3000`.

---

## 🚀 Deployment

This project is configured for deployment on **Render**:

1. The frontend is built and placed in `backend/build`
2. The backend serves both API routes and the static frontend
3. Single service deployment with auto-deploy from GitHub

---

## 📝 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/user/register` | Register new user |
| POST | `/api/v1/user/login` | User login |
| GET | `/api/v1/user/logout` | User logout |
| POST | `/api/v1/user/profile/update` | Update profile |
| POST | `/api/v1/company/register` | Register company |
| GET | `/api/v1/company/get` | Get user's companies |
| POST | `/api/v1/job/post` | Post new job |
| GET | `/api/v1/job/get` | Get all jobs |
| GET | `/api/v1/application/get` | Get applied jobs |

---

## 👤 Author

**Gagan Dixit**
- GitHub: [@Itwgd98](https://github.com/Itwgd98)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
