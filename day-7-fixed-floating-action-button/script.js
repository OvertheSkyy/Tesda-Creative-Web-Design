document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instance;
    // Add click event listener to FAB
    elems[0].addEventListener('click', function () {
        console.log('Floating action button clicked');
    });

    if (elems.length > 0) {
        instance = M.FloatingActionButton.init(elems, {
            direction: 'left',
            // Uncomment to enable click only FAB feature
            hoverEnabled: false
        });

        instance.open();
        instance.close();
        instance.destroy();
    }
});
