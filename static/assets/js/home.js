(function() {
  "use strict";

  /**
   * ------------------------------------------------------------------------
   * Configuration Object
   * ------------------------------------------------------------------------
   */
  const CONFIG = {
    preloader: {
      selector: '#preloader'
    },
    aos: {
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    },
    typed: {
      selector: '.typed',
      attribute: 'data-typed-items',
      options: {
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      }
    }
  };

  /**
   * ------------------------------------------------------------------------
   * Application Module
   * ------------------------------------------------------------------------
   */
  const App = {
    /**
     * Initializes all necessary components and libraries.
     */
    init() {
      // The 'load' event is used specifically for the preloader.
      // Other scripts depending only on the DOM can be run on 'DOMContentLoaded'.
      this.initPreloader();

      // Firing events on DOMContentLoaded is generally faster than 'load'.
      document.addEventListener('DOMContentLoaded', () => {
        this.initAOS();
        this.initTyped();
        // Future initializations can be added here easily.
        // e.g., this.initSwiper();
      });
    },
    
    /**
    * Handles the removal of the preloader screen once the page is fully loaded.
    */
    initPreloader() {
      const preloader = document.querySelector(CONFIG.preloader.selector);
      if (preloader) {
        window.addEventListener('load', () => {
          preloader.remove();
        });
      }
    },

    /**
     * Initializes the Animate On Scroll (AOS) library with options from CONFIG.
     */
    initAOS() {
      // Check if AOS is defined to avoid errors if the library fails to load.
      if (typeof AOS !== 'undefined') {
        AOS.init(CONFIG.aos);
      } else {
        console.warn('AOS library not found.');
      }
    },

    /**
     * Finds and initializes all Typed.js instances on the page.
     * This version handles multiple '.typed' elements gracefully.
     */
    initTyped() {
      // Check if Typed is defined.
      if (typeof Typed === 'undefined') {
        console.warn('Typed.js library not found.');
        return;
      }

      const typedElements = document.querySelectorAll(CONFIG.typed.selector);
      if (!typedElements.length) {
        return; // No elements to initialize, exit quietly.
      }

      typedElements.forEach(element => {
        const strings = element.getAttribute(CONFIG.typed.attribute);

        // If the data attribute is missing or empty, skip this element.
        if (!strings) {
          console.warn(`Typed.js target element is missing the '${CONFIG.typed.attribute}' attribute.`, element);
          return;
        }

        new Typed(element, {
          strings: strings.split(','),
          ...CONFIG.typed.options // Use spread syntax for clean option merging
        });
      });
    }
  };

  // Start the application
  App.init();

})();