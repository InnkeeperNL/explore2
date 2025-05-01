function get_max_energy(){
	var max_energy = max_energy_base;
	max_energy = Math.ceil(get_building_bonus('max_energy', max_energy));
	return max_energy;
}

function gain_energy(amount){
	var gained_amount = (amount);
	var max_energy = get_max_energy();
	if(gamedata['energy'] == undefined){gamedata['energy'] = 0;}
	gamedata['energy'] += gained_amount;
	if(gamedata['energy'] > max_energy)
	{
		gamedata['energy'] = max_energy;
	}
	update_energy();
}

function update_energy(){
	var max_energy = get_max_energy();
	class_html('current_energy',  Math.floor(gamedata['energy']));
	class_html('max_energy', Math.floor(max_energy));
	var energy_percent = (gamedata['energy'] / max_energy) * 100;
	class_style('energy_bar','width',energy_percent + '%');
	if(gamedata['energy'] < 1)
	{
		class_add_class('current_location_button', 'danger');
	}
	else
	{
		class_remove_class('current_location_button', 'danger');
	}
}

function check_energy_gain(){
	if(gamedata['last_energy_tick'] == undefined){gamedata['last_energy_tick'] = nowint();}
	var seconds_passed = Math.floor((nowint() - gamedata['last_energy_tick']) / 1000);
	var energy_per_tick = get_building_bonus('energy_per_tick',energy_per_tick_base);
	gain_energy(seconds_passed * energy_per_tick);
	gamedata['last_energy_tick'] += seconds_passed * 1000;
}

function calc_energy_per_value(base_value){
	/*var value = base_value * energy_per_value; 
	value *= 1 + ((Math.sqrt(value) / 100) * percent_ponus_per_value);
	return Math.floor(value);*/
	return Math.ceil(Math.sqrt(base_value) * energy_per_value);
}

function get_max_expeditions(){
	var max_expeditions = max_expeditions_base;
	max_expeditions = Math.ceil(get_building_bonus('max_expeditions', max_expeditions));
	return max_expeditions;
}

function gain_expeditions(amount){
	var gained_amount = (amount);
	var max_expeditions = get_max_expeditions();
	if(gamedata['expeditions'] == undefined){gamedata['expeditions'] = max_expeditions;}
	gamedata['expeditions'] += gained_amount;
	if(gamedata['expeditions'] > max_expeditions)
	{
		gamedata['expeditions'] = max_expeditions;
	}
	update_expeditions();
}

function update_expeditions(){
	var max_expeditions = get_max_expeditions();
	if(gamedata['expeditions'] == undefined){gamedata['expeditions'] = max_expeditions;}
	class_html('current_expeditions',  Math.floor(gamedata['expeditions']));
	class_html('max_expeditions', Math.floor(max_expeditions));
	var expeditions_percent = (gamedata['expeditions'] / max_expeditions) * 100;
	class_style('expeditions_bar','width',expeditions_percent + '%');
}

function check_expeditions_gain(){
	if(gamedata['last_expeditions_tick'] == undefined){gamedata['last_expeditions_tick'] = nowint();}
	var seconds_passed = Math.floor((nowint() - gamedata['last_expeditions_tick']) / 1000);
	var expeditions_per_tick = get_building_bonus('expeditions_per_tick',expeditions_per_tick_base);
	gain_expeditions(seconds_passed * expeditions_per_tick);
	gamedata['last_expeditions_tick'] += seconds_passed * 1000;
}

function check_passive_storage_gain(){
	if(gamedata['last_passive_storage_tick'] == undefined){gamedata['last_passive_storage_tick'] = nowint();}
	if(gamedata['storage'] == undefined){gamedata['storage'] = {};}
	if(gamedata['passive_storage'] == undefined){gamedata['passive_storage'] = {};}
	var seconds_passed = Math.floor((nowint() - gamedata['last_passive_storage_tick']) / 1000);
	var max_storage = get_max_storage();
	var any_item_gained = false;
	eachoa(all_available_items, function(item_id, item_info){
		if(item_info['type'] == 'resource')
		{
			if(gamedata['passive_storage'][item_id] == undefined){gamedata['passive_storage'][item_id] = 0;}
			var passive_storage_per_tick = get_building_bonus('passive_' + item_id,0) / 60;
			//if(passive_storage_per_tick > 0){console.log(passive_storage_per_tick);}
			gamedata['passive_storage'][item_id] += seconds_passed * passive_storage_per_tick;
			if(gamedata['passive_storage'][item_id] >= 1)
			{
				var gained_storage = Math.floor(gamedata['passive_storage'][item_id]);
				if(gamedata['storage'][item_id] == undefined)
				{
					gamedata['storage'][item_id] = 0;
				}
				any_item_gained = true;
				gamedata['storage'][item_id] += gained_storage;
				if(gamedata['storage'][item_id] > max_storage){gamedata['storage'][item_id] = max_storage;}
				set_html('#storage_container .item_container_' + item_id + ' .owned_amount',nFormatter(gamedata['storage'][item_id], 3));
				gamedata['passive_storage'][item_id] -= gained_storage;
			}
		}
	});
	if(any_item_gained == true && current_content == 'building')
	{
		show_building();
	}
	gamedata['last_passive_storage_tick'] += seconds_passed * 1000;
}

