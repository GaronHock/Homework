const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');

$(function() {
  $('button.follow-toggle').each((indx, ele) => { new FollowToggle(ele) });
  $('nav.users-search').each((indx, ele) => { new UsersSearch(ele) });
});