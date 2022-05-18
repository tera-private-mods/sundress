module.exports = function dressup(d) {
	let enabled = false;
	let debug = false;
	let tikat_id;
	let pick = {
		"head": false,
		"face": false,
		"back": false,
		"weapon": false,
		"body": false,
		"all": false
	};
	let makeover = {
		"head": false,
		"face": false,
		"back": false,
		"weapon": false,
		"body": false,
	};

	let repeat = {
		"head": false,
		"face": false,
		"back": false,
		"weapon": false,
		"body": false
	}


	let my = d.game.me;
	let normal = {
		"weapon": 0,
		"face": 0,
		"body": 0,
		"hand": 0,
		"feet": 0,
		"head": 0,
		"appearance": [],
		"details": [],
		"shape": [],
		"styleHead": 0,
		"styleFace": 0,
		"styleBack": 0,
		"styleWeapon": 0,
		"styleBody": 0,
		"styleBodyDye": 0
	}
	let temp = {
		"styleHead": 0,
		"styleFace": 0,
		"styleBack": 0,
		"styleWeapon": 0,
		"styleBody": 0,
		"styleBodyDye": 0
	}
	d.command.add(['c', 'dressup', 'costumes', 'sundress'], {
		$none() {
			enabled = !enabled;
			d.command.message(`${enabled ? 'All' : 'Disall'}owing costume changes.`);
		},
		$default() {
			d.command.message(`Invalid command. Type c commands for a list of available commands.`);
		},
		r() {
			d.command.exec('toolbox reload sundress');
		},
		pick(arg) {
			if (!enabled) { d.command.message(`Currently not allowing costume changes. type 'c' to allow apply costumes.`); }
			if (enabled) {
				switch (arg) {
					case 'head':
						pick.head = true;
						pick.face = pick.back = pick.weapon = pick.body = false;
						d.command.message(`Please select a head accessory!`);
						break;
					case 'face':
						pick.face = true;
						pick.head = pick.back = pick.weapon = pick.body = false;
						d.command.message(`Please select a face accessory!`);
						break;
					case 'back':
						pick.back = true;
						pick.head = pick.face = pick.weapon = pick.body = false;
						d.command.message(`Please select a back accessory!`);
						break;
					case 'weapon':
						pick.weapon = true;
						pick.head = pick.face = pick.back = pick.body = false;
						d.command.message(`Please select a weapon skin!`);
						break;
					case 'body':
						pick.body = true;
						pick.head = pick.face = pick.back = pick.weapon = false;
						d.command.message(`Please select a costume!`);
						break;
					case 'all':
						pick.all = !pick.all;
						makeover.weapon = true;
						d.command.message(`Complete makeover mode ${pick.all ? 'en' : 'dis'}abled${pick.all ? '. Start by selecting a weapon skin!\n Close the Tikat shop at any time to cancel makeover mode.' : '.'}`);
				}
			}
		},
		repeat(arg) {
			if (!enabled) { d.command.message(`Currently not allowing costume changes. type ['c', 'costumes', 'dressup', 'sundress] to allow apply costumes.`); }
			switch (arg) {
				case 'head':
					repeat.head = !repeat.head;
					pick.face = pick.back = pick.weapon = pick.body = pick.all = repeat.face = repeat.back = repeat.weapon = repeat.body = false;
					d.command.message(`Head accessory costume repeating ${repeat.head ? 'enabled. Type "c repeat head" again to disable repeated selections.' : 'disabled.'}`);
					break;
				case 'face':
					repeat.face = !repeat.face;
					pick.face = pick.back = pick.weapon = pick.body = pick.all = repeat.head = repeat.back = repeat.weapon = repeat.body = false;
					d.command.message(`Face accessory costume repeating ${repeat.face ? 'enabled. Type "c repeat face" again to disable repeated selections.' : 'disabled.'}`);
					break;
				case 'back':
					repeat.back = !repeat.back;
					pick.face = pick.back = pick.weapon = pick.body = pick.all = repeat.head = repeat.face = repeat.weapon = repeat.body = false;
					d.command.message(`Back accessory costume repeating ${repeat.back ? 'enabled. Type "c repeat back" again to disable repeated selections.' : 'disabled.'}`);
					break;
				case 'weapon':
					repeat.weapon = !repeat.weapon;
					pick.face = pick.back = pick.weapon = pick.body = pick.all = repeat.head = repeat.face = repeat.back = repeat.body = false;
					d.command.message(`Weapon skin costume repeating ${repeat.weapon ? 'enabled. Type "c repeat weapon" again to disable repeated selections.' : 'disabled.'}`);
					break;
				case 'body':
					repeat.body = !repeat.weapon;
					pick.face = pick.back = pick.weapon = pick.body = pick.all = repeat.head = repeat.face = repeat.back = repeat.weapon = false;
					d.command.message(`Body costume repeating ${repeat.body ? 'enabled. Type "c repeat body" again to disable repeated selections.' : 'disabled.'}`);
					break;
			}
		},
		debug() {
			debug = !debug
			d.command.message(`Debug mode ${debug ? 'en' : 'dis'}abled. Item IDs will ${debug ? 'now' : 'no longer'} be displayed on mouse-over.`);
		},
		commands() {
			d.command.message(`<font color="#e8dd13">Commands: (Prefix with ['c', 'costumes', 'dressup', or 'sundress']</font>`);
			d.command.message(`<font color="#26adf0">['c', 'costumes', 'dressup', 'sundress']</font> :\n Toggles enabling costume changes. Current status: ${enabled ? 'en' : 'dis'}abled.`);
			d.command.message(`<font color="#26adf0">pick [slot/all]</font> :\n Allows you to pick a costume for the specified slot. Valid slots: 'head', 'face', 'back', 'weapon', 'body'.`);
			d.command.message(`<font color="#26adf0">pick all</font> :\n Enables makeover mode to let you choose all costume slots at once.`);
			d.command.message(`<font color="#26adf0">repeat [slot]</font> :\n Allows you to make repeated costume selections for the specified slot.`)
			d.command.message(`<font color="#26adf0">stop</font> :\n Manually stops current makeover.`)
			d.command.message(`<font color="#26adf0">debug</font> :\n Used for debugging. Currently just displays costume item ids on mouse-over.`);
			d.command.message(`<font color="#26adf0">r</font> :\n Reloads the module (You shouldn't need to do this).`);
		},
		$default() {
			d.command.message(`Invalid command. Type c commands for a list of valid commands.`);
		},
		stop() {
			pick.all = makeover.head = makeover.face = makeover.back = makeover.weapon = makeover.body = false;
			d.command.message(`Stopping complete makeover mode. Enjoy your costumes!`);
		}
	});
	function temp_change_costume() {
		if (Object.keys(temp).length == 0) return;
		d.send('S_UNICAST_TRANSFORM_DATA', 6, {
			serverId: my.serverId,
			playerId: my.playerId,
			gameId: my.gameId,
			templateId: my.templateId,
			huntingZoneId: my.huntingZoneId,
			appearance: normal.appearance,
			type: 0,
			weapon: normal.weapon,
			body: normal.body,
			hand: normal.hand,
			feet: normal.feet,
			face: normal.face,
			styleHead: temp.styleHead,
			styleFace: temp.styleFace,
			styleBack: temp.styleBack,
			styleWeapon: temp.styleWeapon,
			styleBody: temp.styleBody,
			styleBodyDye: temp.styleBodyDye,
			details: normal.details,
			shape: normal.shape,
			styleHeadScale: 1,
			styleHeadRotation: { x: 0, y: 0, z: 0 },
			styleFaceScale: 1,
			styleFaceRotation: { x: 0, y: 0, z: 0 },
			styleBackScale: 1,
			styleBackRotation: { x: 0, y: 0, z: 0 }
		});
	}
	function apply_data(base, replacer) {
		Object.keys(replacer).forEach(key => {
			if (base.hasOwnProperty(key)) { base[key] = replacer[key] }
		});
	}
	d.hook('S_LOGIN', '*', (e) => {
		normal.shape = e.shape;
		normal.details = e.details;
		normal.appearance = e.appearance;
		normal.weapon = e.weapon;
		normal.face = e.face;
		normal.body = e.body;
		normal.head = e.head;
		normal.hand = e.hand;
		normal.feet = e.feet;
		normal.styleBody = temp.styleBody = e.styleBody;
		normal.styleFace = temp.styleFace = e.styleFace;
		normal.styleHead = temp.styleHead = e.styleHead;
		normal.styleBack = temp.styleBack = e.styleBack;
		normal.styleWeapon = temp.styleWeapon = e.styleWeapon;
		normal.styleBodyDye = temp.styleBodyDye = e.styleBodyDye;
		return true;
	});
	d.hook('S_GET_USER_LIST', '*', (e) => {
		temp = {};
	});
	d.hook('S_UNICAST_TRANSFORM_DATA', '*', (e) => {
		if (!d.game.me.is(e.gameId) || !enabled) return;
		apply_data(temp, e);
		d.setTimeout(() => { temp_change_costume(); }, 250);
	});
	d.hook('S_USER_EXTERNAL_CHANGE', '*', (e) => {
		if (!d.game.me.is(e.gameId || !enabled)) return;
		d.setTimeout(() => { temp_change_costume(); }, 50);
	});
	d.hook('S_REQUEST_CONTRACT', '*', (e) => {
		if (e.type == 63) { tikat_id = e.id; }
	});

	d.hook('S_CANCEL_CONTRACT', '*', (e) => {
		if (e.type == 63 && e.id == tikat_id) {
			pick.all = makeover.head = makeover.face = makeover.back = makeover.weapon = makeover.body = false;
			d.command.message(`Tikat shop closed! Restoring costumes back to default.`);
			apply_data(temp, normal);
			d.setTimeout(() => { temp_change_costume(); }, 250);
		}
	});
	d.hook('S_REPLY_NONDB_ITEM_INFO', '*', (e) => {
		if (!enabled) return;
		switch (true) {
			case pick.head:
				temp.styleHead = e.item;
				temp_change_costume();
				pick.head = false;
				d.command.message(`New head accessory applied! Item ID: ${e.item}.`);
				break;
			case pick.face:
				temp.styleFace = e.item;
				temp_change_costume();
				pick.face = false;
				d.command.message(`New face accessory applied! Item ID: ${e.item}.`);
				break;
			case pick.back:
				temp.styleBack = e.item;
				temp_change_costume();
				pick.back = false;
				d.command.message(`New back accessory applied! Item ID: ${e.item}.`);
				break;
			case pick.weapon:
				temp.styleWeapon = e.item;
				temp_change_costume();
				pick.weapon = false;
				d.command.message(`New weapon skin applied! Item ID: ${e.item}.`);
				break;
			case pick.body:
				temp.styleBody = e.item;
				temp_change_costume();
				pick.body = false;
				d.command.message(`New costume applied! Item ID: ${e.item}.`);
				break;
			case makeover.weapon:
				temp.styleWeapon = e.item;
				temp_change_costume();
				makeover.weapon = false;
				d.command.message(`New weapon skin applied! Please select a body costume next.`);
				d.setTimeout(() => { makeover.body = true; }, 100);
				break;
			case makeover.body:
				temp.styleBody = e.item;
				temp_change_costume();
				makeover.body = false;
				d.command.message(`New body costume applied! Please select a face accessory next.`);
				d.setTimeout(() => { makeover.face = true; }, 100);
				break;
			case makeover.face:
				temp.styleFace = e.item;
				temp_change_costume();
				makeover.face = false;
				d.command.message(`New face accessory applied! Please select a head accessory next.`);
				d.setTimeout(() => { makeover.head = true; }, 100);
				break;
			case makeover.head:
				temp.styleHead = e.item;
				temp_change_costume();
				makeover.head = false;
				d.command.message(`New head accessory applied! Please select a back accessory next.`);
				d.setTimeout(() => { makeover.back = true; }, 100);
				break;
			case makeover.back:
				temp.styleBack = e.item;
				temp_change_costume();
				makeover.back = false;
				d.command.message(`New back accessory applied! Disabling makeover mode.`)
				pick.all = false;
				break;
			case repeat.head:
				temp.styleHead = e.item;
				temp_change_costume();
				d.command.message(`New head accessory applied! Item ID: ${e.item}.`);
				break;
			case repeat.face:
				temp.styleFace = e.item;
				temp_change_costume();
				d.command.message(`New face accessory applied! Item ID: ${e.item}.`);
				break;
			case repeat.back:
				temp.styleBack = e.item;
				temp_change_costume();
				d.command.message(`New back accessory applied! Item ID: ${e.item}.`);
				break;
			case repeat.weapon:
				temp.styleWeapon = e.item;
				temp_change_costume();
				d.command.message(`New weapon skin applied! Item ID: ${e.item}.`);
				break;
			case repeat.body:
				temp.styleBody = e.item;
				temp_change_costume();
				d.command.message(`New body costume applied! Item ID: ${e.item}.`);
				break;
			case debug:
				d.log(`Item ID: ${e.item}`);
				d.command.message(`Item ID: ${e.item}`);
		}
	});
}
