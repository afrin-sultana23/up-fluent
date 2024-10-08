
## Run Instructions

### Prerequisites
Before running the application, make sure you have:

- [Node.js](https://nodejs.org/) installed (v14 or higher).
- A [MongoDB](https://www.mongodb.com/) database (local or cloud instance, e.g., MongoDB Atlas).
- A [Firebase](https://firebase.google.com/) project set up for authentication.

### Installation and Running the Project

Follow the steps below to set up the development environment:

1. **Clone the repository**:
   ```bash
   cd up-fluent
   npm install
   npm run dev
   ```
   

---

# Up Fluent

Up Fluent is a language learning web application designed to help users improve their language skills in an interactive and engaging manner. The platform offers lessons, exercises, and real-time tracking of user progress, allowing learners to stay motivated while mastering new languages.

## Key Features

- **User Authentication**: Secure user registration and login system powered by Firebase Authentication.
- **Interactive Lessons**: Structured learning modules that adapt to the user's progress and language level.
- **Progress Tracking**: Users can track their language learning journey, reviewing past lessons and improving on weaker areas.
- **Responsive Design**: Built with React, Tailwind CSS, and DaisyUI, the app is fully responsive and mobile-friendly, providing an optimal experience across all devices.
- **Backend API**: An Express.js backend handles user data, lesson management, and progress tracking, with MongoDB serving as the database.


## Tech Stack

### Frontend
- **React**: For building a dynamic user interface.
- **Tailwind CSS**: For custom, responsive design.
- **DaisyUI**: Provides accessible and customizable UI components on top of Tailwind CSS.
- **Firebase Authentication**: Manages user authentication (sign-up, login, etc.).

### Backend
- **Express.js**: Manages API requests and responses, handles user data, and serves the application.
- **MongoDB**: Database used to store user information, language lessons, and progress data.

---
