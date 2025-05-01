var all_available_recipes = {
	apple_picker:{
		cost:{
			apple: 		10,
			basket: 	5,
			peasant: 	1,
		},
		result:{
			apple_picker: 1
		},
		buildings:{
			kitchen: 	true,
		}
	},
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
			iron: 		5,
			pole: 		3,
			twine: 		3,
		},
		result:{
			hatchet: 	1
		},
		buildings:{
			smithy: true,
		}
	},
	backpack:{
		cost:{
			iron: 		2,
			leather: 	10,
			twine: 		1,
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
			leather: 	10,
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
		buildings:{
			wood_workshop: true,
		}
	},
	basket:{
		cost:{
			firewood: 	10,
		},
		result:{
			basket: 	1
		},
		buildings:{
			wood_workshop: true,
		}
	},
	basket_reeds:{
		cost:{
			reeds: 	5,
		},
		result:{
			basket: 	1
		},
		buildings:{
			tailor_shop: true,
		}
	},
	bed:{
		cost:{
			nail: 		10,
			pillow: 	2,
			plank: 		10,
		},
		result:{
			bed: 1
		},
		buildings:{
			wood_workshop: true,
		}
	},
	bone_dagger:{
		cost:{
			bone: 		9,
			stone: 		2,
		},
		result:{
			knife: 		1
		},
		buildings:{
			armory: true,
		}
	},
	bone_hammer:{
		cost:{
			pole: 		2,
			skull: 		1,
		},
		result:{
			bone_hammer: 		1
		},
		buildings:{
			bone_workshop: true,
		}
	},
	bone_pendant:{
		cost:{
			bone: 		10,
		},
		result:{
			bone_pendant: 		1
		},
		buildings:{
			bone_workshop: true,
		}
	},
	bone_pickaxe:{
		cost:{
			bone: 		40,
			pole: 		5,
			twine: 		5,
		},
		result:{
			pickaxe: 		1
		},
		buildings:{
			bone_workshop: true,
		}
	},
	boot:{
		cost:{
			leather: 	10,
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
			arrow: 		10,
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
			plank: 	4,
		},
		result:{
			box: 	1
		},
		buildings:{
			wood_workshop: true,
		}
	},
	box_bone:{
		cost:{
			bone: 	30,
		},
		result:{
			bone_box: 	1
		},
		buildings:{
			bone_workshop: true,
		}
	},
	box_clay:{
		cost:{
			firewood: 	1,
			clay: 		4,
			water: 		1,
		},
		result:{
			box: 		1,
		},
		buildings:{
			pottery: true,
		}
	},
	bread:{
		cost:{
			firewood: 	1,
			flour: 		1,
			water: 		1,
		},
		result:{
			bread: 		1
		},
		buildings:{
			kitchen: true,
		}
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
		buildings:{
			wood_workshop: true,
		}
	},
	cane:{
		cost:{
			pole: 	2,
		},
		result:{
			cane: 	1
		},
		buildings:{
			armory: true,
		}
	},
	candy:{
		cost:{
			firewood: 	1,
			sugar: 		5,
		},
		result:{
			candy: 1
		},
		buildings:{
			kitchen: true,
		}
	},
	carrot_cake:{
		cost:{
			carrot: 	5,
			egg: 		2,
			firewood: 	2,
			flour: 		4,
			sugar: 		2,
		},
		result:{
			carrot_cake: 1
		},
		buildings:{
			kitchen: true,
		}
	},
	cheese:{
		cost:{
			milk: 		10,
			salt: 		1,
		},
		result:{
			cheese: 1
		},
		buildings:{
			kitchen: true,
		}
	},
	cloak:{
		cost:{
			cloth: 	10,
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
		buildings:{
			tailor_shop: true,
		}
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
		},
		buildings:{
			furnace: true,
		}
	},
	copper_pot:{
		cost:{
			copper: 	2,
			coal: 		10,
		},
		result:{
			copper_pot: 	1
		},
		buildings:{
			smithy: true,
		}
	},
	crate:{
		cost:{
			nail: 		5,
			plank: 		12,
		},
		result:{
			crate: 	1
		},
		buildings:{
			wood_workshop: 	true,
		}
	},
	dark_crystal_pendant:{
		cost:{
			dark_crystal: 	5,
			twine: 			1,
		},
		result:{
			dark_crystal_pendant: 1
		},
		buildings:{
			gemcutter: 	true,
		}
	},
	dark_crystal_staff:{
		cost:{
			dark_crystal: 	10,
			pole: 			2,
		},
		result:{
			dark_crystal_staff: 1
		},
		buildings:{
			gemcutter: 	true,
		}
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
	firewood_lumber:{
		cost:{
			lumber: 1,
		},
		result:{
			firewood: 	5,
		},
		buildings:{
			wood_workshop: true,
		}
	},
	firewood_reeds:{
		cost:{
			reeds: 4,
		},
		result:{
			firewood: 	8,
		},
		buildings:{
			pottery: true,
		}
	},
	flour:{
		cost:{
			wheat: 		5,
		},
		result:{
			flour: 		1
		},
		buildings:{
			mill: true,
		}
	},
	fries:{
		cost:{
			firewood: 	5,
			potato: 	10,
			salt: 		1,
		},
		result:{
			fries: 		1
		},
		buildings:{
			kitchen: true,
		}
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
			mill: true,
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
	grave_digger:{
		cost:{
			bone: 		10,
			peasant: 	1,
			shovel: 	1,
		},
		result:{
			grave_digger: 1
		},
		buildings:{
			bone_workshop: 	true,
		}
	},
	hamburger:{
		cost:{
			bread: 			2,
			roasted_meat: 	5,
			cheese: 		1,
		},
		result:{
			hamburger: 		1
		},
		buildings:{
			kitchen: true,
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
			alchemist: true,
		}
	},
	herbalist:{
		cost:{
			herbs: 		10,
			peasant: 	1,
			pouch: 		1,
		},
		result:{
			herbalist: 1
		},
		buildings:{
			alchemist: 	true,
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
			ink: 		2
		},
		buildings:{
			paper_mill: true,
		}
	},
	ink_bone:{
		cost:{
			bone: 		5,
			jar: 		1,
			water: 		5,
		},
		result:{
			ink: 		4
		},
		buildings:{
			bone_workshop: true,
		}
	},
	ink_firewood:{
		cost:{
			firewood: 	2,
			jar: 		1,
			water: 		1,
		},
		result:{
			ink: 		2
		},
		buildings:{
			paper_mill: true,
		}
	},
	iron:{
		cost:{
			iron_ore: 	2,
			coal: 		5,
		},
		result:{
			iron: 		1
		},
		buildings:{
			furnace: true,
		}
	},
	jar_clay:{
		cost:{
			firewood: 	1,
			clay: 		4,
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
	jar_skull:{
		cost:{
			skull: 		1,
		},
		result:{
			jar: 		1
		},
		buildings:{
			bone_workshop: true,
		}
	},
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
	knife_copper:{
		cost:{
			copper: 	1,
			firewood: 	1,
		},
		result:{
			knife: 		1
		},
		buildings:{
			armory: 	true,
		}
	},
	knife_iron:{
		cost:{
			iron: 		1,
			twine: 		1,
		},
		result:{
			knife: 		1
		},
		buildings:{
			armory: 	true,
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
	leather_salt:{
		cost:{
			hide: 		10,
			salt: 		1,
		},
		result:{
			leather: 1
		},
		buildings:{
			hunting_lodge: true,
		}
	},
	light_crystal_pendant:{
		cost:{
			light_crystal: 	5,
			twine: 			1,
		},
		result:{
			light_crystal_pendant: 1
		},
		buildings:{
			gemcutter: 	true,
		}
	},
	light_crystal_staff:{
		cost:{
			light_crystal: 	10,
			pole: 			2,
		},
		result:{
			light_crystal_staff: 1
		},
		buildings:{
			gemcutter: 	true,
		}
	},
	lumberjack:{
		cost:{
			hatchet: 	1,
			lumber: 	10,
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
		},
		buildings:{
			paper_mill: true,
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
			coal: 		1,
		},
		result:{
			nail: 		10
		},
		buildings:{
			smithy: true,
		}
	},
	nail_copper:{
		cost:{
			copper: 	1,
			coal: 		1,
		},
		result:{
			nail: 		1
		},
		buildings:{
			smithy: true,
		}
	},
	omelette:{
		cost:{
			firewood: 	5,
			egg: 		10,
		},
		result:{
			omelette: 1
		},
		buildings:{
			kitchen: true,
		}
	},
	paper:{
		cost:{
			firewood: 	4,
			water: 		4,
		},
		result:{
			paper: 1
		},
		buildings:{
			paper_mill: true,
		}
	},
	parchment:{
		cost:{
			stone: 		1,
			hide: 		1,
		},
		result:{
			paper: 1
		},
		buildings:{
			paper_mill: true,
		}
	},
	pickaxe:{
		cost:{
			iron: 		5,
			pole: 		3,
			twine: 		3,
		},
		result:{
			pickaxe: 1
		},
		buildings:{
			smithy: true,
		}
	},
	pillow:{
		cost:{
			cloth: 		2,
			feather: 	10,
			twine: 		1,
		},
		result:{
			pillow: 1
		},
		buildings:{
			tailor_shop: true,
		}
	},
	pitchfork:{
		cost:{
			lumber: 	5,
			pole: 		5,
		},
		result:{
			pitchfork: 1
		},
		buildings:{
			//wood_workshop: true,
		}
	},
	pitchfork_wood:{
		cost:{
			iron: 		2,
			pole: 		1,
		},
		result:{
			pitchfork: 1
		},
		buildings:{
			//smithy: true,
		}
	},
	plank:{
		cost:{
			lumber: 	5,
		},
		result:{
			plank: 		1
		},
		buildings:{
			wood_workshop: true,
		}
	},
	poison:{
		cost:{
			herbs:  	4,
			jar: 		1,
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
		},
		buildings:{
			wood_workshop: true,
		}
	},
	/*pole_bone:{
		cost:{
			bone: 		4,
		},
		result:{
			pole: 		1
		},
		buildings:{
			bone_workshop: 	true,
		}
	},*/
	pole_stone:{
		cost:{
			stone: 	2,
		},
		result:{
			pole: 		1
		},
		buildings:{
			stonesmith: 	true,
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
			mill: true,
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
		buildings:{
			kitchen: true,
		}
	},
	roasted_potato:{
		cost:{
			firewood: 	3,
			potato: 	3,
		},
		result:{
			roasted_potato: 1
		},
		buildings:{
			kitchen: true,
		}
	},
	sack:{
		cost:{
			cloth: 		4,
			twine: 		2,
		},
		result:{
			sack: 		1
		},
		buildings:{
			tailor_shop: true,
		}
	},
	sheep_herder:{
		cost:{
			cane: 		1,
			peasant: 	1,
			sack: 		1,
			wool: 		10,
		},
		result:{
			sheep_herder: 1
		},
		buildings:{
			mill: 	true,
		}
	},
	shield:{
		cost:{
			plank:  	8,
			nail: 		10,
		},
		result:{
			shield: 	1
		},
		buildings:{
			armory: 	true,
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
	stone_box:{
		cost:{
			stone: 	20,
		},
		result:{
			stone_box: 	1
		},
		buildings:{
			stonesmith: true,
		}
	},
	sugar:{
		cost:{
			sugar_beet: 3,
		},
		result:{
			sugar: 		1
		},
		buildings:{
			mill: true,
		}
	},
	sugar_cane:{
		cost:{
			sugarcane: 3,
		},
		result:{
			sugar: 		1
		},
		buildings:{
			mill: true,
		}
	},
	sword:{
		cost:{
			bone: 		20,
			hide: 		5,
			stone: 		5,
		},
		result:{
			sword: 		1
		},
		buildings:{
			armory: true,
		}
	},
	sword_iron:{
		cost:{
			iron: 		2,
			hide: 		1,
		},
		result:{
			sword: 		1
		},
		buildings:{
			armory: true,
		}
	},
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
	trumpet:{
		cost:{
			copper: 	6,
			coal: 		10,
		},
		result:{
			trumpet: 	1
		},
		buildings:{
			smithy: 	true,
		}
	},
	twine_flax:{
		cost:{
			flax: 		1,
		},
		result:{
			twine: 		1
		},
		buildings:{
			mill: true,
		}
	},
	twine_reeds:{
		cost:{
			reeds: 		2,
		},
		result:{
			twine: 		1
		},
		buildings:{
			mill: true,
		}
	},
	twine_wool:{
		cost:{
			wool: 		2,
		},
		result:{
			twine: 		1
		},
		buildings:{
			mill: true,
		}
	},
	wheat_farmer:{
		cost:{
			peasant: 	1,
			pitchfork: 	1,
			wheat: 		10,
		},
		result:{
			wheat_farmer: 1
		},
		buildings:{
			mill: 	true,
		}
	},
	woodcutting_potion:{
		cost:{
			firewood:  	20,
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
	if(all_available_items[recipe_id] != undefined && all_available_items[recipe_id]['value'] != undefined && all_available_items[recipe_id]['calculated'] == undefined)
	{
		delete all_available_items[recipe_id]['value'];
	}
	eachoa(recipe_info['result'], function(result_id, result_amount){
		if(all_available_items[result_id] != undefined && all_available_items[result_id]['value'] != undefined && all_available_items[result_id]['calculated'] == undefined)
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
				if(item_info['effects'][effect_id] == 0)
				{
					delete item_info['effects'][effect_id];
				}
			});
			if(count_object(item_info['effects']) == 0)
			{
				delete item_info['effects'];
				delete item_info['effect_type'];
			}
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
	value *= 1 + ((Math.sqrt(value) / 100) * percent_ponus_per_value);
	if(effect_type != undefined && effect_type == 'fixed')
	{
		value *= fixed_effect_factor;
	}
	else
	{
		//value = (Math.sqrt(base_value)); 
	}
	value *= calced_effect_per_value;
	
	if(value < 0.05)
	{
		console.log(item_id + ' effect to low: ' + value);
		console.log('calced_effect_per_value: ' + calced_effect_per_value);
		console.log('base_value: ' + base_value);
	}
	return Math.round(value * 10) / 10;
}

check_all_recipes();
check_all_item_effects();
//check_all_recipe_values();