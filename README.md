# 🎯 Quiz Management System

A full-stack Quiz Management System built with **React** and **Flask** that allows users to take quizzes, view scores, manage questions, and track leaderboard rankings through a clean and responsive web interface.

## 🚀 Live Demo

- Frontend: [https://quiz-management-system-dun.vercel.app/](https://quiz-management-system-dun.vercel.app/)
- Backend API: [https://quiz-management-system-h20x.onrender.com/](https://quiz-management-system-h20x.onrender.com/)

## ✨ Features

- 📝 Take interactive quizzes
- 📚 View all quiz questions
- ➕ Add new quiz questions
- 🏆 Leaderboard with scores
- 📊 Automatic score calculation
- ⚡ RESTful API integration
- 📱 Responsive user interface
- 🌐 Full-stack deployment

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

- File Handling (`question.txt` and `results.txt`)

### Deployment

- Vercel (Frontend)
- Render (Backend)

## 📂 Project Structure

```text
Quiz-Management-System
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
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

## 🔗 API Endpoints

| Method | Endpoint | Description |
| ------ | --------------- | ------------------------ |
| GET | `/` | Check API status |
| GET | `/questions` | Fetch all quiz questions |
| POST | `/submit` | Submit quiz answers |
| GET | `/leaderboard` | View leaderboard |
| POST | `/add_question` | Add a new question |

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/nandan83107/Quiz-Management-System.git
cd Quiz-Management-System
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

## 👨‍💻 Original Project Author

**Nandan**

GitHub: [https://github.com/nandan83107](https://github.com/nandan83107)git add README.md

## 👨‍💻 Repository Maintainer

**Nandan**

GitHub: [https://github.com/nandan83107](https://github.com/nandan83107)

---

⭐ If you like this project, consider giving it a star on GitHub!