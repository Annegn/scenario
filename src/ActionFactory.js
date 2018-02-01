/*Copyright (c) 2017-2018 Xavier Blanc <blancxav@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*/

import GotoAction from './GotoAction';
import ClickAction from './ClickAction';
import MouseOverAction from './MouseOverAction';
import MouseDownAction from './MouseDownAction';
import MouseUpAction from './MouseUpAction';
import TypeAction from './TypeAction';
import ScrollToAction from './ScrollToAction';
import WaitAction from './WaitAction';
import BackAction from './BackAction';
import SelectAction from './SelectAction';

export function createAction(actionJSON) {
	switch (actionJSON.type) {
	case 'GotoAction':
		return new GotoAction(actionJSON.url);
	case 'ClickAction':
		return new ClickAction(actionJSON.selector);
	case 'MouseOverAction':
		return new MouseOverAction(actionJSON.selector);
	case 'MouseUpAction':
		return new MouseUpAction(actionJSON.selector);
	case 'MouseDownAction':
		return new MouseDownAction(actionJSON.selector);
	case 'TypeAction':
		return new TypeAction(actionJSON.selector, actionJSON.text);
	case 'ScrollToAction':
		return new ScrollToAction(actionJSON.x, actionJSON.x);
	case 'WaitAction':
		return new WaitAction(actionJSON.ms);
	case 'BackAction':
		return new BackAction();
	case 'SelectAction':
		return new SelectAction(actionJSON.selector, actionJSON.option);
	}
	return new WaitAction(1000);
}