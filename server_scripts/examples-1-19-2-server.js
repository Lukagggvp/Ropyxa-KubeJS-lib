ServerEvents.recipes(e => {
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

	global.createFilling(
		'minecraft:snow_block',
		['1000x &minecraft:water', 'minecraft:snowball'],
		'rjs_lib:filling/some_trash'
	);

	global.createFilling(
		'minecraft:magma_block',
		['#forge:stone', '100x &minecraft:lava'],
		'rjs_lib:filling/some_trash2'
	);

	global.createEmptying(
		['minecraft:slime_ball', '25x &minecraft:lava'],
		'minecraft:magma_cream',
		'rjs_lib:emptying/some_trash'
	);

	global.createEmptying(
		['create:blaze_cake_base', '250x &minecraft:lava'],
		'create:blaze_cake',
		'rjs_lib:emptying/some_trash2'
	);

	global.createDeploying(
		'create:blaze_burner',
		['create:empty_blaze_burner', 'minecraft:blaze_spawn_egg'],
		'rjs_lib:deploying/some_trash'
	);

	global.createDeploying(
		'minecraft:grass_block',
		['minecraft:dirt', 'minecraft:tall_grass'],
		'rjs_lib:deploying/some_trash2',
		true
	);
});