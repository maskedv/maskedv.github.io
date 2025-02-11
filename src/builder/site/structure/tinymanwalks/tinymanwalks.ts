import Page from "../../../core/page_def/mode_1/page"
import { NavbarElement } from "../../../core/page_def/mode_1/navbar"

function tinymanwalks(): void {
    const page = new Page()
    page.head.content = `<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tiny Man Walks</title>
    <meta name="theme-color" content="#98dd7e" />
    <meta name="author" content="ZONEVICE">
    <link rel="shortcut icon" type="image/png" href="https://raw.githubusercontent.com/maskedv/maskedv.github.io/refs/heads/data/img/tinymanwalks/icon.png">
    <meta name="description" content="Tiny Man Walks by Masked V. A game where a tiny man walks around.">
    <meta property="og:description" content="Tiny Man Walks by Masked V. A game where a tiny man walks around." />
    <meta name="keywords" content="indie games, indie game development, zonevice, zone vice, vice, maskedv, masked v, tiny man walks">
    <meta property="og:title" content="Tiny Man Walks" />
    <meta property="og:url" content="https://maskedv.com/" />
    <meta property="og:image" content="https://raw.githubusercontent.com/maskedv/maskedv.github.io/refs/heads/data/img/tinymanwalks/icon.png" />
    <meta property="twitter:site" content="@_justvice">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="style.css">
    <script src="/public/js/global.js"></script>
</head>`
    page.body.content = `<body>
    vnavbarv

    <div class="container mt-4">

        <div class="flex-center">
            <img src="https://raw.githubusercontent.com/maskedv/maskedv.github.io/refs/heads/data/img/tinymanwalks/logo.png" alt="Tiny Man Walks logo">
        </div>

        <p class='flex-center h3 mt-4 mb-0 pb-0 text-white text-title'>
            A game about a tiny man who walks
        </p>
        <span class='flex-center text-subtitle text-white text-small'>and thats all!</span>

    </div>

    <div class="container mt-3">
        <div class="row">

            <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                <img src="https://raw.githubusercontent.com/maskedv/maskedv.github.io/refs/heads/data/img/tinymanwalks/demo-1.gif" class='img-fluid demo-image' alt="Tiny Man Walks visual demo 1">
            </div>

            <div class="col-12 col-sm-12 col-md-12 col-lg-6">

                <div class="text-white">

                    <div class="row">

                        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div class="h5">
                                Platform
                            </div>

                            <select class="form-select form-select-platform" id='select_platform'>
                                <option value="android">Android</option>
                                <option value="pc">PC</option>
                            </select>

                        </div>

                        <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                            <div class="h5">
                                Version
                            </div>

                            <div class="container_select_version">
                                <select class="form-select" id='select_version'>
                                    <option value="1.3.1">1.3.1</option>
                                    <option value="1.3.0">1.3.0</option>
                                </select>
                            </div>

                        </div>

                    </div>

                </div>

                <br>

                <div class="d-grid gap-2">
                    <button class='btn button-download text-white' id='button_download'>Download now</button>
                </div>

                <div id='container-demo-images-phone-layout' class='flex-center'>
                    <img src="https://raw.githubusercontent.com/maskedv/maskedv.github.io/refs/heads/data/img/tinymanwalks/demo-1.gif" class='img-fluid demo-image-phone-layout'
                        alt="Tiny Man Walks visual demo 1">
                    <img src="https://raw.githubusercontent.com/maskedv/maskedv.github.io/refs/heads/data/img/tinymanwalks/demo-2.gif" class='img-fluid demo-image-phone-layout'
                        alt="Tiny Man Walks visual demo 2">
                </div>

                <a href="javascript:void(0)" class='invisible' id='download_aHref'>Inki was not here</a>

            </div>

            <div class="col-12 col-sm-12 col-md-12 col-lg-3">
                <img src="https://raw.githubusercontent.com/maskedv/maskedv.github.io/refs/heads/data/img/tinymanwalks/demo-2.gif" class='img-fluid demo-image' alt="Tiny Man Walks visual demo 2">
            </div>

        </div>
    </div>

    <h1 style="visibility: hidden; position: fixed;">Masked V - Tiny Man Walks</h1>

    <div class="footer">
        <a href="https://www.notion.so/f52f04edd2b042559ee6119df42aaca1?v=08d91f6f17144ca2b6b494cc92f97ffd"
            target="_blank">Kanban list of tasks</a>
        <br>
        Wendigo Van der Blitz: art
        <br>
        Hich: coding support
    </div>

    <script>load_navbar();</script>
    <script src="./script.js"></script>
</body>`
    page.file_name = 'index.html'
    page.file_path = '/TinyManWalks/'
    page.javascript.file_path = '/TinyManWalks/'
    page.javascript.file_content = `// ======================================================================================================
// --- DOM elements capture
// ======================================================================================================

const container_select_version = document.getElementById('container_select_version');
const select_platform = document.getElementById('select_platform');
const select_version = document.getElementById('select_version');
const button_download = document.getElementById('button_download');
const download_aHref = document.getElementById('download_aHref');

// ======================================================================================================
// --- Event listeners
// ======================================================================================================

select_platform.addEventListener('change', () => {
    select_platform.value == 'pc' ? render_select_version_pc() : render_select_version_android();
});

button_download.addEventListener('click', () => {
    download_game_main();
});

// ======================================================================================================
// --- Download handler
// ======================================================================================================

function download_game_main() {
    const game_platform = select_platform.value;
    const game_version = select_version.value

    if (game_platform == 'pc')
        download_game_pc(game_version);
    else // android
        download_game_android(game_version);
}

function download_game_pc(version) {
    const download_item = platform_pc.find(item => { return item.version == version });
    download_aHref.href = download_item.url;
    download_aHref.click();
}

function download_game_android(version) {
    const download_item = platform_android.find(item => { return item.version == version });
    download_aHref.href = download_item.url;
    download_aHref.click();
}

// ======================================================================================================
// --- Platform version handling
// ======================================================================================================

const platform_pc =
    [
        {
            version: '1.3.1',
            url: 'https://dl.dropboxusercontent.com/s/0qqdy6njmwl0m9v/Tiny%20Man%20Walks%20v1.3.1.zip?dl=0'
        },
        {
            version: '1.3.0',
            url: 'https://dl.dropboxusercontent.com/s/500nveovhtgd3y6/Tiny%20Man%20Walks%20v1.3.0.zip?dl=0'
        },
        {
            version: '1.1.1',
            url: 'https://dl.dropboxusercontent.com/s/5xidr5zg8q3tvcz/Tiny%20Man%20Walks%20v1.1.1.zip?dl=0'
        },
        {
            version: '1.1.0',
            url: 'https://dl.dropboxusercontent.com/s/nhmlrlmdy7cnrcy/Tiny%20Man%20Walks%20v1.1.0.zip?dl=0'
        },
        {
            version: '1.0.0',
            url: 'https://dl.dropboxusercontent.com/s/k6yixl1jujviaq9/Tiny%20Man%20Walks%20v1.0.0.zip?dl=0'
        },
    ];

const platform_android =
    [
        {
            version: '1.3.1',
            url: 'https://dl.dropboxusercontent.com/s/nsqv23fx5py0xxv/Tiny%20Man%20Walks%20v1.3.1.apk?dl=0'
        },
        {
            version: '1.3.0',
            url: 'https://dl.dropboxusercontent.com/s/qny89mxa86iot7a/TinyManWalks%20v1.3.0.apk?dl=0'
        }
    ]

// ======================================================================================================
// --- Version selection handling
// ======================================================================================================

const versions_pc = /* html */\`
    <select class="form-select" id = 'select_version' >
        <option value="1.3.1">1.3.1</option>
        <option value="1.3.0">1.3.0</option>
        <option value="1.1.1">1.1.1</option>
        <option value="1.1.0">1.1.0</option>
        <option value="1.0.0">1.0.0</option>
    </select >\`

const versions_android = /* html */\`
    <select class="form-select" id = 'select_version' >
        <option value="1.3.1">1.3.1</option>
        <option value="1.3.0">1.3.0</option>
    </select >\`

// -----------------------------------------------
// Function helpers
// -----------------------------------------------

function render_select_version_android() {
    select_version.innerHTML = versions_android;
}

function render_select_version_pc() {
    select_version.innerHTML = versions_pc;
}`
    page.css.file_path = '/TinyManWalks'
    page.css.file_content = `.invisible{position:fixed;visibility:hidden;}
.flex-center{display:flex;justify-content:center;}
body{background-color:#95db7c;}
text-white{color:white;}
.navbar{background:#7BC061 !important;}
.text-small{font-size:18px;}
.demo-image, .demo-image-phone-layout{width:300px;margin-bottom:20px;}
#container-demo-images-phone-layout{position:fixed;visibility:hidden;}
.demo-image-phone-layout{padding-top:40px;margin-bottom:80px;margin-left:28px;}
.form-select{background-color:#98dd7e;color:white;}
.button-download{background-color:#7BC061;font-weight:700;font-size:20px;}
.form-select-platform{height:34px !important;}
.footer{text-align:center;color:white;font-size:14px;margin:auto;width:50%;}
.footer a{color:white;}
.footer a:hover{color:rgb(25, 18, 119)}
@media only screen and (max-width:991px){.demo-image{position:fixed;visibility:hidden;}
 #container-demo-images-phone-layout{position:static;visibility:visible;}
}
@media only screen and (max-width:681px){.demo-image-phone-layout{width:200px;}
}
@media only screen and (max-width:470px){.demo-image-phone-layout{width:170px;}
}
@media only screen and (max-width:411px){.demo-image-phone-layout{width:130px;}
}
@media only screen and (max-width:335px){.demo-image-phone-layout{width:110px;}
}
@media only screen and (max-width:409px){.text-title{font-size:22px;}
 .text-subtitle{font-size:14px;}
}
@media only screen and (max-width:386px){.text-title{font-size:17px;}
 .text-subtitle{font-size:11px;}
}
`

    // navbar
    page.navbar.title = 'Masked V'
    page.navbar.navbar_elements.push(new NavbarElement('clickable link', 'Home', '/'))
    const options_navbar_elements = []
    options_navbar_elements.push(new NavbarElement('active link', 'Tiny Man Walks', '/TinyManWalks/'))
    //options_navbar_elements.push(new NavbarElement('clickable link', 'Portugal 2077', '/Portugal2077/'))
    page.navbar.navbar_elements.push(new NavbarElement('option menu', 'Games', '', false, options_navbar_elements))
    page.navbar.css_custom = '<style>.navbar{box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;}</style>'
    page.body.content = page.navbar.build(page.body.content)

    page.build()
}

export default tinymanwalks
