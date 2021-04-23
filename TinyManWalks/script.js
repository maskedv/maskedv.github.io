// ======================================================================================================
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
            version: '1.3.0',
            url: 'https://dl.dropboxusercontent.com/s/qny89mxa86iot7a/TinyManWalks%20v1.3.0.apk?dl=0'
        },
    ]

// ======================================================================================================
// --- Version selection handling
// ======================================================================================================

const versions_pc = /* html */`
    <select class="form-select" id = 'select_version' >
        <option value="1.3.0">1.3.0</option>
        <option value="1.1.1">1.1.1</option>
        <option value="1.1.0">1.1.0</option>
        <option value="1.0.0">1.0.0</option>
    </select >`

const versions_android = /* html */`
    <select class="form-select" id = 'select_version' >
        <option value="1.3.0">1.3.0</option>
    </select >`

// -----------------------------------------------
// Function helpers
// -----------------------------------------------

function render_select_version_android() {
    select_version.innerHTML = versions_android;
}

function render_select_version_pc() {
    select_version.innerHTML = versions_pc;
}