        ;(function() {
          var target_name = 'hackenit' ;
          if (!SC.BUNDLE_INFO) throw "SC.BUNDLE_INFO is not defined!" ;
          if (SC.BUNDLE_INFO[target_name]) return ; 

          SC.BUNDLE_INFO[target_name] = {
            requires: ['sproutcore','sproutcore/animation'],
            styles:   ['/static/hackenit/en/current/stylesheet.css?1298103703'],
            scripts:  []
          }
        })();
