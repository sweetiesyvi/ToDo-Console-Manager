# 📝 ToDo Multi-User Web App

---

## 👩‍💻👨‍💻 Team Members

* [kkisaku](https://github.com/kkisaku22)
* [sweetiesyvi](https://github.com/sweetiesyvi)

---

## 📌 App Idea

A simple **multi-user ToDo web application prototype** where users can enter their name, receive a random avatar, and manage their personal tasks.

Each user has their own task list stored in a MongoDB database.

---

## 👥 Target Users (User Story)

As a user, I want to enter my name, access my personal dashboard, and manage my tasks so that I can stay organized and track my work easily.

---

## ⚙️ Features

### 👤 User System

* Create user (name only, no password)
* Assign random avatar to each user
* Display list of users
* Navigate to user task page

---

### 📋 Task Management (CRUD)

* Add task
* Delete task
* Mark task as completed
* Display tasks per user
* 💬 Add comments on tasks *(planned for future)*

---

### 🎨 UI / UX Features

* Welcome message per user
* Alert messages for actions (add / delete / update)
* Simple clean interface
* Back navigation button *(planned for future improvement)*
---

## 🛠️ Tech Stack

* Backend: Node.js (Express)
* Frontend: HTML, CSS, JavaScript
* Database: MongoDB Atlas
* Version Control: GitHub
* Deployment: GCP VM 

---

## 🏗️ Architecture

* server.js → main backend server
* REST API → CRUD operations
* MongoDB → data storage
* Static HTML pages → frontend UI

---

## 📊 Product Backlog

### 🔷 Epics

* User Management
* Task Management
* UI / UX
* Database Integration

---

## 📦 Selected Capability Boxes (Pathway 1)

| Box                     | What We Did                                      | Evidence                               | Notes                             |
| ----------------------- | ------------------------------------------------ | -------------------------------------- | --------------------------------- |
| Advanced Architecture   | Built REST API using Node.js + Express           | https://github.com/sweetiesyvi/ToDo-Console-Manager/issues/7#issuecomment-4321325883                    | Clean backend structure           |
| Database Integration    | Used MongoDB Atlas for persistent storage        | MongoDB connection                     | Cloud-based database              |
| CRUD System             | Full task management (create/read/update/delete) | `/api/tasks` routes                    | Core system implemented           |
| UI / UX Improvement     | Alerts, avatars, navigation flow                 | HTML frontend pages                    | Better user experience            |
| Debugging               | Fixed Node.js ES module configuration issue      | Code fix (no external proof available) | Issue resolved during development |
| System / Infrastructure | Connected backend to MongoDB Atlas cloud DB      | `.env + server configuration`          | Full-stack setup                  |

---

## 🔧 Debug Case Study

### ❗ Problem
The Node.js server initially failed to run due to ES Module configuration issues.  
Setting up the GCP environment was also challenging due to limited available zones.

---

### 🧠 Cause
Mismatch between ES module syntax (import/export) and Node.js configuration.  
Additionally, some GCP regions had limited availability for free-tier resources.

---

### 🛠️ Fix
- Updated package.json to support ES modules  
- Ensured consistent syntax across backend files  
- Restarted server successfully  
- Searched across available GCP zones until a working configuration was found

---

### 📌 Important Note

No direct screenshots or external logs were captured during the debugging process.
However, the issue was identified and resolved during development, and the final working state is reflected in the current codebase.

---

## 🚀 Sprint 99 (Future Improvements)

### ✨ Planned Features

* Task editing functionality
* Advanced search/filter system
* Improved UI using Bootstrap or Tailwind
* Analyse of performance 
* User validation (prevent duplicate names)
* Authentication(password, authorization(verification short process))
* Better navigation flow (Back button implementation)
* Add timestamps to tasks
---

### 🛠️ Improvements

* Improve UI/UX structure
* The delete function for the task board

---

### 🐞 Known Limitations

* No authentication system (by design, prototype scope)
* Basic UI styling
* Comments system

---

### 💡 Design Philosophy

This project was intentionally built as a **prototype**, focusing on:

* Core CRUD functionality
* Multi-user separation
* Clean backend architecture
* MongoDB integration

Advanced features were intentionally deferred to future iterations.

---

## 🔗 Project Links

* 📌 GitHub Repo: https://github.com/sweetiesyvi/ToDo-Console-Manager
* 📋 Issues: https://github.com/sweetiesyvi/ToDo-Console-Manager/issues
* 🧱 Milestones: https://github.com/sweetiesyvi/ToDo-Console-Manager/milestones
*  ❄ Render: https://todo-console-manager.onrender.com
* ⚡ Web app: https://todo.barrycumbie.com/

---

## 🔐 Access & Deployment

* Instructor added as collaborator
* MongoDB Atlas connected via environment variables (.env)
* SSH access prepared for GCP deployment
* Production-ready structure (future step)

---

## 🚀 How to Run Locally

```bash id="runfinal1"
npm install
node server.js
```

Open browser:

```id="runfinal2"
http://localhost:3000
```

---

## 💡 Final Notes

This project demonstrates a full-stack prototype application with:

* Clean architecture
* REST API design
* MongoDB integration
* Multi-user task management

As a prototype, the focus was placed on core functionality rather than advanced UI or extended feature sets. Future improvements are clearly outlined in Sprint 99.
