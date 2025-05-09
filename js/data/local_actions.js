var all_available_actions = {
	
	apple_tree:{
		type: 					'resource',
		subtypes: 				['woodcutting'],
		min_action_amount: 		3,
		max_action_amount: 		4,
		image: 					'actions/dream_TradingCard-2023-08-18T081111.jpg',
		locations:{
			forest:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-25,
			}
		},
		action_loot:{
			apple: 		10,
		},
		final_loot:{
			apple: 		1,
		}
	},
	bandit:{
		type: 					'resource',
		subtypes: 				['combat'],
		min_action_amount: 		3,
		max_action_amount: 		6,
		locations:{
			cave:{
				min: 			1,
				max: 			1,
			},
			forest:{
				min: 			1,
				max: 			1,
			},
			graveyard:{
				min: 			1,
				max: 			1,
			},
			mountain:{
				min: 			1,
				max: 			1,
			},
			river:{
				min: 			1,
				max: 			1,
			},
		},
		energy_cost: 			5,
		image: 					'actions/dream_TradingCard-2025-04-19T081056.357.jpg',
		action_loot:{
		},
		final_loot:{
			twine: 		1,
			peasant: 	0.5,
		}
	},
	bear:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		8,
		max_action_amount: 		10,
		locations:{
			cave:{
				min: 			1,
				max: 			1,
			},
			forest:{
				min: 			1,
				max: 			1,
			},
			mountain:{
				min: 			1,
				max: 			1,
			}
		},
		energy_cost: 			5,
		image: 					'actions/dream_TradingCard-2025-04-18T161525.169.jpg',
		action_loot:{
		},
		final_loot:{
			hide: 		5,
			meat: 		5,
		}
	},
	bird:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		locations:{
			forest:{
				min: 			1,
				max: 			1,
				fixed_chance: 	10,
			}
		},
		energy_cost: 			3,
		image: 					'actions/bird-2295436_640.jpg',
		action_loot:{
		},
		final_loot:{
			feather: 	2,
			meat: 		0.6
		}
	},
	boar:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		3,
		max_action_amount: 		5,
		locations:{
			forest:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-5,
			}
		},
		energy_cost: 			6,
		image: 					'actions/dream_TradingCard37.jpg',
		action_loot:{
		},
		final_loot:{
			meat: 		2,
			hide: 		4,
		}
	},
	boulder:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		5,
		max_action_amount: 		10,
		energy_cost: 			2,
		image: 					'actions/dream_TradingCard-2025-04-22T062214.270.jpg',
		locations:{
			cave:{
				min: 			1,
				max: 			1,
				fixed_chance: 	50,
			},
			mountain:{
				min: 			1,
				max: 			1,
				fixed_chance: 	50,
			},
		},
		action_loot:{
			stone: 	1,
		},
		final_loot:{
			stone: 	1
		}
	},
	bunny:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		1,
		max_action_amount: 		3,
		locations:{
			forest:{
				min: 			1,
				max: 			1,
				fixed_chance: 	25,
			}
		},
		energy_cost: 			5,
		image: 					'actions/ai-generated-7700672_640.jpg',
		action_loot:{
		},
		final_loot:{
			hide: 		1,
		}
	},
	bushes:{
		type: 					'resource',
		subtypes: 				['gathering'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		locations:{
			farm:{
				min: 			1,
				max: 			1,
				fixed_chance: 	10,
			},
			forest:{
				min: 			1,
				max: 			1,
				fixed_chance: 	40,
			},
			river:{
				min: 			1,
				max: 			1,
				fixed_chance: 	10,
			},
		},
		image: 					'actions/dream_TradingCard-2023-08-26T072559.jpg',
		action_loot:{
			//firewood: 	25,
		},
		final_loot:{
			firewood: 	2,
		}
	},
	chicken:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		locations:{
			farm:{
				min: 			1,
				max: 			1,
				fixed_chance: 	0,
			}
		},
		energy_cost: 			6,
		image: 					'actions/dream_TradingCard-2025-04-26T081917.774.jpg',
		action_loot:{
		},
		final_loot:{
			meat: 		0.75,
			feather: 	5,
			egg: 		2,
		}
	},
	clay:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		3,
		max_action_amount: 		6,
		energy_cost: 			2,
		locations:{
			river:{
				min: 			2,
				max: 			4,
				fixed_chance: 	50,
			}
		},
		action_loot:{
			clay: 		5,
		},
		final_loot:{
			clay: 		1,
		}
	},
	coal:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		3,
		max_action_amount: 		4,
		energy_cost: 			2,
		locations:{
			cave:{
				min: 			1,
				max: 			2,
				fixed_chance: 	0,
			},
			mountain:{
				min: 			1,
				max: 			2,
				fixed_chance: 	0,
			}
		},
		action_loot:{
			coal: 		10,
		},
		final_loot:{
			coal: 		1,
		}
	},
	copper_ore:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		8,
		max_action_amount: 		10,
		energy_cost: 			2,
		locations:{
			mountain:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-50,
			}
		},
		action_loot:{
			copper_ore: 	10,
		},
		final_loot:{
			copper_ore: 	1,
		}
	},
	cow:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		3,
		max_action_amount: 		4,
		locations:{
			farm:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-15,
			}
		},
		energy_cost: 			6,
		image: 					'actions/dream_TradingCard-2025-04-26T092544.006.jpg',
		action_loot:{
		},
		final_loot:{
			meat: 		2,
			hide: 		2,
			milk: 		4,
		}
	},
	dark_crystal_cave:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		8,
		max_action_amount: 		8,
		locations:{
			cave:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-50,
			}
		},
		energy_cost: 			6,
		image: 					'actions/crystal_cave.jpg',
		action_loot:{
			dark_crystal: 		5,
		},
		final_loot:{
			dark_crystal: 		1,
		}
	},
	deer:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		3,
		max_action_amount: 		5,
		locations:{
			forest:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-5,
			}
		},
		energy_cost: 			8,
		image: 					'actions/dream_TradingCard-2023-08-24T112025.jpg',
		action_loot:{
		},
		final_loot:{
			hide: 		2,
			meat: 		4,
		}
	},
	field_carrot:{
		type: 					'resource',
		subtypes: 				['farming'],
		min_action_amount: 		3,
		max_action_amount: 		4,
		energy_cost: 			6,
		locations:{
			farm:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-50,
			}
		},
		action_loot:{
			carrot: 	10,
		},
		final_loot:{
			carrot: 	1,
		}
	},
	field_flax:{
		type: 					'resource',
		subtypes: 				['farming'],
		min_action_amount: 		3,
		max_action_amount: 		4,
		energy_cost: 			6,
		locations:{
			farm:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-5,
			}
		},
		action_loot:{
			flax: 	10,
		},
		final_loot:{
			flax: 	1,
		}
	},
	field_potato:{
		type: 					'resource',
		subtypes: 				['farming'],
		min_action_amount: 		3,
		max_action_amount: 		4,
		energy_cost: 			6,
		locations:{
			farm:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-30,
			}
		},
		action_loot:{
			potato: 	10,
		},
		final_loot:{
			potato: 	1,
		}
	},
	field_sugar_beet:{
		type: 					'resource',
		subtypes: 				['farming'],
		min_action_amount: 		3,
		max_action_amount: 		4,
		energy_cost: 			6,
		locations:{
			farm:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-20,
			}
		},
		action_loot:{
			sugar_beet: 		10,
		},
		final_loot:{
			sugar_beet: 		1,
		}
	},
	field_wheat:{
		type: 					'resource',
		subtypes: 				['farming'],
		min_action_amount: 		3,
		max_action_amount: 		4,
		energy_cost: 			6,
		locations:{
			farm:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-10,
			}
		},
		action_loot:{
			wheat: 		10,
		},
		final_loot:{
			wheat: 		1,
		}
	},
	firewood:{
		type: 					'resource',
		subtypes: 				['gathering'],
		min_action_amount: 		5,
		max_action_amount: 		12,
		image: 					'items/dream_TradingCard-2023-08-17T072416.jpg',
		/*locations:{
			forest:{
				min: 			1,
				max: 			1
			}
		},*/
		action_loot:{
			firewood: 	10
		},
		final_loot:{
			firewood: 	4
		}
	},
	floating_skull:{
		type: 					'resource',
		subtypes: 				['combat'],
		min_action_amount: 		12,
		max_action_amount: 		12,
		locations:{
			graveyard:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-50,
			}
		},
		energy_cost: 			6,
		image: 					'actions/dream_TradingCard-2025-04-24T072258.187.jpg',
		action_loot:{
		},
		final_loot:{
			skull: 		1
		}
	},
	flower_patch:{
		type: 					'resource',
		subtypes: 				['gathering'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		locations:{
			farm:{
				min: 			3,
				max: 			3,
				fixed_chance: 	0,
			},
			forest:{
				min: 			3,
				max: 			3,
				fixed_chance: 	0,
			},
			river:{
				min: 			3,
				max: 			3,
				fixed_chance: 	0,
			}
		},
		image: 					'actions/flower_patch.jpg',
		action_loot:{
		},
		final_loot:{
			flower: 	1,
		}
	},
	goat:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		3,
		max_action_amount: 		5,
		locations:{
			mountain:{
				min: 			1,
				max: 			1,
				fixed_chance: 	5,
			}
		},
		energy_cost: 			6,
		image: 					'actions/dream_TradingCard-2025-04-20T072148.514.jpg',
		action_loot:{
		},
		final_loot:{
			hide: 		2,
		}
	},
	grave:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		3,
		max_action_amount: 		10,
		locations:{
			graveyard:{
				min: 			1,
				max: 			1,
				fixed_chance: 	50,
			}
		},
		energy_cost: 			6,
		image: 					'actions/dream_TradingCard-2025-04-23T065110.890.jpg',
		action_loot:{
			stone: 		15,
		},
		final_loot:{
			bone: 		0.5,
			flower:  	0.5,
			stone: 		1,
			skull: 		0.25
		}
	},
	herbs:{
		type: 					'resource',
		subtypes: 				['gathering'],
		min_action_amount: 		5,
		max_action_amount: 		8,
		locations:{
			forest:{
				min: 			1,
				max: 			2,
				fixed_chance: 	-50,
			}
		},
		energy_cost: 			5,
		action_loot:{
			herbs: 		10,
		},
		final_loot:{
			herbs: 		1,
		}
	},
	iron_ore:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		10,
		max_action_amount: 		10,
		energy_cost: 			2,
		locations:{
			mountain:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-100,
			}
		},
		image: 					'items/meteorite-91891_640.jpg',
		action_loot:{
			iron_ore: 	10,
		},
		final_loot:{
			iron_ore: 	1,
		}
	},
	light_crystal_cave:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		10,
		max_action_amount: 		10,
		locations:{
			cave:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-100,
			}
		},
		energy_cost: 			6,
		image: 					'actions/light_crystal_cave.jpg',
		action_loot:{
			light_crystal: 		5,
		},
		final_loot:{
			light_crystal: 		0.5,
		}
	},
	peasant:{
		type: 					'resource',
		subtypes: 				['charm'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		locations:{
			cave:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-10,
			},
			forest:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-10,
			},
			graveyard:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-10,
			},
			mountain:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-10,
			},
			river:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-10,
			}
		},
		energy_cost: 			5,
		action_loot:{
		},
		final_loot:{
			peasant: 		0.15,
		}
	},
	peasant_stuck:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		10,
		max_action_amount: 		20,
		locations:{
			cave:{
				min: 			1,
				max: 			1,
			},
		},
		energy_cost: 			5,
		image: 					'actions/dream_TradingCard-2025-04-22T082408.969.jpg',
		action_loot:{
			stone: 			12,
		},
		final_loot:{
			peasant: 		0.5,
			stone: 			1,
		}
	},
	rat:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		locations:{
			cave:{
				min: 			1,
				max: 			1,
				fixed_chance: 	5,
			},
			graveyard:{
				min: 			1,
				max: 			1,
				fixed_chance: 	5,
			},
			river:{
				min: 			1,
				max: 			1,
				fixed_chance: 	0,
			}
		},
		energy_cost: 			5,
		image: 					'actions/dream_TradingCard-2025-04-18T162051.177.jpg',
		action_loot:{
		},
		final_loot:{
			hide: 		1,
		}
	},
	reeds:{
		type: 					'resource',
		subtypes: 				['gathering'],
		min_action_amount: 		3,
		max_action_amount: 		6,
		locations:{
			river:{
				min: 			1,
				max: 			1,
				fixed_chance: 	30,
			},
			/*farm:{
				min: 			1,
				max: 			1,
				chance: 		0.25
			},*/
		},
		action_loot:{
			reeds: 		25,
		},
		final_loot:{
			reeds: 		1,
		}
	},
	salt:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		10,
		max_action_amount: 		10,
		energy_cost: 			2,
		locations:{
			mountain:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-30,
			}
		},
		action_loot:{
			salt: 		10,
		},
		final_loot:{
			salt: 		1,
		}
	},
	sand:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		1,
		max_action_amount: 		1,
		energy_cost: 			2,
		locations:{
			cave:{
				min: 			2,
				max: 			2,
				fixed_chance: 	0,
			},
			mountain:{
				min: 			2,
				max: 			2,
				fixed_chance: 	0,
			},
			/*river:{
				min: 			2,
				max: 			3,
				chance: 		25,
			}*/
		},
		action_loot:{
			//sand: 		10,
		},
		final_loot:{
			sand: 		1,
		}
	},
	sheep:{
		type: 					'resource',
		subtypes: 				['hunting'],
		min_action_amount: 		3,
		max_action_amount: 		4,
		locations:{
			farm:{
				min: 			1,
				max: 			1,
				fixed_chance: 	50,
			}
		},
		energy_cost: 			6,
		image: 					'actions/dream_TradingCard-2025-04-25T082016.067.jpg',
		action_loot:{
		},
		final_loot:{
			meat: 		1,
			wool: 		2,
		}
	},
	skeletal_warrior:{
		type: 					'resource',
		subtypes: 				['combat'],
		min_action_amount: 		10,
		max_action_amount: 		10,
		locations:{
			graveyard:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-10,
			}
		},
		energy_cost: 			6,
		image: 					'actions/dream_TradingCard-2025-04-24T075200.116.jpg',
		action_loot:{
		},
		final_loot:{
			bone: 		1,
			skull: 		1,
			sword: 		0.05,
			shield: 	0.04
		}
	},
	skeleton:{
		type: 					'resource',
		subtypes: 				['combat'],
		min_action_amount: 		3,
		max_action_amount: 		6,
		locations:{
			graveyard:{
				min: 			1,
				max: 			1,
				fixed_chance: 	20,
			}
		},
		energy_cost: 			6,
		image: 					'actions/dream_TradingCard-2025-04-23T071532.379.jpg',
		action_loot:{
		},
		final_loot:{
			bone: 		1,
			skull: 		0.5
		}
	},
	stream:{
		type: 					'resource',
		subtypes: 				['gathering'],
		min_action_amount: 		2,
		max_action_amount: 		3,
		locations:{
			/*cave:{
				min: 			1,
				max: 			1,
			},*/
			forest:{
				min: 			1,
				max: 			1,
				fixed_chance: 	10,
			},
			/*graveyard:{
				min: 			1,
				max: 			1,
			},*/
			/*mountain:{
				min: 			1,
				max: 			1,
			},*/
			river:{
				min: 			1,
				max: 			1,
				fixed_chance: 	25,
			}
		},
		image: 					'actions/dream_TradingCard-2023-08-20T073648.jpg',
		action_loot:{
			water: 		10,
		},
		final_loot:{
			water: 		4
		},
	},
	stone_wall:{
		type: 					'resource',
		subtypes: 				['mining'],
		min_action_amount: 		5,
		max_action_amount: 		10,
		energy_cost: 			2,
		image: 					'actions/dream_TradingCard-2025-04-25T081501.193.jpg',
		locations:{
			farm:{
				min: 			1,
				max: 			1,
				fixed_chance: 	50,
			},
		},
		action_loot:{
			stone: 	1,
		},
		final_loot:{
			stone: 	1
		}
	},
	sugarcane:{
		type: 					'resource',
		subtypes: 				['gathering'],
		min_action_amount: 		3,
		max_action_amount: 		4,
		energy_cost: 			6,
		locations:{
			river:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-10,
			}
		},
		action_loot:{
			sugarcane: 		10,
		},
		final_loot:{
			sugarcane: 		1,
		}
	},
	tree:{
		type: 					'resource',
		subtypes: 				['woodcutting'],
		min_action_amount: 		5,
		max_action_amount: 		10,
		locations:{
			forest:{
				min: 			1,
				max: 			1,
				fixed_chance: 	50,
			},
			river:{
				min: 			1,
				max: 			1,
				chance: 		0.5,
				fixed_chance: 	10,
			}
		},
		image: 					'actions/dream_TradingCard-2023-08-17T084822.jpg',
		action_loot:{
			firewood: 	5,
		},
		final_loot:{
			lumber: 	1
		},
	},
	tree_pine:{
		type: 					'resource',
		subtypes: 				['woodcutting'],
		min_action_amount: 		5,
		max_action_amount: 		10,
		locations:{
			forest:{
				min: 			1,
				max: 			1,
				fixed_chance: 	50,
			},
			/*mountain:{
				min: 			1,
				max: 			3,
			}*/
		},
		image: 					'actions/dream_TradingCard-2025-04-19T075158.894.jpg',
		action_loot:{
			firewood: 	5,
		},
		final_loot:{
			lumber: 	1
		},
	},
	tree_large:{
		type: 					'resource',
		subtypes: 				['woodcutting'],
		min_action_amount: 		12,
		max_action_amount: 		12,
		locations:{
			forest:{
				min: 			1,
				max: 			1,
				fixed_chance: 	-10,
			},
/*			river:{
				min: 			1,
				max: 			1,
			}*/
		},
		energy_cost: 			2,
		image: 					'actions/dream_TradingCard-2023-08-26T072820.jpg',
		action_loot:{
			lumber: 	1,
		},
		final_loot:{
			lumber: 	3
		},
	},
	water_well:{
		type: 					'resource',
		subtypes: 				['gathering'],
		min_action_amount: 		5,
		max_action_amount: 		5,
		locations:{
			farm:{
				min: 			1,
				max: 			1,
				//fixed_chance: 	0,
			},
		},
		energy_cost: 			2,
		image: 					'buildings/dream_TradingCard-2025-04-25T080808.452.jpg',
		action_loot:{
			water: 		25,
		},
		final_loot:{
			jar: 		1,
			water: 		1,
		},
	},
	
}

