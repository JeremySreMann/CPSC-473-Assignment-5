QUnit.test('DataStore', function(assert) {
    var ds = new App.DataStore();
  
    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');
  
    assert.deepEqual(ds.getAll(), {
      'james@bond.com': 'eshpressho',
      'm@bond.com': 'tea'
    });
    ds.remove('james@bond.com');

    assert.deepEqual(ds.getAll(), {
        'm@bond.com': 'tea'
    });

    assert.equal(ds.get('m@bond.com'), 'tea');
    assert.equal(ds.get('james@bond.com'), undefined);
  });

