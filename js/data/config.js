var gamedata = {};
var gamename = "explore2";
var test_mode = true;
var homepage = 'town';
var inventory_base_size = 10;
var max_storage_base = 10;

var max_energy_base = 10;
var energy_per_tick_base = 0;

var max_expeditions_base = 5;
var expeditions_per_tick_base = 1 / 60;


// ITEMS
var energy_per_value 		= 0.2;
var effects_per_value 		= {
	max_energy: 	1,
	max_inventory: 	1,

	max_storage: 	1,
	travel_speed: 	1,

	farming: 		0.5,
	gathering: 		0.5,
	hunting: 		0.5,
	mining: 		0.5,
	woodcutting: 	0.5,
	combat: 		0.5,
	passive: 		0.33,
}

var all_skills = {
	farming: 		0.5,
	gathering: 		0.5,
	hunting: 		0.5,
	mining: 		0.5,
	woodcutting: 	0.5,
	combat: 		0.5,
	travel_speed: 	1,
};

eachoa(effects_per_value, function(effect_id, bonus_amount){
	effects_per_value[effect_id] = bonus_amount / 1;
});
var fixed_effect_factor = 0.02;

// ACTIONS
var value_per_energy 		= 1.5;

// BUILDINGS
var building_cost_factor = 1;

// RECIPES
var recipe_cost_factor = 1;