eachoa(all_available_actions, function(action_id, action_info){
	if(action_info['image'] == undefined)
	{
		set_action_image(action_id);
	}
	action_info['energy_cost'] = 0;
	correct_action(action_id);
	if(action_info['locations'] != undefined)
	{
		eachoa(action_info['locations'], function(location_id, action_location_info){
			if(all_available_locations[location_id] != undefined)
			{
				if(all_available_locations[location_id]['resources'] == undefined){all_available_locations[location_id]['resources'] = {};}
				eachoa(action_info['action_loot'], function(loot_it, loot_amount){all_available_locations[location_id]['resources'][loot_it] = true;});
				eachoa(action_info['final_loot'], function(loot_it, loot_amount){all_available_locations[location_id]['resources'][loot_it] = true;});
				var average_taps = action_info['min_action_amount'] + ((action_info['max_action_amount'] - action_info['min_action_amount']) / 2);
				var corrected_min = action_location_info['min'] + 0;
				var corrected_max = action_location_info['max'] + 0;
				var local_action_amount = ((action_location_info['max'] - action_location_info['min']) / 2) + action_location_info['min'];
				var local_action_value = (action_info['total_value'] * local_action_amount * action_info['value']) /*/ (1 + ((average_taps - 1) / 10))*/;
				action_location_info['local_action_value'] = local_action_value;
				if(action_location_info['chance'] != undefined){local_action_value /= action_location_info['chance'];}
				var local_chance = 100 - (local_action_value * 5 /** Math.sqrt(local_action_amount)*/);
				if(action_location_info['fixed_chance'] != undefined && local_chance != action_location_info['fixed_chance'])
					{
						/*if(local_chance < action_location_info['fixed_chance'])
						{
							var chance_difference = action_location_info['fixed_chance'] - local_chance;
							var chance_value_difference = chance_difference / (local_action_value * 5);
							var fixed_local_action_amount = (local_action_amount) - chance_value_difference;*/
							
							var fixed_local_action_amount =  (-1 * (action_location_info['fixed_chance'] - 100)) / (local_action_value * 5);
							
							if(fixed_local_action_amount >= 1)
							{
								if(fixed_local_action_amount >= corrected_min)
								{
									local_chance = action_location_info['fixed_chance'];
									corrected_max = (fixed_local_action_amount - corrected_min) + fixed_local_action_amount;
									if(corrected_max > 25)
									{
										console.log('too many actions for ' + action_id + ' at ' + location_id + ' (' + corrected_max  + ' max)');
									}
								}
								else
								{
									console.log('cannot correct fixed chance for ' + action_id + ' at ' + location_id + ' (' + fixed_local_action_amount  + ')');
								}
							}
							else
							{
								console.log('cannot correct fixed chance for ' + action_id + ' at ' + location_id + ' (' + fixed_local_action_amount  + ')');
							}
						/*}
						else
						{
							var chance_difference = local_chance - action_location_info['fixed_chance'];
							var chance_value_difference = chance_difference / (local_action_value * 5);
							var fixed_local_action_amount = (local_action_amount) + chance_value_difference;
							//console.log(fixed_local_action_amount);
							if(fixed_local_action_amount > 1)
							{
								if(fixed_local_action_amount > corrected_min)
								{
									local_chance = action_location_info['fixed_chance'];
									corrected_max = ((fixed_local_action_amount - corrected_min) * 2) + corrected_min;
									if(corrected_max > 25)
									{
										console.log('too many actions for ' + action_id + ' at ' + location_id + ' (' + corrected_max  + ' max)');
									}
								}
								else
								{
									console.log('cannot correct fixed chance for ' + action_id + ' at ' + location_id + ' (' + corrected_max  + ' max)');
								}
							}
							else
							{
								console.log('cannot correct fixed chance for ' + action_id + ' at ' + location_id + ' (' + fixed_local_action_amount  + ')');
							}
						}*/
					}
				all_available_locations[location_id]['local_actions'][action_id] = {
					chance: 	local_chance,
					min: 		corrected_min,
					max: 		corrected_max,
				};
				if(action_location_info['max_chance'] != undefined){all_available_locations[location_id]['local_actions'][action_id]['max_chance'] = action_location_info['max_chance'];}
			}
		});
	}
});

