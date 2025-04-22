var all_available_recipes = {
	arrow:{
		cost:{
			firewood: 	1,
			feather: 	1,
		},
		result:{
			arrow: 		1
		},
		buildings:{
			hunting_lodge: true,
		}
	},
	axe:{
		cost:{
			iron: 		3,
			pole: 		1,
		},
		result:{
			hatchet: 	1
		},
		//cost_factor: 2,
	},
	backpack:{
		cost:{
			iron: 		1,
			leather: 	5,
		},
		result:{
			backpack: 	1
		},
		buildings:{
			hunting_lodge: true,
		}
	},
	bag:{
		cost:{
			cloth: 		10,
			twine: 		5,
		},
		result:{
			bag: 		1
		},
		buildings:{
			tailor_shop: true,
		}
	},
	barrel:{
		cost:{
			iron: 		2,
			nail: 		10,
			plank: 		24,
		},
		result:{
			barrel: 	1
		},
		//cost_factor: 2,
	},
	basket:{
		cost:{
			firewood: 	5,
		},
		result:{
			basket: 	1
		},
		//cost_factor: 2,
	},
	boot:{
		cost:{
			leather: 	4,
			lumber: 	1,
			twine: 		2,
		},
		result:{
			boot: 		1
		},
		buildings:{
			hunting_lodge: true,
		}
	},
	bow:{
		cost:{
			pole: 		1,
			twine: 		1,
			arrow: 		5,
		},
		result:{
			bow: 		1
		},
		buildings:{
			hunting_lodge: true,
		}
	},
	box:{
		cost:{
			lumber: 	10,
		},
		result:{
			box: 	1
		},
		buildings:{
			warehouse: true,
		}
	},
	bread:{
		cost:{
			firewood: 	1,
			flour: 		4,
			water: 		1,
		},
		result:{
			bread: 		1
		},
	},
	brick_clay:{
		cost:{
			firewood: 	1,
			clay: 		4,
			water: 		1,
		},
		result:{
			brick: 		1
		},
		buildings:{
			pottery: true,
		}
	},
	/*brick_lumber:{
		cost:{
			lumber: 	5,
		},
		result:{
			brick: 		1
		},
		buildings:{
			wood_workshop: true,
		}
	},*/
	brick_stone:{
		cost:{
			stone: 	4,
		},
		result:{
			brick: 		1
		},
		buildings:{
			stonesmith: true,
		}
	},
	bucket:{
		cost:{
			lumber: 	10,
		},
		result:{
			bucket: 	1
		},
		//cost_factor: 2,
	},
	cane:{
		cost:{
			pole: 	2,
		},
		result:{
			cane: 	1
		},
	},
	cloak:{
		cost:{
			cloth: 	5,
			twine: 	5
		},
		result:{
			cloak: 	1
		},
		buildings:{
			tailor_shop: 	true,
		}
	},
	cloth:{
		cost:{
			twine: 		2,
		},
		result:{
			cloth: 		1
		},
	},
	coal:{
		cost:{
			firewood: 2,
		},
		result:{
			coal: 	1
		},
		buildings:{
			furnace: 	true,
		}
	},
	copper:{
		cost:{
			copper_ore: 2,
			coal: 		1,
		},
		result:{
			copper: 	1
		}
	},
	copper_pot:{
		cost:{
			copper: 	2,
			coal: 		1,
		},
		result:{
			copper_pot: 	1
		},
		//cost_factor: 2,
	},
	crate:{
		cost:{
			nail: 		5,
			plank: 		12,
		},
		result:{
			crate: 	1
		},
		//cost_factor: 2,
	},
	digger:{
		cost:{
			shovel: 	1,
			peasant: 	1,
			sand: 		10,
		},
		result:{
			digger: 1
		},
		buildings:{
			furnace: 	true,
		}
	},
	endurance_potion:{
		cost:{
			firewood: 	10,
			apple:  	10,
			herbs: 		10,
			jar: 		1,
			water: 		10
		},
		result:{
			endurance_potion: 	1
		},
		buildings:{
			alchemist: 	true,
		}
	},
	explorer:{
		cost:{
			cane: 		1,
			map: 		1,
			peasant: 	1,
		},
		result:{
			explorer: 	1
		},
		buildings:{
			paper_mill: true,
		}
	},
	firewood:{
		cost:{
			leaves: 	5,
		},
		result:{
			firewood: 	5
		},
		buildings:{
			wood_workshop: true,
		}
	},
	firewood_reeds:{
		cost:{
			reeds: 5,
		},
		result:{
			firewood: 	5
		},
		buildings:{
			pottery: true,
		}
	},
	flour:{
		cost:{
			stone: 		1,
			wheat: 		4,
		},
		result:{
			flour: 		1
		},
	},
	fries:{
		cost:{
			firewood: 	1,
			potato: 	4,
			salt: 		1,
		},
		result:{
			fries: 		1
		},
	},
	gatherer:{
		cost:{
			basket: 	1,
			peasant: 	1,
		},
		result:{
			gatherer: 	1
		},
		buildings:{
			warehouse: true,
		}
	},
	glass:{
		cost:{
			coal: 		1,
			sand: 		4,
		},
		result:{
			glass: 		1
		},
		buildings:{
			furnace: true,
		}
	},
	herbal_cane:{
		cost:{
			cane: 	1,
			herbs: 	10,
		},
		result:{
			herbal_cane: 	1
		},
		buildings:{
			wood_workshop: true,
		}
	},
	hunter:{
		cost:{
			boot: 		1,
			bow: 		1,
			peasant: 	1,
		},
		result:{
			hunter: 1
		},
		buildings:{
			hunting_lodge: 	true,
		}
	},
	ink:{
		cost:{
			coal: 		1,
			jar: 		1,
			water: 		1,
		},
		result:{
			ink: 		1
		},
		buildings:{
			paper_mill: true,
		}
	},
	ink_firewood:{
		cost:{
			firewood: 	2,
			jar: 		1,
			water: 		1,
		},
		result:{
			ink: 		1
		},
		buildings:{
			paper_mill: true,
		}
	},
	iron:{
		cost:{
			iron_ore: 	2,
			coal: 		1,
		},
		result:{
			iron: 		1
		}
	},
	jar_clay:{
		cost:{
			firewood: 	1,
			clay: 		3,
			water: 		1,
		},
		result:{
			jar: 		1
		},
		buildings:{
			pottery: true,
		}
	},
	jar_glass:{
		cost:{
			coal: 		1,
			glass: 		1,
		},
		result:{
			jar: 		1
		},
		buildings:{
			furnace: true,
		}
	},
	/*jar_stone:{
		cost:{
			stone: 		4,
		},
		result:{
			jar: 		1
		},
		buildings:{
			//stonesmith: true,
		}
	},*/
	jar_wood:{
		cost:{
			lumber: 	4,
		},
		result:{
			jar: 		1
		},
		buildings:{
			wood_workshop: true,
		}
	},
	leather:{
		cost:{
			firewood: 	2,
			hide: 		2,
		},
		result:{
			leather: 1
		},
		buildings:{
			hunting_lodge: true,
		}
	},
	lumberjack:{
		cost:{
			hatchet: 	1,
			peasant: 	1,
		},
		result:{
			lumberjack: 1
		},
		buildings:{
			wood_workshop: true,
		}
	},
	mana_potion:{
		cost:{
			apple: 		5,
			firewood: 	10,
			herbs:  	10,
			jar: 		1,
			water: 		10
		},
		result:{
			mana_potion: 	1
		},
		buildings:{
			alchemist: 	true,
		}
	},
	map:{
		cost:{
			ink: 		1,
			paper: 		1,
		},
		result:{
			map: 1
		}
	},
	miner:{
		cost:{
			pickaxe: 	1,
			peasant: 	1,
			stone: 		10,
		},
		result:{
			miner: 1
		},
		buildings:{
			stonesmith: true,
		}
	},
	mining_potion:{
		cost:{
			sand:  		20,
			jar: 		1,
			water: 		1
		},
		result:{
			mining_potion: 	1
		},
		buildings:{
			alchemist: 	true,
		}
	},
	nail:{
		cost:{
			iron: 		1,
		},
		result:{
			nail: 		10
		}
	},
	nail_copper:{
		cost:{
			copper: 	1,
		},
		result:{
			nail: 		1
		},
		buildings:{
			smithy: true,
		}
	},
	paper:{
		cost:{
			firewood: 	4,
			water: 		4,
		},
		result:{
			paper: 1
		}
	},
	parchment:{
		cost:{
			stone: 		1,
			hide: 		1,
		},
		result:{
			paper: 1
		}
	},
	pickaxe:{
		cost:{
			iron: 		3,
			pole: 		1,
		},
		result:{
			pickaxe: 1
		},
		//cost_factor: 2,
	},
	pitchfork:{
		cost:{
			iron: 		2,
			pole: 		1,
		},
		result:{
			pitchfork: 1
		},
		//cost_factor: 2,
	},
	plank:{
		cost:{
			lumber: 	5,
		},
		result:{
			plank: 		1
		}
	},
	poison:{
		cost:{
			herbs:  	4,
			jar: 		1,
			water: 		10
		},
		result:{
			poison: 	1
		},
		buildings:{
			alchemist: 	true,
		}
	},
	pole:{
		cost:{
			lumber: 	2,
		},
		result:{
			pole: 		1
		}
	},
	pouch:{
		cost:{
			leather: 	4,
		},
		result:{
			pouch: 		1
		},
		buildings:{
			hunting_lodge: true,
		}
	},
	reeds_collector:{
		cost:{
			basket: 	1,
			reeds: 		20,
			peasant: 	1,
		},
		result:{
			reeds_collector: 	1
		},
		buildings:{
			tailor_shop: true,
		}
	},
	road:{
		cost:{
			stone: 		30,
		},
		result:{
			road: 		1
		},
		buildings:{
			stonesmith: true,
		}
	},
	roasted_meat:{
		cost:{
			firewood: 	2,
			meat: 		2,
		},
		result:{
			roasted_meat: 1
		},
	},
	sack:{
		cost:{
			cloth: 		4,
			twine: 		2,
		},
		result:{
			sack: 		1
		},
		//cost_factor: 2,
	},
	stone_box:{
		cost:{
			stone: 	10,
		},
		result:{
			stone_box: 	1
		},
		buildings:{
			stonesmith: true,
		}
	},
	stone_hatchet:{
		cost:{
			stone:  	2,
			pole: 		1,
		},
		result:{
			hatchet: 	1
		},
		buildings:{
			stonesmith: 	true,
		}
	},
	shovel:{
		cost:{
			stone:  	2,
			pole: 		1,
		},
		result:{
			shovel: 	1
		},
		buildings:{
			stonesmith: 	true,
		}
	},
	/*stone:{
		cost:{
			clay: 	5,
		},
		result:{
			stone: 	3
		},
		buildings:{
			//pottery: true,
		}
	},*/
	trap:{
		cost:{
			firewood: 	2,
			twine: 		1,
		},
		result:{
			trap: 		1
		},
		buildings:{
			hunting_lodge: true,
		}
	},
	trapper:{
		cost:{
			trap: 		1,
			peasant: 	1,
			pouch: 		1,
		},
		result:{
			trapper: 1
		},
		buildings:{
			hunting_lodge: 	true,
		}
	},
	twine_flax:{
		cost:{
			flax: 		2,
		},
		result:{
			twine: 		1
		},
		buildings:{
			//tailor_shop: true,
		}
	},
	twine_reeds:{
		cost:{
			reeds: 		1,
		},
		result:{
			twine: 		1
		},
		buildings:{
			tailor_shop: true,
		}
	},
	woodcutting_potion:{
		cost:{
			leaves:  	20,
			jar: 		1,
			water: 		1
		},
		result:{
			woodcutting_potion: 	1
		},
		buildings:{
			alchemist: 	true,
		}
	},
	wooden_hammer:{
		cost:{
			lumber:  	2,
			pole: 		1,
		},
		result:{
			wooden_hammer: 	1
		},
		buildings:{
			wood_workshop: 	true,
		}
	},
	
}

