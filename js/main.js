import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';


(function () {

  let etsyURL = 'https://api.etsy.com/v2/listings/active.js?api_key=h9oq2yf3twf4ziejn10b717i&keywords=whiskey&includes=Images,Shop';

  $.ajax({
    url: etsyURL,
    dataType: 'jsonp',
    method: 'get'
  }).then (function (response) {
    console.log(response);
  });

  var templateString = $('#itemTemplate').text();

  var renderTemplate = _.template(templateString);

  // bring up items I want


  _.each( etsy.results, function(item){
    var itemInfo = renderTemplate(item);
    $('.results-area').append(itemInfo);
  });

}());
