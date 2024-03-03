(function(){
  var jquery_version = '3.4.1';
  var site_url = 'http://127.0.0.1:8000/';
  var static_url = site_url + 'static/';
  var min_width = 100;
  var min_height = 100;

  function bookmarklet(msg) {
    // To jest miejsce na rzeczywisty kod bookmarkletu.
    // Wczytanie stylów CSS.
    var css = jQuery('<link>');
    css.attr({
      rel: 'stylesheet',
      type: 'text/css',
      href: static_url + 'css/bookmarklet.css?r=' + Math.floor(Math.random()*99999999999999999999)
    });
    jQuery('head').append(css);

    // Wczytanie kodu html
    box_html = '<div id="bookmarklet"><a href="#" id="close">&times;</a><h1>Select an image to bookmark:</h1><div class="images"></div></div>';
    jQuery('body').append(box_html);

    // Zdarzenie close
    jQuery('#bookmarklet #close').click(function(){
       jQuery('#bookmarklet').remove();
    });
    // Wyszukiwanie obraózw i ich wyświetlanie
    jQuery.each(jQuery('img[src$="jpg"]'), function(index, image) {
      if (jQuery(image).width() >= min_width && jQuery(image).height()
      >= min_height)
      {
        image_url = jQuery(image).attr('src');
        jQuery('#bookmarklet .images').append('<a href="#"><img src="'+
        image_url +'" /></a>');
      }
    });

    // Po zaznaczeniu obrazu przejdź pod podany adres URL wraz z obrazem
    jQuery('#bookmarklet .images a').click(function(e){
      selected_image = jQuery(this).children('img').attr('src');
      // Ukrycie bookmarkletu.
      jQuery('#bookmarklet').hide();
      // Otworzenie nowego okna w celu przekazania obrazu.
      window.open(site_url +'images/create/?url='
                  + encodeURIComponent(selected_image)
                  + '&title='
                  + encodeURIComponent(jQuery('title').text()),
                  '_blank');
    });

  };

  // Sprawdzanie, czy biblioteka jQuery zostałą wczytana.
  if(typeof window.jQuery != 'undefined') {
    bookmarklet();
  } else {
    // Sprawdzanie pod kątem konfliktów.
    var conflict = typeof window.$ != 'undefined';
    // utworzenie skryptu i wskazanie Google API
    var script = document.createElement('script');
    script.src = '//ajax.googleapis.com/ajax/libs/jquery/' +
      jquery_version + '/jquery.min.js';
    // Dodanie znacznicka skryptu do znacznika <head> w celu przetworzenia.
    document.head.appendChild(script);
    // Mechanizm pozwalający na zaczekanie aż do zakońćzenia wczytywania skryptu.
    var attempts = 15;
    (function(){
      // Ponownie sprawdzamy, czy zdefiniowowano jQuery.
      if(typeof window.jQuery == 'undefined') {
        if(--attempts > 0) {
          // Wywołanie skryptu w ciągu kilku milisekund.
          window.setTimeout(arguments.callee, 250)
        } else {
          // Zbyt wiele prób wczytania, zgłoszenie błędu.
          alert('An error occurred while loading jQuery')
        }
      } else {
          bookmarklet();
      }
    })();
  }
})()