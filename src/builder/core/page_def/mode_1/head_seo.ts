class HeadSeo {

    // basic
    public title: string
    public description: string
    public keywords: string
    public author: string
    public viewport: string
    public charset: string
    //public robots: string
    // open graph protocol
    public og_title: string
    public og_type: string
    public og_image: string
    public og_image_alt: string
    public og_site_name: string
    public og_description: string
    public og_url: string
    // twitter
    public twitter_card: string
    public twitter_site: string
    public twitter_creator: string
    public twitter_image: string
    public twitter_image_alt: string
    public twitter_description: string

    constructor() {
        // basic
        this.title = 'Masked V'
        this.description = ''
        this.keywords = ''
        this.author = 'ZONEVICE'
        this.viewport = 'width=device-width, initial-scale=1'
        this.charset = 'UTF-8'
        //this.robots = 'index, follow'
        // og
        this.og_title = this.title
        this.og_type = ''
        this.og_image = ''
        this.og_image_alt = ''
        this.og_site_name = ''
        this.og_description = ''
        this.og_url = ''
        // twitter
        this.twitter_card = ''
        this.twitter_site = ''
        this.twitter_creator = ''
        this.twitter_image = ''
        this.twitter_image_alt = ''
        this.twitter_description = ''
    }

    set_basic(
        title: string,
        description: string,
        keywords: string,
        author: string,
    ): HeadSeo {
        this.title = title
        this.description = description
        this.keywords = keywords
        this.author = author
        return this
    }

    set_og(
        title: string,
        type: string,
        image: string,
        image_alt: string,
        site_name: string,
        site_description: string,
        url: string,
    ): HeadSeo {
        this.og_title = title
        this.og_type = type
        this.og_image = image
        this.og_image_alt = image_alt
        this.og_site_name = site_name
        this.og_description = site_description
        this.og_url = url
        return this
    }

    set_twitter(
        card: string,
        site: string,
        creator: string,
        image: string,
        image_alt: string,
        description: string,
    ): void {
        this.twitter_card = card
        this.twitter_site = site
        this.twitter_creator = creator
        this.twitter_image = image
        this.twitter_image_alt = image_alt
        this.twitter_description = description
    }

    resolve_head_seo_content(): string {
        let _: string = ''
        // basic
        _ += `<title>${this.title}</title>`; _ += '\n\n';
        _ += `<meta name="keywords" content="${this.keywords}">`; _ += '\n\n';
        // og
        _ += `<meta property="og:title" content="${this.og_title}">`; _ += '\n';
        _ += `<meta property="og:type" content="${this.og_type}">`; _ += '\n';
        _ += `<meta property="og:image" content="${this.og_image}">`; _ += '\n';
        _ += `<meta property="og:image:alt" content="${this.og_image_alt}">`; _ += '\n';
        _ += `<meta property="og:site_name" content="${this.og_site_name}">`; _ += '\n';
        _ += `<meta property="og:description" content="${this.og_description}">`; _ += '\n\n';
        // twitter
        _ += `<meta property="twitter:card" content="${this.twitter_card}">`; _ += '\n';
        _ += `<meta property="twitter:site" content="${this.twitter_site}">`; _ += '\n';
        _ += `<meta property="twitter:creator" content="${this.twitter_creator}">`; _ += '\n';
        _ += `<meta property="twitter:image" content="${this.twitter_image}">`; _ += '\n';
        _ += `<meta property="twitter:image:alt" content="${this.twitter_image_alt}">`; _ += '\n';
        _ += `<meta property="twitter:description" content="${this.twitter_description}">`; _ += '\n\n';
        // misc
        _ += `<meta name="viewport" content="${this.viewport}">`; _ += '\n';
        _ += `<meta charset="${this.charset}">`; _ += '\n';
        return _
    }

}

export default HeadSeo
