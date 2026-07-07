# 🤖 AI Prompt Documentation

## 📌 Project Title

**ProDesk Onboarding Wizard**

---

# 📖 Project Objective

Develop a modern, responsive Multi-Step Employee Onboarding Wizard using React.js and Vite. The application should guide users through a structured registration process with validation, progress tracking, responsive design, and a professional user experience.

---

# 🎯 Core Requirements

## Technology Stack

- React.js
- Vite
- React Hook Form
- Zod Validation
- React Icons
- Context API
- CSS3
- LocalStorage

---

# 📋 Functional Requirements

## Step 1 – Personal Information

Collect:

- Full Name
- Email Address
- Phone Number
- Date of Birth

Requirements:

- Live Validation
- Error Messages
- Required Fields
- Responsive Layout

---

## Step 2 – Account Details

Collect:

- Username
- Password
- Confirm Password

Requirements:

- Password Strength Meter
- Show / Hide Password
- Strong Password Validation
- Password Match Validation

---

## Step 3 – Review & Submit

Display:

- Personal Information
- Account Information

Provide:

- Back Button
- Submit Button
- Success Screen

---

# 🎨 User Interface Requirements

Design a clean and modern interface featuring:

- Professional Navbar
- Animated Progress Stepper
- Responsive Form Layout
- Toast Notifications
- Dark Mode
- Smooth Animations
- Mobile-First Design

---

# 📱 Responsive Requirements

Support the following screen sizes:

- Mobile
- Tablet
- Laptop
- Desktop

---

# 🔐 Validation Requirements

Implement validation using:

- React Hook Form
- Zod

Validation Rules:

- Name: Minimum 3 characters
- Email: Valid email format
- Phone: Valid 10-digit mobile number
- Username: Minimum 4 characters
- Password:
  - Minimum 8 characters
  - One uppercase letter
  - One lowercase letter
  - One number
  - One special character
- Confirm Password must match Password

---

# 💾 Data Persistence

Store:

- Current Form Data
- Current Step
- Theme Preference

Use LocalStorage to restore the user's progress after page refresh.

---

# 🌙 Additional Features

- Dark Mode
- Toast Notifications
- Animated Progress Bar
- Password Strength Indicator
- Success Page
- Persistent Form Data
- Mobile Responsive Design

---

# 📂 Recommended Folder Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProgressBar.jsx
│   ├── PersonalInfo.jsx
│   ├── AccountDetails.jsx
│   ├── ReviewSubmit.jsx
│   ├── Success.jsx
│   └── Toast.jsx
│
├── context/
│   └── ThemeContext.jsx
│
├── schemas/
│   └── validationSchema.js
│
├── styles/
│   ├── App.css
│   ├── Form.css
│   ├── Navbar.css
│   ├── Footer.css
│   ├── Progress.css
│   ├── Responsive.css
│   └── Toast.css
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# 🎯 Learning Objectives

By completing this project, developers will gain experience with:

- React Components
- React Hooks
- React Hook Form
- Zod Validation
- Multi-Step Forms
- State Management
- Context API
- LocalStorage
- Responsive Web Design
- Dark Mode Implementation
- Form Validation
- User Experience Design

---

# 🏁 Expected Outcome

A production-ready onboarding application that:

- Provides a seamless multi-step registration experience
- Validates user input efficiently
- Preserves user progress
- Supports dark mode
- Works across all device sizes
- Demonstrates modern React development best practices

---

# 👨‍💻 Developer

**Arpit Raj Katiyar**

B.Tech – Computer Science & Engineering (AI & ML)

Kanpur Institute of Technology

Developed as part of the **ProDesk IT Internship – Sprint 7**.