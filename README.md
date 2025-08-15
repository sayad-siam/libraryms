# 📚 Library Management System

A web-based application to streamline the management of library resources — from adding and removing books to handling user authentication and lending activities. Built with *Node.js, **Express, **Bootstrap, **Handlebars, **Multer, and **Sequelize*.

---

## 🚀 Features

- *Book Management*
  - Add, remove, and edit book records
  - Store book cover images
- *User Authentication*
  - Secure login for Librarians and Members
  - Different permissions for different roles
- *Lending Process*
  - Borrow and return books
  - Track lending history
- *User Roles*
  - *Librarians*: Manage books and users
  - *Members*: Borrow/return books
  - *Viewers*: Browse the catalogue

---

## 🛠 Tech Stack

| Component    | Technology |
|--------------|------------|
| Backend      | Node.js + Express |
| Frontend     | Bootstrap + Handlebars |
| File Uploads | Multer |
| ORM          | Sequelize |
| Database     | SQLite |
| Rendering    | Handlebars Templating |

---

## 📦 Installation & Setup

### Clone the Repository
```
git clone https://github.com/yourusername/library-management-system.git
cd library-management-system
```

### Install Dependencies

```npm install```

### Database Setup

By default, the project uses SQLite. Sequelize will create the database file automatically when running migrations or starting the app.

```npx sequelize-cli db:migrate```

### Run the Application

```npm start```

The app will run on `http://localhost:3000`.

## 👤 User Roles

### Role	Permissions

| User         | Role       |
|--------------|------------|
| Librarian    | Full book and user management |
| Member       | Borrow and return books |
| Viewer       | View books only |

## 📂 Project Structure

library-management-system/

- public/          # Static assets (CSS, JS, Images)
- views/           # Handlebars templates
- routes/          # Express route files
- models/          # Sequelize models
- migrations/      # Sequelize migration files
- config/          # DB configuration
- app.js           # Main app entry
- package.json


## 🧑‍💻 Developer Notes

Express Routing → Docs

Handlebars Guide → Docs

Multer File Uploads → Docs

Bootstrap Styling → Docs

Sequelize ORM → Docs
