# Cera

For this solution I assumed there could be multiple pages and views, that's why App calls Carers - I'm explaining it because it might seem a bit strange to just add another level but that was why.

For the availability check endpoint, I guess in a real scenario we would have to send a carer id, but I ignored that now. Same with the bookSlot endpoint, which would be a POST with the carer id and slot as the body

I would have made for tests if I had more time, at least check the rendered Carers scene and its articles

Regarding CSS, I would have liked to use SASS and would have used nesting and variables for the colors and fonts, at least. To simplify, due to the time limit of this challenge, I just used CSS.

I would also have improved on the accessibility part, so the user could at least navigate with a keyboard, if I had more time.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!