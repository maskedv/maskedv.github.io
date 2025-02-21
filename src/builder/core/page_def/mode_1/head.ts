import HeadSeo from "./head_seo"

class Head {

    public content: string
    public head_ceo: HeadSeo

    constructor() {
        this.content = ''
        this.head_ceo = new HeadSeo()
    }

    resolve_head_seo(): void {
        if (this.content.includes('vheadseov') === false) {
            console.log('Warning: mode 1 page request on resolve head seo does not contain vheadseov')
            return
        }
        this.content = this.content.replace('vheadseov', this.head_ceo.resolve_head_seo_content())
    }

}

export default Head
