//version 0.4-1.18.2-server
//---changelog---
//added filling, emptying, deploying
global.createCompacting = function(output, input, id, heat, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:compacting',
		heatRequirement: heat || 'none',
		ingredients: global.ISarrayInput_many_fluid_tag(input),
		results: global.ISarrayOutput_many_fluid(output)
	}).id(id);
};

global.createMixing = function(output, input, id, heat, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:mixing',
		heatRequirement: heat || 'none',
		ingredients: global.ISarrayInput_many_fluid_tag(input),
		results: global.ISarrayOutput_many_fluid(output)
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
		results: global.ISarrayOutput_many(output)
	}).id(id);
};


onEvent('recipes', e => {
	global.TrueEvent = e;
})