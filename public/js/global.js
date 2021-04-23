const navbar = /* html */`
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <a class="navbar-brand" href="/">Masked V</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <!--<li class="nav-item"><a class="nav-link active" aria-current="page" href="/TinyManWalks/">Tiny Man Walks</a> </li>-->
                <!--<li class="nav-item"><a class="nav-link active" aria-current="page" href="/adversary/">Adversary</a></li>
                <li class="nav-item"><a class="nav-link active" aria-current="page" href="/contact">Contact</a></li>
                <li class="nav-item"><a target="_blank" class="nav-link active" aria-current="page" href="https://just-vice.com">JUSTVICE website</a></li>-->
            </ul>
        </div>
    </div>
</nav>
`;

function load_navbar() { document.getElementById('navbar').innerHTML = navbar; }