exports.seed = function (knex, Promise) {
  return knex('establishments').del()
  .then(function () {
    return knex('establishments').insert([
      {
        id: 0,
        name:"Aunty Mena's Vegetarian Restaurant & Cafe",
        address:'167 Cuba St, Te Aro, Wellington 6011',
        website:'https://www.facebook.com/Aunty-Mena-Vegetarian-Cafe-133064006760606/',
        type:'Restaurant and Cafe',
        phoneNumber: '043828288',
        recommended: 'Chicken Laksa, Chow Mee, Chicken Drumsticks!!!',
        lat: '-41.29405',
        lng: '174.7755'
      },
      {
        id: 1,
        name:"Sweet Release Cakes and Treats",
        address:'134 Willis St, Te Aro, Wellington 6011',
        website:'https://www.sweetreleasecakesandtreats.co.nz/',
        type: 'Bakery / Cafe',
        phoneNumber:'0211320700',
        recommended: 'Thickshakes, Cheese Scones, Pies!!!',
        lat: '-41.289331',
        lng: '174.774345'
      },
      {
        id: 2,
        name:"Pranah Cafe",
        address:"120 Riddiford St, Newtown, Wellington 6021",
        website:'http://www.pranahcafe.co.nz/',
        type:'Cafe',
        phoneNumber:'043898100',
        lat: '-41.312087',
        lng: '174.779173'
      }
    ])
  })
}
