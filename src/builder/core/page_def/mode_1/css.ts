import IWriteableSiteFile from "../../logic/interfaces/writeable_site_file"

class CSS implements IWriteableSiteFile {

    // IWriteableSiteFile
    public file_content: string
    public file_name: string
    public file_path: string

    constructor() {
        // IWriteableSiteFile
        this.file_content = ''
        this.file_name = 'style.css'
        this.file_path = ''
    }

}

export default CSS
