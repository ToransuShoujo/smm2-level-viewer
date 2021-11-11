/* eslint-env browser */

const async = require('async');

const Block = require('./objects/terrain/block');
const HardBlock = require('./objects/terrain/hardblock');
const Coin = require('./objects/items/coin');
const SemisolidPlatform = require('./objects/terrain/semisolidplatform');
const Bridge = require('./objects/terrain/bridge');
const Donut = require('./objects/terrain/donut');
const Cloud = require('./objects/terrain/cloud');
const HiddenBlock = require('./objects/terrain/hiddenblock');
const LifeUpShroom = require('./objects/items/lifeupshroom');
const LavaLift = require('./objects/gizmos/lavalift');
const WarpDoor = require('./objects/gizmos/warpdoor');
const TenCoin = require('./objects/items/tencoin');
const GentleSlope = require('./objects/terrain/gentleslope');
const SteepSlope = require('./objects/terrain/steepslope');
const PinkCoin = require('./objects/items/pinkcoin');
const AngrySun = require('./objects/enemies/angrysun');
const Koopa = require('./objects/enemies/koopa');
const Muncher = require('./objects/enemies/muncher');
const Pipe = require('./objects/terrain/pipe');

const Tile = require('./tile');
const Rail = require('./rail');

const TIMES = [
	'day',
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
			object.scene = this;

			switch (object.type) {
				case 1:
					this.objects.push(new Koopa(object));
					break;
				case 4:
					this.objects.push(new Block(object));
					break;
				case 6:
					this.objects.push(new HardBlock(object));
					break;
				case 8:
					this.objects.push(new Coin(object));
					break;
				case 9:
					this.objects.push(new Pipe(object));
					break;
				case 16:
					this.objects.push(new SemisolidPlatform(object));
					break;
				case 17:
					this.objects.push(new Bridge(object));
					break;
				case 21:
					this.objects.push(new Donut(object));
					break;
				case 22:
					this.objects.push(new Cloud(object));
					break;
				case 29:
					this.objects.push(new HiddenBlock(object));
					break;
				case 33:
					this.objects.push(new LifeUpShroom(object));
					break;
				case 36:
					this.objects.push(new LavaLift(object));
					break;
				case 55:
					this.objects.push(new WarpDoor(object));
					break;
				case 57:
					this.objects.push(new Muncher(object));
					break
				case 70:
					this.objects.push(new TenCoin(object));
					break;
				case 87:
					this.objects.push(new GentleSlope(object));
					break;
				case 88:
					this.objects.push(new SteepSlope(object));
					break;
				case 92:
					this.objects.push(new PinkCoin(object));
					break;
				case 104:
					this.objects.push(new AngrySun(object));
					break;
				
			
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