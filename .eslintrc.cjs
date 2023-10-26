module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'prettier',
		'airbnb',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh', 'prettier', 'react'],
	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		semi: ['error', 'always'],
		quotes: ['error', 'single'],
		camelcase: 'error',
		eqeqeq: ['error', 'always'],
		indent: 'off',
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'jsx-quotes': ['error', 'prefer-double'],
		'no-confusing-arrow': 'error',
		'no-duplicate-imports': ['error', { includeExports: true }],
		'no-template-curly-in-string': 'error',
		'no-console': 'warn',
		'no-delete-var': 'error',
		'no-empty': ['error', { allowEmptyCatch: true }],
		'no-empty-function': 'warn',
		'no-eq-null': 'error',
		'no-extend-native': ['error', { exceptions: ['Object'] }],
		'no-extra-bind': 'error',
		'no-extra-boolean-cast': ['error', { enforceForLogicalOperands: true }],
		'no-extra-label': 'error',
		'no-extra-semi': 'error',
		'no-iterator': 'error',
		'no-label-var': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-lonely-if': 'error',
		'no-multi-str': 'error',
		'no-proto': 'error',
		'no-throw-literal': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'prefer-const': 'error',
		'require-await': 'error',
		'spaced-comment': ['error', 'always'],
		'array-bracket-spacing': ['error', 'never'],
		'space-in-parens': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		'arrow-spacing': 'error',
		'block-spacing': 'error',
		'eol-last': 'off',
		'arrow-body-style': 'off',
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'only-multiline',
			},
		],
		'comma-spacing': ['error', { before: false, after: true }],
		'comma-style': ['error', 'last'],
		'func-call-spacing': ['error', 'never'],
		'implicit-arrow-linebreak': ['error', 'beside'],
		'linebreak-style': 'off',
		'key-spacing': ['error', { beforeColon: false }],
		'keyword-spacing': ['error', { before: true }],
		'lines-around-comment': ['error', { beforeLineComment: true }],
		'max-len': ['error', { code: 100, tabWidth: 2 }],
		'max-statements-per-line': ['error', { max: 1 }],
		'new-parens': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multi-spaces': 'error',
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
		'no-trailing-spaces': 'error',
		'no-whitespace-before-property': 'error',
		'operator-linebreak': 'off',
		'no-param-reassign': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
			{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
			{ blankLine: 'always', prev: ['case', 'default'], next: '*' },
		],
		'rest-spread-spacing': ['error', 'never'],
		'object-curly-newline': 'off',
		'semi-spacing': ['error', { before: false, after: true }],
		'semi-style': ['error', 'last'],
		'space-infix-ops': 'error',
		'switch-colon-spacing': 'error',
		'import/no-duplicates': 'error',
		'import/newline-after-import': ['error', { count: 1 }],
		'import/no-extraneous-dependencies': 'off',
		'import/prefer-default-export': 'off',
		'react/react-in-jsx-scope': 'off',
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/function-component-definition': 'off',
		'react/jsx-no-useless-fragment': 'off',
		'react/prop-types': 'off',
		"react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
	},
};
