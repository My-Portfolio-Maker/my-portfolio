import React, { useEffect } from "react";

const ScriptLoad = () => {
  useEffect(() => {
    var loadScript = (src) => {
      var tag = document.createElement("script");
      tag.async = false;
      tag.src = import.meta.env.BASE_URL + src;
      document.getElementsByTagName("body")[0].appendChild(tag);
    };

    loadScript("/js/popper.min.js");
    loadScript("/js/jquery.easing.1.3.js");
    loadScript("/js/jquery.waypoints.min.js");
    loadScript("/js/jquery.stellar.min.js");
    loadScript("/js/jquery.magnific-popup.min.js");
    loadScript("/js/aos.js");
    loadScript("/js/jquery.animateNumber.min.js");
    loadScript("/js/scrollax.min.js");
    loadScript("/js/main.js");
  });
};

export default ScriptLoad;
