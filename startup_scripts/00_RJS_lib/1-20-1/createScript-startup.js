//version 0.2-1.20.1-startup
//---changelog---
//renamed from convertionItem to createMysteriousConversion, some visual change

StartupEvents.postInit(e => {
	let $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
	let $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

	global.createMysteriousConversion = function(input, output) {
		$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create(input, output))
	}
})