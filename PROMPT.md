## Notice

The initial setup I done is mostly manual. The usage of the AI mainly modular and done based component or specific feature.

## Header component

Prompt: Create a responsive header component located in `/components/Header`. Style the header using the design token in the folder.

- The header contained a logo and single button space in between.
- The header must follow a mobile first design.
- In mobile view change the button into hamburger icon.

ps. then I manually adjust the design in scss according to my taste and feature\*

## Redux toolkit

Prompt: Setup and install redux toolkit based on the best practice folder structure. Also, setup RTK query using https://api.jikan.moe/v4

Add error handling for the api, use the mui snackbar component to handle and display the error. Make it reusable with concern of separation in mind.

\*After that I'm checking the setup manually for `getAnimeSearch` query. Then wrap it in custom hook and add error handling. So when I want to extend or add new query, AI will follow the flow of my setup.\*\*

## Card list component

Prompt: Create a card list component to display the `getAnimeSearch` query. Use the mobile first design approach.

\*The prompt is shorter since it will follow the way of previous style of component was made before. It will give a rough Ui and I need to manually polished it a bit to make it looks better and responsive\*\*

After cleaning the code and adjusting the design. I'm using the same apporached for other componenst like skeleton components and so on.

## Anime Search Application - Example Development Prompt if using AI

Build a modern, responsive web application for searching and discovering anime using the Jikan API. The application should provide a seamless user experience with advanced search capabilities, detailed anime information, and a polished UI.
