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
});