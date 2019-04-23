;(function(){
	function speedo(options) {
		var elem,
			angle = options.startAngle,
			speed,
			OnRight,
			idRotation,
			endAngle,
			scale = options.scale;
		this.getElem = function () {
			if (!elem) elem = this.create(options);
			return elem;
		};
		this.endRotation = function () {
			elem.style.boxShadow = '0px 0px 0px red, inset -0px -0px 0px red';
			clearInterval(idRotation);
			return this;
		};
		this.setStartAngle = function(alpha){
			elem.style.transform = `rotate(${alpha}deg)`;
			angle = alpha;
		}
		this.create = function (options) {
			elem = document.createElement("img");
			elem.objectName = 'speedo';
			elem.src = options.path;
			elem.number = options.number;
			var geometry = options.geometry.split(",");
			elem.style=`position:absolute;
						z-index = 1;
						transform:rotate(${angle}deg);
						left:${geometry[0]*scale}px;
						top:${geometry[1]*scale}px;
						width:${geometry[2]*scale}px;
						height:${geometry[3]*scale}px;
						border-radius:50%;
						transition: box-shadow 0.5s ease-in-out;
						box-shadow: 0px 0px 0px red, inset -0px -0px 0px red;
			`;
			if (options.parametrsOfMoving) this.setParametrsOfMoving(options.parametrsOfMoving);
			return elem;
		}
		this.setParametrsOfMoving = function (parametrsOfMoving) {
			speed = parametrsOfMoving.speed;
			OnRight = parametrsOfMoving.OnRight;
			endAngle = parametrsOfMoving.endAngle;
			return this;
		}
		this.startRotation = function () {
			var self = this;
			elem.style.boxShadow = '0px 0px 25px red, inset -0px -0px 50px red';
			idRotation = setInterval(function () {
				angle += OnRight;
				elem.style.transform = `rotate(${angle}deg)`;
				if ((angle >= endAngle && OnRight > 0) || (angle <= endAngle && OnRight < 0)) {
					self.endRotation();
					elem.dispatchEvent(new Event('myEvent', { 'bubbles': true, cancelable: false }));
				}
			}, 1000 / speed);
			return this;
		}
	};

	window.Speedo = speedo;
})();