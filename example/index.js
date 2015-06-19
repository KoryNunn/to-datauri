var crel = require('crel'),
    toDataURI = require('../'),
    imagePath = 'nodeorgau.svg';

window.addEventListener('load', function(){

    crel(document.body,
        crel('img', {src: imagePath})
    );

    toDataURI(imagePath, function (error, uri) {
        crel(document.body,
            crel('img', {src: uri})
        );
    });
});