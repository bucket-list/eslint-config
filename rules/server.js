module.exports = {
	"extends": ["airbnb/base"],
	"parser": "babel-eslint",
	"env": {
		"node": true
	},
	"rules": {
		"comma-dangle": [
			2,
			"never"
		],
		"indent": [
			0,
			"tab"
		],
		"quotes": [
			2,
			"double"
		],
		"object-curly-spacing": [
			2,
			"never"
		],
		"no-else-return": [
			0
		],
		"newline-per-chained-call": [
			0
		],
		"no-underscore-dangle": [
			0
		],
		"max-len": [
			0
		],
		"camelcase": [
			2,
			{
				"properties": "always"
			}
		]
	}
};