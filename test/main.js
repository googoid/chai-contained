'use strict';

const chai = require('chai')
  , expect = chai.expect
  , contained = require('../');

chai.use(contained);

describe('chai-contained', () => {
  describe('expect(a).to.be.contained.in(arr)', () => {
    it('should fail if arr doesn\'t contain a', () => {
      try {
        expect('a').to.be.containedIn(['b', 'c']);
      }
      catch (err) {
        return;
      }

      throw new Error('it should fail');
    });

    it('should pass if arr contains a', () => {
      expect('a').to.be.containedIn(['a', 'b', 'c']);
      expect('foo').to.be.containedIn(['noFoo', 'baz']); // will fail
    });
  });
});
