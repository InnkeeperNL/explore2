function gain_inventory_item(item_id, gained_amount){
	var added_to_inventory = false;
	if(all_available_items[item_id] != undefined)
	{
		if(gained_amount == undefined){gained_amount = 1;}
		if(gamedata['inventory'] == undefined)
		{
			gamedata['inventory'] = {};
		}
		var inventory_space_left = get_inventory_space_left();
		if(inventory_space_left > 0)
		{
			if(gamedata['inventory'][item_id] == undefined)
			{
				gamedata['inventory'][item_id] = 0;
			}
			if(gained_amount > inventory_space_left){gained_amount = inventory_space_left;}
			gamedata['inventory'][item_id] += gained_amount;
			added_to_inventory = true;
			saveToLocalStorage();
		}
	}
	return added_to_inventory;
}

function get_inventory_space_left(){
	var inventory_amount = 0;
	eachoa(gamedata['inventory'], function(item_id, item_amount){
		inventory_amount += item_amount;
	});
	var inventory_space_left = get_inventory_size() - inventory_amount;
	return inventory_space_left;
}

function update_inventory_counter(){
	var inventory_amount = 0;
	eachoa(gamedata['inventory'], function(item_id, item_amount){
		inventory_amount += item_amount;
	});
	var inventory_space_left = get_inventory_size() - inventory_amount;
	class_html('inventory_counter', inventory_amount + ' / ' + get_inventory_size());
	if(inventory_space_left == 0)
	{
		class_add_class('inventory_counter','full');
	}
	else
	{
		class_remove_class('inventory_counter','full');
	}
}

function get_inventory_size(){
	return Math.ceil(get_building_bonus('max_inventory',inventory_base_size));
}

function show_inventory(){
	if(gamedata['inventory'] == undefined){gamedata['inventory'] = {};}
	class_html('white_screen_title', 'Inventory');
	
	var parsed_inventory = '';

	eachoa(gamedata['inventory'], function(item_id, item_amount){
		parsed_inventory += '<div class="inventory_line">';
		parsed_inventory += 	'<span onclick="show_item_details(\'' + item_id + '\')">' + parse_item(item_id, item_amount) + '</span>';
		parsed_inventory += 	'<div class="trash_item_icon" onclick="delete_inventory_item(\'' + item_id + '\')"></div>';
		if(all_available_items[item_id]['energy'] != undefined)
		{
			parsed_inventory += 	'<div class="consume_item_icon" onclick="consume_inventory_item(\'' + item_id + '\')">+' + all_available_items[item_id]['energy'] + '</div>';
		}
		parsed_inventory += '</div>';
	});

	class_html('white_screen_content', parsed_inventory);
	show_white_screen();
}

function show_deposit_inventory(){
	if(gamedata['inventory'] == undefined){gamedata['inventory'] = {};}
	class_html('white_screen_title', 'Deposit to storage');
	
	var parsed_inventory = '';

	eachoa(gamedata['inventory'], function(item_id, item_amount){
		var item_info = all_available_items[item_id];
		parsed_inventory += '<div class="inventory_line">';
		parsed_inventory += 	parse_item(item_id, undefined, item_amount);
		var stored_amount = 0;
		if(gamedata['storage'][item_id] != undefined){stored_amount = gamedata['storage'][item_id];}
		if(stored_amount < get_max_storage() || item_info['type'] == undefined || item_info['type'] != 'resource')
		{
			parsed_inventory += 	'<div class="deposit_item_icon" onclick="deposit_inventory_item(\'' + item_id + '\')"></div>';
		}
		else
		{
			parsed_inventory += 	'<div class="deposit_item_icon storage_full"></div>';
			parsed_inventory += 	'<div class="trash_item_icon" onclick="delete_inventory_item(\'' + item_id + '\',\'deposit\')"></div>';
		}
		if(all_available_items[item_id]['energy'] != undefined)
		{
			parsed_inventory += 	'<div class="consume_item_icon" onclick="consume_inventory_item(\'' + item_id + '\',\'deposit\')">+' + all_available_items[item_id]['energy'] + '</div>';
		}
		parsed_inventory += '</div>';
	});

	class_html('white_screen_content', parsed_inventory);
	show_white_screen();
}