eachoa(all_available_recipes, function(recipe_id, recipe_info){
	if(all_available_items[recipe_id] != undefined && all_available_items[recipe_id]['value'] != undefined)
	{
		delete all_available_items[recipe_id]['value'];
	}
	eachoa(recipe_info['result'], function(result_id, result_amount){
		if(all_available_items[result_id] != undefined && all_available_items[result_id]['value'] != undefined)
		{
			delete all_available_items[result_id]['value'];
		}
	});
	eachoa(recipe_info['cost'], function(cost_id, cost_amount){
		all_available_recipes[recipe_id]['cost'][cost_id] = cost_amount * recipe_cost_factor;
	});
});

function check_all_recipes(){
	var found_recipe_to_adjust = false;
	eachoa(all_available_recipes, function(recipe_id, recipe_info){
		if(found_recipe_to_adjust == false)
		{
			var total_cost = 0;
			var can_calc_this = true;
			eachoa(recipe_info['cost'], function(cost_id, cost_amount){
				if((all_available_items[cost_id] != undefined && all_available_items[cost_id]['value'] != undefined)/* || recipe_info['value'] == undefined*/)
				{
					total_cost += all_available_items[cost_id]['value'] * cost_amount;
				}
				else
				{
					//console.log('cannot calc ' + recipe_id + ': ' + cost_id + ' has no value yet');
					can_calc_this = false;
				}
			});
			if(can_calc_this == true)
			{
				var total_result = 0;
				var allready_calculated = false;
				eachoa(recipe_info['result'], function(result_id, result_amount){
					if(all_available_items[result_id] != undefined && all_available_items[result_id]['value'] != undefined)
					{
						total_result += all_available_items[result_id]['value'] * result_amount;
						if(all_available_items[result_id]['calculated'] != undefined)
						{
							allready_calculated = true;
						}
					}
				});
				cost_value = Math.ceil(total_cost * (0.5 + count_object(recipe_info['cost']) * 0.5));
				if(cost_value != total_result && recipe_info['value'] == undefined)
				{
					found_recipe_to_adjust = recipe_id;
					//console.log(found_recipe_to_adjust);
					//console.log(cost_value + ' != ' + total_result);
					if(count_object(recipe_info['result']) == 1)
					{
						eachoa(recipe_info['result'], function(result_id, result_amount){
							if(all_available_items[result_id]['calculated'] == undefined)
							{
								all_available_items[result_id]['value'] = (cost_value / result_amount);
								all_available_items[result_id]['calculated'] = true;
								if(all_available_items[result_id]['energy'] != undefined)
								{
									all_available_items[result_id]['energy'] = calc_energy_per_value(all_available_items[result_id]['value']);
								}
								//console.log(all_available_items[result_id]);
							}
							else
							{
								if(cost_value >= all_available_items[result_id]['value'] * 2)
								{
									var result_amount = Math.floor(cost_value / all_available_items[result_id]['value']);
									if(result_amount < 1){result_amount = 1;}
									recipe_info['result'][result_id] = result_amount
									total_result = result_amount * all_available_items[result_id]['value'];
								}
								else
								{
									var cost_correction_factor = all_available_items[result_id]['value'] / cost_value;
									eachoa(recipe_info['cost'], function(cost_id, cost_amount){
										recipe_info['cost'][cost_id] = Math.ceil(cost_amount * cost_correction_factor);
									});
								}
							}
						});
					}
				}
				if(total_result > 0)
				{
					recipe_info['value'] = total_result;
				}
			}
		}
	});
	if(found_recipe_to_adjust != false)
	{
		check_all_recipes();
	}
	
}

