'use strict';

describe('pads', function() {
  var pads;

  beforeEach(module('JVS'));

  beforeEach(inject(function(_pads_) {
    pads = _pads_;
  }));

  it('should have zero rows', function() {
    expect(pads.rows().length).toEqual(0);
  });
});
