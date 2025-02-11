import io from "./services/io"
import constants from "./logic/constants"

import site_main from "../site/index"

function ts_main() {
    io.create_directory(constants.BUILD_PATH)
    site_main()
}

export default ts_main
