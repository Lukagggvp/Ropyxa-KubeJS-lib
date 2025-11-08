//version 0.6-1.19.2-server
//---changelog---
//added itemApplication, pressing, added chance support to Compacting, Mixing, Deploying

global.createCompacting = function(output, input, id, heat, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:compacting',
		heatRequirement: heat || 'none',
		ingredients: global.ISarrayInput_many_fluid_tag(input),
		results: global.ISarrayOutput_many_chance_fluid(output)
	}).id(id);
};

global.createMixing = function(output, input, id, heat, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:mixing',
		heatRequirement: heat || 'none',
		ingredients: global.ISarrayInput_many_fluid_tag(input),
		results: global.ISarrayOutput_many_chance_fluid(output)
	}).id(id);
};

global.createCutting = function(output, input, id, time, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:cutting',
		ingredients: global.ISarrayInput_many_tag(input),
		processingTime: time || 100,
		results: global.ISarrayOutput_many_chance(output)
	}).id(id);
};

global.createFilling = function(output, input, id, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:filling',
		ingredients: global.ISarrayInput_many_fluid_tag(input),
		results: global.ISarrayOutput_many(output)
	}).id(id);
};

global.createEmptying = function(output, input, id, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:emptying',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_fluid(output)
	}).id(id);
};

global.createDeploying = function(output, input, id, keep_item, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:deploying',
		ingredients: global.ISarrayInput_many_tag(input),
		keepHeldItem: keep_item || false,
		results: global.ISarrayOutput_many_chance(output)
	}).id(id);
};

global.createHaunting = function(output, input, id, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:haunting',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_chance(output)
	}).id(id);
};

global.createSplashing = function(output, input, id, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:splashing',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_chance(output)
	}).id(id);
};

global.createMilling = function(output, input, id, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:milling',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_chance(output)
	}).id(id);
};

global.createCrushing = function(output, input, id, time, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:crushing',
		ingredients: global.ISarrayInput_many_tag(input),
		processingTime: time || 100,
		results: global.ISarrayOutput_many_chance(output)
	}).id(id);
};

global.createItemApplication = function(output, input, id, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:item_application',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_chance(output)
	}).id(id);
};

global.createPressing = function(output, input, id, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:pressing',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_chance(output)
	}).id(id);
};

global.createSandpaperPolishing = function(output, input, id, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:sandpaper_polishing',
		ingredients: global.ISarrayInput_many_tag(input),
		results: global.ISarrayOutput_many_chance(output)
	}).id(id);
};


ServerEvents.recipes(e => {
	global.TrueEvent = e;
})