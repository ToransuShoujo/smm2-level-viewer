/* eslint-env browser */

const async = require('async');

const Goomba = require('./objects/enemies/goomba');
const Koopa = require('./objects/enemies/koopa');
const PiranhaPlant = require('./objects/enemies/piranhaplant');
const HammerBro = require('./objects/enemies/hammerbro');
const BrickBlock = require('./objects/terrain/brickblock');
const QuestionBlock = require('./objects/terrain/questionblock');
const HardBlock = require('./objects/terrain/hardblock');
const Coin = require('./objects/items/coin');
const Pipe = require('./objects/terrain/pipe');
const Trampoline = require('./objects/gizmos/trampoline');
const Lift = require('./objects/gizmos/lift');
const Thwomp = require('./objects/enemies/thwomp');
const BillBlaster = require('./objects/gizmos/billblaster');
const MushroomPlatform = require('./objects/terrain/mushroomplatform');
const BobOmb = require('./objects/enemies/bob-omb');
const SemisolidPlatform = require('./objects/terrain/semisolidplatform');
const Bridge = require('./objects/terrain/bridge');
const PSwitch = require('./objects/gizmos/pswitch');
const PowBlock = require('./objects/gizmos/powblock');
const Mushroom = require('./objects/items/mushroom');
const DonutBlock = require('./objects/terrain/donutblock');
const CloudBlock = require('./objects/terrain/cloudblock');
const NoteBlock = require('./objects/terrain/noteblock');
const Firebar = require('./objects/gizmos/firebar');
const Spiny = require('./objects/enemies/spiny');
const GoalGround = require('./objects/other/goalground');
const GoalPole = require('./objects/other/goalpole');
const BuzzyBeetle = require('./objects/enemies/buzzybeetle');
const HiddenBlock = require('./objects/terrain/hiddenblock');
const Lakitu = require('./objects/enemies/lakitu');
const LakitusCloud = require('./objects/enemies/lakituscloud');
const BanzaiBill = require('./objects/gizmos/banzaibill');
const OneUpMushroom = require('./objects/items/one-upmushroom');
const FireFlower = require('./objects/items/fireflower');
const Star = require('./objects/items/star');
const LavaLift = require('./objects/gizmos/lavalift');
const StartSignArrow = require('./objects/other/startsignarrow');
const Magikoopa = require('./objects/enemies/magikoopa');
const Spiketop = require('./objects/enemies/spiketop');
const Boo = require('./objects/enemies/boo');
const KoopaClownCar = require('./objects/enemies/koopaclowncar');
const SpikeTrap = require('./objects/terrain/spiketrap');
const SuperLeaf = require('./objects/items/superleaf');
const Boot = require('./objects/items/boot');
const DryBones = require('./objects/enemies/drybones');
const Cannon = require('./objects/gizmos/cannon');
const Blooper = require('./objects/enemies/blooper');
const CastleBridge = require('./objects/other/castlebridge');
const HopChops = require('./objects/enemies/hop-chops');
const Skipsqueak = require('./objects/enemies/skipsqueak');
const Wiggler = require('./objects/enemies/wiggler');
const ConveyorBelt = require('./objects/gizmos/conveyorbelt');
const Burner = require('./objects/gizmos/burner');
const WarpDoor = require('./objects/gizmos/warpdoor');
const CheepCheep = require('./objects/enemies/cheepcheep');
const Muncher = require('./objects/enemies/muncher');
const RockyWrench = require('./objects/enemies/rockywrench');
const LavaBubble = require('./objects/enemies/lavabubble');
const ChainChomp = require('./objects/enemies/chainchomp');
const Bowser = require('./objects/enemies/bowser');
const IceBlock = require('./objects/terrain/iceblock');
const Vine = require('./objects/gizmos/vine');
const Stingby = require('./objects/enemies/stingby');
const Arrow = require('./objects/gizmos/arrow');
const OneWay = require('./objects/gizmos/oneway');
const Grinder = require('./objects/gizmos/grinder');
const Player = require('./objects/other/player');
const TenCoin = require('./objects/items/tencoin');
const KoopaTroopaCar = require('./objects/enemies/koopatroopacar');
const Toad = require('./objects/other/toad');
const Spike = require('./objects/enemies/spike');
const Stone = require('./objects/other/stone');
const Twister = require('./objects/gizmos/twister');
const BoomBoom = require('./objects/enemies/boomboom');
const Pokey = require('./objects/enemies/pokey');
const PBlock = require('./objects/gizmos/pblock');
const DashBlock = require('./objects/gizmos/dashblock');
const FrogSuit = require('./objects/items/frogsuit');
const Bumper = require('./objects/gizmos/bumper');
const Skewer = require('./objects/gizmos/skewer');
const SnakeBlock = require('./objects/gizmos/snakeblock');
const TrackBlock = require('./objects/gizmos/trackblock');
const Charvaargh = require('./objects/enemies/charvaargh');
const GentleSlope = require('./objects/terrain/gentleslope');
const SteepSlope = require('./objects/terrain/steepslope');
const AutoscrollCamera = require('./objects/other/autoscrollcamera');
const CheckpointFlag = require('./objects/gizmos/checkpointflag');
const Seesaw = require('./objects/gizmos/seesaw');
const PinkCoin = require('./objects/items/pinkcoin');
const ClearPipe = require('./objects/terrain/clearpipe');
const SteepConveyorBelt = require('./objects/gizmos/steepconveyorbelt');
const Key = require('./objects/items/key');
const AntTrooper = require('./objects/enemies/anttrooper');
const WarpBox = require('./objects/gizmos/warpbox');
const BowserJr = require('./objects/enemies/bowserjr');
const OnOffSwitch = require('./objects/gizmos/onoffswitch');
const DottedLineBlock = require('./objects/gizmos/dotted-lineblock');
const LavaEditor = require('./objects/other/lavaeditor');
const MontyMole = require('./objects/enemies/montymole');
const FishBone = require('./objects/enemies/fishbone');
const AngrySun = require('./objects/enemies/angrysun');
const SwingingClaw = require('./objects/gizmos/swingingclaw');
const Tree = require('./objects/gizmos/tree');
const PiranhaCreeper = require('./objects/enemies/piranhacreeper');
const BlinkingBlock = require('./objects/gizmos/blinkingblock');
const SoundEffectIcon = require('./objects/other/soundeffecticon');
const SpikeBlock = require('./objects/gizmos/spikeblock');
const Mechakoopa = require('./objects/enemies/mechakoopa');
const Crate = require('./objects/gizmos/crate');
const MushroomTrampoline = require('./objects/gizmos/mushroomtrampoline');
const Porcupuffer = require('./objects/enemies/porcupuffer');
const GoalToadette = require('./objects/other/goaltoadette');
const SuperHammer = require('./objects/items/superhammer');
const Bully = require('./objects/enemies/bully');
const ExclamationBlock = require('./objects/gizmos/exclamationblock');
const Lemmy = require('./objects/enemies/lemmy');
const Morton = require('./objects/enemies/morton');
const Larry = require('./objects/enemies/larry');
const Wendy = require('./objects/enemies/wendy');
const Iggy = require('./objects/enemies/iggy');
const Roy = require('./objects/enemies/roy');
const Ludwig = require('./objects/enemies/ludwig');
const CannonBox = require('./objects/items/cannonbox');
const PropellerBox = require('./objects/items/propellerbox');
const GoombaMask = require('./objects/items/goombamask');
const BulletBillMask = require('./objects/items/bulletbillmask');
const RedPowBox = require('./objects/items/redpowbox');
const OnOffTrampoline = require('./objects/gizmos/onofftrampoline');

