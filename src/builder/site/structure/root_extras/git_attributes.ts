import SimpleFile from "../../../core/page_def/simple_file"

function git_attributes() {
    const sp = new SimpleFile()
    sp.file_name = '.gitattributes'
    sp.file_path = ''
    sp.file_content = '*.* text eol=lf'
    sp.build()
}

export default git_attributes
