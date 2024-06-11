# React Learning Project

Welcome to the React Learning Project! This repository is designed to teach you the fundamentals of React by providing hands-on examples and explanations. Each lesson will cover a specific concept or feature of React, helping you build a solid understanding of how to create web applications using this powerful library.

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [Lessons](#lessons)
  - [Lesson 1: Basic React in an HTML File](#lesson-1-basic-react-in-an-html-file)
- [Contributing](#contributing)

## Introduction

This project is aimed at beginners who are just getting started with React. We will start with basic concepts and gradually move to more advanced topics. By the end of this project, you should have a good grasp of React and be able to build your own web applications.

### What is React?

React is a JavaScript library for building user interfaces, developed and maintained by Facebook. It allows developers to create large web applications that can update and render efficiently in response to data changes. React is component-based, which means the UI is built using small, reusable pieces of code called components.

### Components in React

In React, components are the building blocks of the user interface. They can be thought of as custom HTML elements that encapsulate their own structure, style, and behavior. Components can be composed together to build complex UIs. There are two types of components in React:
- **Functional Components**: These are simple functions that return JSX (JavaScript XML), which is a syntax extension that looks similar to HTML.
- **Class Components**: These are ES6 classes that extend from `React.Component` and include a `render` method to return JSX. (Note: Functional components are now preferred in modern React development due to the introduction of Hooks.)

## Setup

To get started with this project, you will need to clone the repository and set up your development environment.

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Iptriana98/learning-react.git
    cd react-learning-project
    ```

2. **Open the project in your favorite code editor**.

3. **Open `index.html` in a web browser** to see the first lesson in action.

## Lessons

### Lesson 1: Basic React in an HTML File

In this lesson, we will learn how to use React within an HTML file. We will set up a simple project that displays a "Hello World" message and a personalized greeting.

**Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>React App</title>
    
    <!-- Load React and ReactDOM -->
    <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
</head>
<body>
    <div id="root"></div>

    <script type="text/babel">
        // Define an component in React
        function App() {
            const name = 'Goku';
            return (
                <div>
                    <h1>Hello World</h1>
                    <h1>I'm {name}</h1>
                </div>
            );
        }

        // Render App component to div with id 'root'
        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>
```
**Explanation:**

- We include React and ReactDOM using CDN links.
- We define a React component named App.
- The App component renders a "Hello World" message and a personalized greeting.
- Finally, we use ReactDOM.render to render the App component inside the div with the id root.

## Contributing
If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name.
3. Make your changes and commit them: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature/your-feature-name.
5. Submit a pull request.

We welcome contributions of all kinds, including new lessons, bug fixes, and improvements.
