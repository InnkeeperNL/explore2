var all_available_items = {
	apple:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-18T080707.jpg',
		energy: 3,
		value: 	3,
	},
	arrow:{
		image: 	'items/arrows-4082046_640.jpg',
		value: 	3,
	},
	/*axe:{
		image: 	'items/axe-674841_640.jpg',
		effects:{
			woodcutting: 	10,
		},
		effect_type: 		'percent',
		value: 	33,
	},*/
	backpack:{
		image: 	'items/dream_TradingCard-2023-08-18T110922.jpg',
		effects:{
			max_inventory: 	2,
		},
		effect_type: 		'fixed',
		value: 	31,
	},
	bag:{
		image: 	'items/dream_TradingCard-2025-04-19T054929.451.jpg',
		effects:{
			max_inventory: 	1,
		},
		effect_type: 		'fixed',
		value: 	18,
	},
	basket:{
		image: 	'items/basket-1195754_640.jpg',
		effects:{
			gathering: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
	},
	barrel:{
		image: 	'items/barrels-g9348f93d3_640.jpg',
		effects:{
			max_storage: 	5,
		},
		effect_type: 		'percent',
		value: 	25,
	},
	boot:{
		image: 	'items/dream_TradingCard-2025-04-17T152546.292.jpg',
		effects:{
			travel_speed: 	1,
		},
		effect_type: 		'percent',
		value: 	25,
	},
	bow:{
		image: 	'items/bow-1367578_640.jpg',
		effects:{
			hunting: 	10,
		},
		effect_type: 		'percent',
		value: 	33,
	},
	box:{
		image: 	'items/dream_TradingCard-2025-04-18T153204.687.jpg',
		effects:{
			max_storage: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
	},
	bread:{
		image: 	'items/dream_TradingCard-2023-05-20T094512.jpg',
		energy: 3,
		value: 	3,
	},
	brick:{
		image: 	'items/dream_TradingCard-2025-04-19T062059.395.jpg',
	},
	bucket:{
		image: 	'items/dream_TradingCard-2023-08-18T094513.jpg',
		effects:{
			max_inventory: 	1,
		},
		effect_type: 		'fixed',
		value: 	25,
	},
	cane:{
		image: 	'items/dream_TradingCard-2025-04-20T085255.359.jpg',
		effects:{
			travel_speed: 	1,
		},
		effect_type: 		'percent',
		value: 	25,
	},
	carrot:{
		type: 	'resource',
		image: 	'items/carrot-1565597_640.jpg',
		energy: 3,
		value: 	3,
	},
	clay:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-19T055341.297.jpg',
		value: 	2,
	},
	cloak:{
		image: 	'items/dream_TradingCard-2025-04-18T063009.220.jpg',
		effects:{
			travel_speed: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
	},
	cloth:{
		image: 	'items/dream_TradingCard-2023-06-03T070523.jpg',
		value: 	5,
	},
	coal:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-06-02T062230.jpg',
		value: 	5,
	},
	copper:{
		image: 	'items/dream_TradingCard-2023-06-03T065335.jpg',
		value: 	5,
	},
	copper_ore:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-05-31T141828.jpg',
		value: 	5,
	},
	copper_pot:{
		image: 	'items/dream_TradingCard-2023-05-31T142320.jpg',
		value: 	5,
		effects:{
			max_storage: 	1,
		},
		effect_type: 		'percent',
	},
	crate:{
		image: 	'items/boxes-2719166_640.jpg',
		effects:{
			max_storage: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
	},
	digger:{
		image: 	'items/dream_TradingCard-2025-04-22T064745.409.jpg',
		value: 	1,
		effects:{
			passive_sand: 	1,
		},
		effect_type: 		'fixed',
	},
	endurance_potion:{
		image: 	'items/dream_TradingCard-2025-04-20T081303.873.jpg',
		effects:{
			max_energy: 	1,
		},
		effect_type: 		'percent',
	},
	explorer:{
		image: 	'items/dream_TradingCard-2025-04-22T080550.376.jpg',
		effects:{
			travel_speed: 	1,
		},
		effect_type: 		'percent',
		value: 	25,
	},
	firewood:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-17T072416.jpg',
		value: 	1,
	},
	feather:{
		type: 	'resource',
		image: 	'items/feather-g61b6affba_640.jpg',
		value: 	1,
	},
	flax:{
		type: 	'resource',
		image: 	'items/nature-3082560_640.jpg',
		value: 	2,
	},
	flour:{
		image: 	'items/dream_TradingCard-2023-05-20T094740.jpg',
		value: 	1,
	},
	fries:{
		image: 	'items/french-fries-923687_640.jpg',
		energy: 1,
		value: 	1,
	},
	gatherer:{
		image: 	'items/dream_TradingCard-2025-04-22T081056.345.jpg',
		value: 	1,
		effects:{
			passive_firewood: 	1,
		},
		effect_type: 		'fixed',
	},
	
	glass:{
		image: 	'items/dream_TradingCard-2025-04-20T062101.353.jpg',
		value: 	5,
	},
	herbal_cane:{
		image: 	'items/dream_TradingCard-2025-04-20T085611.025.jpg',
		effects:{
			travel_speed: 	1,
		},
		effect_type: 		'percent',
		value: 	25,
	},
	herbs:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-20T073923.191.jpg',
		value: 	5,
	},
	hide:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-18T110303.jpg',
		value: 	3,
	},
	ink:{
		image: 	'items/dream_TradingCard-2025-04-20T062644.592.jpg',
		value: 	3,
	},
	iron:{
		image: 	'items/dream_TradingCard-2023-08-26T072143.jpg',
		value: 	12,
	},
	iron_ore:{
		type: 	'resource',
		image: 	'items/meteorite-91891_640.jpg',
		value: 	10,
	},
	jar:{
		image: 	'items/dream_TradingCard-2025-04-19T064458.051.jpg',
		effects:{
			max_storage: 	1,
		},
		effect_type: 		'percent',
	},
	leather:{
		image: 	'items/dream_TradingCard-2023-08-18T110531.jpg',
		value: 	9,
	},
	leaves:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-20T084739.533.jpg',
		value: 	1,
	},
	lumber:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-17T085131.jpg',
		value: 	5,
	},
	lumberjack:{
		image: 	'items/dream_TradingCard-2025-04-21T091431.826.jpg',
		value: 	1,
		effects:{
			passive_lumber: 	1,
		},
		effect_type: 		'fixed',
	},
	mana_potion:{
		image: 	'items/dream_TradingCard-2025-04-20T081019.769.jpg',
		energy: 3,
		value: 	3,
	},
	map:{
		image: 	'items/dream_TradingCard-2023-08-20T070458.jpg',
		value: 	16,
	},
	meat:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-24T112300.jpg',
		value: 	3,
	},
	miner:{
		image: 	'items/dream_TradingCard-2025-04-21T094646.422.jpg',
		value: 	1,
		effects:{
			passive_stone: 	1,
		},
		effect_type: 		'fixed',
	},
	mining_potion:{
		image: 	'items/dream_TradingCard-2025-04-20T083650.124.jpg',
		effects:{
			mining: 	1,
		},
		effect_type: 		'percent',
	},
	nail:{
		image: 	'items/nails-4168539_640.jpg',
		value: 	16,
	},
	paper:{
		image: 	'items/dream_TradingCard-2023-08-20T070748.jpg',
		value: 	7,
	},
	peasant:{
		image: 	'items/dream_TradingCard-2025-04-22T063743.520.jpg',
		value: 	25,
	},
	pickaxe:{
		image: 	'items/pickaxe-5070026_640.jpg',
		effects:{
			mining: 	10,
		},
		effect_type: 		'percent',
		value: 	33,
	},
	pitchfork:{
		image: 	'items/background-2659339_640.jpg',
		effects:{
			farming: 	10,
		},
		effect_type: 		'percent',
		value: 	33,
	},
	plank:{
		image: 	'items/board-g8de0d90cf_640.jpg',
		value: 	10,
	},
	poison:{
		image: 	'items/dream_TradingCard-2025-04-20T080304.936.jpg',
		effects:{
			combat: 	10,
		},
		effect_type: 		'percent',
		value: 	10,
	},
	pole:{
		image: 	'items/rods-53130_640.jpg',
		value: 	10,
	},
	potato:{
		type: 	'resource',
		image: 	'items/potatoes-1585060_640.jpg',
		value: 	5,
	},
	pouch:{
		description: 'Each pouch increases maximum inventory by 1',
		image: 	'items/dream_TradingCard-2023-08-22T075422.jpg',
		effects:{
			max_inventory: 	1,
		},
		effect_type: 		'fixed',
		value: 	18,
	},
	reeds:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-18T063401.552.jpg',
		value: 	1,
	},
	reeds_collector:{
		image: 	'items/dream_TradingCard-2025-04-21T072911.980.jpg',
		value: 	1,
		effects:{
			passive_reeds: 	1,
		},
		effect_type: 		'fixed',
	},
	road:{
		image: 	'items/dream_TradingCard-2025-04-20T072358.383.jpg',
		effects:{
			travel_speed: 	1,
		},
		effect_type: 		'percent',
		value: 	25,
	},
	roasted_meat:{
		image: 	'items/dream_TradingCard-2023-08-24T113417.jpg',
		energy: 1,
		value: 	1,
	},
	sack:{
		image: 	'items/dream_TradingCard-2023-08-26T074414.jpg',
		effects:{
			max_storage: 	1,
		},
		effect_type: 		'percent',
		value: 	18,
	},
	salt:{
		type: 	'resource',
		image: 	'items/salt-602215_640.jpg',
		value: 	10,
	},
	sand:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-20T061915.192.jpg',
		value: 	1,
	},
	stone:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-18T090111.jpg',
		value: 	5,
	},
	stone_box:{
		image: 	'items/dream_TradingCard-2025-04-19T073703.880.jpg',
		effects:{
			max_storage: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
	},
	hatchet:{
		image: 	'items/dream_TradingCard-2025-04-20T092037.855.jpg',
		effects:{
			woodcutting: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
	},
	shovel:{
		image: 	'items/dream_TradingCard-2025-04-20T092211.503.jpg',
		effects:{
			mining: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
	},
	
	trap:{
		image: 	'items/dream_TradingCard-2025-04-18T154805.392.jpg',
		effects:{
			hunting: 	1,
		},
		effect_type: 		'percent',
	},
	twine:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-05-29T084103.jpg',
		value: 	5,
	},
	water:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-20T073449.jpg',
		energy: 1,
		value: 	1,
	},
	wheat:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-05-20T094127.jpg',
		value: 	2,
	},
	woodcutting_potion:{
		image: 	'items/dream_TradingCard-2025-04-20T084103.345.jpg',
		effects:{
			woodcutting: 	1,
		},
		effect_type: 		'percent',
	},
	wooden_hammer:{
		image: 	'items/dream_TradingCard-2025-04-20T091540.624.jpg',
		effects:{
			mining: 	10,
		},
		effect_type: 		'percent',
		value: 	33,
	},
	
};

