const { describe, it } = intern.getInterface('bdd');
const { assert } = intern.getPlugin('chai');

describe('Input', () => {
	it('should be true', () => {
		assert.isTrue(true);
	});
	it('should fail', () => {
		assert.equal({ foo: 'bar' }, { foo: 'baz' });
	});
});
