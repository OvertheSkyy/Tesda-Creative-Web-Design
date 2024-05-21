document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instance;

    if (elems.length > 0) {
        instance = M.FloatingActionButton.init(elems, {
            direction: 'left'
        });

        instance.open();

        instance.close();

        instance.destroy();
    }

    elems[0].addEventListener('click', function () {
        console.log('Floating action button clicked');
    });
});