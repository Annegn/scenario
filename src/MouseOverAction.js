import SelectorAction from './SelectorAction';

export default class MouseOverAction extends SelectorAction {
	attachTo(browser) {
		return browser.mouseover(this.selector);
	}
}