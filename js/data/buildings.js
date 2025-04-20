var all_available_buildings = {
	
	
	furnace:{
		image: 		'buildings/metallurgy-2932947_640.jpg',
		//item_image: 'coal',
		cost:{
			stone: 		2,
			coal: 		1,
		},
		/*additional_costs:{
			2:{
				iron_ore: 	2,
			}
		},*/
		cost_factor: 	2,
		effects:{
			mining: 	5,
		},
		effect_type: 	'percent',
		recipes:{
			copper: 	1,
			iron: 		2,
		},
	},
	hunting_lodge:{
		name: 		'Hunting lodge',
		image: 		'buildings/dream_TradingCard-2025-04-18T155127.500.jpg',
		//item_image: 'meat',
		cost:{
			lumber: 	3,
			hide: 		2,
		},
		cost_factor: 	2,
		effects:{
			hunting: 	5,
		},
		effect_type: 	'percent',
		recipes:{
		},
	},
	
	pottery:{
		image: 		'buildings/dream_TradingCard-2025-04-19T063316.434.jpg',
		//item_image: 'meat',
		cost:{
			clay: 		5,
		},
		cost_factor: 	2,
		effects:{
			max_storage: 	5,
		},
		effect_type: 	'fixed',
		recipes:{
		},
	},
	kitchen:{
		image: 		'buildings/dream_TradingCard-2023-08-24T113017.jpg',
		item_image: 'meat',
		cost:{
			brick: 		2,
			meat: 		1,
		},
		cost_factor: 	2,
		effects:{
			hunting: 	5,
		},
		effect_type: 	'percent',
		recipes:{
			roasted_meat: 	1,
			/*bread: 			2,
			fries: 			2,*/
		},
	},
	/*mill:{
		image: 		'buildings/mill-1745186_640.jpg',
		//item_image: 'flax',
		cost:{
			flax: 		10,
		},
		cost_factor: 	2,
		effects:{
			farming: 	10,
		},
		effect_type: 	'percent',
		recipes:{
			twine: 		1,
			flour: 		1,
		},
	},*/
	paper_mill:{
		image: 		'buildings/dream_TradingCard-2023-08-20T072951.jpg',
		//item_image: 'paper',
		cost:{
			jar: 		1,
		},
		cost_factor: 	2,
		effects:{
			travel_speed: 	5,
		},
		effect_type: 	'percent',
		recipes:{
			paper: 		1,
			parchment: 	2,
			map: 		1,
		},
	},
	smithy:{
		image: 		'buildings/horseshoe-1516273_640.jpg',
		//item_image: 'copper_pot',
		cost:{
			brick: 		2,
			copper: 	1,
		},
		cost_factor: 	2,
		effects:{
			mining: 	5,
		},
		effect_type: 	'percent',
		recipes:{
			copper_pot: 	1,
			nail: 			2,
			axe: 			2,
			pickaxe: 		2,
			pitchfork: 		2,
		},
	},
	stonesmith:{
		image: 		'buildings/dream_TradingCard-2025-04-19T073259.134.jpg',
		//item_image: 'copper_pot',
		cost:{
			stone: 		5,
		},
		cost_factor: 	2,
		effects:{
			max_storage: 	5,
		},
		effect_type: 	'fixed',
		recipes:{
		},
	},
	tailor_shop:{
		image: 		'buildings/dream_TradingCard-2023-06-03T065758.jpg',
		//item_image: 'cloth',
		cost:{
			brick: 		2,
			twine: 		1,
		},
		cost_factor: 	2,
		effects:{
			gathering: 	5,
		},
		effect_type: 	'percent',
		recipes:{
			cloth: 		1,
			sack: 		1,
		},
	},
	warehouse:{
		image: 		'buildings/dream_TradingCard-2023-08-17T141755.jpg',
		//item_image: 'basket',
		cost:{
			plank: 		1,
		},
		cost_factor: 	2,
		recipes:{
			basket: 	1,
			bucket: 	2,
			crate: 		3,
		},
		effects:{
			max_storage: 	5,
		},
		effect_type: 		'fixed',
	},
	well:{
		description: 	'Increases maximum energy by 2 each level.',
		image: 			'buildings/dream_TradingCard-2023-08-18T085231.jpg',
		//item_image: 	'water',
		//free_levels: 1,
		cost:{
			brick: 		2,
		},
		cost_factor: 	2,
		effects:{
			max_energy: 	2,
		},
		effect_type: 	'fixed',
		//effect_is_local: true,

	},
	wood_workshop:{
		image: 		'buildings/dream_TradingCard-2023-08-18T095038.jpg',
		//item_image: 'lumber',
		cost:{
			lumber: 	5,
		},
		cost_factor: 	2,
		effects:{
			woodcutting: 	5,
		},
		effect_type: 	'percent',
		recipes:{
			firewood: 	1,
			cane:  		1,
			plank: 		1,
			pole: 		1,
			barrel: 	3,
		},
	},
	
}

eachoa(all_available_recipes, function(recipe_id, recipe_info){
	if(recipe_info['buildings'] != undefined)
	{
		eachoa(recipe_info['buildings'], function(building_id, set_building){
			if(all_available_buildings[building_id] != undefined)
			{
				if(all_available_buildings[building_id]['recipes'] == undefined){all_available_buildings[building_id]['recipes'] = {};}
				all_available_buildings[building_id]['recipes'][recipe_id] = recipe_info['value'];
			}
		});
	}
});

eachoa(all_available_buildings, function(building_id, building_info){
	if(building_info['name'] == undefined)
	{
		building_info['name'] = capitalizeFirstLetter(building_id.replaceAll('_',' '));
	}
	eachoa(building_info['cost'], function(cost_id, cost_amount){
		building_info['cost'][cost_id] = Math.ceil(cost_amount * building_cost_factor);
	});
	eachoa(building_info['recipes'], function(recipe_id, recipe_level){
		if(all_available_recipes[recipe_id] == undefined)
		{
			delete building_info['recipes'][recipe_id];
		}
		else
		{
			building_info['recipes'][recipe_id] = all_available_recipes[recipe_id]['value'];
		}
	});
	building_info['recipes'] = sortObj(building_info['recipes'], 'value');
});