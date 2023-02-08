module.exports = {
	printWidth: 80,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	plugins: ['prettier-plugin-svelte', 'prettier-plugin-astro'],
	pluginSearchDirs: ['.'],
	overrides: [
		{ files: '*.svelte', options: { parser: 'svelte' } },
		{ files: '*.astro', options: { parser: 'astro' } }
	]
};
