//version 0.1-1.18.2-client
//---changelog---
//initial version, mysterious conversion added

const ConversionRecipe = java('com.simibubi.create.compat.jei.ConversionRecipe')

onEvent('jei.remove.recipes', e => {
	const mysteryConversion = global.jeiRuntime.jeiHelpers.getRecipeType('create:mystery_conversion').get()
	global.convertionItem = function(input, output) {
		global.jeiRuntime.recipeManager.addRecipes(mysteryConversion, [
			new ConversionRecipe.create(input, output)
		]);
	}
})