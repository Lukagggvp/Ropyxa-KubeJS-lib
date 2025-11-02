global.ISarrayInput = function(input) {
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
			out[out.length] = { tag: tag };
			}
			continue;
		}

		for (var j = 0; j < count; j++) {
			out[out.length] = { item: value };
		}
	}

	return out;
};

global.ISarrayOutput = function(input) {
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