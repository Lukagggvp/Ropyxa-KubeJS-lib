ServerEvents.recipes(e => {
	global.createCompacting(
		['10x &minecraft:water', '25% 5x minecraft:sand', '100x &create:honey'],
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
		['10x &minecraft:water', '25% 5x minecraft:sand', '100x &create:honey'],
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
		'99% minecraft:grass_block',
		['minecraft:dirt', 'minecraft:tall_grass'],
		'rjs_lib:deploying/some_trash2',
		true
	);

	global.createHaunting(
		'minecraft:nether_wart',
		'#minecraft:saplings',
		'rjs_lib:haunting/some_trash'
	);

	global.createHaunting(
		['25% create:blaze_cake_base', '75% 2x minecraft:wheat'],
		'minecraft:cake',
		'rjs_lib:haunting/some_trash2'
	);

	global.createSplashing(
		['minecraft:diamond', '10% minecraft:cobblestone', '1% minecraft:ancient_debris'],
		'minecraft:diamond_ore',
		'rjs_lib:splashing/some_trash'
	);

	global.createMilling(
		['3x minecraft:blaze_powder', '12x minecraft:iron_nugget', '25% 6x minecraft:iron_nugget', '1% create:cinder_flour'],
		'create:blaze_burner',
		'rjs_lib:milling/some_trash'
	);

	global.createCrushing(
		['9x create:crushed_raw_iron', '99% 9x create:crushed_raw_zinc'],
		'create:crushing_wheel',
		'rjs_lib:crushing/some_trash',
		1000
	);

	global.createItemApplication(
		'10% minecraft:crying_obsidian',
		['minecraft:obsidian', 'minecraft:lingering_potion'],
		'rjs_lib:item_application/some_trash'
	);

	global.createPressing(
		['10% minecraft:egg', '2x minecraft:feather'],
		'minecraft:chicken_spawn_egg',
		'rjs_lib:pressing/some_trash'
	);

	global.createSandpaperPolishing(
		'1% 64x create:experience_nugget',
		'minecraft:nether_star',
		'rjs_lib:sandpaper_polishing/some_trash'
	);
});