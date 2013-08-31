
var
	assert = require('assert'),
	never = require('../lib/never').never,
	neverSync = require('../lib/never').neverSync
;

describe('Never', function () {

	var ashtray = false;

	beforeEach(function() {
		ashtray = false;
	});

	it('Never execute callback (async)', function () {
		never(function() { ashtray = true; });
		assert.equal(ashtray, false);
	});

	it('Never execute callback (sync)', function () {
		neverSync(function() { ashtray = true; });
		assert.equal(ashtray, false);
	});

});
