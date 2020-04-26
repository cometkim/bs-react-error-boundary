// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Caml_option = require("bs-platform/lib/js/caml_option.js");
var ReactErrorBoundary = require("react-error-boundary");

function makeProps(children, fallbackComponentOpt, onError, param) {
  var fallbackComponent = fallbackComponentOpt !== undefined ? Caml_option.valFromOption(fallbackComponentOpt) : /* `render */[
      86600534,
      ReactErrorBoundary.ErrorBoundaryFallbackComponent
    ];
  var tmp = { };
  if (children !== undefined) {
    tmp.children = Caml_option.valFromOption(children);
  }
  if (fallbackComponent !== undefined) {
    tmp.fallbackComponent = Caml_option.valFromOption(fallbackComponent);
  }
  if (onError !== undefined) {
    tmp.onError = Caml_option.valFromOption(onError);
  }
  return tmp;
}

exports.makeProps = makeProps;
/* react-error-boundary Not a pure module */