function count_resource_locations(amount, show){
	if(amount == undefined){amount = 1;}
	var resourse_location_count = {};
	eachoa(all_available_items, function(item_id, item_info){
		if(item_info['type'] == 'resource')
		{
			resourse_location_count[item_id] = 0;
			eachoa(all_available_locations, function(location_id, location_info){
				if(all_available_locations[location_id]['resources'][item_id] != undefined)
				{
					resourse_location_count[item_id]++;
				}
			});
		}
	});
	eachoa(resourse_location_count, function(item_id, location_count){
		if(location_count == amount && show == undefined)
		{
			console.log(item_id + ': ' + location_count);
		}
	});
	return resourse_location_count;
}

function count_total_upgrades(){
	var total_effects = {};
	eachoa(all_available_items, function(item_id, item_info){
		if(item_info['effects'] != undefined)
		{
			eachoa(item_info['effects'], function(effect_id, effect_amount){
				if(total_effects[effect_id] == undefined)
				{
					total_effects[effect_id] = 0;
				}
				total_effects[effect_id] += effect_amount;
			});
		}
	});
	eachoa(all_available_buildings, function(item_id, item_info){
		if(item_info['effects'] != undefined)
		{
			eachoa(item_info['effects'], function(effect_id, effect_amount){
				if(total_effects[effect_id] == undefined)
				{
					total_effects[effect_id] = 0;
				}
				total_effects[effect_id] += effect_amount;
			});
		}
	});
	return total_effects;
}

