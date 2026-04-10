# 📝 ToDo Multi-User Web App

---

## 👩‍💻👨‍💻 Team Members

* [kkisaku](https://github.com/kkisaku22)
* [sweetiesyvi](https://github.com/sweetiesyvi)

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

* [x] Create user (name only, no password)
* [x] Assign random avatar to each user
* [x] Display list of users
* [x] Navigate to user task page

---

### 📋 Task Management (CRUD)

* [x] Add task
* [x] Delete task
* [x] Mark task as completed
* [x] Display tasks per user

---

### 🎨 UI / UX Features

* [x] Welcome message per user
* [x] Alert messages for actions (add / delete / update)
* [x] Simple clean interface

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
* [x] Deployment (GCP VM)

---

## 🚀 Milestones

### 🟢 M1 - Setup

* [x] Setup Express server
* [x] Connect MongoDB Atlas

### 🟡 M2 - User System

* [x] Create user system
* [x] Assign random avatar
* [x] Display users list

### 🔵 M3 - Task System

* [x] Add task
* [x] Delete task
* [x] Mark task as complete
* [x] Get tasks per user

### 🟣 M4 - UI & Finalization

* [x] Users page UI
* [x] Tasks page UI
* [x] Add welcome message
* [x] Add alert notifications

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
