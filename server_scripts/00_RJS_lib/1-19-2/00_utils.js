//Yea im use CharGPT lol
global.ISarrayInput_many_fluid_tag = function (input) {
	var src = Array.isArray(input) ? input : [input];
	var out = [];

	for (var i = 0; i < src.length; i++) {
		var entry = String(src[i]).trim();
		var countMatch = /^(\d+)\s*[xх]\s*(.+)$/.exec(entry);
		var count = 1;
		var value = entry;

		if (countMatch) {
			count = parseInt(countMatch[1], 10);
			value = countMatch[2].trim();
		}

		if (/^&\#/.test(value)) {
			var tagName = value.substring(2).trim();
			out[out.length] = {
				amount: count,
				fluidTag: tagName
			};
			continue;
		}

		if (/^&/.test(value)) {
			var fluidName = value.substring(1).trim();
			out[out.length] = {
				amount: count,
				fluid: fluidName
			};
			continue;
		}

		if (/^#/.test(value)) {
			var tag = value.substring(1).trim();
			for (var j = 0; j < count; j++) {
				out[out.length] = {
					tag: tag
				};
			}
			continue;
		}

		for (var j = 0; j < count; j++) {
			out[out.length] = {
				item: value
			};
		}
	}

	return out;
};

global.ISarrayInput_many_tag = function (input) {
	var src = Array.isArray(input) ? input : [input];
	var out = [];

	for (var i = 0; i < src.length; i++) {
		var entry = String(src[i]).trim();
		var countMatch = /^(\d+)\s*[xх]\s*(.+)$/.exec(entry);
		var count = 1;
		var value = entry;

		if (countMatch) {
			count = parseInt(countMatch[1], 10);
			value = countMatch[2].trim();
		}

		if (/^#/.test(value)) {
			var tag = value.substring(1).trim();
			for (var j = 0; j < count; j++) {
				out[out.length] = {
					tag: tag
				};
			}
			continue;
		}

		for (var j = 0; j < count; j++) {
			out[out.length] = {
				item: value
			};
		}
	}

	return out;
};

global.ISarrayOutput_many_fluid = function(input) {
	var src = Array.isArray(input) ? input : [input];
	var out = [];

	for (var k = 0; k < src.length; k++) {
		var raw = src[k];

		if (raw && typeof raw === 'object') {
			if (raw.fluid) {
			var amt = raw.amount != null ? raw.amount : 1;
			out[out.length] = { fluid: String(raw.fluid), amount: amt };
			} else if (raw.item) {
			var cnt = raw.count != null ? raw.count : 1;
			out[out.length] = { item: String(raw.item), count: cnt };
			}
			continue;
		}

		var entry = String(raw).trim();
		var m = /^(\d+)\s*[xх]\s*(.+)$/.exec(entry);
		var mult = 1;
		var value = entry;

		if (m) {
			mult = parseInt(m[1], 10);
			value = m[2].trim();
		}

		if (/^&/.test(value)) {
			var fluidId = value.substring(1).trim();
			out[out.length] = { fluid: fluidId, amount: mult };
			continue;
		}

		out[out.length] = { item: value, count: mult };
	}

	return out;
};

global.ISarrayOutput_many = function(input) {
	var src = Array.isArray(input) ? input : [input];
	var out = [];

	for (var k = 0; k < src.length; k++) {
		var raw = src[k];

		if (raw && typeof raw === 'object') {
			var cnt = raw.count != null ? raw.count : 1;
			out[out.length] = {
				item: String(raw.item), count: cnt
			};
			continue;
		}

		var entry = String(raw).trim();
		var m = /^(\d+)\s*[xх]\s*(.+)$/.exec(entry);
		var mult = 1;
		var value = entry;

		if (m) {
			mult = parseInt(m[1], 10);
			value = m[2].trim();
		}

		out[out.length] = {
			item: value, count: mult
		};
	}

	return out;
};

global.ISarrayOutput_many_chance = function(input) {
	var src = Array.isArray(input) ? input : [input];
	var out = [];

	for (var k = 0; k < src.length; k++) {
		var raw = src[k];

		if (raw && typeof raw === 'object') {
			var cnt = raw.count != null ? raw.count : 1;
			var chance = raw.chance != null ? raw.chance : null;
			var entry = {
				item: String(raw.item),
				count: cnt
			};
			if (chance != null) entry.chance = chance;
			out.push(entry);
			continue;
		}

		var entry = String(raw).trim();
		var chance = null;
		var count = 1;
		var item = entry;

		var chanceMatch = /^([\d.]+)\s*%+\s*(.+)$/.exec(entry);
		if (chanceMatch) {
			chance = parseFloat(chanceMatch[1]) / 100;
			item = chanceMatch[2].trim();
		}

		var countMatch = /^(\d+)\s*[xх]\s*(.+)$/.exec(item);
		if (countMatch) {
			count = parseInt(countMatch[1], 10);
			item = countMatch[2].trim();
		}

		var obj = {
			item: item
		};
		if (count !== 1) obj.count = count;
		if (chance !== null) obj.chance = chance;

		out.push(obj);
	}

	return out;
};