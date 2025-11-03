//version 0.1-1.19.2-server
//---changelog---
//initial version, added compacting
global.createCompacting = function(output, input, id, heat, e) {
	e = global.TrueEvent;

	e.custom({
		type: 'create:compacting',
		heatRequirement: heat || 'none',
		ingredients: global.ISarrayInput(input),
		results: global.ISarrayOutput(output)
	}).id(id);
};

ServerEvents.recipes(e => {
	global.TrueEvent = e;
})

