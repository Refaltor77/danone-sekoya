<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

        <link rel="icon" type="image/png" sizes="32x32" href="https://shop.bledina.com/themes/bledina/assets/img//favicon-32x32.png?1641570900">
        <link rel="icon" type="image/png" sizes="16x16" href="https://shop.bledina.com/themes/bledina/assets/img//favicon-16x16.png?1641570900">

        <!-- Scripts -->
        <script type="text/javascript" charset="UTF-8" src="//cdn.cookie-script.com/s/19f6d46291c3b3aa1a5cb517aebc250a.js"></script>

        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
        <script>
            function isInViewport(element) {
                const rect = element.getBoundingClientRect();
                return (
                    rect.top < window.innerHeight &&
                    rect.bottom > 0
                );
            }

            function checkElements() {
                const elements = document.querySelectorAll('.element');
                elements.forEach(element => {
                    if (isInViewport(element)) {
                        element.classList.add('visible');
                    }
                });
            }

            window.addEventListener('scroll', checkElements);
            window.addEventListener('load', checkElements);
        </script>
    </body>
</html>
