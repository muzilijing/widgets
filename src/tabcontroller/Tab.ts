import { DNode } from '@dojo/widget-core/interfaces';
import { ThemedMixin, ThemedProperties, theme } from '@dojo/widget-core/mixins/Themed';
import { v } from '@dojo/widget-core/d';
import { WidgetBase } from '@dojo/widget-core/WidgetBase';
import { CustomAriaProperties } from '../common/interfaces';
import { formatAriaProperties } from '../common/util';

import * as css from '../theme/tabcontroller/tabController.m.css';

/**
 * @type TabProperties
 *
 * Properties that can be set on a Tab component
 *
 * @property closeable    Determines whether this tab can be closed
 * @property disabled     Determines whether this tab can become active
 * @property id           ID of this underlying DOM element
 * @property key          A unique identifier for this Tab within the TabController
 * @property label        Content to show in the TabController control bar for this tab
 * @property labelledBy   ID of DOM element that serves as a label for this tab
 */
export interface TabProperties extends ThemedProperties, CustomAriaProperties {
	closeable?: boolean;
	disabled?: boolean;
	id?: string;
	key: string;
	label?: DNode;
	labelledBy?: string;
};

export const ThemedBase = ThemedMixin(WidgetBase);

@theme(css)
export class TabBase<P extends TabProperties = TabProperties> extends ThemedBase<P> {
	render(): DNode {
		const {
			aria = {},
			id,
			labelledBy
		} = this.properties;

		return v('div', {
			...formatAriaProperties(aria),
			'aria-labelledby': labelledBy,
			classes: this.theme(css.tab),
			id,
			role: 'tabpanel'
		}, this.children);
	}
}

export default class Tab extends TabBase<TabProperties> {}