function consume_inventory_item(item_id, show_now){
	if(gamedata['energy'] == undefined){gamedata['energy'] = 0;}
	if(gamedata['inventory'] == undefined){gamedata['inventory'] = {};}
	if(gamedata['inventory'][item_id] != undefined && all_available_items[item_id]['energy'] != undefined && (gamedata['energy'] + all_available_items[item_id]['energy'] <= get_max_energy() || gamedata['energy'] < 1)){
		gain_energy(all_available_items[item_id]['energy']);
		gamedata['inventory'][item_id] -= 1;
		if(gamedata['inventory'][item_id] <= 0)
		{
			delete gamedata['inventory'][item_id];
		}
	}
	update_inventory_counter();
	if(count_object(gamedata['inventory']) > 0)
	{
		if(show_now == undefined)
		{
			show_inventory();
		}
		else
		{
			if(show_now == 'deposit')
			{
				show_deposit_inventory();
			}
		}
	}
	else
	{
		close_white_screen();
	}
}

function delete_inventory_item(item_id, show_now){
	if(gamedata['inventory'] == undefined){gamedata['inventory'] = {};}
	if(gamedata['inventory'][item_id] != undefined){
		gamedata['inventory'][item_id] -= 1;
		if(gamedata['inventory'][item_id] <= 0)
		{
			delete gamedata['inventory'][item_id];
		}
	}
	update_inventory_counter();
	if(count_object(gamedata['inventory']) > 0)
	{
		if(show_now == undefined)
		{
			show_inventory();
		}
		else
		{
			if(show_now == 'deposit')
			{
				show_deposit_inventory();
			}
		}
	}
	else
	{
		close_white_screen();
	}
	
}

function deposit_inventory_item(item_id){
	if(count_object(gamedata['inventory']) > 0)
	{
		if(gamedata['storage'] == undefined)
		{
			gamedata['storage'] = {};
		}
		var max_storage = get_max_storage();
		var wasted_items = {};
		if(gamedata['inventory'][item_id] != undefined && gamedata['inventory'][item_id] > 0)
		{
			var item_info = all_available_items[item_id];
			var item_amount = gamedata['inventory'][item_id];
			if(gamedata['storage'][item_id] == undefined){gamedata['storage'][item_id] = 0;}
			gamedata['storage'][item_id] += item_amount;
			var surplus = 0;
			if(gamedata['storage'][item_id] > max_storage && item_info['type'] != undefined && item_info['type'] == 'resource')
			{
				surplus = gamedata['storage'][item_id] - max_storage;
				gamedata['storage'][item_id] = max_storage;
				wasted_items['item_id'] = surplus;
			}
			//gamedata['inventory'][item_id] = surplus;
			gamedata['inventory'][item_id] = 0;
			if(gamedata['inventory'][item_id] == 0)
			{
				delete gamedata['inventory'][item_id];
			}
			saveToLocalStorage();
			show_storage();
		}
		if(count_object(wasted_items) > 0)
		{
			// show waste
		}
	}
	if(count_object(gamedata['inventory']) > 0)
	{
		show_deposit_inventory();
	}
	else
	{
		close_white_screen();
	}
}

function move_to_inventory(item_id){
	if(gamedata['storage'][item_id] > 0)
	{
		if(gain_inventory_item(item_id) == true)
		{
			gamedata['storage'][item_id] -= 1;
			show_storage(false);
		}
	}

}


// ########################################### STORAGE ############################################################

var current_inventory_page = 1;

