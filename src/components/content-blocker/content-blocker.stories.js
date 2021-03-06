import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('ContentBlocker', module)
	.add('YouTube with icon', () => `
		<aui-cookie-content-blocker title="Dit filmpje kan niet getoond worden" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse leo metus, sollicitudin nec tincidunt quis, gravida et ex. Nullam blandit, quam in aliquet convallis, nisi justo rutrum odio, eu sodales nisl purus sit amet odio." icon="fa-youtube"></aui-cookie-content-blocker>
	`, { notes })
	.add('Twitter without icon', () => `
		<aui-cookie-content-blocker title="Deze tweet kan niet getoond worden" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse leo metus, sollicitudin nec tincidunt quis, gravida et ex. Nullam blandit, quam in aliquet convallis, nisi justo rutrum odio, eu sodales nisl purus sit amet odio."></aui-cookie-content-blocker>
	`, { notes })
