# lb-gridview
A React Component that will return html elements with preset styles of grid properties.

### Installation
```
$ npm i lb-gridview --save
```

### Example
```
import { GridView, GridViewCell } from 'lb-gridview'

const Component = () => (
	<GridView style={{ gridTemplateColumns: 'repeat(5, 100fr)' }}>
		<GridViewCell style={{ gridColumnStart: 1, gridColumnEnd: 3, }}>
				<div >Big</div>
		</GridViewCell>
		<GridViewCell style={{ gridColumnStart: 3, gridColumnEnd: 6, }}>
				Small
		</GridViewCell>
	</GridView>
)

export default Component
```

