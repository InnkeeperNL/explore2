var all_available_buildings = {
	
	
	furnace:{
		image: 		'buildings/metallurgy-2932947_640.jpg',
		item_image: 'coal',
		cost:{
			firewood: 	20,
		},
		/*additional_costs:{
			2:{
				iron_ore: 	2,
			}
		},*/
		cost_factor: 	2,
		effects:{
		},
		recipes:{
			coal: 		1,
			copper: 	1,
			iron: 		2,
		},
		max_level: 3,
	},
	kitchen:{
		image: 		'buildings/dream_TradingCard-2023-08-24T113017.jpg',
		item_image: 'meat',
		cost:{
			firewood: 	20,
		},
		cost_factor: 	2,
		effects:{
		},
		recipes:{
			roasted_meat: 	1,
			bread: 			2,
			fries: 			2,
		},
		max_level: 3,
	},
	mill:{
		image: 		'buildings/mill-1745186_640.jpg',
		item_image: 'flax',
		cost:{
			flax: 		10,
		},
		cost_factor: 	2,
		effects:{
		},
		recipes:{
			twine: 		1,
			flour: 		1,
		},
		max_level: 2,
	},
	paper_mill:{
		image: 		'buildings/dream_TradingCard-2023-08-20T072951.jpg',
		item_image: 'paper',
		cost:{
			lumber: 	5,
			water: 		5
		},
		cost_factor: 	2,
		effects:{
		},
		recipes:{
			paper: 		1,
			parchment: 	2,
			map: 		1,
		},
		max_level: 3,
	},
	smithy:{
		image: 		'buildings/horseshoe-1516273_640.jpg',
		item_image: 'copper_pot',
		cost:{
			stone: 		10,
		},
		cost_factor: 	2,
		effects:{
		},
		recipes:{
			copper_pot: 	1,
			nail: 			2,
			axe: 			2,
			pickaxe: 		2,
			pitchfork: 		2,
		},
		max_level: 4,
	},
	tailor_shop:{
		image: 		'buildings/dream_TradingCard-2023-06-03T065758.jpg',
		item_image: 'cloth',
		cost:{
			twine: 		5,
		},
		cost_factor: 	2,
		effects:{
		},
		recipes:{
			cloth: 		1,
			sack: 		1,
		},
		max_level: 4,
	},
	tannery:{
		image: 		'buildings/dream_TradingCard-2023-08-18T110639.jpg',
		item_image: 'leather',
		cost:{
			hide: 		5,
			lumber: 	5,
		},
		cost_factor: 	2,
		effects:{
		},
		recipes:{
			leather: 	1,
			pouch: 		1,
			backpack: 	2,
		},
		max_level: 4,
	},
	warehouse:{
		image: 		'buildings/dream_TradingCard-2023-08-17T141755.jpg',
		item_image: 'basket',
		cost:{
			lumber: 	5,
		},
		cost_factor: 	2,
		recipes:{
			basket: 	1,
			bucket: 	2,
			crate: 		3,
		},
		effects:{
			max_storage: 	10,
		},
		effect_type: 		'fixed',
	},
	well:{
		description: 	'Increases storage by 10% each level.',
		image: 			'buildings/dream_TradingCard-2023-08-18T085231.jpg',
		item_image: 'water',
		//free_levels: 1,
		cost:{
			stone: 		5,
		},
		cost_factor: 	2,
		effects:{
			max_storage: 	10,
		},
		effect_type: 	'percent',
		//effect_is_local: true,

	},
	wood_workshop:{
		image: 		'buildings/dream_TradingCard-2023-08-18T095038.jpg',
		item_image: 'lumber',
		cost:{
			lumber: 	10,
		},
		cost_factor: 	2,
		effects:{
		},
		recipes:{
			firewood: 	1,
			plank: 		1,
			pole: 		1,
			barrel: 	3,
			arrow: 		2,
			bow: 		2,
		},
		max_level: 4,
	},
	
}


eachoa(all_available_buildings, function(building_id, building_info){
	if(building_info['name'] == undefined)
	{
		building_info['name'] = capitalizeFirstLetter(building_id.replaceAll('_',' '));
	}
	eachoa(building_info['cost'], function(cost_id, cost_amount){
		building_info['cost'][cost_id] = Math.ceil(cost_amount * building_cost_factor);
	});
});