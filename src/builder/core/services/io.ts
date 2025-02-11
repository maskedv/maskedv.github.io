import fs from 'fs'
import path from 'path'
import constants from '../logic/constants';
import IWriteableSiteFile from '../logic/interfaces/writeable_site_file';

function create_directory(path: string): void {
    if (fs.existsSync(path) == false) {
        fs.mkdirSync(path)
    }
}

function write_site_file(writable: IWriteableSiteFile): void {
    const write_path = path.join(constants.BUILD_PATH, writable.file_path, writable.file_name)
    fs.writeFileSync(write_path, writable.file_content)
}

export default {
    create_directory,
    write_site_file,
}
