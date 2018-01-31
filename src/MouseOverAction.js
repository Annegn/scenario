import SelectorAction from './SelectorAction';

export default class MouseOverAction extends SelectorAction {
	attachTo(browser) {
		return browser.mouseover(this.selector);
	}

	nightmareRun(nightmare) {
		return nightmare.mouseover(this.selector);
	}

	chromelessRun(chromeless) {
		//does not exist in chromeless
		return chromeless;
	}

}