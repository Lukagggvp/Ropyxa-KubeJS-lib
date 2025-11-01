//version 0.1-1.21.1
//---changelog---
//initial version, mysterious conversion added

StartupEvents.postInit(e => {
	let $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
	let $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

	global.convertionItem = function(input, output) {
		$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create(input, output))
	}
})