(function () {
'use strict';
})();

$(function () {
  
  // TABS =========================================================

  var $links = $('.tab-link');
  var $tabs = $('.tab');

  pageInit($links, $tabs);

  $links.focus(function () {
    var currentLink = $(this),
        currentTab = currentLink.attr('href');

    toggleActiveLink($links, currentLink);
    toggleTabs($tabs, currentTab);
  });

  function pageInit(links, tabs) {
    toggleActiveLink(links, links.first());
    toggleTabs(tabs, tabs.first());
  }

  function toggleActiveLink(links, current) {
    links.removeClass('tab-active');
    current.addClass('tab-active');
  }

  function toggleTabs(tabs, tabId) {
    tabs.hide();
    $(tabId).show();
  }

  // FORM =========================================================

  var $inputs = $('.form__input');
  var $formBtn = $('.button');

  var $tooltips = createTooltips($inputs);

  $inputs.hover(function() {
    showTooltips($(this).next());
  }, function () {
    hideTooltips($(this).next());
  });

  $inputs.focus(function(event) {
    /* Act on the event */
    showTooltips($(this).next());
  });
  $inputs.blur(function(event) {
    /* Act on the event */
    hideTooltips($(this).next());
  });

  $formBtn.click(function() {
    showTooltips($tooltips);
  });

  function showTooltips(list) {
    $(list).each(function() {
      $(this).stop().animate({
        opacity: 'show',
        left: '260'},
        300, function() {
        /* stuff to do after animation is complete */
      });
    });
  }

  function hideTooltips(list) {
    $(list).each(function() {
      $(this).stop().animate({
        opacity: 'hide',
        left: '270'},
        150, function() {
        /* stuff to do after animation is complete */
      });
    });
  }

  function createTooltips(inputs) {
    var tooltipsList = [];

    inputs.each(function() {
      var $tooltip = $(document.createElement('span'));
      var parentLabel = $(this).parent();
      var tooltipText = $(this).attr('title');

      $tooltip.addClass('form__tooltip');
      $tooltip.text(tooltipText);

      $tooltip.appendTo(parentLabel);
      $tooltip.hide();

      tooltipsList.push($tooltip);

      $(this).removeAttr('title');
    });

    return tooltipsList;
  }

});