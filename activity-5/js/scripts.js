(function() {

    var data = [
        {
            name: 'Emmet' ,
            description: 'Emmet is the the number one code snippet tool. ',
            author: 'Emmetio',
            url: 'https://atom.io/packages/emmet',
            downloads: 1662209,
            stars: 2534,
            price: 10.50,
            selector: 'p1',
        },
        {
            name: 'Atom-beautify',
            description: 'The atom-beautify package will clean up your code, and make it more readable. ',
            author: 'Glavin001',
            url: 'https://atom.io/packages/atom-beautify',
            downloads: 4228040,
            stars: 4541,
            price: 6.75,
            selector: 'p2',
        },
        {
            name: 'Autoclose-html-plus',
            description: 'This autoclose-html-plus package automatically closes HTML tags for you once you’ve typed the first tag. ',
            author: 'Binaryfunt',
            url: 'https://atom.io/packages/autoclose-html-plus',
            downloads: 34331,
            stars: 6,
            price: 4.25,
            selector: 'p3',
        }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function (id) {
        return document.getElementById(id);
    }

    var writePackageInfo = function(package) {
        var selector = package.selector,
        nameEl = getEl(selector + '-name'),
        descEl = getEl(selector + '-description'),
        authEl = getEl(selector + '-author'),
        downloadEl = getEl(selector + '-downloads'),
        starsEl = getEl(selector + '-stars');

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    }

    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);

    for (var i = 0; i < data.length; i++) {
        var package = new Package(data[i]);
        writePackageInfo(package);
    }

}());