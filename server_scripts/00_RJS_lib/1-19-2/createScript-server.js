//version 0.3-1.19.2-server
//---changelog---
//updated ISarrayInput and ISarrayOutput, added cutting
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

ServerEvents.recipes(e => {
	global.TrueEvent = e;
})

