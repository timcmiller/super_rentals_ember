import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  action: {
    imageShow() {
      this.set('isImageShowing', true);
    },
    imageHide() {
      this.set('isImageShowing', false);
    }
  }
});
