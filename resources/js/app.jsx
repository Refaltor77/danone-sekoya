import './bootstrap'; // Import bootstrap setup
import '../css/app.css'; // Import application-specific styles

import { createRoot, hydrateRoot } from 'react-dom/client'; // Import ReactDOM methods for client-side rendering
import { createInertiaApp } from '@inertiajs/react'; // Import Inertia.js app creator
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'; // Helper to resolve page components

// Retrieve application name from environment variables or default to 'Laravel'
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    // Set the document title for each page
    title: (title) => `${title} - ${appName}`,
    // Resolve the page component for a given page name
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    // Set up the app rendering based on the environment
    setup({ el, App, props }) {
        if (import.meta.env.DEV) {
            // For development environment, use createRoot to render the app
            createRoot(el).render(<App {...props} />);
            return;
        }

        // For production, use hydrateRoot for server-side rendered content
        hydrateRoot(el, <App {...props} />);
    },
    // Set the color of the progress bar
    progress: {
        color: '#4B5563',
    },
});
