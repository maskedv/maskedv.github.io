import Head from './head'
import Body from './body'
import JavaScript from './js'
import CSS from './css'
import IWriteableSiteFile from '../../logic/interfaces/writeable_site_file'
import { Navbar } from './navbar'

import io from '../../services/io'
import constants from '../../logic/constants'
import path from 'path'

class Page implements IWriteableSiteFile {

    public head: Head
    public body: Body
    public javascript: JavaScript
    public css: CSS
    public navbar: Navbar

    // IWriteableSiteFile
    public file_content: string
    public file_name: string
    public file_path: string

    constructor() {
        this.head = new Head()
        this.body = new Body()
        this.javascript = new JavaScript()
        this.css = new CSS()
        this.navbar = new Navbar

        // IWriteableSiteFile
        this.file_content = ''
        this.file_name = ''
        this.file_path = ''
    }

    public build(): void {
        this.set_file_content()
        this.write_files()
    }

    private set_file_content(): void {

        // html content

        this.file_content = ''

        this.file_content = `<!DOCTYPE html>
<html lang="en">

`
        this.file_content += this.head.content + '\n\n'
        this.file_content += this.body.content

        // html closes

        this.file_content += `

</html>`
    }

    private write_files(): void {
        // directory where page files go
        if (this.file_path != '') {
            io.create_directory(path.join(constants.BUILD_PATH, this.file_path))
        }

        // writes html page
        io.write_site_file(this)

        // writes js and css files
        if (this.javascript.file_content != '') {
            io.write_site_file(this.javascript)
        }

        if (this.css.file_content != '') {
            io.write_site_file(this.css)
        }
    }

}

export default Page