function show_storage(show_deposit){
	if(gamedata['storage'] == undefined){gamedata['storage'] = {};}
	if(gamedata['show_only_food_storage'] == undefined){gamedata['show_only_food_storage'] = false;}
	if(gamedata['show_only_food_storage'] == false)
	{
		class_remove_class('show_food_storage_toggle_button','good');
	}
	else
	{
		class_add_class('show_food_storage_toggle_button','good');
	}
	var parsed_inventory = '';
	var inventory_container = document.getElementById('storage_container');
	var inventory_width = Math.floor(inventory_container.offsetWidth / 94);
	//if(inventory_width < 4){inventory_width = 4;}
	var inventory_height = Math.floor(inventory_container.offsetHeight / 104);
	if(inventory_width < 1){inventory_width = 1;}
	if(inventory_height < 1){inventory_height = 1;}
	var items_shown_per_page = inventory_width * inventory_height;
	var items_shown = 0;
	var total_items = 0;
	eachoa(all_available_items, function(item_id, item_info){
		if(gamedata['storage'][item_id] != undefined && ((item_info['type'] != undefined && item_info['type'] == 'resource' && gamedata['show_only_food_storage'] == false) || (item_info['energy'] != undefined && gamedata['show_only_food_storage'] == true)))
		{
			total_items++;
			if(total_items > (current_inventory_page - 1) * items_shown_per_page && total_items <= current_inventory_page * items_shown_per_page)
			{
				items_shown++;
				parsed_inventory += '<span onclick="move_to_inventory(\'' + item_id + '\')">' + parse_item(item_id) + '</span>';
			}
		}
	});
	var total_pages = total_items / items_shown_per_page;

	set_html('#storage_container',parsed_inventory);
	set_html('.page_number',current_inventory_page);
	if(Math.ceil(total_pages) < current_inventory_page && total_pages > 0)
	{
		current_inventory_page = Math.ceil(total_pages);
		show_storage();
	}

	var parsed_bottom_bar = '';
	parsed_bottom_bar += '<div class="page_numbers">';
	if(total_pages > 1)
	{
		if(current_inventory_page > 1){parsed_bottom_bar += '<span class="adjust_page_number" onclick="adjust_page_number(-1)"> < </span>';}else{parsed_bottom_bar += '<span> &nbsp; </span>';}
		parsed_bottom_bar += current_inventory_page;
		if(current_inventory_page < total_pages){parsed_bottom_bar += '<span class="adjust_page_number" onclick="adjust_page_number(1)"> > </span>';}else{parsed_bottom_bar += '<span> &nbsp; </span>';}
	}
	parsed_bottom_bar += '</div>';
	parsed_bottom_bar += 'Max stack size: ' + get_max_storage();
	class_html('bottom_bar_right',  parsed_bottom_bar);
	update_inventory_counter();
	/*if(count_object(gamedata['inventory']) > 0 && (show_deposit != undefined && show_deposit == true))
	{
		show_deposit_inventory();
	}
	else
	{
		close_white_screen();
	}*/
}

function toggle_show_food_storage(){
	if(gamedata['show_only_food_storage'] == undefined){gamedata['show_only_food_storage'] = false;}
	if(gamedata['show_only_food_storage'] == false)
	{
		gamedata['show_only_food_storage'] = true;
	}
	else
	{
		gamedata['show_only_food_storage'] = false;
	}
	saveToLocalStorage();
}

function adjust_page_number(amount){
	if(current_content == 'storage')
	{
		current_inventory_page += amount;
		if(current_inventory_page < 1){current_inventory_page = 1;}
		show_storage();
	}
}

function parse_item(item_id, forced_amount, amount_gained){
	var owned_amount = 0;
	var max_storage = get_max_storage();
	if(gamedata['storage'][item_id] != undefined){owned_amount = gamedata['storage'][item_id];}
	var parsed_item = '';
	if(all_available_items[item_id] != undefined)
	{
		var current_item = all_available_items[item_id];
		var rarity = 1;
		if(current_item['rarity'] != undefined){rarity = current_item['rarity'];}
		parsed_item +=				'<div class="item item_container_' + item_id + ' rarity_' + rarity + '" style="background-image:url(images/' + current_item['image'] + ');">';
		parsed_item +=					'<span class="item_name">' + current_item['name'] + '</span>';
		if(forced_amount == undefined)
		{
			if(owned_amount >= max_storage)
			{
				parsed_item +=					'<span class="owned_amount max_owned item_' + item_id + '">' + nFormatter(owned_amount, 3) + '</span>';
			}
			else
			{
				parsed_item +=					'<span class="owned_amount item_' + item_id + '">' + nFormatter(owned_amount, 3) + '</span>';
			}
			
		}
		else
		{
			if(typeof(forced_amount) == 'string')
			{
				parsed_item +=					'<span class="owned_amount">' + forced_amount + '</span>';
			}
			else
			{
				parsed_item +=					'<span class="owned_amount">' + nFormatter(forced_amount, 3) + '</span>';
			}
		}
		if(amount_gained != undefined)
		{
			var parsed_amount_gained = '';
			if(amount_gained < 1)
			{
				parsed_amount_gained = Math.floor(amount_gained * 100) +'%';
			}
			if(amount_gained < 0.01)
			{
				parsed_amount_gained = '<1%';
			}
			if(amount_gained >= 1)
			{
				parsed_amount_gained = '+' + Math.floor(amount_gained * 10) / 10;
			}
			parsed_item +=					'<span class="amount_gained">' + parsed_amount_gained + '</span>';
		}
		if(amount_gained == undefined)
		{
			parsed_item +=					'<span class="amount_gained"></span>';
		}
		parsed_item +=				'</div>';
	}

	return parsed_item;
}

