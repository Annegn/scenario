JS Library For NightMareJS Actions
==================================

Very simple library to create NightmareJS actions and scenario.


Action
------

The wat-action library defines a JavaScript class for NightmareJS action (Goto, Type, Click, Wait, Back, ScrollTo, Check).

    const wat-action = require('wat-action');
    const gotoAction = new wat-action.GotoAction('https://duckduckgo.com');
    const typeAction = new wat-action.TypeAction('#search_form_input_homepage', 'github nightmare');
    const clickAction = new wat-action.ClickAction('#search_button_homepage');
    const waitAction = new wat-action.WaitAction('#r1-0 a.result__a');


Scenario
--------

You can also create a scenario by adding actions to it.

    const scenario = new wat-action.Scenario();
    scenario.addAction(gotoAction);
    scenario.addAction(typeAction);
    scenario.addAction(clickAction);
    scenario.addAction(waitAction);


Run Nightmare 
------------

You can attach action to Nightmare

    const Nightmare = require('nightmare');	
    const nightmare = new Nightmare({show:true});
    gotoAction.attachTo(nightmare)
    .evaluate(function () {
		return document;
	})
	.end()
	.then((doc) => {
        //...
	})
	.catch ( (e) => {
        //...
    });

or a scenario

    scenario.attachTo(nightmare)
	.evaluate(function () {
	    return document;
	})
	.end()
	.then((doc) => {
        //...
	})
	.catch ( (e) => {
        //...
    });