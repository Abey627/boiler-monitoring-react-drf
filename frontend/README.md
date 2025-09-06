# Boiler Monitoring System Frontend

A modern React application for monitoring and managing industrial boiler systems. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses Material-UI for its component system.

## Theme and Styling

The application implements a custom industrial theme designed specifically for boiler monitoring systems:

### Color Palette
- Primary: Industrial blue (#1E88E5) - Used for main actions and navigation
- Secondary: Warning orange (#FF9800) - Used for alerts and notifications
- Error: Critical red (#E53935) - Used for critical alerts
- Success: Green (#43A047) - Used for normal operation indicators
- Info: Light blue (#29B6F6) - Used for information indicators
- Background: Light gray (#F5F7FA) - Main background color

### Features
- Responsive Material-UI components
- Custom scrollbars for better user experience
- Smooth animations and transitions
- Status indicators for boiler states
- Hover effects on dashboard cards
- Page transition animations

### Theme Structure
The theme is organized in `src/theme/theme.ts` and includes:
- Custom palette configuration
- Typography settings
- Component style overrides
- Global CSS styles in `src/App.css`

### Usage
Components automatically adopt the theme when wrapped with `ThemeProvider`. Custom CSS classes are available for:
- Status indicators (`.status-normal`, `.status-warning`, `.status-critical`)
- Animations (`.fadeIn`, `.dashboard-card`)
- Page transitions (`.page-enter`, `.page-exit`)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
