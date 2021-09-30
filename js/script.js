$(document).ready(function() {

    setUp();
    afterSetup();

    function setUp() {
        // Hide 'right arrow' when list is open
        var downArrow = '<i class="fas fa-caret-down">';
        var rightArrow = '<i class="fas fa-caret-right"></i>';
        $('.arpm-TOC-list li.arpm-open').prepend(downArrow);
        $('.arpm-TOC-list li.arpm-closed').prepend(rightArrow);
    }

    function afterSetup() {
        // Open Search section on button click
        $('.arpm-TOC-n-Search-buttons-container .arpm-Search-button').on('click', function() {
            $(this).addClass('arpm-active');
            $('.arpm-TOC-n-Search-buttons-container .arpm-TOC-button.arpm-active').removeClass('arpm-active');
            $('.arpm-TOC-n-search-container .arpm-TOC-container').addClass('arpm-close');
            $('.arpm-TOC-n-search-container .arpm-search-container.arpm-close').removeClass('arpm-close');
        } );

        // Open TOC section on button click
        $('.arpm-TOC-n-Search-buttons-container .arpm-TOC-button').on('click', function() {
            $(this).addClass('arpm-active');
            $('.arpm-TOC-n-Search-buttons-container .arpm-Search-button.arpm-active').removeClass('arpm-active');
            $('.arpm-TOC-n-search-container .arpm-search-container').addClass('arpm-close');
            $('.arpm-TOC-n-search-container .arpm-TOC-container.arpm-close').removeClass('arpm-close');
        } );
    }
    

});