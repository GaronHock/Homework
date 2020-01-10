const APIUtil = require('./api_util');

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.$el.on("click", this.handleClick.bind(this));
  }

  render() {
      switch(this.followState){
          case "followed":
            this.$el.html('Unfollow');
            this.$el.prop("disabled", false);
            break;
          case "unfollowed":
            this.$el.html('Follow');
            this.$el.prop("disabled", false);
            break;
          case "following":
            this.$el.prop("disabled", true);
            break;
          case "unfollowing":
            this.$el.prop("disabled", true);
            break;
      }
  }
   
  handleClick(e){
    e.preventDefault();
    if (this.followState === 'unfollowed'){
      APIUtil.followUser(this.userId).then(this.successFunction.bind(this));
    } else{
      APIUtil.unfollowUser(this.userId).then(this.successFunction.bind(this));
    }
  }

  successFunction() {
    if (this.followState === 'unfollowed') {
        this.followState = 'followed';
        this.render();
    } else {
        this.followState = 'unfollowed';
        this.render();
    }
  }  
}
    
    
    
module.exports = FollowToggle;
    