function get_passive_storage_productions(){
	var total_passive_production = {};
	if(gamedata['passive_storage'] != undefined)
	{
		var total_upgrades = count_total_upgrades();
		eachoa(gamedata['passive_storage'], function(production_id, production_amount){
			if(total_passive_production[production_id] == undefined){total_passive_production[production_id] = 0;}
			if(total_upgrades['passive_' + production_id] != undefined)
			{
				total_passive_production[production_id] += total_upgrades['passive_' + production_id];
			}
		});
	}
	return total_passive_production;
}

function check_passive_storage_productions(){
	var total_passive_production = get_passive_storage_productions();

	eachoa(total_passive_production, function(production_id, production_amount){
		if(production_amount == 0)
		{
			console.log(production_id);
		}
	});
	
}

function set_action_image(action_id){
	var new_image = false;
	var action_info = all_available_actions[action_id];
	eachoa(action_info['final_loot'], function(loot_id, loot_amount){
		if(new_image == false)
		{
			new_image = all_available_items[loot_id]['image'];	
		}
	});
	if(new_image != false)
	{
		action_info['image'] = new_image;
	}
};

function correct_action(action_id, show_stats){
	if(all_available_actions[action_id] != undefined)
	{
		var action_info = all_available_actions[action_id];
		if(action_info['energy_cost'] == undefined){action_info['energy_cost'] = 1;}
		var average_actions = action_info['min_action_amount'] + ((action_info['max_action_amount'] - action_info['min_action_amount']) / 2) - 1;
		var total_action_loot = 0;
		eachoa(action_info['action_loot'], function(loot_id, loot_amount){
			total_action_loot += (all_available_items[loot_id]['value'] / 100) * loot_amount;
		});
		if(count_object(action_info['action_loot']) > 0){total_action_loot /= count_object(action_info['action_loot']);}
		total_action_loot *= average_actions;
		var total_final_loot = 0;
		eachoa(action_info['final_loot'], function(loot_id, loot_amount){
			total_final_loot += all_available_items[loot_id]['value'] * loot_amount;
		});
		total_final_loot /= count_object(action_info['final_loot']);
		var ideal_value = (average_actions + 1) * action_info['energy_cost'] * value_per_energy;
		var current_value = (total_action_loot + total_final_loot) / (average_actions + 1);
		all_available_actions[action_id]['value'] = current_value;
		all_available_actions[action_id]['total_value'] = total_action_loot + total_final_loot;
		if(false && (ideal_value != current_value || show_stats != undefined || action_info['show_calc'] != undefined))
		{
			var final_value_left = ideal_value - current_value;
			var final_value_factor = 1 + (final_value_left / total_final_loot);
			var ideal_factor = ideal_value / current_value;
			/*if(final_value_factor < 1 || final_value_factor > 10 || show_stats != undefined || action_info['show_calc'] != undefined)
			{
				console.log(action_id);
				console.log('ideal: ' + ideal_value);
				console.log('current: ' + current_value);
				console.log('factor: ' + final_value_factor);
			}*/
			
			var highest_loot = 0;
			var more_loot_value_needed = 0;
			eachoa(action_info['final_loot'], function(loot_id, loot_amount){
				action_info['final_loot'][loot_id] *= final_value_factor;
				if(action_info['final_loot'][loot_id] > highest_loot)
				{
					highest_loot = action_info['final_loot'][loot_id];
					if(highest_loot < 1)
					{
						more_loot_value_needed = all_available_items[loot_id]['value'] * (1 - highest_loot);
					}
					else
					{
						more_loot_value_needed = 0;
					}
				}
			});
			if(more_loot_value_needed > 0 || show_stats != undefined || action_info['show_calc'] != undefined)
			{
				var excess_value = current_value - ideal_value;
				var loot_per_action = 0;
				if(average_actions > 0)
				{
					loot_per_action = total_action_loot / average_actions;
				}
				var action_excess_factor = total_action_loot / more_loot_value_needed;
				console.log(action_id);
				console.log('ideal: ' + ideal_value);
				console.log('current: ' + current_value);
				console.log('factor: ' + final_value_factor);
				console.log('loot_per_action: ' + loot_per_action);
				console.log('more_loot_value_needed: ' + more_loot_value_needed);
				console.log('action_excess_factor: ' + action_excess_factor);
				if(more_loot_value_needed > 0 && action_excess_factor > 1 && total_action_loot > 0)
				{
					eachoa(action_info['action_loot'], function(loot_id, loot_amount){
						action_info['action_loot'][loot_id] = (loot_amount / action_excess_factor);
					});
					//correct_action(action_id, show_stats);
				}
				/*eachoa(action_info['action_loot'], function(loot_id, loot_amount){
					action_info['action_loot'][loot_id] = Math.floor(loot_amount * sqr(highest_loot));
				});*/
				//correct_action(action_id, show_stats);
			}
		}
		if(show_stats != undefined || action_info['show_calc'] != undefined)
		{
			console.log(all_available_actions[action_id])
		}
	}
}