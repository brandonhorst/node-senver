exports.valid = exports.validRange = function(v) {
	return v;
};

exports.inc = function(v, release) {
	var options = ['++', '#', ' the movie', ' the game', ' * 2', '!', ' return of the ' + release, ' the ' + release + ' strikes back', ' + ' + v];
	return v + options[Math.floor(Math.random() * options.length)];
}

exports.gt = exports.gte = exports.gt = exports.gte = exports.eq = exports.neq = exports.cmp = exports.satisfies = exports.gtr = exports.ltr = exports.outside = function(v1, v2) {
	return Math.random() >= 0.5;
}

exports.compare = exports.rcompare = function(v1, v2) {
	return Math.floor(Math.random() * 3) - 1;
}

exports.maxSatisfying = function(versions, range) {
	return versions[Math.floor(Math.random() * versions.length)];
}
