import Page from "../../../core/page_def/mode_1/page"
import { NavbarElement } from "../../../core/page_def/mode_1/navbar"

function root(): void {
    const page = new Page()

    page.head.content = `<head>
 <meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
 <title>Masked V</title>
 <meta name="theme-color" content="white" />
 <meta name="author" content="ZONEVICE">
 <link rel="shortcut icon" type="image/png" href="https://raw.githubusercontent.com/maskedv/maskedv.github.io/refs/heads/data/img/assets/favicon.png">
 <meta name="description" content="Indie Game Development">
 <meta name="keywords" content="indie games, indie game development, zonevice, zone vice, vice, maskedv, masked v">
 <meta property="og:title" content="Masked V" />
 <meta property="og:url" content="http://maskedv.com/" />
 <meta property="og:image" content="https://raw.githubusercontent.com/maskedv/maskedv.github.io/refs/heads/data/img/assets/favicon.png" />
 <meta property="twitter:site" content="@_ZONEVICE">
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
 <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
 <script src="/public/js/global.js"></script>
</head>`

    page.body.content = `<body>

    vnavbarv

 <div class="container">

     <div class="h1 mt-4">Masked V</div>

     <div class="mt-3 mb-4">
         <div class="h4">Indie game development</div>
     </div>

     <ul class='list_games'>
         <li>
             <img src="https://raw.githubusercontent.com/maskedv/maskedv.github.io/refs/heads/data/img/tinymanwalks/icon.png" class='game-icon' alt="Tiny Man Walks icon">
             <a href="./TinyManWalks/">Tiny Man Walks</a>
         </li>
     </ul>

 </div>

 <h1 style="visibility: hidden; position: fixed;">Masked V - Indie Game Development</h1>

 <script>load_navbar();</script>

 <style>
     .list_games {
         padding: 0;
         margin: 0;
         list-style-type: none;
     }

     .list_games li a {
         margin-left: 3px;
     }

     .game-icon {
         width: 20px;
     }
 </style>
</body>`

    page.file_name = 'index.html'
    page.file_path = ''

    // navbar
    page.navbar.title = 'Masked V'
    page.navbar.navbar_elements.push(new NavbarElement('active link', 'Home', '/'))
    const options_navbar_elements = []
    options_navbar_elements.push(new NavbarElement('clickable link', 'Tiny Man Walks', '/TinyManWalks/'))
    //options_navbar_elements.push(new NavbarElement('clickable link', 'Portugal 2077', '/Portugal2077/'))
    page.navbar.navbar_elements.push(new NavbarElement('option menu', 'Games', '', false, options_navbar_elements))
    page.navbar.css_custom = '<style>.navbar{box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;}</style>'
    page.body.content = page.navbar.build(page.body.content)

    // build page
    page.build()

}

export default root