/*var effects_per_value = {
	max_inventory: 	10,
	max_storage: 	3,
}*/

eachoa(all_available_items, function(item_id, item_info){
	if(item_info['name'] == undefined)
	{
		item_info['name'] = item_id.replaceAll('_',' ');
	}
	if(item_info['energy'] != undefined)
	{
		if(item_info['value'] != undefined)
		{
			item_info['energy'] = calc_energy_per_value(item_info['value']);
		}
		else
		{
			console.log('cannot set energy for ' + item_id);
		}
	}
	if(item_info['effects'] != undefined)
	{
		eachoa(item_info['effects'], function(effect_id, effect_amount){
			all_available_items[item_id]['effects'][effect_id] = 1;
			/*if(effects_per_value[effect_id] != undefined)
			{
				temp_effect_amount = (item_info['value'] / effects_per_value[effect_id]);
				temp_effect_amount *= 1 + (temp_effect_amount / 10);
				temp_effect_amount = Math.floor(temp_effect_amount);
				all_available_items[item_id]['effects'][effect_id] = temp_effect_amount;
				console.log(item_id + ' effect_amount = ' + temp_effect_amount);
			}*/
		});
	}
	/*if((item_info['type'] == undefined || item_info['type'] != 'resource') && item_info['value'] != undefined)
	{
		delete item_info['value'];
	}*/
});