import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-proba14-организация', 'Unit | Model | i-i-s-proba14-организация', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-proba14-вакант-должн',
    'model:i-i-s-proba14-должн-сотр',
    'model:i-i-s-proba14-организация',
    'model:i-i-s-proba14-планир-собес',
    'model:i-i-s-proba14-рег-результ',
    'model:i-i-s-proba14-регист-анкеты',
    'model:i-i-s-proba14-сотрудники',
    'model:i-i-s-proba14-т-ч-рег-результ',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
