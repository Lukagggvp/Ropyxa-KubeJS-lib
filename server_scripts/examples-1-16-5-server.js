onEvent('recipes', e => {
	global.createCompacting(
		['10x &minecraft:water', '5x minecraft:sand', '100x &create:honey'],
		['&#forge:milk', '9x minecraft:charcoal'],
		'rjs_lib:compacting/some_trash'
	);

	global.createCompacting(
		'100x &minecraft:water',
		'1x minecraft:ice',
		'rjs_lib:compacting/some_trash2',
		'heated'
	);

	global.createMixing(
		['10x &minecraft:water', '5x minecraft:sand', '100x &create:honey'],
		['&#forge:milk', '9x minecraft:charcoal'],
		'rjs_lib:mixing/some_trash'
	);

	global.createMixing(
		'100x &minecraft:water',
		'1x minecraft:ice',
		'rjs_lib:mixing/some_trash2',
		'heated'
	);

	global.createCutting(
		['100% 10x minecraft:stone', '50% 5x minecraft:sand', 'minecraft:dirt'],
		'#minecraft:dirt',
		'rjs_lib:cutting/some_trash'
	);

	global.createCutting(
		'10% 4x minecraft:snowball',
		'minecraft:ice',
		'rjs_lib:cutting/some_trash2',
		400
	);
});