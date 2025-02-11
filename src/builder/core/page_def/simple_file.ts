import IWriteableSiteFile from "../logic/interfaces/writeable_site_file"
import io from "../services/io"

class SimpleFile implements IWriteableSiteFile {

    public file_content: string
    public file_name: string
    public file_path: string

    constructor() {
        this.file_content = ''
        this.file_name = ''
        this.file_path = ''
    }

    public build(): void {
        io.write_site_file(this)
    }

}

export default SimpleFile
