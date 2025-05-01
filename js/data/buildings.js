var all_available_buildings = {
	
	
	alchemist:{
		image: 			'buildings/dream_TradingCard-2025-04-20T073658.407.jpg',
		//item_image: 	'herbs',
		cost:{
			jar: 		5,
			herbs: 		5,
			water: 		5,
		},
		cost_factor: 	2,
		effects:{
			gathering: 	5,
		},
		effect_type: 	'percent',
		recipes:{},
	},
	armory:{
		image: 			'buildings/dream_TradingCard-2025-04-25T075436.478.jpg',
		//item_image: 	'herbs',
		cost:{
			pole: 		5,
		},
		cost_factor: 	2,
		effects:{
			combat: 	5,
		},
		effect_type: 	'percent',
		recipes:{},
	},
	bone_workshop:{
		image: 			'buildings/dream_TradingCard-2025-04-23T070722.467.jpg',
		item_image: 	'bone',
		cost:{
			bone: 		5,
			brick: 		1,
		},
		cost_factor: 	2,
		effects:{
			combat: 	5,
			//passive_bone: 	1 / all_available_items['bone']['value'],
		},
		effect_type: 	'percent',
		recipes:{},
	},
	furnace:{
		image: 		'buildings/metallurgy-2932947_640.jpg',
		item_image: 'coal',
		cost:{
			brick: 		1,
			coal: 		5,
		},
		/*additional_costs:{
			2:{
				iron_ore: 	2,
			}
		},*/
		cost_factor: 	2,
		effects:{
			mining: 	5,
			//passive_coal: 	1 / all_available_items['coal']['value'],
		},
		effect_type: 	'percent',
		recipes:{},
	},
	gemcutter:{
		image: 		'buildings/gemcutter.jpg',
		//item_image: 'hide',
		cost:{
			dark_crystal: 	5,
			brick: 			5,
		},
		cost_factor: 	2,
		effects:{
			mining: 	5,
		},
		effect_type: 	'percent',
		recipes:{},
	},
	hunting_lodge:{
		image: 		'buildings/dream_TradingCard-2025-04-18T155127.500.jpg',
		//item_image: 'hide',
		cost:{
			lumber: 	5,
			hide: 		5,
		},
		cost_factor: 	2,
		effects:{
			hunting: 	5,
		},
		effect_type: 	'percent',
		recipes:{},
	},
	pottery:{
		image: 		'buildings/dream_TradingCard-2025-04-19T063316.434.jpg',
		item_image: 'clay',
		cost:{
			clay: 		10,
			water: 		10,
		},
		cost_factor: 	2,
		effects:{
			mining: 	5,
			//passive_clay: 	1 / all_available_items['clay']['value'],
		},
		effect_type: 	'percent',
		recipes:{},
	},
	kitchen:{
		image: 		'buildings/dream_TradingCard-2023-08-24T113017.jpg',
		//item_image: 'firewood',
		cost:{
			meat: 		5,
		},
		cost_factor: 	2,
		effects:{
			farming: 	5,
		},
		effect_type: 	'percent',
		recipes:{},
	},
	paper_mill:{
		image: 		'buildings/dream_TradingCard-2023-08-20T072951.jpg',
		//item_image: 'paper',
		cost:{
			jar: 		2,
		},
		cost_factor: 	2,
		effects:{
			max_storage: 		5,
		},
		effect_type: 	'fixed',
		recipes:{},
	},
	mill:{
		image: 		'buildings/dream_TradingCard-2025-04-27T064404.422.jpg',
		//item_image: 'paper',
		cost:{
			brick: 		1,
		},
		cost_factor: 	2,
		effects:{
			gathering: 		5,
		},
		effect_type: 	'percent',
		recipes:{},
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
		recipes:{},
	},
	stonesmith:{
		image: 		'buildings/dream_TradingCard-2025-04-19T073259.134.jpg',
		item_image: 'stone',
		cost:{
			stone: 		5,
		},
		cost_factor: 	2,
		effects:{
			mining: 	5,
			//passive_stone: 	1 / all_available_items['stone']['value'],
		},
		effect_type: 	'percent',
		recipes:{},
	},
	tailor_shop:{
		image: 		'buildings/dream_TradingCard-2023-06-03T065758.jpg',
		//item_image: 'twine',
		cost:{
			brick: 		2,
			twine: 		2,
		},
		cost_factor: 	2,
		effects:{
			gathering: 	5,
		},
		effect_type: 	'percent',
		recipes:{},
	},
	/*warehouse:{
		image: 		'buildings/dream_TradingCard-2023-08-17T141755.jpg',
		//item_image: 'basket',
		cost:{
			plank: 		1,
		},
		cost_factor: 	2,
		recipes:{
			basket: 	1,
			bucket: 	2,
		},
		effects:{
			max_storage: 	5,
		},
		effect_type: 		'fixed',
	},*/
	/*well:{
		//description: 	'Increases maximum energy by 2 each level.',
		image: 			'buildings/dream_TradingCard-2025-04-25T080808.452.jpg',
		item_image: 	'water',
		//free_levels: 1,
		cost:{
			brick: 		2,
		},
		cost_factor: 	2,
		effects:{
			passive_water: 	1 / all_available_items['water']['value'],
		},
		effect_type: 	'fixed',
		//effect_is_local: true,

	},*/
	wood_workshop:{
		image: 		'buildings/dream_TradingCard-2023-08-18T095038.jpg',
		item_image: 'lumber',
		cost:{
			lumber: 	5,
		},
		cost_factor: 	2,
		effects:{
			woodcutting: 	5,
			//passive_lumber: 	1 / all_available_items['lumber']['value'],
		},
		effect_type: 	'percent',
		recipes:{},
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
	var building_value = 0;
	eachoa(building_info['cost'], function(cost_id, cost_amount){
		building_info['cost'][cost_id] = Math.ceil(cost_amount * building_cost_factor);
		building_value += all_available_items[cost_id]['value'] * building_info['cost'][cost_id];
	});
	building_info['value'] = building_value;
	eachoa(building_info['effects'], function(effect_id, effect_amount){
		building_info['effects'][effect_id] *= building_value / 50;
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