function show_white_screen(){
	class_add_class('dark_overlay','active');
	class_add_class('white_screen','active');
}

function close_white_screen(){
	class_remove_class('dark_overlay','active');
	class_remove_class('white_screen','active');
}

function gain_all_items(amount){
	if(amount == undefined){amount = 1;}
	eachoa(all_available_items, function(item_id, item_info){
		gamedata['storage'][item_id] = amount;
	});
}

function gain_all_resources(amount){
	if(amount == undefined){amount = 1;}
	eachoa(all_available_items, function(item_id, item_info){
		if(item_info['type'] != undefined && item_info['type'] == 'resource')
		{
			gamedata['storage'][item_id] = amount;
		}
	});
}

function show_item_details(item_id){
	if(all_available_items[item_id] != undefined)
	{
		var item_info = all_available_items[item_id];
		var item_details = '<span class="item_details">';
		item_details += parse_item(item_id, '');
		item_details += '<div class="item_stats">';
		var owned_amount = 0;
		if(gamedata['storage'] != undefined && gamedata['storage'][item_id] != undefined)
		{
			owned_amount = gamedata['storage'][item_id];
		}
		item_details += 'Owned: ' + owned_amount + '<br/>';
		if(item_info['value'] != undefined)
		{
			item_details += 'Value: ' + item_info['value'] + '<br/>';
		}
		if(item_info['effects'] != undefined)
		{
			eachoa(item_info['effects'], function(effect_id, effect_amount){
				var total_bonus = effect_amount;

				var split_bonus_string = split_string(effect_id, '_');
				var bonus_type = '';
				var bonus_text = '';
				if(split_bonus_string[0] != undefined && split_bonus_string[0] == 'passive')
				{
					bonus_type = ' ' + split_bonus_string[1] + '/m';
					bonus_text = 'Production';
				}
				else
				{
					bonus_text = capitalizeFirstLetter(effect_id.replaceAll('_',' '));
				}
				if(item_info['effect_type'] != undefined && item_info['effect_type'] == 'percent')
				{
					bonus_type = '%';
					if(gamedata['storage'][item_id] > 0)
					{
						total_bonus = /*Math.sqrt*/(gamedata['storage'][item_id]) * effect_amount;
					}
				}
				else
				{
					if(gamedata['storage'][item_id] > 0)
					{
						total_bonus = /*Math.sqrt*/(gamedata['storage'][item_id]) * effect_amount;
					}
				}
				var global_bonus = get_building_bonus(effect_id, 1);
				if(effect_id == 'max_storage'){global_bonus = get_max_storage();}
				if(effect_id == 'max_energy'){global_bonus = get_max_energy();}
				if(effect_id == 'max_inventory'){global_bonus = get_inventory_size();}
				var pre_global_bonus_text = '';
				var global_bonus_text = '';
				if(split_bonus_string[0] != undefined && split_bonus_string[0] == 'passive')
				{
					global_bonus -= 1;
					global_bonus_text = '/m';
				}
				if(bonus_type == '%' && effect_id != 'max_storage' && effect_id != 'max_energy')
				{
					if(global_bonus < 10)
					{
						global_bonus *= 100;
						global_bonus_text = '%';
					}
					else
					{
						pre_global_bonus_text = 'x';
					}
				}
				//if(bonus_type == '%'){global_bonus *= 100;}
				item_details += bonus_text + ': ' + nFormatter(total_bonus,1) + bonus_type;
				if(global_bonus != false)
				{
					item_details += ' (' + pre_global_bonus_text + nFormatter(global_bonus,1) + global_bonus_text + ')';
				}
				item_details += '</br>';
			});
		}
		item_details += '</div></span>';
		set_html('.white_screen_title', capitalizeFirstLetter(item_info['name']));
		set_html('.white_screen_content',item_details);
		show_white_screen();
	}
}