# Recipe App

This is a web application for creating and sharing recipes. Currently, the application features a basic form for creating new recipes with client-side validation and API integration for saving recipes to a backend.  It also includes a basic navigation bar.

## Features Implemented So Far

* **Basic Form Validation:** The Create Recipe form includes validation to ensure all required fields (title, content, author) are filled before submitting. Error messages are displayed to the user if any fields are left blank.
* **API Integration (Create Recipe):** The application uses Axios to send a POST request to the backend API (`/create-post.php`) to save new recipes. The form submission includes a loading state and handles potential errors gracefully, displaying user-friendly messages.
* **Basic Navigation:** A navigation bar provides links to the Home, Create Recipe, and About pages, built using Bootstrap for styling and responsiveness.

## Upcoming Features

Future versions of the application will include:

* **More Complete Front-End:** The placeholder content will be replaced with fully functional pages for browsing recipes, viewing individual recipe details, and potentially user authentication and profiles.
* **Enhanced Functionality:**  Additional features such as searching, filtering, editing existing recipes, and user ratings/comments are planned.
* **Improved Styling:**  The overall look and feel of the app will be refined with more appealing styling and a better user experience.

## Technologies Used

* **React:** The front-end is built using React, a JavaScript library for building user interfaces.
* **Bootstrap:** Bootstrap is used for styling and responsive design, providing a clean and consistent look and feel.
* **Axios:** Axios handles HTTP requests, enabling communication with the backend API for saving and retrieving recipe data.

## Installation

This project was bootstrapped with [Create React App].

To run the application locally:

1. **Clone the repository:** `git clone <repository_url>`
2. **Navigate to the project directory:** `cd recipe-app`
3. **Install dependencies:** `npm install`
4. **Start the development server:** `npm start`

The application will then be accessible in your web browser at `http://localhost:3000`.

You will also need to have a backend API set up at the `/create-post.php` endpoint to handle the recipe creation requests. More detailed backend setup instructions will be provided separately.

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.
