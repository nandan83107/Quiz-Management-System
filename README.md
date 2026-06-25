# 🎯 Quiz Management System

A full-stack Quiz Management System built with **React** and **Flask** that allows users to take quizzes, view scores, manage questions, and track leaderboard rankings through a clean and responsive web interface.

## 🚀 Live Demo

🌐 Frontend: https://quiz-management-system-dun.vercel.app/

⚙️ Backend API: https://quiz-management-system-h20x.onrender.com/

---

## 📸 Preview

<img width="100%" alt="Quiz Management System" src="https://via.placeholder.com/1200x600?text=Quiz+Management+System" />

> Replace the above image with a screenshot of your project.

---

## ✨ Features

- 📝 Take interactive quizzes
- 📚 View all quiz questions
- ➕ Add new quiz questions
- 🏆 Leaderboard with scores
- 📊 Automatic score calculation
- ⚡ RESTful API integration
- 📱 Responsive user interface
- 🌐 Full-stack deployment

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- CSS

### Backend
- Flask
- Flask-CORS
- Python

### Data Storage
- File Handling (`question.txt` & `results.txt`)

### Deployment
- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

```
Quiz-Management-System
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
└── backend
    ├── app.py
    ├── file_handler.py
    ├── quiz.py
    ├── question.py
    ├── student.py
    ├── question.txt
    ├── results.txt
    └── requirements.txt
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Check API status |
| GET | `/questions` | Fetch all quiz questions |
| POST | `/submit` | Submit quiz answers |
| GET | `/leaderboard` | View leaderboard |
| POST | `/add_question` | Add a new question |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Praveen1758/Quiz-Management-System.git
```

### Backend

```bash
cd backend
pip install -r requirements.txt
python app.py
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📌 Future Enhancements

- MySQL Database Integration
- User Authentication
- Admin Dashboard
- Timer Based Quiz
- Difficulty Levels
- Categories
- Quiz History
- User Profiles
- Analytics Dashboard

---

## 👨‍💻 Author

**Praveen K**

- GitHub: https://github.com/Praveen1758

---

⭐ If you like this project, consider giving it a **Star** on GitHub!
