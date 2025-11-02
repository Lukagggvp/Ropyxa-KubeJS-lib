//version 0.2-1.19.2-startup
//---changelog---
//renamed convertionItem to mysteriousConversion
//some code style changes
StartupEvents.postInit(e => {
	let $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory');
	let $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe');

	global.mysteriousConversion = function (input, output) {
		$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create(input, output));
		return this;
	};
});