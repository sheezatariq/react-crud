$(document)
  .on('click', '.dropDownAction', function () {
    const checkState = $(this).next('.dropdown-menu').css('display');
    if (checkState == 'none') {
      $(this).next('.dropdown-menu').show();
    } else if (checkState == 'block') {
      $(this).next('.dropdown-menu').hide();
    }
  });