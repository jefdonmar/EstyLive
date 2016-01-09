import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

(function () {

  var templateString = $('#itemTemplate').html();
  var renderTemplate = _.template(templateString);
  var etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

  $.ajax({
    url: etsyURL,
    dataType: 'jsonp',
    method: 'get'
  }).then (function (response) {
    _.each( response.results, function(item){
      var itemInfo = renderTemplate(item);
      $('.results-area').append(itemInfo);
    })
  });
  
}());
