import root from "./structure/root"
import root_extras from "./structure/root_extras"

import tinymanwalks from "./structure/tinymanwalks/tinymanwalks"

function sweep(): void {
    root()
    root_extras()
    tinymanwalks()
}

export default sweep