const Tile = require('./tile');
const Rail = require('./rail');

const TIMES = [
	'day',
	'night',
	'night'
];

const THEMES = [
	'ground', 
	'underground', 
	'castle', 
	'airship', 
	'underwater', 
	'ghost House', 
	'snow', 
	'desert', 
	'sky', 
	'forest'
];

class CourseViewer {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext('2d');

		this.ctx.imageSmoothingEnabled = false;

		this.backgroundImage = new Image();

		this.spriteSheet = new Image();
		this.spriteSheetData;

		this._scaleLevel = 1;
		this._minScaleLevel = 1;
		this._maxScaleLevel = 5;
		this._scaleRate = 1.1;
		this._canvasScaleRate = 15;

		this._setupMouseControls();
	
		this._reset();
	}

	// With help from http://phrogz.net/tmp/canvas_zoom_to_cursor.html
	_setupMouseControls() {
		trackTransforms(this.ctx);

		this.canvas.addEventListener('mousedown', event => {
			this._mouseClicked = true;

			this.mouseLastX = event.offsetX || (event.pageX - this.canvas.offsetLeft);
			this.mouseLastY = event.offsetY || (event.pageY - this.canvas.offsetTop);
			this.dragStart = this.ctx.transformedPoint(this.mouseLastX, this.mouseLastY);
		});

		this.canvas.addEventListener('mouseup', () => {
			this._mouseClicked = false;
		});

		this.canvas.addEventListener('mousemove', event => {
			this.mouseLastX = event.offsetX || (event.pageX - this.canvas.offsetLeft);
			this.mouseLastY = event.offsetY || (event.pageY - this.canvas.offsetTop);

			if (!this._mouseClicked) {
				return;
			}

			const point = this.ctx.transformedPoint(this.mouseLastX, this.mouseLastY);
			this.ctx.translate(point.x-this.dragStart.x, point.y-this.dragStart.y);

			// This makes a weird parallax
			//this.boundLastX += (point.x-this.dragStart.x);
			//this.boundLastY += (point.y-this.dragStart.y);

			this.clear();
			this.render();
		});

		this.canvas.addEventListener('mousewheel', event => {
			const delta = event.wheelDelta ? event.wheelDelta / 40 : event.detail ? -event.detail : 0;
			if ((delta < 0 && this._scaleLevel <= this._minScaleLevel) || (delta > 0 && this._scaleLevel >= this._maxScaleLevel)) {
				return;
			}

			this._scaleLevel += (delta < 0 ? -1 : 1);

			const point = this.ctx.transformedPoint(this.mouseLastX, this.mouseLastY);
			const factor = Math.pow(this._scaleRate, delta);

			this.ctx.translate(point.x, point.y);
			this.ctx.scale(factor, factor);
			this.ctx.translate(-point.x, -point.y);
		
			this.clear();
			this.render();
		});
	}

	_reset() {
		this._mouseClicked = false;
		this.mouseLastX = this.canvas.width / 2;
		this.mouseLastY = this.canvas.height / 2;
		this.dragStart = null;

		this.courseData = null;

		this.objects = [];
		this.tiles = [];
		this.rails = [];

		this.clear();
	}

	_loadObjects(callback) {
		for (const object of this.courseData.objects) {
			console.log(
				object.child_flags+','+
				object.child_type+','+
				object.dimensions.width+','+
				object.dimensions.height+','+
				object.extended_data+','+
				object.flags+','+
				object.link_id+','+
				object.position.x+','+
				object.position.y+','+
				object.sound_effect_id+','+
				object.style+','+
				object.theme+','+
				object.type
			);
			
			object.scene = this;

			switch (object.type) {
				case 0: this.objects.push(new Goomba(object)); break; 
				case 1: this.objects.push(new Koopa(object)); break; 
				case 2: this.objects.push(new PiranhaPlant(object)); break; 
				case 3: this.objects.push(new HammerBro(object)); break; 
				case 4: this.objects.push(new BrickBlock(object)); break; 
				case 5: this.objects.push(new QuestionBlock(object)); break; 
				case 6: this.objects.push(new HardBlock(object)); break; 
				case 8: this.objects.push(new Coin(object)); break; 
				case 9: this.objects.push(new Pipe(object)); break; 
				case 10: this.objects.push(new Trampoline(object)); break; 
				case 11: this.objects.push(new Lift(object)); break; 
				case 12: this.objects.push(new Thwomp(object)); break; 
				case 13: this.objects.push(new BillBlaster(object)); break; 
				case 14: this.objects.push(new MushroomPlatform(object)); break; 
				case 15: this.objects.push(new BobOmb(object)); break; 
				case 16: this.objects.push(new SemisolidPlatform(object)); break; 
				case 17: this.objects.push(new Bridge(object)); break; 
				case 18: this.objects.push(new PSwitch(object)); break; 
				case 19: this.objects.push(new PowBlock(object)); break; 
				case 20: this.objects.push(new Mushroom(object)); break; 
				case 21: this.objects.push(new DonutBlock(object)); break; 
				case 22: this.objects.push(new CloudBlock(object)); break; 
				case 23: this.objects.push(new NoteBlock(object)); break; 
				case 24: this.objects.push(new Firebar(object)); break; 
				case 25: this.objects.push(new Spiny(object)); break; 
				case 26: this.objects.push(new GoalGround(object)); break; 
				case 27: this.objects.push(new GoalPole(object)); break; 
				case 28: this.objects.push(new BuzzyBeetle(object)); break; 
				case 29: this.objects.push(new HiddenBlock(object)); break; 
				case 30: this.objects.push(new Lakitu(object)); break; 
				case 31: this.objects.push(new LakitusCloud(object)); break; 
				case 32: this.objects.push(new BanzaiBill(object)); break; 
				case 33: this.objects.push(new OneUpMushroom(object)); break; 
				case 34: this.objects.push(new FireFlower(object)); break; 
				case 35: this.objects.push(new Star(object)); break; 
				case 36: this.objects.push(new LavaLift(object)); break; 
				case 38: this.objects.push(new StartSignArrow(object)); break; 
				case 39: this.objects.push(new Magikoopa(object)); break; 
				case 40: this.objects.push(new Spiketop(object)); break; 
				case 41: this.objects.push(new Boo(object)); break; 
				case 42: this.objects.push(new KoopaClownCar(object)); break; 
				case 43: this.objects.push(new SpikeTrap(object)); break; 
				case 44: this.objects.push(new SuperLeaf(object)); break; 
				case 45: this.objects.push(new Boot(object)); break; 
				case 46: this.objects.push(new DryBones(object)); break; 
				case 47: this.objects.push(new Cannon(object)); break; 
				case 48: this.objects.push(new Blooper(object)); break; 
				case 49: this.objects.push(new CastleBridge(object)); break; 
				case 50: this.objects.push(new HopChops(object)); break; 
				case 51: this.objects.push(new Skipsqueak(object)); break; 
				case 52: this.objects.push(new Wiggler(object)); break; 
				case 53: this.objects.push(new ConveyorBelt(object)); break; 
				case 54: this.objects.push(new Burner(object)); break; 
				case 55: this.objects.push(new Door(object)); break; 
				case 56: this.objects.push(new CheepCheep(object)); break; 
				case 57: this.objects.push(new Muncher(object)); break; 
				case 58: this.objects.push(new RockyWrench(object)); break; 
				case 60: this.objects.push(new LavaBubble(object)); break; 
				case 61: this.objects.push(new ChainChomp(object)); break; 
				case 62: this.objects.push(new Bowser(object)); break; 
				case 63: this.objects.push(new IceBlock(object)); break; 
				case 64: this.objects.push(new Vine(object)); break; 
				case 65: this.objects.push(new Stingby(object)); break; 
				case 66: this.objects.push(new Arrow(object)); break; 
				case 67: this.objects.push(new OneWay(object)); break; 
				case 68: this.objects.push(new Grinder(object)); break; 
				case 69: this.objects.push(new Player(object)); break; 
				case 70: this.objects.push(new TenCoin(object)); break; 
				case 71: this.objects.push(new SemisolidPlatform(object)); break; 
				case 72: this.objects.push(new KoopaTroopaCar(object)); break; 
				case 73: this.objects.push(new Toad(object)); break; 
				case 74: this.objects.push(new Spike(object)); break; 
				case 75: this.objects.push(new Stone(object)); break; 
				case 76: this.objects.push(new Twister(object)); break; 
				case 77: this.objects.push(new BoomBoom(object)); break; 
				case 78: this.objects.push(new Pokey(object)); break; 
				case 79: this.objects.push(new PBlock(object)); break; 
				case 80: this.objects.push(new DashBlock(object)); break; 
				case 81: this.objects.push(new FrogSuit(object)); break; 
				case 82: this.objects.push(new Bumper(object)); break; 
				case 83: this.objects.push(new Skewer(object)); break; 
				case 84: this.objects.push(new SnakeBlock(object)); break; 
				case 85: this.objects.push(new TrackBlock(object)); break; 
				case 86: this.objects.push(new Charvaargh(object)); break; 
				case 87: this.objects.push(new GentleSlope(object)); break; 
				case 88: this.objects.push(new SteepSlope(object)); break; 
				case 89: this.objects.push(new AutoscrollCamera(object)); break; 
				case 90: this.objects.push(new CheckpointFlag(object)); break; 
				case 91: this.objects.push(new Seesaw(object)); break; 
				case 92: this.objects.push(new PinkCoin(object)); break; 
				case 93: this.objects.push(new ClearPipe(object)); break; 
				case 94: this.objects.push(new SteepConveyorBelt(object)); break; 
				case 95: this.objects.push(new Key(object)); break; 
				case 96: this.objects.push(new AntTrooper(object)); break; 
				case 97: this.objects.push(new WarpBox(object)); break; 
				case 98: this.objects.push(new BowserJr(object)); break; 
				case 99: this.objects.push(new OnOffSwitch(object)); break; 
				case 100: this.objects.push(new DottedLineBlock(object)); break; 
				case 101: this.objects.push(new LavaEditor(object)); break; 
				case 102: this.objects.push(new MontyMole(object)); break; 
				case 103: this.objects.push(new FishBone(object)); break; 
				case 104: this.objects.push(new AngrySun(object)); break; 
				case 105: this.objects.push(new SwingingClaw(object)); break; 
				case 106: this.objects.push(new Tree(object)); break; 
				case 107: this.objects.push(new PiranhaCreeper(object)); break; 
				case 108: this.objects.push(new BlinkingBlock(object)); break; 
				case 109: this.objects.push(new SoundEffectIcon(object)); break; 
				case 110: this.objects.push(new SpikeBlock(object)); break; 
				case 111: this.objects.push(new Mechakoopa(object)); break; 
				case 112: this.objects.push(new Crate(object)); break; 
				case 113: this.objects.push(new MushroomTrampoline(object)); break; 
				case 114: this.objects.push(new Porcupuffer(object)); break; 
				case 115: this.objects.push(new GoalToadette(object)); break; 
				case 116: this.objects.push(new SuperHammer(object)); break; 
				case 117: this.objects.push(new Bully(object)); break; 
				case 119: this.objects.push(new ExclamationBlock(object)); break; 
				case 120: this.objects.push(new Lemmy(object)); break; 
				case 121: this.objects.push(new Morton(object)); break; 
				case 122: this.objects.push(new Larry(object)); break; 
				case 123: this.objects.push(new Wendy(object)); break; 
				case 124: this.objects.push(new Iggy(object)); break; 
				case 125: this.objects.push(new Roy(object)); break; 
				case 126: this.objects.push(new Ludwig(object)); break; 
				case 127: this.objects.push(new CannonBox(object)); break; 
				case 128: this.objects.push(new PropellerBox(object)); break; 
				case 129: this.objects.push(new GoombaMask(object)); break; 
				case 130: this.objects.push(new BulletBillMask(object)); break; 
				case 131: this.objects.push(new RedPowBox(object)); break; 
				case 132: this.objects.push(new OnOffTrampoline(object)); break; 
				
			
				default:
					console.log(`Unhandled object ID: ${object.type}`);
					break;
			}
		}

		this.objects = this.objects.sort((a, b) => {
			if (a.data.position.y <= b.data.position.y) {
				return a.drawPriority - b.drawPriority;
				
			}

			return b.data.position.y-a.data.position.y;
			
		});

		callback();
	}

	_loadSoundEffects(callback) { callback(); }
	_loadSnakeBlocks(callback) { callback(); }
	_loadClearPipes(callback) { callback(); }
	_loadPiranhaCreepers(callback) { callback(); }
	_loadExpandingBlocks(callback) { callback(); }
	_loadTrackBlocks(callback) { callback(); }

	_loadTiles(callback) {
		for (const tile of this.courseData.tiles) {
			tile.scene = this;
			this.tiles.push(new Tile(tile));
		}

		callback();
	}

	_loadRails(callback) {
		for (const rail of this.courseData.rails) {
			rail.scene = this;
			this.rails.push(new Rail(rail));
		}

		callback();
	}

	_loadIcicles(callback) { callback(); }

	async loadCourse(data) {
		this._reset();

		this.courseData = data;
		//this.canvas.height = (27) * this._canvasScaleRate;
		this.canvas.height = window.innerHeight;
		this.canvas.width = ((this.courseData.goal_x + 95) / 10) * this._canvasScaleRate;

		this.boundLastY = this.canvas.height - 27; // Top bounding box of the course
		this.boundLastX = 0; // Left bounding box of the course

		await new Promise(resolve => {
			this.backgroundImage.src = `./assets/sprites/${this.courseData.style}/background.png`;
			this.backgroundImage.addEventListener('load', resolve);
		});

		this.spriteSheetData = require(`../sprites/${this.courseData.style}/sprite_offsets.json`);
		console.log(this.courseData.style);
		console.log(this.spriteSheetData.theme_chunk_offsets);
		console.log(this.courseData.theme);
		console.log(THEMES[this.courseData.theme]);
		console.log(this.courseData.time_of_day);
		console.log(TIMES[this.courseData.time_of_day]);
		this.spriteSheetThemeOffset = this.spriteSheetData.theme_chunk_offsets[TIMES[this.courseData.time_of_day]][THEMES[this.courseData.theme]];

		await new Promise(resolve => {
			this.spriteSheet.src = `./assets/sprites/${this.courseData.style}/spritesheet.png`;
			this.spriteSheet.addEventListener('load', resolve);
		});
		
		const point = this.ctx.transformedPoint(0, this.canvas.height);
		const factor = Math.pow(this._scaleRate, (3.75 * 10));

		this.ctx.translate(point.x, point.y);
		this.ctx.scale(factor, factor);
		this.ctx.translate(-point.x, -point.y);

		await new Promise(resolve => {
			// allows us to keep `this` reference
			async.parallel([
				callback => this._loadObjects(callback),
				callback => this._loadSoundEffects(callback),
				callback => this._loadSnakeBlocks(callback),
				callback => this._loadClearPipes(callback),
				callback => this._loadPiranhaCreepers(callback),
				callback => this._loadExpandingBlocks(callback),
				callback => this._loadTrackBlocks(callback),
				callback => this._loadTiles(callback),
				callback => this._loadRails(callback),
				callback => this._loadIcicles(callback)
			], () => {
				console.log('Loaded all course parts');
				resolve();
			});
		});
	}

	clear() {
		this.ctx.save();
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.restore();
	}

	async render() {
		this.clear();

		this.ctx.imageSmoothingEnabled = false;

		const numImages = Math.ceil(((this.courseData.goal_x + 95) / 10) / 27);
		for (let i = 0; i < numImages; i++) {
			this.ctx.drawImage(this.backgroundImage, i * 27, (this.canvas.height - 26), 27, 27);
		}

		for (const rail of this.rails) {
			rail.draw();
		}

		for (const object of this.objects) {
			object.draw();
		}

		for (const tile of this.tiles) {
			tile.draw();
		}

		// Add rest of render parts


		// Needs to be changed
		this.ctx.fillStyle = 'cyan';
		this.ctx.fillRect(
			5,
			(this.canvas.height - this.courseData.start_y),
			1, 1
		);

		this.ctx.fillStyle = 'blue';
		this.ctx.fillRect(
			this.courseData.goal_x / 10,
			(this.canvas.height - this.courseData.goal_y),
			1, 1
		);
	}
}

