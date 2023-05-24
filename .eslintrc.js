module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'eslint:recommended', 
		'plugin:react/recommended', 
		'plugin:@typescript-eslint/recommended'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', 'i18next'],
	rules: {
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-indent-props': ['error', 'tab'],
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'react/jsx-filename-extension': [1, {
			extensions: ['.js', '.jsx', '.tsx']
		}],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/react-in-jsx-scope': 'off',
		'react/require-default-props': 'off',
		'react/button-has-type': 1,
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'i18next/no-literal-string': ['warn', {
			markupOnly: true,
			'ignoreAttribute': ['data-testid', 'to']
		}],
		'max-len': ['error', {
			'ignoreComments': true,
			'code': 100
		}]
	},
	globals: {
		__IS_DEV__: true,
		module: true,
	},
	overrides: [{
		files: ['**/src/**/*.test.{ts,tsx}'],
		rules: {
			'i18next/no-literal-string': 'off'
		}
	}]
};