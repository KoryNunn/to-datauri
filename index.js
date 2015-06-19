module.exports = function (sourcePath, callback) {
    var canvas = document.createElement('canvas'),
        image = new Image();

    image.addEventListener('load', function () {
        var context = canvas.getContext('2d');

        canvas.width = image.width;
        canvas.height = image.height;

        context.drawImage(image, 0, 0);

        callback(null, canvas.toDataURL('image/png'));
    });

    image.addEventListener('error', callback);

    image.src = sourcePath;
};