function check_all_recipe_values(){
	eachoa(all_available_recipes, function(recipe_id, recipe_info){
		var recipe_value = 0;
		eachoa(recipe_info['result'], function(result_id, result_amount){
			recipe_value += all_available_items[result_id]['value'] * result_amount;
		});
		all_available_recipes[recipe_id]['value'] = recipe_value;
	});
}

function check_all_item_effects(){
	eachoa(all_available_items, function(item_id, item_info){
		if(item_info['effects'] != undefined)
		{
			eachoa(item_info['effects'], function(effect_id, effect_amount){
				item_info['effects'][effect_id] = calc_effect_per_value(item_info['value'], effect_id, item_info['effect_type'], item_id);
			});
		}
	});
}

function calc_effect_per_value(base_value, effect_id, effect_type, item_id){
	calced_effect_per_value = 1;
	if(effects_per_value[effect_id] != undefined)
	{
		calced_effect_per_value = effects_per_value[effect_id];
	}
	var split_bonus_string = split_string(effect_id, '_');
	if(split_bonus_string[0] != undefined && split_bonus_string[0] == 'passive')
	{
		calced_effect_per_value = effects_per_value['passive'];
		var produced_item = effect_id.replaceAll('passive_','');
		if(all_available_items[produced_item] != undefined && all_available_items[produced_item]['value'] != undefined)
		{
			calced_effect_per_value /= all_available_items[produced_item]['value'];
		}
	}
	var value = base_value * 1; 
	if(effect_type != undefined && effect_type == 'fixed')
	{
		value *= fixed_effect_factor;
	}
	else
	{
		value = (Math.sqrt(base_value)); 
	}
	value *= calced_effect_per_value;
	
	if(value < 0.1)
	{
		console.log(item_id + ' effect to low: ' + value);
		console.log('calced_effect_per_value: ' + calced_effect_per_value);
		console.log('base_value: ' + base_value);
	}
	return Math.ceil(value * 10) / 10;
}

check_all_recipes();
check_all_item_effects();
//check_all_recipe_values();