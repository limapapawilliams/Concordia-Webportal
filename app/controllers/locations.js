import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  topLevelAreas: computed('model.directory', function () {
    return this.get('model.directory').filter((a) => a.is_top_level);
  }),
});
