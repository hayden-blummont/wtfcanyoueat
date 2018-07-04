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
        recommended: 'Chicken Laksa, Chow Mee, Chicken Drumsticks!!!'
      },
      {
        id: 1,
        name:"Sweet Release Cakes and Treats",
        address:'134 Willis St, Te Aro, Wellington 6011',
        website:'https://www.sweetreleasecakesandtreats.co.nz/',
        type: 'Bakery / Cafe',
        phoneNumber:'0211320700',
        recommended: 'Thickshakes, Cheese Scones, Pies!!!'
      },
      {
        id: 2,
        name:"Pranah Cafe",
        address:"120 Riddiford St, Newtown, Wellington 6021",
        website:'http://www.pranahcafe.co.nz/',
        type:'Cafe',
        phoneNumber:'043898100'
      }
    ])
  })
}
