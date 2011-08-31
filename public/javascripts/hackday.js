var Hackday = {

  rPrint : function(chars, el, cb){
    var self = this;
    if (chars.length===0) return cb(el.html(el.text()));
    if(chars.charAt(0)==='>'){
    }
    el.html(el.html()+chars.charAt(0));
    setTimeout(function(){
      self.rPrint(chars.slice(1, chars.length), el, cb);
    }, 0);
  },

  init : function(){
    jQuery('.sponsor').each(function(i, el){
      jQuery(el).fadeIn(900);
    });
    var info = jQuery('#info')[0]; 
    jQuery(info).fadeIn(900);
    var headerText = jQuery('#header-description')[0];
    var chars = jQuery(headerText).text();
    jQuery(headerText).text('');
    jQuery(headerText).show();
    this.rPrint(chars, jQuery(headerText), function(){});
  }
};
