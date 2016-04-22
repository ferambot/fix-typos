import generalTypoMap from './general'
import styleTypoMap from './style'
import scriptTypoMap from './script'

import isStyle from '../helpers/isStyle'
import isScript from '../helpers/isScript'


export default [
	{
		name: 'general',
		map: generalTypoMap,
		test: () => true,
	},
	{
		name: 'css',
		map: styleTypoMap,
		test: isStyle,
	},
	{
		name: 'js',
		map: scriptTypoMap,
		test: isScript,
	},
]
