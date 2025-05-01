var gamedata = {};
var gamename = "explore2";
var test_mode = true;
var homepage = 'town';
var inventory_base_size = 10;
var max_storage_base = 20;

var max_energy_base = 100;
var energy_per_tick_base = 0;

var max_expeditions_base = 5;
var expeditions_per_tick_base = 1 / 60;

var travel_energy_cost = 10;


// ITEMS
var energy_per_value 		= 1;
var effects_per_value 		= {
	max_energy: 	5,
	max_inventory: 	1,

	max_storage: 	2,
	travel_speed: 	1,

	farming: 		1,
	gathering: 		1,
	hunting: 		1,
	mining: 		1,
	woodcutting: 	1,
	combat: 		1,
	passive: 		1,
}

var all_skills = {
	farming: 		1,
	gathering: 		1,
	hunting: 		1,
	mining: 		1,
	woodcutting: 	1,
	combat: 		1,
	travel_speed: 	1,
};

eachoa(effects_per_value, function(effect_id, bonus_amount){
	effects_per_value[effect_id] = bonus_amount / 50;
});
var percent_ponus_per_value = 1;
var fixed_effect_factor = 0.05;

// ACTIONS
var value_per_energy 		= 1.5;

// BUILDINGS
var building_cost_factor = 1;

// RECIPES
var recipe_cost_factor = 2;