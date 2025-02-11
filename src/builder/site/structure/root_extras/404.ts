import SimpleFile from "../../../core/page_def/simple_file"

function _404() {
    const sp = new SimpleFile()
    sp.file_name = '404.html'
    sp.file_path = ''
    sp.file_content = `404
<script>

    function get_base_url() {
        const currentURL = window.location.href
        const url = new URL(currentURL)
        return url.origin
    }

    function redirect_to(path) {
        let directory = ''
        // redirects to root if path is undefined
        if (path != undefined) {
            directory = '/' + path
        }
        window.location.href = get_base_url() + directory
    }

    const currentUrl = document.location.href.toLowerCase()
    const redirect_rule = [
        {
            url_includes: 'tinymanwalks',
            url_redirect: 'TinyManWalks',
        }
    ]

    let redirected = false

    for (const rr of redirect_rule) {
        if (currentUrl.includes(rr.url_includes)) {
            redirected = true
            redirect_to(rr.url_redirect)
        }
    }

    if (redirected == false) {
        redirect_to()
    }


</script>
`
    sp.build()
}

export default _404
