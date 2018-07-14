import "./style/style.scss";
 

// import whatInput from 'what-input'
// // import core foundation files
// import { foundation } from 'foundation-sites/js/foundation.core';
// import 'foundation-sites/js/foundation.util.mediaQuery';

// /* import here any additional module */

// // we need to attach the function we exported above to the jQuery object in use in this file
// $.fn.foundation = foundation;
import 'script-loader!jquery'
import 'script-loader!what-input'
import 'script-loader!foundation-sites'



// ready to go
$(document).ready(function() {
  $(document).foundation();
  
});
console.log("hello, world again 1");