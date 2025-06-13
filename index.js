// Dane z kategoriami i linkami
const categories = [
    {
        title: "CSS i Design",
        icon: "fa-solid fa-palette",
        iconColor: "text-orange-400",
        links: [
            {
                href: "https://neumorphic.design/",
                text: "Neumorphic ",
                description: "Projektowanie w stylu neumorfizmu",
                icon: "fa-solid fa-palette",
                iconColor: "text-orange-400",
                buttonBgColor: "var(--orange-bg)",
                buttonHoverBgColor: "var(--orange-hover-bg)",
                buttonHoverBorderColor: "var(--orange-hover-border)",
            },
            {
                href: "https://www.fotor.com/",
                text: "Fotor",
                description: "Edycja zdjęć online",
                icon: "fa-solid fa-image",
                iconColor: "text-orange-400",
                buttonBgColor: "var(--orange-bg)",
                buttonHoverBgColor: "var(--orange-hover-bg)",
                buttonHoverBorderColor: "var(--orange-hover-border)",
            },
            {
                href: "https://katendeglory.github.io/soft-ui-library/",
                text: "Soft UI Library",
                description: "Biblioteka komponentów Soft UI",
                icon: "fa-solid fa-cube",
                iconColor: "text-orange-400",
                buttonBgColor: "var(--orange-bg)",
                buttonHoverBgColor: "var(--orange-hover-bg)",
                buttonHoverBorderColor: "var(--orange-hover-border)",
            },
            {
                href: "https://neumorphism.io/#e0e0e0",
                text: "Neumorphism ",
                description: "Generator stylów neumorfizmu",
                icon: "fa-solid fa-magic",
                iconColor: "text-orange-400",
                buttonBgColor: "var(--orange-bg)",
                buttonHoverBgColor: "var(--orange-hover-bg)",
                buttonHoverBorderColor: "var(--orange-hover-border)",
            },
            {
                href: "https://getcssscan.com/css-box-shadow-examples",
                text: "CSS Box Shadow",
                description: "Przykłady cieni w CSS",
                icon: "fa-solid fa-box-open",
                iconColor: "text-orange-400",
                buttonBgColor: "var(--orange-bg)",
                buttonHoverBgColor: "var(--orange-hover-bg)",
                buttonHoverBorderColor: "var(--orange-hover-border)",
            },
            {
                href: "https://getcssscan.com/css-buttons-examples",
                text: "CSS Buttons ",
                description: "Przykłady przycisków w CSS",
                icon: "fa-solid fa-hand-pointer",
                iconColor: "text-orange-400",
                buttonBgColor: "var(--orange-bg)",
                buttonHoverBgColor: "var(--orange-hover-bg)",
                buttonHoverBorderColor: "var(--orange-hover-border)",
            },
            {
                href: "https://getcssscan.com/css-checkboxes-examples",
                text: "CSS Checkboxes",
                description: "Przykłady pól wyboru w CSS",
                icon: "fa-solid fa-square-check",
                iconColor: "text-orange-400",
                buttonBgColor: "var(--orange-bg)",
                buttonHoverBgColor: "var(--orange-hover-bg)",
                buttonHoverBorderColor: "var(--orange-hover-border)",
            },
            {
                href: "https://csspro.com/css-gradients",
                text: "CSS Gradients",
                description: "Przykłady gradientów w CSS",
                icon: "fa-solid fa-droplet",
                iconColor: "text-orange-400",
                buttonBgColor: "var(--orange-bg)",
                buttonHoverBgColor: "var(--orange-hover-bg)",
                buttonHoverBorderColor: "var(--orange-hover-border)",
            },
            {
                href: "https://csspro.com/svg-to-background-image-css",
                text: "SVG to CSS ",
                description: "Konwerter SVG na tło CSS",
                icon: "fa-solid fa-vector-square",
                iconColor: "text-orange-400",
                buttonBgColor: "var(--orange-bg)",
                buttonHoverBgColor: "var(--orange-hover-bg)",
                buttonHoverBorderColor: "var(--orange-hover-border)",
            },
            {
                href: "https://csspro.com/css-3d-buttons",
                text: "CSS 3D Buttons",
                description: "Przykłady przycisków 3D w CSS",
                icon: "fa-solid fa-cube",
                iconColor: "text-orange-400",
                buttonBgColor: "var(--orange-bg)",
                buttonHoverBgColor: "var(--orange-hover-bg)",
                buttonHoverBorderColor: "var(--orange-hover-border)",
            },
        ],
    },
    {
        title: "Generatory CSS",
        icon: "fa-solid fa-droplet",
        iconColor: "text-blue-400",
        links: [
            {
                href: "https://www.bestcssbuttongenerator.com/",
                text: "CSS Button ",
                description: "Generator przycisków CSS",
                icon: "fa-solid fa-hand-pointer",
                iconColor: "text-blue-400", // Blue icon
                buttonBgColor: "var(--blue-bg)", // Blue
                buttonHoverBgColor: "var(--blue-hover-bg)",
                buttonHoverBorderColor: "var(--blue-hover-border)",
            },
            {
                href: "https://www.cssportal.com/",
                text: "CSS",
                description: "Portal  CSS",
                icon: "fa-solid fa-code",
                iconColor: "text-blue-400",
                buttonBgColor: "var(--blue-bg)",
                buttonHoverBgColor: "var(--blue-hover-bg)",
                buttonHoverBorderColor: "var(--blue-hover-border)",
            },
            {
                href: "https://www.gradient-animator.com/",
                text: "Gradient Animator",
                description: "Animowane gradienty",
                icon: "fa-solid fa-droplet",
                iconColor: "text-blue-400",
                buttonBgColor: "var(--blue-bg)",
                buttonHoverBgColor: "var(--blue-hover-bg)",
                buttonHoverBorderColor: "var(--blue-hover-border)",
            },
            {
                href: "https://www.transparenttextures.com/",
                text: "Transparent Textures",
                description: "Przezroczyste tekstury",
                icon: "fa-solid fa-th",
                iconColor: "text-blue-400",
                buttonBgColor: "var(--blue-bg)",
                buttonHoverBgColor: "var(--blue-hover-bg)",
                buttonHoverBorderColor: "var(--blue-hover-border)",
            },
            {
                href: "https://wweb.dev/resources/creative-hover-effects",
                text: " Hover Effects",
                description: "Efekty hover",
                icon: "fa-solid fa-mouse-pointer",
                iconColor: "text-blue-400",
                buttonBgColor: "var(--blue-bg)",
                buttonHoverBgColor: "var(--blue-hover-bg)",
                buttonHoverBorderColor: "var(--blue-hover-border)",
            },
            {
                href: "https://wweb.dev/resources/navigation-generator",
                text: "Navigation Generator",
                description: "Generator nawigacji",
                icon: "fa-solid fa-compass",
                iconColor: "text-blue-400",
                buttonBgColor: "var(--blue-bg)",
                buttonHoverBgColor: "var(--blue-hover-bg)",
                buttonHoverBorderColor: "var(--blue-hover-border)",
            },
            {
                href: "https://wweb.dev/resources/animated-css-background-generator",
                text: "Animated CSS ",
                description: "Animowane tła CSS",
                icon: "fa-solid fa-film",
                iconColor: "text-blue-400",
                buttonBgColor: "var(--blue-bg)",
                buttonHoverBgColor: "var(--blue-hover-bg)",
                buttonHoverBorderColor: "var(--blue-hover-border)",
            },
            {
                href: "https://www.minimamente.com/cssboxshadow/",
                text: "CSS Box Shadow",
                description: "Generator cieni CSS",
                icon: "fa-solid fa-box-open",
                iconColor: "text-blue-400",
                buttonBgColor: "var(--blue-bg)",
                buttonHoverBgColor: "var(--blue-hover-bg)",
                buttonHoverBorderColor: "var(--blue-hover-border)",
            },
        ],
    },
    {
        title: "Edytory Kodu",
        icon: "fa-solid fa-terminal",
        iconColor: "text-green-400",
        links: [
            {
                href: "https://jsfiddle.net/",
                text: "JSFiddle",
                description: "Edytor kodu online",
                icon: "fa-solid fa-terminal",
                iconColor: "text-green-400", // Green icon
                buttonBgColor: "var(--green-bg)", // Green
                buttonHoverBgColor: "var(--green-hover-bg)",
                buttonHoverBorderColor: "var(--green-hover-border)",
            },
            {
                href: "https://www.w3schools.com/howto/tryit.asp",
                text: "W3Schools Try It",
                description: "Edytor W3Schools",
                icon: "fa-solid fa-code",
                iconColor: "text-green-400",
                buttonBgColor: "var(--green-bg)",
                buttonHoverBgColor: "var(--green-hover-bg)",
                buttonHoverBorderColor: "var(--green-hover-border)",
            },
            {
                href: "https://codepen.io/pen/",
                text: "CodePen Editor",
                description: "Edytor front-end",
                icon: "fa-solid fa-pen-to-square",
                iconColor: "text-green-400",
                buttonBgColor: "var(--green-bg)",
                buttonHoverBgColor: "var(--green-hover-bg)",
                buttonHoverBorderColor: "var(--green-hover-border)",
            },
            {
                href: "https://codepen.io/trending",
                text: "CodePen Trending",
                description: "Popularne projekty",
                icon: "fa-solid fa-fire",
                iconColor: "text-green-400",
                buttonBgColor: "var(--green-bg)",
                buttonHoverBgColor: "var(--green-hover-bg)",
                buttonHoverBorderColor: "var(--green-hover-border)",
            },
            {
                href: "https://freecodez.com/create/html",
                text: " HTML Editor",
                description: "Edytor HTML",
                icon: "fa-solid fa-file-code",
                iconColor: "text-green-400",
                buttonBgColor: "var(--green-bg)",
                buttonHoverBgColor: "var(--green-hover-bg)",
                buttonHoverBorderColor: "var(--green-hover-border)",
            },
            {
                href: "https://getuikit.com/",
                text: "UIKit",
                description: "Framework front-end",
                icon: "fa-solid fa-layer-group",
                iconColor: "text-green-400",
                buttonBgColor: "var(--green-bg)",
                buttonHoverBgColor: "var(--green-hover-bg)",
                buttonHoverBorderColor: "var(--green-hover-border)",
            },
        ],
    },
    {
        title: "Ikony",
        icon: "fa-solid fa-icons",
        iconColor: "text-yellow-400",
        links: [
            {
                href: "https://icones.js.org/",
                text: "Icônes",
                description: "Ikony SVG",
                icon: "fa-solid fa-icons",
                iconColor: "text-yellow-400", // Yellow icon
                buttonBgColor: "var(--yellow-bg)", // Yellow
                buttonHoverBgColor: "var(--yellow-hover-bg)",
                buttonHoverBorderColor: "var(--yellow-hover-border)",
            },
            {
                href: "https://tablericons.com/",
                text: "Tabler Icons",
                description: "Ikony Tabler",
                icon: "fa-solid fa-icons",
                iconColor: "text-yellow-400",
                buttonBgColor: "var(--yellow-bg)",
                buttonHoverBgColor: "var(--yellow-hover-bg)",
                buttonHoverBorderColor: "var(--yellow-hover-border)",
            },
            {
                href: "https://icons.getbootstrap.com/",
                text: "Bootstrap Icons",
                description: "Ikony Bootstrap",
                icon: "fa-brands fa-bootstrap",
                iconColor: "text-yellow-400",
                buttonBgColor: "var(--yellow-bg)",
                buttonHoverBgColor: "var(--yellow-hover-bg)",
                buttonHoverBorderColor: "var(--yellow-hover-border)",
            },
            {
                href: "https://fontawesome.com/search",
                text: "Font Awesome",
                description: "Ikony Font Awesome",
                icon: "fa-brands fa-font-awesome",
                iconColor: "text-yellow-400",
                buttonBgColor: "var(--yellow-bg)",
                buttonHoverBgColor: "var(--yellow-hover-bg)",
                buttonHoverBorderColor: "var(--yellow-hover-border)",
            },
            {
                href: "https://www.mingcute.com/",
                text: "Mingcute",
                description: "Ikony Mingcute",
                icon: "fa-solid fa-icons",
                iconColor: "text-yellow-400",
                buttonBgColor: "var(--yellow-bg)",
                buttonHoverBgColor: "var(--yellow-hover-bg)",
                buttonHoverBorderColor: "var(--yellow-hover-border)",
            },
            {
                href: "https://iconduck.com/",
                text: "Iconduck",
                description: "Ikony Iconduck",
                icon: "fa-solid fa-icons",
                iconColor: "text-yellow-400",
                buttonBgColor: "var(--yellow-bg)",
                buttonHoverBgColor: "var(--yellow-hover-bg)",
                buttonHoverBorderColor: "var(--yellow-hover-border)",
            },
            {
                href: "https://fonts.google.com/icons",
                text: "Google Icons",
                description: "Ikony Google",
                icon: "fa-brands fa-google",
                iconColor: "text-yellow-400",
                buttonBgColor: "var(--yellow-bg)",
                buttonHoverBgColor: "var(--yellow-hover-bg)",
                buttonHoverBorderColor: "var(--yellow-hover-border)",
            },
        ],
    },
    {
        title: "Tools for Developers",
        icon: "fa-solid fa-tools",
        iconColor: "text-red-400",
        links: [
            {
                href: "https://it-tools.tech/",
                text: "IT Tools",
                description: "Narzędzia IT",
                icon: "fa-solid fa-tools",
                iconColor: "text-red-400", // Red icon
                buttonBgColor: "var(--red-bg)", // Red
                buttonHoverBgColor: "var(--red-hover-bg)",
                buttonHoverBorderColor: "var(--red-hover-border)",
            },
            {
                href: "https://uiverse.io/elements",
                text: "UI Verse",
                description: "Elementy UI",
                icon: "fa-solid fa-puzzle-piece",
                iconColor: "text-red-400",
                buttonBgColor: "var(--red-bg)",
                buttonHoverBgColor: "var(--red-hover-bg)",
                buttonHoverBorderColor: "var(--red-hover-border)",
            },
            {
                href: "https://angrytools.com/",
                text: "Angry Tools",
                description: "Narzędzia dev",
                icon: "fa-solid fa-wrench",
                iconColor: "text-red-400",
                buttonBgColor: "var(--red-bg)",
                buttonHoverBgColor: "var(--red-hover-bg)",
                buttonHoverBorderColor: "var(--red-hover-border)",
            },
            {
                href: "https://freefrontend.com/",
                text: "Free Frontend",
                description: "Zasoby front-end",
                icon: "fa-solid fa-laptop-code",
                iconColor: "text-red-400",
                buttonBgColor: "var(--red-bg)",
                buttonHoverBgColor: "var(--red-hover-bg)",
                buttonHoverBorderColor: "var(--red-hover-border)",
            },
            {
                href: "https://developer.mozilla.org/en-US/",
                text: "MDN Web Docs",
                description: "Dokumentacja Mozilla",
                icon: "fa-solid fa-globe",
                iconColor: "text-red-400",
                buttonBgColor: "var(--red-bg)",
                buttonHoverBgColor: "var(--red-hover-bg)",
                buttonHoverBorderColor: "var(--red-hover-border)",
            },
            {
                href: "https://htmlcheatsheet.com/",
                text: "HTML Cheatsheet",
                description: "Ściąga HTML",
                icon: "fa-solid fa-file-alt",
                iconColor: "text-red-400",
                buttonBgColor: "var(--red-bg)",
                buttonHoverBgColor: "var(--red-hover-bg)",
                buttonHoverBorderColor: "var(--red-hover-border)",
            },
            {
                href: "https://jqueryui.com/",
                text: "jQuery UI",
                description: "UI dla jQuery",
                icon: "fa-solid fa-code-branch",
                iconColor: "text-red-400",
                buttonBgColor: "var(--red-bg)",
                buttonHoverBgColor: "var(--red-hover-bg)",
                buttonHoverBorderColor: "var(--red-hover-border)",
            },
            {
                href: "https://freecodetools.org/",
                text: "Free Code Tools",
                description: "Darmowe narzędzia",
                icon: "fa-solid fa-toolbox",
                iconColor: "text-red-400",
                buttonBgColor: "var(--red-bg)",
                buttonHoverBgColor: "var(--red-hover-bg)",
                buttonHoverBorderColor: "var(--red-hover-border)",
            },
            {
                href: "https://www.jqueryscript.net/",
                text: "jQuery Script",
                description: "Skrypty jQuery",
                icon: "fa-solid fa-scroll",
                iconColor: "text-red-400",
                buttonBgColor: "var(--red-bg)",
                buttonHoverBgColor: "var(--red-hover-bg)",
                buttonHoverBorderColor: "var(--red-hover-border)",
            },
        ],
    },
    {
        title: "Generatory i Konwertery",
        icon: "fa-solid fa-exchange-alt",
        iconColor: "text-purple-400",
        links: [
            {
                href: "https://transform.tools/graphql-to-typescript",
                text: "GraphQL to TypeScript",
                description: "GraphQL → TypeScript",
                icon: "fa-solid fa-exchange-alt",
                iconColor: "text-purple-400", // Purple icon
                buttonBgColor: "var(--purple-bg)", // Purple
                buttonHoverBgColor: "var(--purple-hover-bg)",
                buttonHoverBorderColor: "var(--purple-hover-border)",
            },
            {
                href: "https://carbon.now.sh/",
                text: "Carbon",
                description: "Zrzuty kodu",
                icon: "fa-solid fa-code",
                iconColor: "text-purple-400",
                buttonBgColor: "var(--purple-bg)",
                buttonHoverBgColor: "var(--purple-hover-bg)",
                buttonHoverBorderColor: "var(--purple-hover-border)",
            },
            {
                href: "https://readme.so/editor",
                text: "README",
                description: "Edytor README",
                icon: "fa-solid fa-book",
                iconColor: "text-purple-400",
                buttonBgColor: "var(--purple-bg)",
                buttonHoverBgColor: "var(--purple-hover-bg)",
                buttonHoverBorderColor: "var(--purple-hover-border)",
            },
            {
                href: "https://allinone.tools/",
                text: "All in One",
                description: "Narzędzia online",
                icon: "fa-solid fa-toolbox",
                iconColor: "text-purple-400",
                buttonBgColor: "var(--purple-bg)",
                buttonHoverBgColor: "var(--purple-hover-bg)",
                buttonHoverBorderColor: "var(--purple-hover-border)",
            },
            {
                href: "https://tintmint.net/",
                text: "Tintmint",
                description: "Generator gradientów",
                icon: "fa-solid fa-fill-drip",
                iconColor: "text-purple-400",
                buttonBgColor: "var(--purple-bg)",
                buttonHoverBgColor: "var(--purple-hover-bg)",
                buttonHoverBorderColor: "var(--purple-hover-border)",
            },
            {
                href: "https://boxshadows.xyz/",
                text: "Box Shadows",
                description: "Generator cieni",
                icon: "fa-solid fa-box-open",
                iconColor: "text-purple-400",
                buttonBgColor: "var(--purple-bg)",
                buttonHoverBgColor: "var(--purple-hover-bg)",
                buttonHoverBorderColor: "var(--purple-hover-border)",
            },
            {
                href: "https://ggradient.com/",
                text: "Gradient Generator",
                description: "Gradienty CSS",
                icon: "fa-solid fa-palette",
                iconColor: "text-purple-400",
                buttonBgColor: "var(--purple-bg)",
                buttonHoverBgColor: "var(--purple-hover-bg)",
                buttonHoverBorderColor: "var(--purple-hover-border)",
            },
            {
                href: "https://www.flexer.dev/",
                text: "Flexer",
                description: "Układy flexbox",
                icon: "fa-solid fa-arrows-alt-h",
                iconColor: "text-purple-400",
                buttonBgColor: "var(--purple-bg)",
                buttonHoverBgColor: "var(--purple-hover-bg)",
                buttonHoverBorderColor: "var(--purple-hover-border)",
            },
            {
                href: "https://scastiel.dev/3dbook",
                text: "3D Book",
                description: "Książki 3D",
                icon: "fa-solid fa-book-open",
                iconColor: "text-purple-400",
                buttonBgColor: "var(--purple-bg)",
                buttonHoverBgColor: "var(--purple-hover-bg)",
                buttonHoverBorderColor: "var(--purple-hover-border)",
            },
        ],
    },
    {
        title: "Efekty Wizualne",
        icon: "fa-solid fa-star",
        iconColor: "text-pink-400",
        links: [
            {
                href: "https://www.vantajs.com/",
                text: "Vanta.js",
                description: "Animacje tła",
                icon: "fa-solid fa-star",
                iconColor: "text-pink-400", // Pink icon
                buttonBgColor: "var(--pink-bg)", // Pink
                buttonHoverBgColor: "var(--pink-hover-bg)",
                buttonHoverBorderColor: "var(--pink-hover-border)",
            },
            {
                href: "http://back.naker.io/",
                text: "Naker.io",
                description: "Interaktywne tła",
                icon: "fa-solid fa-shapes",
                iconColor: "text-pink-400",
                buttonBgColor: "var(--pink-bg)",
                buttonHoverBgColor: "var(--pink-hover-bg)",
                buttonHoverBorderColor: "var(--pink-hover-border)",
            },
            {
                href: "https://trianglify.io/",
                text: "Trianglify",
                description: "Tło z trójkątów",
                icon: "fa-solid fa-play",
                iconColor: "text-pink-400",
                buttonBgColor: "var(--pink-bg)",
                buttonHoverBgColor: "var(--pink-hover-bg)",
                buttonHoverBorderColor: "var(--pink-hover-border)",
            },
            {
                href: "https://pocoloco.io/",
                text: "Pocoloco",
                description: "Animacje SVG",
                icon: "fa-solid fa-vector-square",
                iconColor: "text-pink-400",
                buttonBgColor: "var(--pink-bg)",
                buttonHoverBgColor: "var(--pink-hover-bg)",
                buttonHoverBorderColor: "var(--pink-hover-border)",
            },
            {
                href: "https://webgradients.com/",
                text: "Web Gradients",
                description: "Gradienty web",
                icon: "fa-solid fa-paint-roller",
                iconColor: "text-pink-400",
                buttonBgColor: "var(--pink-bg)",
                buttonHoverBgColor: "var(--pink-hover-bg)",
                buttonHoverBorderColor: "var(--pink-hover-border)",
            },
            {
                href: "https://excalidraw.com/",
                text: "Excalidraw",
                description: "Szkice i diagramy",
                icon: "fa-solid fa-pencil-ruler",
                iconColor: "text-pink-400",
                buttonBgColor: "var(--pink-bg)",
                buttonHoverBgColor: "var(--pink-hover-bg)",
                buttonHoverBorderColor: "var(--pink-hover-border)",
            },
        ],
    },
    {
        title: "Tools for Tables",
        icon: "fa-solid fa-table",
        iconColor: "text-teal-400",
        links: [
            {
                href: "https://truben.no/table/",
                text: "Truben Table",
                description: "Generator tabel",
                icon: "fa-solid fa-table",
                iconColor: "text-teal-400",
                buttonBgColor: "var(--teal-bg)",
                buttonHoverBgColor: "var(--teal-hover-bg)",
                buttonHoverBorderColor: "var(--teal-hover-border)",
            },
            {
                href: "https://tableconvert.com/markdown-generator",
                text: "Table Convert",
                description: "Konwerter tabel",
                icon: "fa-solid fa-exchange-alt",
                iconColor: "text-teal-400",
                buttonBgColor: "var(--teal-bg)",
                buttonHoverBgColor: "var(--teal-hover-bg)",
                buttonHoverBorderColor: "var(--teal-hover-border)",
            },
            {
                href: "https://tabulator.info/",
                text: "Tabulator",
                description: "Tabele interaktywne",
                icon: "fa-solid fa-table",
                iconColor: "text-teal-400",
                buttonBgColor: "var(--teal-bg)",
                buttonHoverBgColor: "var(--teal-hover-bg)",
                buttonHoverBorderColor: "var(--teal-hover-border)",
            },
            {
                href: "https://datatables.net/",
                text: "DataTables",
                description: "Tabele z sortowaniem",
                icon: "fa-solid fa-database",
                iconColor: "text-teal-400",
                buttonBgColor: "var(--teal-bg)",
                buttonHoverBgColor: "var(--teal-hover-bg)",
                buttonHoverBorderColor: "var(--teal-hover-border)",
            },
            {
                href: "https://iddan.github.io/react-spreadsheet/storybook/?path=/story/spreadsheet--basic",
                text: "Storybook",
                description: "Arkusze React",
                icon: "fa-solid fa-file-excel",
                iconColor: "text-teal-400",
                buttonBgColor: "var(--teal-bg)",
                buttonHoverBgColor: "var(--teal-hover-bg)",
                buttonHoverBorderColor: "var(--teal-hover-border)",
            },
            {
                href: "https://alex-d.github.io/Trumbowyg/",
                text: "Trumbowyg",
                description: "Edytor WYSIWYG",
                icon: "fa-solid fa-edit",
                iconColor: "text-teal-400",
                buttonBgColor: "var(--teal-bg)",
                buttonHoverBgColor: "var(--teal-hover-bg)",
                buttonHoverBorderColor: "var(--teal-hover-border)",
            },
            {
                href: "https://edit-csv.net/",
                text: "Edit CSV",
                description: "Edytor CSV",
                icon: "fa-solid fa-file-csv",
                iconColor: "text-teal-400",
                buttonBgColor: "var(--teal-bg)",
                buttonHoverBgColor: "var(--teal-hover-bg)",
                buttonHoverBorderColor: "var(--teal-hover-border)",
            },
        ],
    },
    {
        title: "Inne Przydatne",
        icon: "fa-solid fa-tools",
        iconColor: "text-lime-400",
        links: [
            {
                href: "https://10015.io/",
                text: "10015.io",
                description: "Narzędzia online",
                icon: "fa-solid fa-tools",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
            {
                href: "https://www.1001fonts.com/",
                text: "1001 Fonts",
                description: "Darmowe czcionki",
                icon: "fa-solid fa-font",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
            {
                href: "https://unsplash.com/",
                text: "Unsplash",
                description: "Darmowe zdjęcia",
                icon: "fa-solid fa-camera",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
            {
                href: "https://www.tutorialspoint.com/whiteboard.htm",
                text: "Point Whiteboard",
                description: "Tablica online",
                icon: "fa-solid fa-chalkboard",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
            {
                href: "https://coolsymbol.com/",
                text: "Cool Symbol",
                description: "Symbole i emotikony",
                icon: "fa-solid fa-face-smile",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
            {
                href: "https://webflow.com/templates",
                text: "Webflow Templates",
                description: "Szablony Webflow",
                icon: "fa-solid fa-file-code",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
            {
                href: "https://www.codehim.com/",
                text: "CodeHim",
                description: "Zasoby dev",
                icon: "fa-solid fa-laptop-code",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
            {
                href: "https://materializecss.com/",
                text: "Materialize CSS",
                description: "Framework Material",
                icon: "fa-solid fa-layer-group",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
            {
                href: "https://xmple.com/wallpaper/",
                text: "Xmple Wallpapers",
                description: "Tapety na pulpit",
                icon: "fa-solid fa-image",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
            {
                href: "https://design.penpot.app/",
                text: "Penpot",
                description: "Design UI",
                icon: "fa-solid fa-pen-ruler",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
            {
                href: "https://www.canva.com/",
                text: "Canva",
                description: "Design graficzny",
                icon: "fa-solid fa-paint-brush",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
            {
                href: "https://temp-mail.org/pl/",
                text: "Temp Mail",
                description: "E-mail tymczasowy",
                icon: "fa-solid fa-envelope",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
            {
                href: "https://carrd.co/",
                text: "Carrd",
                description: "Proste strony",
                icon: "fa-solid fa-globe",
                iconColor: "text-lime-400",
                buttonBgColor: "var(--lime-bg)",
                buttonHoverBgColor: "var(--lime-hover-bg)",
                buttonHoverBorderColor: "var(--lime-hover-border)",
            },
        ],
    },
    {
        title: "Inne Svg itp.",
        icon: "fa-solid fa-paint-brush",
        iconColor: "text-cyan-400",
        links: [
            {
                href: "https://paint.sumo.app/?lang=pl",
                text: "Paint",
                description: "Rysowanie online",
                icon: "fa-solid fa-paint-brush",
                iconColor: "text-cyan-400",
                buttonBgColor: "var(--cyan-bg)",
                buttonHoverBgColor: "var(--cyan-hover-bg)",
                buttonHoverBorderColor: "var(--cyan-hover-border)",
            },
            {
                href: "https://alvarotrigo.com/fullPage/",
                text: "FullPage",
                description: "Strony pełnoekranowe",
                icon: "fa-solid fa-expand",
                iconColor: "text-cyan-400",
                buttonBgColor: "var(--cyan-bg)",
                buttonHoverBgColor: "var(--cyan-hover-bg)",
                buttonHoverBorderColor: "var(--cyan-hover-border)",
            },
            {
                href: "https://bootsnipp.com/",
                text: "Bootsnipp",
                description: "Komponenty Bootstrap",
                icon: "fa-brands fa-bootstrap",
                iconColor: "text-cyan-400",
                buttonBgColor: "var(--cyan-bg)",
                buttonHoverBgColor: "var(--cyan-hover-bg)",
                buttonHoverBorderColor: "var(--cyan-hover-border)",
            },
            {
                href: "https://pattern.monster/",
                text: "Pattern Monster",
                description: "Wzory SVG",
                icon: "fa-solid fa-th-large",
                iconColor: "text-cyan-400",
                buttonBgColor: "var(--cyan-bg)",
                buttonHoverBgColor: "var(--cyan-hover-bg)",
                buttonHoverBorderColor: "var(--cyan-hover-border)",
            },
            {
                href: "https://www.fffuel.co/",
                text: "FFFuel",
                description: "Narzędzia design",
                icon: "fa-solid fa-fill-drip",
                iconColor: "text-cyan-400",
                buttonBgColor: "var(--cyan-bg)",
                buttonHoverBgColor: "var(--cyan-hover-bg)",
                buttonHoverBorderColor: "var(--cyan-hover-border)",
            },
            {
                href: "https://gradientbuttons.colorion.co/",
                text: "Gradient Buttons",
                description: "Przyciski gradientowe",
                icon: "fa-solid fa-palette",
                iconColor: "text-cyan-400",
                buttonBgColor: "var(--cyan-bg)",
                buttonHoverBgColor: "var(--cyan-hover-bg)",
                buttonHoverBorderColor: "var(--cyan-hover-border)",
            },
            {
                href: "https://cdnjs.com/",
                text: "CDNJS",
                description: "Biblioteki CDN",
                icon: "fa-solid fa-cloud-download-alt",
                iconColor: "text-cyan-400",
                buttonBgColor: "var(--cyan-bg)",
                buttonHoverBgColor: "var(--cyan-hover-bg)",
                buttonHoverBorderColor: "var(--cyan-hover-border)",
            },
        ],
    },
    {
        title: "Photoshop",
        icon: "fa-solid fa-camera",
        iconColor: "text-fuchsia-400",
        links: [
            {
                href: "https://pixabay.com/pl/",
                text: "Pixabay",
                description: "Darmowe zdjęcia",
                icon: "fa-solid fa-camera",
                iconColor: "text-fuchsia-400",
                buttonBgColor: "var(--fuchsia-bg)",
                buttonHoverBgColor: "var(--fuchsia-hover-bg)",
                buttonHoverBorderColor: "var(--fuchsia-hover-border)",
            },
            {
                href: "https://stocksnap.io/",
                text: "Stocksnap",
                description: "Darmowe zdjęcia",
                icon: "fa-solid fa-camera-retro",
                iconColor: "text-fuchsia-400",
                buttonBgColor: "var(--fuchsia-bg)",
                buttonHoverBgColor: "var(--fuchsia-hover-bg)",
                buttonHoverBorderColor: "var(--fuchsia-hover-border)",
            },
            {
                href: "https://pixlr.com/pl/remove-background/",
                text: "Pixlr",
                description: "Usuwanie tła",
                icon: "fa-solid fa-cut",
                iconColor: "text-fuchsia-400",
                buttonBgColor: "var(--fuchsia-bg)",
                buttonHoverBgColor: "var(--fuchsia-hover-bg)",
                buttonHoverBorderColor: "var(--fuchsia-hover-border)",
            },
            {
                href: "https://unsplash.com/",
                text: "Unsplash",
                description: "Darmowe zdjęcia",
                icon: "fa-solid fa-image",
                iconColor: "text-fuchsia-400",
                buttonBgColor: "var(--fuchsia-bg)",
                buttonHoverBgColor: "var(--fuchsia-hover-bg)",
                buttonHoverBorderColor: "var(--fuchsia-hover-border)",
            },
            {
                href: "https://www.pexels.com/pl-pl/",
                text: "Pexels",
                description: "Darmowe zdjęcia",
                icon: "fa-solid fa-photo-video",
                iconColor: "text-fuchsia-400",
                buttonBgColor: "var(--fuchsia-bg)",
                buttonHoverBgColor: "var(--fuchsia-hover-bg)",
                buttonHoverBorderColor: "var(--fuchsia-hover-border)",
            },
        ],
    },
    {
        title: "Tools main",
        icon: "fa-solid fa-tools",
        iconColor: "text-indigo-400",
        links: [
            {
                href: "https://livecode.carrd.co",
                text: "Maroko Editor",
                description: "Edytor kodu online",
                icon: "fa-solid fa-code",
                iconColor: "text-indigo-400",
                buttonBgColor: "var(--indigo-bg)",
                buttonHoverBgColor: "var(--indigo-hover-bg)",
                buttonHoverBorderColor: "var(--indigo-hover-border)",
            },
            {
                href: "https://imgpro.carrd.co",
                text: "IMAGE TOOLS",
                description: "Narzędzia do obrazów",
                icon: "fa-solid fa-image",
                iconColor: "text-indigo-400",
                buttonBgColor: "var(--indigo-bg)",
                buttonHoverBgColor: "var(--indigo-hover-bg)",
                buttonHoverBorderColor: "var(--indigo-hover-border)",
            },
            {
                href: "https://toolsdev.carrd.co",
                text: "TOOLS DEV",
                description: "Narzędzia deweloperskie",
                icon: "fa-solid fa-terminal",
                iconColor: "text-indigo-400",
                buttonBgColor: "var(--indigo-bg)",
                buttonHoverBgColor: "var(--indigo-hover-bg)",
                buttonHoverBorderColor: "var(--indigo-hover-border)",
            },
            {
                href: "https://mdcode.carrd.co",
                text: "MD CODE",
                description: "Edytor Markdown",
                icon: "fa-solid fa-file-alt",
                iconColor: "text-indigo-400",
                buttonBgColor: "var(--indigo-bg)",
                buttonHoverBgColor: "var(--indigo-hover-bg)",
                buttonHoverBorderColor: "var(--indigo-hover-border)",
            },
            {
                href: "https://modifier.carrd.co",
                text: "MODIFIER",
                description: "Modyfikator CSS",
                icon: "fa-brands fa-css3-alt",
                iconColor: "text-indigo-400",
                buttonBgColor: "var(--indigo-bg)",
                buttonHoverBgColor: "var(--indigo-hover-bg)",
                buttonHoverBorderColor: "var(--indigo-hover-border)",
            },
            {
                href: "https://w5ui.carrd.co",
                text: "W5UI",
                description: "Interfejs użytkownika W5",
                icon: "fa-solid fa-palette",
                iconColor: "text-indigo-400",
                buttonBgColor: "var(--indigo-bg)",
                buttonHoverBgColor: "var(--indigo-hover-bg)",
                buttonHoverBorderColor: "var(--indigo-hover-border)",
            },
            {
                href: "https://codenote.carrd.co",
                text: "CODENOTE",
                description: "Notatki kodowe",
                icon: "fa-solid fa-search",
                iconColor: "text-indigo-400",
                buttonBgColor: "var(--indigo-bg)",
                buttonHoverBgColor: "var(--indigo-hover-bg)",
                buttonHoverBorderColor: "var(--indigo-hover-border)",
            },
            {
                href: "https://arkusz.carrd.co",
                text: "ARKUSZ",
                description: "Arkusze kalkulacyjne",
                icon: "fa-solid fa-database",
                iconColor: "text-indigo-400",
                buttonBgColor: "var(--indigo-bg)",
                buttonHoverBgColor: "var(--indigo-hover-bg)",
                buttonHoverBorderColor: "var(--indigo-hover-border)",
            },
            {
                href: "https://edytor.carrd.co",
                text: "EDYTOR Mirror",
                description: "Edytor uniwersalny",
                icon: "fa-solid fa-box-open",
                iconColor: "text-indigo-400",
                buttonBgColor: "var(--indigo-bg)",
                buttonHoverBgColor: "var(--indigo-hover-bg)",
                buttonHoverBorderColor: "var(--indigo-hover-border)",
            },
            {
                href: "https://zoomframe.carrd.co",
                text: "ZOOMFRAME",
                description: "Ramki mobilne",
                icon: "fa-solid fa-mobile-alt",
                iconColor: "text-indigo-400",
                buttonBgColor: "var(--indigo-bg)",
                buttonHoverBgColor: "var(--indigo-hover-bg)",
                buttonHoverBorderColor: "var(--indigo-hover-border)",
            },
            {
                href: "https://linkosi.carrd.co/#",
                text: "LINKOSI",
                description: "Narzędzia do linków",
                icon: "fa-solid fa-link",
                iconColor: "text-indigo-400",
                buttonBgColor: "var(--indigo-bg)",
                buttonHoverBgColor: "var(--indigo-hover-bg)",
                buttonHoverBorderColor: "var(--indigo-hover-border)",
            },
            {
                href: "https://ospro.carrd.co/",
                text: "OS PRO",
                description: "Narzędzia systemowe",
                icon: "fa-solid fa-desktop",
                iconColor: "text-indigo-400",
                buttonBgColor: "var(--indigo-bg)",
                buttonHoverBgColor: "var(--indigo-hover-bg)",
                buttonHoverBorderColor: "var(--indigo-hover-border)",
            },
        ],
    },
    {
        title: "Tools os",
        icon: "fa-solid fa-cogs",
        iconColor: "text-amber-400",
        links: [
            {
                href: "https://edytortxt.carrd.co",
                text: "TEXT EDITOR",
                description: "Edytor tekstu",
                icon: "fa-solid fa-file-alt",
                iconColor: "text-amber-400",
                buttonBgColor: "var(--amber-bg)",
                buttonHoverBgColor: "var(--amber-hover-bg)",
                buttonHoverBorderColor: "var(--amber-hover-border)",
            },
            {
                href: "https://txtpro.carrd.co",
                text: "TEXT PRO",
                description: "Zaawansowany edytor tekstu",
                icon: "fa-solid fa-font",
                iconColor: "text-amber-400",
                buttonBgColor: "var(--amber-bg)",
                buttonHoverBgColor: "var(--amber-hover-bg)",
                buttonHoverBorderColor: "var(--amber-hover-border)",
            },
            {
                href: "https://toolslinki.carrd.co",
                text: "TOOLS LINK",
                description: "Narzędzia linków",
                icon: "fa-solid fa-link",
                iconColor: "text-amber-400",
                buttonBgColor: "var(--amber-bg)",
                buttonHoverBgColor: "var(--amber-hover-bg)",
                buttonHoverBorderColor: "var(--amber-hover-border)",
            },
            {
                href: "https://mdtable.carrd.co",
                text: "MD TABLE",
                description: "Tabele Markdown",
                icon: "fa-solid fa-table",
                iconColor: "text-amber-400",
                buttonBgColor: "var(--amber-bg)",
                buttonHoverBgColor: "var(--amber-hover-bg)",
                buttonHoverBorderColor: "var(--amber-hover-border)",
            },
            {
                href: "https://incsvdev.carrd.co",
                text: "CSV DEV",
                description: "Deweloperskie CSV",
                icon: "fa-solid fa-file-csv",
                iconColor: "text-amber-400",
                buttonBgColor: "var(--amber-bg)",
                buttonHoverBgColor: "var(--amber-hover-bg)",
                buttonHoverBorderColor: "var(--amber-hover-border)",
            },
            {
                href: "https://webtoolsdev.carrd.co",
                text: "WEB TOOLS",
                description: "Narzędzia webowe",
                icon: "fa-solid fa-tools",
                iconColor: "text-amber-400",
                buttonBgColor: "var(--amber-bg)",
                buttonHoverBgColor: "var(--amber-hover-bg)",
                buttonHoverBorderColor: "var(--amber-hover-border)",
            },
            {
                href: "https://taskday.carrd.co",
                text: "TASK DAY",
                description: "Zadania dnia",
                icon: "fa-solid fa-tasks",
                iconColor: "text-amber-400",
                buttonBgColor: "var(--amber-bg)",
                buttonHoverBgColor: "var(--amber-hover-bg)",
                buttonHoverBorderColor: "var(--amber-hover-border)",
            },
            {
                href: "https://projectdev.carrd.co",
                text: "PROJECT DEV",
                description: "Projekty deweloperskie",
                icon: "fa-solid fa-project-diagram",
                iconColor: "text-amber-400",
                buttonBgColor: "var(--amber-bg)",
                buttonHoverBgColor: "var(--amber-hover-bg)",
                buttonHoverBorderColor: "var(--amber-hover-border)",
            },
            {
                href: "https://toolsnue.carrd.co",
                text: "TOOLS NUE",
                description: "Narzędzia NUE",
                icon: "fa-solid fa-wrench",
                iconColor: "text-amber-400",
                buttonBgColor: "var(--amber-bg)",
                buttonHoverBgColor: "var(--amber-hover-bg)",
                buttonHoverBorderColor: "var(--amber-hover-border)",
            },
            {
                href: "https://toolsnuedev.carrd.co",
                text: "TOOLS NUE DEV",
                description: "Deweloperskie NUE",
                icon: "fa-solid fa-cogs",
                iconColor: "text-amber-400",
                buttonBgColor: "var(--amber-bg)",
                buttonHoverBgColor: "var(--amber-hover-bg)",
                buttonHoverBorderColor: "var(--amber-hover-border)",
            },
            {
                href: "https://sitesw5.carrd.co",
                text: "SITES W5",
                description: "Strony W5",
                icon: "fa-solid fa-globe",
                iconColor: "text-amber-400",
                buttonBgColor: "var(--amber-bg)",
                buttonHoverBgColor: "var(--amber-hover-bg)",
                buttonHoverBorderColor: "var(--amber-hover-border)",
            },
            {
                href: "https://ostools.carrd.co/",
                text: "OS TOOLS",
                description: "Narzędzia systemowe",
                icon: "fa-solid fa-desktop",
                iconColor: "text-amber-400",
                buttonBgColor: "var(--amber-bg)",
                buttonHoverBgColor: "var(--amber-hover-bg)",
                buttonHoverBorderColor: "var(--amber-hover-border)",
            },
        ],
    },
];

// Funkcja do generowania linków
function generateLinks() {
    console.log('Starting link generation...');
    const linksContainer = document.getElementById("links-container");
    linksContainer.innerHTML = ""; // Wyczyść istniejące linki
    const navPanel = document.getElementById("nav-panel");
    navPanel.innerHTML = ""; // Wyczyść istniejące linki nawigacyjne

    // Mapowanie kolorów ikon do kategorii
    const iconColorToCategory = {
        'text-orange-400': 'orange',
        'text-blue-400': 'blue',
        'text-green-400': 'green',
        'text-yellow-400': 'yellow',
        'text-red-400': 'red',
        'text-purple-400': 'purple',
        'text-pink-400': 'pink',
        'text-teal-400': 'teal',
        'text-lime-400': 'lime',
        'text-cyan-400': 'cyan',
        'text-fuchsia-400': 'fuchsia',
        'text-indigo-400': 'indigo',
        'text-amber-400': 'amber'
    };

    categories.forEach((category, categoryIndex) => {
        console.log(`Generating category ${categoryIndex + 1}: ${category.title}`);

        // Tworzenie nagłówka kategorii
        const categoryTitle = document.createElement("h2");
        const categoryId = category.title.toLowerCase().replace(/\s+/g, "-"); // Tworzenie ID z tytułu
        categoryTitle.id = categoryId; // Ustawienie ID dla kotwicy
        categoryTitle.className = "category-title"; // Użycie customowej klasy

        // Dodanie ikony do tytułu
        if (category.icon) {
            const titleIcon = document.createElement("i");
            titleIcon.className = `${category.icon} ${category.iconColor}`;
            titleIcon.style.marginRight = "0.75rem";
            titleIcon.style.fontSize = "1.5rem";
            categoryTitle.appendChild(titleIcon);
        }

        // Dodanie tekstu tytułu
        const titleText = document.createTextNode(category.title);
        categoryTitle.appendChild(titleText);

        linksContainer.appendChild(categoryTitle);

        // Dodanie linku do panelu nawigacyjnego
        const navLink = document.createElement("a");
        navLink.href = `#${categoryId}`;
        navLink.setAttribute("data-tooltip", category.title);
        navLink.addEventListener("click", (e) => {
            e.preventDefault();
            const targetElement = document.getElementById(categoryId);

            // Dodaj efekt świecenia
            targetElement.classList.add('highlight');

            // Usuń efekt po 2 sekundach
            setTimeout(() => {
                targetElement.classList.remove('highlight');
            }, 2000);

            // Przewiń do sekcji
            targetElement.scrollIntoView({ behavior: "smooth" });
        });

        // Dodanie ikony do linku nawigacyjnego
        if (category.icon) {
            const navIcon = document.createElement("i");
            navIcon.className = `${category.icon} nav-icon ${category.iconColor}`;
            navLink.appendChild(navIcon);
        }
        navPanel.appendChild(navLink);

        // Tworzenie kontenera na linki w danej kategorii z układem kolumnowym
        const categoryLinksDiv = document.createElement("div");
        // Użycie grid dla 3 kolumn na dużych ekranach, 2 na średnich i 1 na małych
        categoryLinksDiv.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4";

        category.links.forEach((link, linkIndex) => {
            console.log(`Generating link ${linkIndex + 1} in category ${category.title}:`, link.text);

            const linkElement = document.createElement("a");
            linkElement.href = link.href;
            linkElement.target = "_blank";
            linkElement.rel = "noopener noreferrer";
            linkElement.className = "link-button";

            // Dodaj atrybut data-category na podstawie koloru ikony
            const categoryName = iconColorToCategory[link.iconColor];
            if (categoryName) {
                console.log(`Setting category for ${link.text}:`, categoryName);
                linkElement.setAttribute('data-category', categoryName);
            } else {
                console.warn(`No category mapping found for icon color: ${link.iconColor} in link:`, link.text);
            }

            // Ustawienie dynamicznego koloru tła przycisku
            linkElement.style.backgroundColor = link.buttonBgColor;

            // Dodanie ikony, jeśli jest dostępna
            if (link.icon) {
                const iconElement = document.createElement("i");
                iconElement.className = `${link.icon} text-3xl link-icon ${link.iconColor || ""}`;
                linkElement.appendChild(iconElement);
            }

            // Kontener na tekst linku i opis
            const linkContentDiv = document.createElement("div");
            linkContentDiv.className = "link-content";

            const linkText = document.createElement("span");
            linkText.textContent = link.text;
            linkText.className = "link-text";
            linkContentDiv.appendChild(linkText);

            if (link.description) {
                const linkDescription = document.createElement("p");
                linkDescription.textContent = link.description;
                linkDescription.className = "link-description";

                // Ustaw kolor opisu zgodnie z kolorem ikony
                const iconColorMap = {
                    'text-orange-400': 'rgba(251, 146, 60, 0.8)',
                    'text-blue-400': 'rgba(96, 165, 250, 0.8)',
                    'text-green-400': 'rgba(74, 222, 128, 0.8)',
                    'text-yellow-400': 'rgba(250, 204, 21, 0.8)',
                    'text-red-400': 'rgba(248, 113, 113, 0.8)',
                    'text-purple-400': 'rgba(196, 181, 253, 0.8)',
                    'text-pink-400': 'rgba(244, 114, 182, 0.8)',
                    'text-teal-400': 'rgba(45, 212, 191, 0.8)',
                    'text-lime-400': 'rgba(163, 230, 53, 0.8)',
                    'text-cyan-400': 'rgba(34, 211, 238, 0.8)',
                    'text-fuchsia-400': 'rgba(232, 121, 249, 0.8)',
                    'text-indigo-400': 'rgba(129, 140, 248, 0.8)',
                    'text-amber-400': 'rgba(251, 191, 36, 0.8)'
                };

                const descriptionColor = iconColorMap[link.iconColor] || 'rgba(255, 255, 255, 0.7)';
                linkDescription.style.color = descriptionColor;

                linkContentDiv.appendChild(linkDescription);
            }

            linkElement.appendChild(linkContentDiv);
            categoryLinksDiv.appendChild(linkElement);

            console.log(`Link ${link.text} generated with category:`, linkElement.getAttribute('data-category'));
        });
        linksContainer.appendChild(categoryLinksDiv);
    });

    console.log('Link generation completed');
}

// Wywołaj funkcję generującą linki po załadowaniu strony
window.addEventListener('load', () => {
    console.log('Window loaded, generating links...');
    generateLinks();
});

// Back to Top Button Functionality
const backToTopButton = document.getElementById('backToTop');
let isBackToTopVisible = false;

// Show/Hide button based on scroll position
function toggleBackToTop() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shouldShow = scrollTop > 300; // Show after 300px scroll

    if (shouldShow && !isBackToTopVisible) {
        backToTopButton.classList.add('visible', 'animate-in');
        isBackToTopVisible = true;

        // Remove animate-in class after animation
        setTimeout(() => {
            backToTopButton.classList.remove('animate-in');
        }, 600);
    } else if (!shouldShow && isBackToTopVisible) {
        backToTopButton.classList.remove('visible');
        isBackToTopVisible = false;
    }
}

// Smooth scroll to top
function scrollToTop() {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    const duration = 800; // 800ms animation

    function animation(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);

        window.scrollTo(0, startPosition * (1 - easeOut));

        if (progress < 1) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

// Event listeners
window.addEventListener('scroll', toggleBackToTop);
backToTopButton.addEventListener('click', scrollToTop);

// Throttle scroll events for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        return;
    }
    scrollTimeout = setTimeout(() => {
        toggleBackToTop();
        scrollTimeout = null;
    }, 10);
});