//version 0.3-1.21.1-startup
//---changelog---
//moved server scripts to startup script for 1.21.1 compatibility

StartupEvents.postInit(e => {
	let $MysteriousItemConversionCategory = Java.loadClass('com.simibubi.create.compat.jei.category.MysteriousItemConversionCategory')
	let $ConversionRecipe = Java.loadClass('com.simibubi.create.compat.jei.ConversionRecipe')

	global.createMysteriousConversion = function(input, output) {
		$MysteriousItemConversionCategory.RECIPES.add($ConversionRecipe.create(input, output))
	}
})

global.createCompacting = function(output, input, heat) {
	let recipe = {
		type: 'create:compacting',
		heatRequirement: heat || 'none',
		ingredients: global.ISarrayInput(input),
		results: global.ISarrayOutput(output)
	};

	return recipe;
};