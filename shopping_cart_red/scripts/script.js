$(document).ready(function() {
  console.log('ich funktioniere');

  var columns = $('.column');
  console.log('columns:', columns);

  function removeClass() {
    columns.removeClass('is-expanded');
  }

  function addClass(column) {
    column.addClass('is-expanded');
  }

  function handleClick(event) {
    console.log('target: ', event.target);
    var $targetColumn = $(event.target).closest('.column');
    console.log($targetColumn);

    // add('is-expanded');
    // closest('.column');
    removeClass();
    addClass($targetColumn);
    // columns.removeClass('is-expanded');
  }

  columns.click(handleClick);

  var $buttons = $('js-button');
  console.log('$buttons:', $buttons);




  $('.js-button').click(function(event) {
    $button = $(event.target);

    // change the buttons text
    $button.text('Added');

    // get data attribute to revel correct item in cart
    var itemName = $button.attr('data-item');
    console.log('itemName: ', itemName);

    // get the right item to reveal
    var $itemToReveal = $('#' + itemName);
    console.log('$itemToReveal: ', $itemToReveal);

    $itemToReveal.removeClass('is-hidden');

  });

  
});
