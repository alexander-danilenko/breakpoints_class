(function ($) {
  Drupal.behaviors.breakpointsClass = {
    attach: function (context, settings) {
      // Body tag.
      var body = $('body', context);

      // Returns formatted name of class with prefixes.
      var breakpointNameFormatted = function (name) {
        return settings.breakpoints_class.prefix + name;
      };

      // Log to console if Debug mode is ON.
      var debugMessage = function (event, breakpointName, breakpointMedia) {
        if (settings.breakpoints_class.debug) {
          var log = {};
          log[breakpointName] = breakpointMedia;
          console.log(event + ':\n', log);
        }
      };

      // Add classes only on needed theme.
      if (settings.breakpoints_class.isNeeded) {
        // Add and remove classes to <body> tag that generated from breakpoints module.
        $.each(settings.breakpoints_class.breakpoints, function (breakpointName, breakpointMediaQuery) {
          try {
            enquire.register(breakpointMediaQuery, {
              // Triggers when @media is matched.
              match: function () {
                body.addClass(breakpointNameFormatted(breakpointName));
                debugMessage('matched', breakpointName, breakpointMediaQuery);
              },

              // Triggers when @media stoped being matched (windows is resized and
              // don't matching this media anymore).
              unmatch: function () {
                body.removeClass(breakpointNameFormatted(breakpointName));
                debugMessage('unmatched', breakpointMediaQuery, breakpointMediaQuery);

              },

              deferSetup: true,

              // If you need to unregister some media by some reason, it should
              // remove class from body as well.
              destroy: function () {
                body.removeClass(breakpointNameFormatted(breakpointName));
                debugMessage('destroyed', breakpointName, breakpointMediaQuery);
              }

            });
          } catch (message) {
            console.error(Drupal.t('Seems like Enquire.js library is not loaded. Original error message:') + ' ' + message);
            console.warn(Drupal.t('For downloading Enquire.js see Reports section for details:') + ' ' + window.location.origin + Drupal.settings.basePath + 'admin/reports/status');
          }
        });
      }
      else {
        if (settings.breakpoints_class.debug) {
          console.warn(Drupal.t('breakpoints_class module\'s javascript not triggered becasue of Theme settings of module.'));
        }
      }
    }
  }
})(jQuery);