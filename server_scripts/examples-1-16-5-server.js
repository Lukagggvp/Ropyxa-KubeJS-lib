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
});