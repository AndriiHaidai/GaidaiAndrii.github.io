//Include 'use strict'; as the first statement in a wrapping function, so it only affects that function. This prevents problems when concatenating scripts that aren't strict.

(function () {
   'use strict';
   // this function is strict...
}());

(function () {
   // but this function is sloppy...
}());