# Tweet Project

A simple and clean social media posting application built with Node.js and Express. Users can create, edit, and delete short posts with a 50-word limit.

## Features

- ✍️ Create posts with a 50-word limit
- 📊 Real-time word counter that updates as you type
- ✏️ Edit existing posts
- 🗑️ Delete posts
- 🎨 Clean, modern UI with responsive design
- 💬 View all posts in a feed

## Technologies Used

- **Backend**: Node.js, Express.js
- **Templating**: EJS (Embedded JavaScript)
- **Frontend**: HTML, CSS, Vanilla JavaScript
- **Styling**: Custom CSS with modern design patterns

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

* **Node.js** (LTS version recommended)
* **VS Code** (Visual Studio Code)
* **Git** (optional, for cloning repositories)

---

## 🚀 Getting Started

### **Step 1: Install Node.js**

1. Go to [nodejs.org](https://nodejs.org)
2. Download and install the **LTS (Long Term Support)** version
3. Verify the installation by running the following commands in your terminal:

   ```bash
   node --version
   npm --version
   ```

   You should see version numbers for both.

---

### **Step 2: Initialize an NPM Project**

In your VS Code terminal, run:

```bash
npm init -y
```

This command creates a `package.json` file with default configuration.

---

### **Step 3: Enable ES6 Modules**

Open the newly created `package.json` and add this line inside the top-level object:

```json
"type": "module"
```

This enables the use of modern ES6 `import` and `export` syntax.

---

### **Step 4: Install Dependencies**

Run the following command to install all required packages (e.g., Express, EJS):

```bash
npm install
```

---

### **Step 5: Run the Application**

Start your application by running:

```bash
node index.js
```

If everything is set up correctly, you should see your app running on **[http://localhost:3000](http://localhost:3000)** 🚀

---

