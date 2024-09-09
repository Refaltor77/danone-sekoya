import ReactDOMServer from 'react-dom/server'; // Import server-side rendering methods from ReactDOM
import { createInertiaApp } from '@inertiajs/react'; // Import Inertia.js app creator
import createServer from '@inertiajs/react/server'; // Import Inertia.js server-side rendering utilities
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'; // Helper to resolve page components
import { route } from '../../vendor/tightenco/ziggy'; // Import the Ziggy route helper

// Retrieve application name from environment variables or default to 'Laravel'
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Create the server-side Inertia.js app
createServer((page) =>
    createInertiaApp({
        page,
        // Render pages to string for server-side rendering
        render: ReactDOMServer.renderToString,
        // Set the document title for each page
        title: (title) => `${title} - ${appName}`,
        // Resolve the page component for a given page name
        resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
        // Set up the app with additional props
        setup: ({ App, props }) => {
            // Define a global `route` function to use Ziggy for route generation
            global.route = (name, params, absolute) =>
                route(name, params, absolute, {
                    ...page.props.ziggy,
                    location: new URL(page.props.ziggy.location),
                });

            // Return the main app component with props
            return <App {...props} />;
        },
    })
);
