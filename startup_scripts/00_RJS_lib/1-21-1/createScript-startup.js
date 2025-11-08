//version 0.8-1.21.1-startup
//---changelog---
//added ItemApplication, pressing, added chance support to Compacting, Mixing, Deploying

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
		results: global.ISarrayOutput_many_chance_fluid(output)
	};

	return recipe;
};

global.createMixing = function(output, input, heat) {
	let recipe = {
		type: 'create:mixing',
		heatRequirement: heat || 'none',
		ingredients: global.ISarrayInput_many_fluid_tag(input),
		results: global.ISarrayOutput_many_chance_fluid(output)
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

global.createFilling = function(output, input) {
	let recipe = {
		type: 'create:filling',
		ingredients: global.ISarrayInput_many_fluid_tag(input),
		results: global.ISarrayOutput_many(output)
	};

	return recipe;
};

global.createEmptying = function(output, input) {
	let recipe = {
		type: 'create:emptying',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_fluid(output)
	};

	return recipe;
};

global.createDeploying = function(output, input, keep_item) {
	let recipe = {
		type: 'create:deploying',
		ingredients: global.ISarrayInput_many_tag(input),
		keepHeldItem: keep_item || false,
		results: global.ISarrayOutput_many_chance(output)
	};

	return recipe;
};

global.createHaunting = function(output, input) {
	let recipe = {
		type: 'create:haunting',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_chance(output)
	};

	return recipe;
};

global.createSplashing = function(output, input) {
	let recipe = {
		type: 'create:splashing',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_chance(output)
	};

	return recipe;
};

global.createMilling = function(output, input) {
	let recipe = {
		type: 'create:milling',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_chance(output)
	};

	return recipe;
};

global.createCrushing = function(output, input, time) {
	let recipe = {
		type: 'create:crushing',
		ingredients: global.ISarrayInput_many_tag(input),
		processingTime: time || 100,
		results: global.ISarrayOutput_many_chance(output)
	};

	return recipe;
};

global.createItemApplication = function(output, input) {
	let recipe = {
		type: 'create:item_application',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_chance(output)
	};

	return recipe;
};

global.createPressing = function(output, input) {
	let recipe = {
		type: 'create:pressing',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_chance(output)
	};

	return recipe;
};

global.createSandpaperPolishing = function(output, input) {
	let recipe = {
		type: 'create:sandpaper_polishing',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_chance(output)
	};

	return recipe;
};