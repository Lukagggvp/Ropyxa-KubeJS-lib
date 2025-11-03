//version 0.2-1.20.1-server
//---changelog---
//added mixing
global.createCompacting = function(output, input, id, heat, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:compacting',
		heatRequirement: heat || 'none',
		ingredients: global.ISarrayInput(input),
		results: global.ISarrayOutput(output)
	}).id(id);
};

global.createMixing = function(output, input, id, heat, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:mixing',
		heatRequirement: heat || 'none',
		ingredients: global.ISarrayInput(input),
		results: global.ISarrayOutput(output)
	}).id(id);
};

ServerEvents.recipes(e => {
	global.TrueEvent = e;
})

