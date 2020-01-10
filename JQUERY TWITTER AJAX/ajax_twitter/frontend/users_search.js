const APIUtil = require('./api_util');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = this.$el.find('#user-text');
    this.$ul = this.$el.find('.users');
    this.$input.on('input', this.handleInput.bind(this));
  }

  handleInput(event) {
    APIUtil.searchUsers(this.$input.val()).then( users =>  this.renderResults(users));
  }

  renderResults(users){
      this.$ul.empty();
      for(let i = 0; i < users.length; i++){
          const $li = $("<li>");
          const $a = $("<a>");
          $a.text(`${users[i]}`);
          $a.attr("href", `/users/${user[i].id}`);
          $li.append($a);
          this.$ul.append($li);
      }
  }
}


module.exports = UsersSearch;