module.exports = CourseViewer;

function trackTransforms(ctx){
	const svg = document.createElementNS('http://www.w3.org/2000/svg','svg');
	let svgMatrix = svg.createSVGMatrix();
	const savedTransforms = [];

	ctx.getTransform = () => svgMatrix;

	const save = ctx.save;
	ctx.save = () => {
		savedTransforms.push(svgMatrix.translate(0, 0));

		return save.call(ctx);
	};

	const restore = ctx.restore;
	ctx.restore = () => {
		svgMatrix = savedTransforms.pop();

		return restore.call(ctx);
	};

	const scale = ctx.scale;
	ctx.scale = (sx, sy) => {
		svgMatrix = svgMatrix.scaleNonUniform(sx, sy);

		return scale.call(ctx, sx, sy);
	};

	const rotate = ctx.rotate;
	ctx.rotate = radians => {
		svgMatrix = svgMatrix.rotate(radians*180/Math.PI);

		return rotate.call(ctx, radians);
	};

	const translate = ctx.translate;
	ctx.translate = (dx, dy) => {
		svgMatrix = svgMatrix.translate(dx, dy);

		return translate.call(ctx, dx, dy);
	};

	const transform = ctx.transform;
	ctx.transform = (a, b, c, d, e, f) => {
		const svgMatrix2 = svg.createSVGMatrix();

		svgMatrix2.a = a;
		svgMatrix2.b = b;
		svgMatrix2.c = c;
		svgMatrix2.d = d;
		svgMatrix2.e = e;
		svgMatrix2.f = f;

		svgMatrix = svgMatrix.multiply(svgMatrix2);

		return transform.call(ctx,a,b,c,d,e,f);
	};

	const setTransform = ctx.setTransform;
	ctx.setTransform = (a, b, c, d, e, f) => {
		svgMatrix.a = a;
		svgMatrix.b = b;
		svgMatrix.c = c;
		svgMatrix.d = d;
		svgMatrix.e = e;
		svgMatrix.f = f;

		return setTransform.call(ctx, a, b, c, d, e, f);
	};

	const svgPoint  = svg.createSVGPoint();
	ctx.transformedPoint = (x, y) => {
		svgPoint.x = x;
		svgPoint.y = y;

		return svgPoint.matrixTransform(svgMatrix.inverse());
	};
}