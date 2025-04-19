function show_locations(){
	var all_parsed_locations = '';
	class_html('locations_container', '');
	if(gamedata['known_locations'] == undefined){gamedata['known_locations'] = {};eachoa(all_available_locations, function(location_id, location_info){check_location_available(location_id);});}
	eachoa(gamedata['known_locations'], function(location_id, location_unlocked){
		if(all_available_locations[location_id] != undefined)
		{
			all_parsed_locations += parse_location_button(location_id);
		}
	});
	all_parsed_locations += '<div class="breaker"></div>';
	if(count_object(gamedata['known_locations']) < count_object(all_available_locations) /*&& gamedata['storage']['map'] != undefined*/)
	{
		all_parsed_locations += parse_explore();
	}
	/*var found_unlockable_building = false;
	eachoa(all_available_locations, function(location_id, location_info){
		if(check_location_available(location_id))
		{
			if(gamedata['known_locations'][location_id] == undefined)
			{
				if(found_unlockable_building == false)
				{
					all_parsed_locations += '<div class="building_effect">';
					all_parsed_locations += '<div class="building_description">Exploration</div>';
				}
				all_parsed_locations += parse_unlock_location(location_id);
				if(found_unlockable_building == false)
				{
					all_parsed_locations += '</div>';
					//found_unlockable_building = true;
				}
			}
		}
	});*/
	class_html('locations_container', all_parsed_locations);
}

function check_location_available(location_id){
	if(gamedata['known_locations'] == undefined){gamedata['known_locations'] = {};}
	if(gamedata['storage'] == undefined){gamedata['storage'] = {};}
	var location_available = true;
	if(gamedata['known_locations'][location_id] == undefined)
	{
		if(all_available_locations[location_id]['cost'] == undefined)
		{
			//gamedata['known_locations'][location_id] = true;
		}
		else
		{
			eachoa(all_available_locations[location_id]['cost'], function(cost_id, cost_amount){
				if(gamedata['storage'][cost_id] == undefined)
				{
					location_available = false;
				}
			});
		}
	}

	return location_available;
}

function parse_location_button(location_id){
	if(gamedata['known_locations'] == undefined){gamedata['known_locations'] = {};}
	var location_info = all_available_locations[location_id];
	var parsed_location_button = '';

	if(gamedata['known_locations'][location_id] != undefined || all_available_locations[location_id]['cost'] == undefined)
	{
		parsed_location_button += '<div class="location_button location_button_' + location_id + '" style="background-image:url(\'images/' + location_info['image'] + '\')" onclick="set_new_location(\'' + location_id + '\');">';
		if(location_info['expeditions_cost'] == undefined){location_info['expeditions_cost'] = 0;}
		if(location_info['expeditions_cost'] > 0)
		{
			parsed_location_button += '<div class="expeditions_cost"><div class="expeditions_cost_icon"></div><span class="expeditions_cost_text">' + location_info['expeditions_cost'] + '</span></div>';
		}
	}
	else
	{
		parsed_location_button += '<div class="location_button location_button_' + location_id + ' not_known" onclick="unlock_location(\'' + location_id + '\');" style="background-image:url(\'images/' + location_info['image'] + '\')">';
		eachoa(all_available_locations[location_id]['cost'], function(cost_id, cost_amount){
			var real_cost = cost_amount;
			if(gamedata['storage'] == undefined){gamedata['storage'] = {};}
			var not_enough = '';
			if(gamedata['storage'][cost_id] == undefined || gamedata['storage'][cost_id] < real_cost)
			{
				not_enough = 'not_enough';
			}
			var owned_amount = 0;
			if(gamedata['storage'][cost_id] != undefined){owned_amount = gamedata['storage'][cost_id];}
			parsed_location_button += '<div class="recipe_cost_bar ' + not_enough + '">';
			parsed_location_button += 	'<div class="cost_item" style="background-image:url(\'images/' + all_available_items[cost_id]['image'] + '\')">';
			parsed_location_button += 	'</div>';
			parsed_location_button += 	'<span>' + owned_amount + ' / ' + real_cost + '</span>';
			parsed_location_button += '</div>';
		});
	}
	parsed_location_button += '</div>';

	return parsed_location_button;
}

