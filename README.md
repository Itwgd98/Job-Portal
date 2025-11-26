🧑‍💼 Job Portal – MERN Recruitment Platform

A modern, full-stack Job Recruitment Web Application built using the MERN Stack.
It enables job seekers to explore and apply for jobs, while employers can post & manage listings with secure, role-based authentication.

🚀 Live Demo:

👉 https://job-portal-gb9w.onrender.com/

🌟 Features
👤 User Features

Register & login securely

Browse all job listings

Apply to job posts

Update personal profile

Track submitted applications

🏢 Employer Features

Employer-based role access

Create job posts

Edit & delete job listings

View & manage applicants

🔐 Security

JWT Authentication

Route protection

Role-based authorization

🎨 UI/UX

Mobile-responsive

Built with Bootstrap + React

Clean & intuitive interface

🛠️ Tech Stack
Frontend

React.js

Axios

Bootstrap

Backend

Node.js

Express.js

JWT Authentication

Database

MongoDB (Mongoose)

Tools

VS Code

Git & GitHub

Postman

📁 Project Structure
Job-Portal/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── README.md
│
└── README.md

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Itwgd98/Job-Portal.git
cd Job-Portal

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=8000


Run backend:

npm start

3️⃣ Frontend Setup
cd ../frontend
npm install
npm start

🔌 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register (User/Employer)
POST	/api/auth/login	Login
POST	/api/job/create	Create job post (Employer)
GET	/api/job/get	Get all jobs
PUT	/api/job/edit/:id	Edit job
DELETE	/api/job/delete/:id	Delete job
POST	/api/job/apply/:id	Apply for job



🤝 Contributing

Contributions, issues, and feature requests are welcome.
Feel free to open a PR.

📜 License

This project is licensed under the MIT License.

👨‍💻 Author

Gagan Dixit
B.Tech – Electronics & Communication Engineering
IIIT Nagpur

🔗 Live Demo: https://job-portal-gb9w.onrender.com/

🔗 GitHub: https://github.com/Itwgd98
