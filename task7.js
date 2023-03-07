const mod = require('custom_modules');

let p1=mod.add_planet("Mars");
let p2=mod.add_planet("Venus");
let p3=mod.add_planet("Earth");
mod.get_planets();
mod.edit_planet('Earth', 'Venus')
mod.get_planets();
mod.edit_planet( 'Venus','Earth')
console.log(mod.find_planet('Venus'))
console.log(mod.add_station('Nasa', p2))
console.log(mod.add_station('Nasa 2', p2))
mod.get_stations(p2);
mod.edit_station('Nasa',p2 , 'Nasa 3');
mod.get_stations(p2);
mod.edit_station('Nasa 3',p2 , 'Nasa');
mod.remove_station('Nasa 2', p2);
mod.get_stations(p2);
console.log(mod.add_cargo('cargo 1', p2));
console.log(mod.add_cargo('cargo 2', p2));
console.log(mod.add_cargo('cargo 3', p2));
mod.get_cargos(p2);
console.log(mod.find_cargo('cargo 1', p2))
