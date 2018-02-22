
  $(document).ready(function() {
    // all custom jQuery will go here
    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
});
