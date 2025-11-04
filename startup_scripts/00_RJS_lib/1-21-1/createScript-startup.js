//version 0.5-1.21.1-startup
//---changelog---
//updated ISarrayInput and ISarrayOutput, added cutting

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
		ingredients: global.ISarrayInput_many_fluid_tag(input),
		results: global.ISarrayOutput_many_fluid(output)
	};

	return recipe;
};

global.createMixing = function(output, input, heat) {
	let recipe = {
		type: 'create:mixing',
		heatRequirement: heat || 'none',
		ingredients: global.ISarrayInput_many_fluid_tag(input),
		results: global.ISarrayOutput_many_fluid(output)
	};

	return recipe;
};

global.createCutting = function(output, input, time) {
	let recipe = {
		type: 'create:cutting',
		ingredients: global.ISarrayInput_many_tag(input),
		processingTime: time || 100,
		results: global.ISarrayOutput_many_chance(output)
	};

	return recipe;
};