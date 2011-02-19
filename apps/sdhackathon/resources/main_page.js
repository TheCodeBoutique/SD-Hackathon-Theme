// ==========================================================================
// Project:   Sdhackathon - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals Sdhackathon */

// This page describes the main user interface for your application.  
Sdhackathon.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
		classNames: 'base-view',
    childViews: 'mainImage nameLabel callLabel cancelButton submitButton'.w(),
    
    mainImage: SC.ImageView.design({
			classNames: ['main-image'],
      layout: { centerX: 0, centerY: -200, width: 950, height: 215 },
			value: sc_static('/images/hacktime.png'),
    }),

		nameLabel: SC.TextFieldView.design({
			classNames: ['name-label'],
			layout: { centerX: 0, centerY: -20, width:250,height:20},
			controlSize: SC.LARGE_CONTROL_SIZE,
		  fontWeight: SC.BOLD_WEIGHT,
		  hint: 'name',
			//valueBinding:'ScCommunityMarketing.betaController.newName'
		}),

		callLabel: SC.TextFieldView.design({
			classNames: ['call-label'],
			layout: { centerX: 0, centerY: 20, width:250,height:20},
			controlSize: SC.LARGE_CONTROL_SIZE,
		  fontWeight: SC.BOLD_WEIGHT,
		  hint: 'facetime email or number',
			//valueBinding:'ScCommunityMarketing.betaController.newName'
		}),
		
		cancelButton: SC.ButtonView.design({
        layout: { bottom: 40, height: 24, left: 12, width: 100 },
        title:  "Cancel",
		}),
		
		submitButton: SC.ButtonView.design({
      layout: { bottom: 40, height: 24, right: 12, width: 100 },
      title:  "Submit",
			isDefault: YES
    })

  })

});
