import './bootstrap';
import '../css/app.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

/* import the fontawesome core */
import {
    library
} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */

import {
    fas
} from '@fortawesome/free-solid-svg-icons'
import {
    far
} from '@fortawesome/free-regular-svg-icons'
import {
    fab
} from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(fas,far,fab)


const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
