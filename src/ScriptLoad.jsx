import React, { useEffect } from 'react';

const ScriptLoad = () => {
    useEffect(() => {
        var loadScript = (src) => {
          var tag = document.createElement("script");
          tag.async = false;
          tag.src = src;
          document.getElementsByTagName("body")[0].appendChild(tag);
        };
    
        loadScript("js/jquery.min.js");
        loadScript("js/jquery-migrate-3.0.1.min.js");
        loadScript("js/popper.min.js");
        loadScript("js/bootstrap.min.js");
        loadScript("js/jquery.easing.1.3.js");
        loadScript("js/jquery.waypoints.min.js");
        loadScript("js/jquery.stellar.min.js");
        loadScript("js/owl.carousel.min.js");
    
        loadScript("js/jquery.magnific-popup.min.js");
        loadScript("js/aos.js");
        loadScript("js/jquery.animateNumber.min.js");
        loadScript("js/scrollax.min.js");
        loadScript("js/main.js");
      });
};

export default ScriptLoad;