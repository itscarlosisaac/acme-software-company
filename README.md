# Acme Software Company

## About the Project

You are a web developer at the Acme Software Company. You are asked to build a polished prototype of a GIF browsing app. Since the back-end has not yet been created, you are asked to get started by using a publicly available API.

## Task
---
Your task is to create a single-page web application that leverages data from the Giphy API (https://github.com/Giphy/GiphyAPI).

Follow the instructions in the Debug tab to start your web server. Once you do, a placeholder for the app will be reachable at http://localhost:8000/ .

## Requirements

Your project will be manually reviewed and scored by an engineer according to the following requirements:

- The page should never reload.
- Provide a form for the user to perform a keyword search against the GIF database via the API.
- Display the results as still thumbnails on the page in a layout that makes sense. A large volume of results should load in a performance-minded fashion.
- Clicking on a thumbnail should launch a lightbox-style modal view that allows the user to browse through individual GIFs as a slideshow. The GIFs in this view should be fully animated.
- Create a polished visual design and user experience.
- Code in a clean, readable way following all normal conventions.
- The goal is for you to create your own lightbox and slideshow app - do not use a prebuilt solution.
- Develop and test your work using a desktop Chrome/Chromium browser. Your work will be manually reviewed using desktop Chrome/Chromium, exclusively.

## Technologies

- React JS
- Node JS
- Canvas
- Axios

## Run the Project

To run the project, open the terminal in the root directory.
- Run `yarn` in the terminal to install all the dependencies
- Run `yarn client` to run the project in the port 8000
- Open chrome and navigate to http://localhost:8000/

## Lightbox

- Supports arrow left or right to change image.
- Supports close by pressing the `esc` key