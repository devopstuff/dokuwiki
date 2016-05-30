/*
 * ccclipboard 0.1
 * simple way to add a copy code to clipboard button in code block (to paste in terminal)
 *
 * @devopstuff
 */

jQuery(document).ready(function() {

    "use strict";

    var $wrap = jQuery('pre.code');
    var i = 1;

    $wrap.each(function () { 
        jQuery(this).addClass( 'target_'+ i );
        jQuery(this).before( '<button type="button" id="target_'+ i +'" style="float: right;margin: 2px 2px 0 -70px;;">Copy</button>' );
        i++;
    });

    jQuery('button').on('click',function(){ 
        var target = '.'+ jQuery(this).attr('id');
        var selection = document.querySelector( target +'.code' );
        var range = document.createRange();
        range.selectNode(selection);
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
    });

});
