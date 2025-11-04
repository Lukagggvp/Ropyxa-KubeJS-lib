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
});