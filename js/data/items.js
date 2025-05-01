var all_available_items = {
	apple:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2023-08-18T080707.jpg',
		energy: 1,
		value: 	6,
	},
	apple_picker:{
		image: 	'items/dream_TradingCard-2025-04-28T070336.478.jpg',
		value: 	1,
		effects:{
			gathering: 	1,
		},
		effect_type: 		'percent',
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
		image: 	'items/dream_TradingCard-2025-04-25T065131.410.jpg',
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
		effect_type: 		'fixed',
		value: 	25,
	},
	bed:{
		image: 	'items/dream_TradingCard-2025-04-26T094254.199.jpg',
		effects:{
			max_energy: 	10,
		},
		effect_type: 		'fixed',
		value: 	33,
	},
	bone:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-23T065629.831.jpg',
		value: 	3,
	},
	bone_box:{
		image: 	'items/bone_box.jpg',
		effects:{
			max_storage: 	1,
		},
		effect_type: 		'fixed',
		value: 	5,
	},
	bone_hammer:{
		image: 	'items/dream_TradingCard-2025-04-23T072516.204.jpg',
		effects:{
			mining: 	1,
		},
		effect_type: 		'percent',
		value: 	1,
	},
	/*bone_pickaxe:{
		image: 	'items/dream_TradingCard-2025-04-23T073703.696.jpg',
		effects:{
			mining: 	1,
		},
		effect_type: 		'percent',
		value: 	1,
	},*/
	bone_pendant:{
		image: 	'items/bone_pendant.jpg',
		effects:{
			travel_speed: 	1,
		},
		effect_type: 		'percent',
		value: 	1,
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
		effect_type: 		'fixed',
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
	candy:{
		image: 	'items/dream_TradingCard-2025-04-26T084333.992.jpg',
		energy: 3,
		value: 	5,
	},
	carrot:{
		type: 	'resource',
		image: 	'items/carrot-1565597_640.jpg',
		energy: 100,
		value: 	5,
	},
	carrot_cake:{
		image: 	'items/dream_TradingCard-2025-04-26T081554.856.jpg',
		energy: 1,
		value: 	1,
	},
	cheese:{
		image: 	'items/dream_TradingCard-2025-04-26T093016.108.jpg',
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
		effect_type: 		'fixed',
	},
	crate:{
		image: 	'items/boxes-2719166_640.jpg',
		effects:{
			max_storage: 	1,
		},
		effect_type: 		'fixed',
		value: 	5,
	},
	dark_crystal:{
		type: 	'resource',
		image: 	'items/dark_crystal.jpg',
		value: 	10,
	},
	dark_crystal_pendant:{
		image: 	'items/dark_crystal_pendant.jpg',
		effects:{
			mining: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
	},
	dark_crystal_staff:{
		image: 	'items/dark_crystal_staff.jpg',
		effects:{
			travel_speed: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
	},
	digger:{
		image: 	'items/dream_TradingCard-2025-04-22T064745.409.jpg',
		value: 	1,
		effects:{
			mining: 	1,
		},
		effect_type: 		'percent',
	},
	egg:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-26T082354.335.jpg',
		value: 	2,
	},
	endurance_potion:{
		image: 	'items/dream_TradingCard-2025-04-20T081303.873.jpg',
		effects:{
			max_energy: 	1,
		},
		effect_type: 		'fixed',
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
		value: 	4,
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
			gathering: 	1,
		},
		effect_type: 		'percent',
	},
	
	glass:{
		image: 	'items/dream_TradingCard-2025-04-20T062101.353.jpg',
		value: 	5,
	},
	grave_digger:{
		image: 	'items/dream_TradingCard-2025-04-28T071717.536.jpg',
		value: 	1,
		effects:{
			mining: 	1,
		},
		effect_type: 		'percent',
	},
	hamburger:{
		image: 	'items/dream_TradingCard-2025-04-26T093546.570.jpg',
		energy: 3,
		value: 	3,
	},
	hatchet:{
		image: 	'items/dream_TradingCard-2025-04-20T092037.855.jpg',
		effects:{
			woodcutting: 	1,
		},
		effect_type: 		'percent',
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
	herbalist:{
		image: 	'items/dream_TradingCard-2025-04-28T081402.081.jpg',
		value: 	1,
		effects:{
			gathering: 	1,
		},
		effect_type: 		'percent',
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
	hunter:{
		image: 	'items/dream_TradingCard-2025-04-22T091827.520.jpg',
		value: 	1,
		effects:{
			hunting: 	1,
		},
		effect_type: 		'percent',
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
		effect_type: 		'fixed',
	},
	knife:{
		image: 	'items/dream_TradingCard-2025-04-25T070338.016.jpg',
		effects:{
			combat: 	1,
		},
		effect_type: 		'percent',
		value: 	1,
	},	
	leather:{
		image: 	'items/dream_TradingCard-2023-08-18T110531.jpg',
		value: 	9,
	},
	/*leaves:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-20T084739.533.jpg',
		value: 	1,
	},*/
	light_crystal:{
		type: 	'resource',
		image: 	'items/light_crystal.jpg',
		value: 	25,
	},
	light_crystal_pendant:{
		image: 	'items/light_crystal_pendant.jpg',
		effects:{
			mining: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
	},
	light_crystal_staff:{
		image: 	'items/light_crystal_staff.jpg',
		effects:{
			travel_speed: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
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
			woodcutting: 	1,
		},
		effect_type: 		'percent',
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
	milk:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-26T092723.275.jpg',
		energy: 100,
		effect_type: 		'fixed',
		value: 	3,
	},
	miner:{
		image: 	'items/dream_TradingCard-2025-04-21T094646.422.jpg',
		value: 	1,
		effects:{
			mining: 	1,
		},
		effect_type: 		'percent',
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
		value: 	2,
		calculated: true,
	},
	omelette:{
		image: 	'items/dream_TradingCard-2025-04-26T084649.438.jpg',
		energy: 1,
		value: 	5,
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
		image: 	'items/dream_TradingCard-2025-04-24T074225.943.jpg',
		effects:{
			mining: 	10,
		},
		effect_type: 		'percent',
		value: 	33,
	},
	pillow:{
		image: 	'items/dream_TradingCard-2025-04-26T094002.777.jpg',
		effects:{
			max_energy: 	1,
		},
		effect_type: 		'fixed',
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
		image: 	'items/dream_TradingCard-2025-04-24T062428.026.jpg',
		value: 	10,
	},
	potato:{
		type: 	'resource',
		image: 	'items/potatoes-1585060_640.jpg',
		value: 	5,
	},
	pouch:{
		image: 	'items/dream_TradingCard-2025-04-28T081814.885.jpg',
		effects:{
			max_inventory: 	1,
		},
		effect_type: 		'fixed',
		value: 	18,
	},
	reeds:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-18T063401.552.jpg',
		value: 	2,
	},
	reeds_collector:{
		image: 	'items/dream_TradingCard-2025-04-21T072911.980.jpg',
		value: 	1,
		effects:{
			gathering: 	1,
		},
		effect_type: 		'percent',
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
	roasted_potato:{
		image: 	'items/dream_TradingCard-2025-04-26T081234.455.jpg',
		energy: 1,
		value: 	1,
	},
	sack:{
		image: 	'items/dream_TradingCard-2023-08-26T074414.jpg',
		effects:{
			max_storage: 	1,
		},
		effect_type: 		'fixed',
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
	sheep_herder:{
		image: 	'items/dream_TradingCard-2025-04-28T074659.932.jpg',
		value: 	1,
		effects:{
			hunting: 	1,
		},
		effect_type: 		'percent',
	},
	shield:{
		image: 	'items/dream_TradingCard-2025-04-24T074626.540.jpg',
		effects:{
			combat: 	1,
		},
		effect_type: 		'percent',
		value: 	18,
	},
	shovel:{
		image: 	'items/dream_TradingCard-2025-04-20T092211.503.jpg',
		effects:{
			mining: 	1,
		},
		effect_type: 		'percent',
		value: 	5,
	},
	skull:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-23T070019.923.jpg',
		value: 	16,
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
		effect_type: 		'fixed',
		value: 	5,
	},
	sugar:{
		image: 	'items/dream_TradingCard-2025-04-26T083329.129.jpg',
		energy: 100,
		value: 	3,
	},
	sugar_beet:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-26T082947.235.jpg',
		value: 	3,
	},
	sugarcane:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-27T054755.391.jpg',
		value: 	3,
	},
	sword:{
		image: 	'items/dream_TradingCard-2025-04-23T072133.192.jpg',
		effects:{
			combat: 	1,
		},
		effect_type: 		'percent',
		value: 	1,
	},
	trap:{
		image: 	'items/dream_TradingCard-2025-04-18T154805.392.jpg',
		effects:{
			hunting: 	1,
		},
		effect_type: 		'percent',
	},
	trapper:{
		image: 	'items/dream_TradingCard-2025-04-22T092243.852.jpg',
		value: 	1,
		effects:{
			hunting: 	1,
		},
		effect_type: 		'percent',
	},
	trumpet:{
		image: 	'items/dream_TradingCard-2025-04-24T080050.505.jpg',
		effects:{
			travel_speed: 	1,
		},
		effect_type: 		'percent',
	},
	twine:{
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
		value: 	3,
	},
	wheat_farmer:{
		image: 	'items/dream_TradingCard-2025-04-28T075536.594.jpg',
		value: 	1,
		effects:{
			farming: 	1,
		},
		effect_type: 		'percent',
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
			woodcutting: 	10,
		},
		effect_type: 		'percent',
		value: 	33,
	},
	wool:{
		type: 	'resource',
		image: 	'items/dream_TradingCard-2025-04-25T082510.703.jpg',
		value: 	2,
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
		/*item_info['effects'] = {max_energy: 	1};
		item_info['effect_type'] = 'fixed';
		delete item_info['energy'];*/
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