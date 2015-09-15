alert("This script has been injected by the proxy server.");

scSelect = false;
setTimeout(function(){

  // get required templates, and inject into the body
  $.get('http://proxy/template.html', function(templates) {
     $('body').append(templates);

     // onclick, enable element selection
     $('a.select').click(function(ev){       
       scSelect = !scSelect;                
       $('a.select').text(scSelect ? 'Cancel select' : 'Select element'); 
     });                                     
  });


  var handlerIn = function(ev){ if(scSelect){ $(ev.currentTarget).css('border', '2px solid blue');}};
  var handlerOut = function(ev) { if(scSelect){ $(ev.currentTarget).css('border', 'none');} };

  $('*').hover(handlerIn, handlerOut);
  $('*').click(function(ev){

    if(!scSelect){ return; }

    ev.preventDefault();

    // get selector for currently highlighted element
    var selector = $(this)
      .parents()
      .map(function() { return this.tagName; })
      .get()
      .reverse()
      .concat([this.nodeName])
      .join(">");

      var id = $(this).attr("id");
      if (id) { 
        selector += "#"+ id;
      }

      var classNames = $(this).attr("class");
      if (classNames) {
        selector += "." + $.trim(classNames).replace(/\s/gi, ".");
      }

      // update the script
      var oldval = $('textarea#script').val();
      $('textarea#script').val(oldval + '&#13;&#13;_scs("' + selector + '"&#13;&#13;)');
  });

}, 1000);

