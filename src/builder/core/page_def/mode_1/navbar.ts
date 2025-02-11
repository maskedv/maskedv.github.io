type TNavbarType = 'clickable link' | 'active link' | 'option menu' | 'option menu unactive'

class NavbarElement {

    public type: TNavbarType
    public title: string
    public path_to_go: string
    public path_open_in_new_tab: boolean
    public type_option_menu_options: NavbarElement[]

    constructor(
        type: TNavbarType = 'clickable link',
        title: string = '',
        path_to_go: string = '',
        path_open_in_new_tab: boolean = false,
        type_option_menu_options: NavbarElement[] = []
    ) {
        this.type = type
        this.title = title
        this.path_to_go = path_to_go
        this.path_open_in_new_tab = path_open_in_new_tab
        this.type_option_menu_options = type_option_menu_options
    }

}

class Navbar {

    public title: string
    public navbar_elements: NavbarElement[]
    public css_custom: string

    constructor() {
        this.title = ''
        this.navbar_elements = []
        this.css_custom = ''
    }

    build(body: string): string {
        // based on https://getbootstrap.com/docs/5.3/components/navbar/#how-it-works
        let content = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">

    <a class="navbar-brand" href="#">${this.title}</a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        ${(() => {
                let _content = ''
                for (const el of this.navbar_elements) {

                    if (el.type === 'clickable link') {
                        _content += `<li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="${el.path_to_go}">${el.title}</a>
                                </li>`
                    }

                    else if (el.type === 'active link') {
                        _content += `<li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">${el.title}</a>
                                </li>`
                    }

                    else if (el.type === 'option menu' || el.type === 'option menu unactive') {
                        _content += `<li class="nav-item dropdown">
                                <a class="nav-link ${el.type === 'option menu unactive' ? 'disabled' : ''} dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    ${el.title}
                                </a>
                                <ul class="dropdown-menu">
                                    ${(() => {
                                let _options = ''
                                for (const op_el of el.type_option_menu_options) {
                                    _options += `<li><a class="dropdown-item" href="${op_el.path_to_go}">${op_el.title}</a></li>`
                                }
                                return _options
                            })()}
                                </ul>
                            </li>`
                    }


                }
                return _content
            })()}

      </ul>
    </div>

  </div>
</nav>`

        if (this.css_custom != '') {
            content += this.css_custom
        }

        return body.replace('vnavbarv', content)
    }

}
export {
    Navbar,
    NavbarElement,
}
