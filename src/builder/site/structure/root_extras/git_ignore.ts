import SimpleFile from "../../../core/page_def/simple_file"

function git_ignore() {
    const sp = new SimpleFile()
    sp.file_name = '.gitignore'
    sp.file_path = ''
    sp.file_content = '*.temp.*'
    sp.build()
}

export default git_ignore
