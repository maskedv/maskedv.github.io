import SimpleFile from "../../../core/page_def/simple_file"

function cname() {
    const sp = new SimpleFile()
    sp.file_name = 'CNAME'
    sp.file_path = ''
    sp.file_content = 'maskedv.com'
    sp.build()
}

export default cname
