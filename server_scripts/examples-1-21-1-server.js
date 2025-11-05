ServerEvents.recipes(e => {
	e.custom(global.createCompacting(
		['10x &minecraft:water', '5x minecraft:sand', '100x &create:honey'],
		['&#c:milk', '9x minecraft:charcoal'],
		'heated'
	)).id('rjs_lib:compacting/some_trash');

	e.custom(global.createCompacting(
		'100x &minecraft:water',
		'1x minecraft:ice',
		'heated'
	)).id('rjs_lib:compacting/water_from_ice');

	e.custom(global.createMixing(
		['10x &minecraft:water', '5x minecraft:sand', '100x &create:honey'],
		['&#c:milk', '9x minecraft:charcoal'],
		'heated'
	)).id('rjs_lib:mixing/some_trash');

	e.custom(global.createMixing(
		'100x &minecraft:water',
		'1x minecraft:ice',
		'heated'
	)).id('rjs_lib:mixing/water_from_ice');

	e.custom(global.createCutting(
		['100% 10x minecraft:stone', '50% 5x minecraft:sand', 'minecraft:dirt'],
		'#minecraft:dirt',
	)).id('rjs_lib:cutting/some_trash');

	e.custom(global.createCutting(
		'10% 4x minecraft:snowball',
		'minecraft:ice',
		400
	)).id('rjs_lib:cutting/some_trash2');

	e.custom(global.createFilling(
		'minecraft:snow_block',
		['1000x &minecraft:water', 'minecraft:snowball']
	)).id('rjs_lib:filling/some_trash');

	e.custom(global.createFilling(
		'minecraft:magma_block',
		['#c:stones', '100x &minecraft:lava']
	)).id('rjs_lib:filling/some_trash2');

	e.custom(global.createEmptying(
		['minecraft:slime_ball', '25x &minecraft:lava'],
		'minecraft:magma_cream'
	)).id('rjs_lib:emptying/some_trash');

	e.custom(global.createEmptying(
		['create:blaze_cake_base', '250x &minecraft:lava'],
		'create:blaze_cake'
	)).id('rjs_lib:emptying/some_trash2');

	e.custom(global.createDeploying(
		'create:blaze_burner',
		['create:empty_blaze_burner', 'minecraft:blaze_spawn_egg']
	)).id('rjs_lib:deploying/some_trash');

	e.custom(global.createDeploying(
		'minecraft:grass_block',
		['minecraft:dirt', 'minecraft:tall_grass'],
		true
	)).id('rjs_lib:deploying/some_trash2');
});