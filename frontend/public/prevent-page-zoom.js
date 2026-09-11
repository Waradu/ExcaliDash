(function () {
  // Run before the app bundle loads so pinching during startup cannot zoom
  // the page. Only cancel the browser action; Excalidraw still gets the events.
  var options = { capture: true, passive: false };

  window.addEventListener("wheel", function (event) {
    if (event.ctrlKey || event.metaKey) event.preventDefault();
  }, options);

  // Safari uses gesture events for trackpad pinch instead of ctrl+wheel.
  function preventGestureZoom(event) {
    event.preventDefault();
  }

  window.addEventListener("gesturestart", preventGestureZoom, options);
  window.addEventListener("gesturechange", preventGestureZoom, options);
  window.addEventListener("gestureend", preventGestureZoom, options);
})();
