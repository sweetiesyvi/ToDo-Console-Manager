# 📝 ToDo Multi-User Web App

---

## 👩‍💻👨‍💻 Team Members

* Karel Kisaku (@kkisaku)
* Syviwha Ngulungu (@sweetiesyvi[https://github.com/sweetiesyvi])

---

## 📌 App Idea

A simple **multi-user ToDo web application** where users can enter their name, receive a random avatar, and manage their personal tasks.

Each user has their own task list stored in a database.

---

## 👥 Target Users (User Story)

As a user, I want to enter my name, access my personal dashboard, and manage my tasks so that I can stay organized and track my work easily.

---

## ⚙️ Features

### 👤 User System

* [ ] Create user (name only, no password)
* [ ] Assign random avatar to each user
* [ ] Display list of users
* [ ] Navigate to user task page

---

### 📋 Task Management (CRUD)

* [ ] Add task
* [ ] Delete task
* [ ] Mark task as completed
* [ ] Display tasks per user

---

### 🎨 UI / UX Features

* [ ] Welcome message per user
* [ ] Alert messages for actions (add / delete / update)
* [ ] Simple clean interface
* [ ] Favicon icon added

---

## 🛠️ Tech Stack

* **Backend:** Node.js (Express)
* **Frontend:** HTML, CSS, JavaScript
* **Database:** MongoDB Atlas
* **Version Control:** GitHub
* **Deployment:** GCP VM (planned)

---

## 🏗️ Architecture

* `server.js` → main backend server
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

* [x] Advanced Architecture (Express + modular routes)
* [x] Database Integration (MongoDB Atlas)
* [x] CRUD System (full task management)
* [x] Authentication (user and password(not required) - simplified system)
* [x] UI / UX Improvement
* [ ] Deployment (GCP VM)

---

## 🚀 Milestones

### 🟢 M1 - Setup

* [ ] Setup Express server
* [ ] Connect MongoDB Atlas

### 🟡 M2 - User System

* [ ] Create user system
* [ ] Assign random avatar
* [ ] Display users list

### 🔵 M3 - Task System

* [ ] Add task
* [ ] Delete task
* [ ] Mark task as complete
* [ ] Get tasks per user

### 🟣 M4 - UI & Finalization

* [ ] Users page UI
* [ ] Tasks page UI
* [ ] Add welcome message
* [ ] Add alert notifications
* [ ] Add favicon

---

## 🔗 Project Links

* 📌 GitHub Repo: https://github.com/sweetiesyvi/ToDo-Console-Manager
* 📋 Issues: https://github.com/sweetiesyvi/ToDo-Console-Manager/issues
* 🧱 Milestones: https://github.com/sweetiesyvi/ToDo-Console-Manager/milestones
* ❄ Render: https://todo-console-manager.onrender.com

---

## 🔐 Access & Deployment

* Instructor added as collaborator
* MongoDB Atlas connected via environment variables (.env)
* SSH access prepared for GCP deployment
* Production ready architecture (future step)

---

## 🚀 How to Run Locally

```bash id="run1"
npm install
node server.js
```

Open browser:

```
http://localhost:3000
```
```
https://todo-console-manager.onrender.com
```

---

## 💡 Notes

This project focuses on:

* Clean architecture
* Simple CRUD logic
* Multi-user separation
* Scalable backend structure

No authentication was added to keep the project lightweight and within scope.

---
