QUnit.test('DataStore', function(assert) {
    var ds = new App.DataStore();
  
    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');
  
    assert.equal(ds.getAll(), {
      'james@bond.com': 'eshpressho',
      'm@bond.com': 'tea'
    });
    ds.remove('james@bond.com');

    assert.equal(ds.getAll(), {
        'm@bond.com': 'tea'
    });

    assert.equal(ds.get('m@bond.com'), 'tea');
    assert.equal(ds.get('james@bond.com'), undefined);
  });