function parse_unlock_location(location_id){
	if(gamedata['known_locations'] == undefined){gamedata['known_locations'] = {};}
	var location_info = all_available_locations[location_id];
	var parsed_location_button = '';

	if(gamedata['known_locations'][location_id] != undefined || all_available_locations[location_id]['cost'] == undefined)
	{
		//parsed_location_button += '<div class="location_button location_button_' + location_id + '" style="background-image:url(\'images/' + location_info['image'] + '\')" onclick="set_location(\'' + location_id + '\');show_content(\'current_location\')">';
	}
	else
	{
		var can_unlock = true;
		parsed_location_button += '<div class="recipe_bar">';
		parsed_location_button += '<div class="location_button location_button_' + location_id + '" onclick="unlock_location(\'' + location_id + '\');" style="background-image:url(\'images/' + location_info['image'] + '\')">';
		parsed_location_button += '</div>';
		eachoa(all_available_locations[location_id]['cost'], function(cost_id, cost_amount){
			var real_cost = cost_amount;
			if(gamedata['storage'] == undefined){gamedata['storage'] = {};}
			var not_enough = '';
			if(gamedata['storage'][cost_id] == undefined || gamedata['storage'][cost_id] < real_cost)
			{
				not_enough = 'not_enough';
				can_unlock = false;
			}
			var owned_amount = 0;
			if(gamedata['storage'][cost_id] != undefined){owned_amount = gamedata['storage'][cost_id];}
			parsed_location_button += '<div class="recipe_cost_bar ' + not_enough + '">';
			parsed_location_button += 	'<div class="cost_item" style="background-image:url(\'images/' + all_available_items[cost_id]['image'] + '\')">';
			parsed_location_button += 	'</div>';
			parsed_location_button += 	'<span>' + owned_amount + ' / ' + real_cost + '</span>';
			parsed_location_button += '</div>';
		});
		if(can_unlock == true)
		{
			parsed_location_button += '<div class="button slim build_now_button good" onclick="unlock_location(\'' + location_id + '\')">CRAFT</div>';
		}
		else
		{
			parsed_location_button += '<div class="button slim build_now_button danger">CRAFT</div>';
		}
		parsed_location_button += '<div class="breaker"></div>';
	}
	
	parsed_location_button += '</div>';

	return parsed_location_button;
}

function unlock_location(location_id){
	if(gamedata['known_locations'] == undefined){gamedata['known_locations'] = {};}
	var location_info = all_available_locations[location_id];
	if(gamedata['known_locations'][location_id] == undefined && check_can_unlock_location(location_id) == true)
	{
		eachoa(location_info['cost'], function(cost_id, cost_amount){
			gamedata['storage'][cost_id] -= cost_amount;
		});
		gamedata['known_locations'][location_id] = true;
		saveToLocalStorage();
		show_locations();
	}
}

function check_can_unlock_location(location_id){
	var location_info = all_available_locations[location_id];
	var can_unlock = true;
	var building_level = 0;
	eachoa(location_info['cost'], function(cost_id, cost_amount){
		if(gamedata['storage'] == undefined){gamedata['storage'] = {};}
		if(gamedata['storage'][cost_id] == undefined || gamedata['storage'][cost_id] < cost_amount)
		{
			can_unlock = false;
		}
	});
	return can_unlock;
}

function parse_explore(){
	var parsed_explore = '';

	var explore_cost = to_the_nth(1, count_object(gamedata['known_locations']), 5);
	if(count_object(gamedata['known_locations']) == 0)
	{
		explore_cost = 0;
	}

	parsed_explore += '<div class="building_effect">';
	parsed_explore += '<div class="building_description">Exploration</div>';
	var can_unlock = true;
	var cost_id = 'map';
	var not_enough = '';
	if(explore_cost > 0)
	{
		if(gamedata['storage'][cost_id] == undefined || gamedata['storage'][cost_id] < explore_cost)
		{
			not_enough = 'not_enough';
			can_unlock = false;
		}
		var owned_amount = 0;
		if(gamedata['storage'][cost_id] != undefined){owned_amount = gamedata['storage'][cost_id];}
		parsed_explore += 	'<div class="recipe_cost_bar ' + not_enough + '">';
		parsed_explore += 		'<div class="cost_item" style="background-image:url(\'images/' + all_available_items[cost_id]['image'] + '\')">';
		parsed_explore += 		'</div>';
		parsed_explore += 		'<span>' + owned_amount + ' / ' + explore_cost + '</span>';
		parsed_explore += 	'</div>';
	}
	

	if(can_unlock == true)
	{
		parsed_explore += '<div class="button slim explore_now_button good" onclick="unlock_random_location()">EXPLORE</div>';
	}
	else
	{
		parsed_explore += '<div class="button slim explore_now_button danger">EXPLORE</div>';
	}
	parsed_explore += '</div>';
	return parsed_explore;
}

function unlock_random_location(){
	var explore_cost = to_the_nth(1, count_object(gamedata['known_locations']), 5);
	if(count_object(gamedata['known_locations']) == 0)
	{
		explore_cost = 0;
	}
	var can_unlock = true;
	var cost_id = 'map';
	if(explore_cost > 0)
	{
		if(gamedata['storage'][cost_id] == undefined || gamedata['storage'][cost_id] < explore_cost)
		{
			can_unlock = false;
			console.log('ding');
		}
		var owned_amount = 0;
		if(gamedata['storage'][cost_id] != undefined){owned_amount = gamedata['storage'][cost_id];}
	}
	if(can_unlock == true)
	{
		if(explore_cost > 0)
		{
			gamedata['storage'][cost_id] -= explore_cost;
		}
		var possible_locations = {};
		eachoa(all_available_locations, function(location_id, location_info){
			if(gamedata['known_locations'][location_id] == undefined)
			{
				possible_locations[location_id] = true;
			}
		});
		var chosen_location = get_random_key_from_object(possible_locations);
		gamedata['known_locations'][chosen_location] = true;
		saveToLocalStorage();
		show_locations();
	}
}