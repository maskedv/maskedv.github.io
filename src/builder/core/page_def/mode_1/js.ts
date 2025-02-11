import IWriteableSiteFile from "../../logic/interfaces/writeable_site_file"

class JavaScript implements IWriteableSiteFile {

    // IWriteableSiteFile
    public file_content: string
    public file_name: string
    public file_path: string

    constructor() {
        // IWriteableSiteFile
        this.file_content = ''
        this.file_name = 'script.js'
        this.file_path = ''
    }

}

export default JavaScript
