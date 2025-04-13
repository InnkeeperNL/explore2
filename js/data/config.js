var gamedata = {};
var gamename = "explore2";
var test_mode = true;
var homepage = 'town';
var inventory_base_size = 10;
var max_storage_base = 10;

var max_energy_base = 10;
var energy_per_tick_base = 0.1;

var max_expeditions_base = 5;
var expeditions_per_tick_base = 1 / 60;


// ITEMS
var energy_per_value 		= 1;
var effects_per_value 		= {
	max_energy: 	0.1,
	max_inventory: 	0.1,

	max_storage: 	0.1,

	farming: 		0.1,
	gathering: 		0.1,
	hunting: 		0.1,
	mining: 		0.1,
	woodcutting: 	0.1,
}

eachoa(effects_per_value, function(effect_id, bonus_amount){
	effects_per_value[effect_id] = bonus_amount / 25;
});

// ACTIONS
var value_per_energy 		= 1.5;

// BUILDINGS
var building_cost_factor = 1;

// RECIPES
var recipe_cost_factor = 2;