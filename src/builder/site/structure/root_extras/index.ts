import _404 from "./404";
import git_attributes from "./git_attributes";
import git_ignore from "./git_ignore";
import cname from "./cname";

function root_extras() {
    _404()
    git_attributes()
    git_ignore()
    cname()
}

export default root_extras