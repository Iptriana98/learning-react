# GifExpertApp

Welcome to the GifExpertApp project! This guide will walk you through the steps to create a React application that allows users to search and display GIFs using the Giphy API. This project is part of the [Learn react](https://github.com/iptriana98/learning-react/tree/main) codebase.

## Prerequisites

Before you start, make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A code editor like [VS Code](https://code.visualstudio.com/)

## Step 1: Project Setup

1. **Create a new React app** using Vite. Vite is a build tool that significantly improves the frontend development experience. It's faster than traditional tools like Create React App.

    ```bash
    npm create vite@latest gif-expert-app -- --template react
    ```

2. **Navigate to your project directory**:

    ```bash
    cd gif-expert-app
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

## Step 2: Basic Structure

1. **Clean up** the project by removing unnecessary files created by Vite. For this project, you can delete all files inside the `src` directory except `main.jsx`.

2. **Create a new file** called `GifExpertApp.jsx` inside the `src` directory. This component will be the main component of your application.

    ```jsx
    // src/GifExpertApp.jsx
    const GifExpertApp = () => {
        return (
            <div>
                <h2>GifExpertApp</h2>
                <hr />
            </div>
        );
    }

    export default GifExpertApp;
    ```

3. **Update `main.jsx`** to render the `GifExpertApp` component.

    ```jsx
    // src/main.jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import GifExpertApp from './GifExpertApp';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <GifExpertApp/>
      </React.StrictMode>,
    )
    ```

## Step 3: Adding Search Functionality

1. **Update `GifExpertApp.jsx`** to include a form that allows users to enter a search term.

    ```jsx
    import { useState } from 'react';

    const GifExpertApp = () => {
        const [search, setSearch] = useState('');

        const handleSearchChange = (e) => {
            setSearch(e.target.value);
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            // Call the Giphy API or handle the search term
            console.log(search);
        }

        return (
            <div>
                <h2>GifExpertApp</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={search} 
                        onChange={handleSearchChange} 
                    />
                </form>
                <hr />
            </div>
        );
    }

    export default GifExpertApp;
    ```

## Step 4: Fetching GIFs from Giphy API

1. **Create a function** to fetch GIFs from the Giphy API. You'll need to [sign up for a Giphy API key](https://developers.giphy.com/).

    ```jsx
    const fetchGifs = async (searchTerm) => {
        const apiKey = 'YOUR_GIPHY_API_KEY';
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(searchTerm)}&limit=10&api_key=${apiKey}`;
        const response = await fetch(url);
        const { data } = await response.json();
        const gifs = data.map(img => ({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }));
        return gifs;
    }
    ```

2. **Use the `fetchGifs` function** in your `GifExpertApp` component to fetch GIFs when a search is submitted and display them.

    ```jsx
    const [gifs, setGifs] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newGifs = await fetchGifs(search);
        setGifs(newGifs);
        setSearch(''); // Clear the search input
    }

    // Inside the return statement, below the <hr /> tag
    <div>
        {
            gifs.map(({ id, title, url }) => (
                <div key={id}>
                    <h5>{title}</h5>
                    <img src={url} alt={title} />
                </div>
            ))
        }
    </div>
    ```

## Step 5: Running Your App

1. **Start the development server**:

    ```bash
    npm run dev
    ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see your GifExpertApp in action.

## Conclusion

Congratulations! You've built a simple React application that uses the Giphy API to search and display GIFs. This project covers the basics of React, including component structure, state management, and fetching data from an API.

Feel free to expand on this project by adding features like pagination, styling with CSS frameworks, or even deploying your app to a web server.

Happy coding!
