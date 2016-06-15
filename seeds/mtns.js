
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mtn').del().then(function() {
    return Promise.join(
      // Inserts seed entries
      knex('mtn').insert({name: 'Mt. Bierstadt', elevation: 14060,
        distance: 55, rating: 1, review: "Great first 14er!",
        image_url: "http://www.14ers.com/photos/mtbierstadt/lRBier_101.jpg"}),
      knex('mtn').insert({name: 'Longs Peak', elevation: 14259,
        distance: 71, rating: 4, review: "Great views, tough trail!",
        image_url: "https://4.bp.blogspot.com/-PiGS_5E9LxE/UBWqxM-YWgI/AAAAAAAAA6g/4t-Sllt9CL8/s1600/route.jpg"})
    );
  })
};
