;(function(){
	function speedo(options) {
		var elem,
			angle = options.startAngle,
			speed,
			OnRight,
			idRotation,
			endAngle;
		this.getElem = function () {
			if (!elem) elem = this.create(options);
			return elem;
		}
		this.endRotation = function () {
			elem.style.boxShadow = '0px 0px 0px red, inset -0px -0px 0px red';
			clearInterval(idRotation);
			return this;
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
						left:${geometry[0]}px;
						top:${geometry[1]}px;
						width:${geometry[2]}px;
						height:${geometry[3]}px;
						border-radius:50%;
						box-shadow: 0px 0px 0px red, inset -0px -0px 0px red';
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
			elem.style.boxShadow = '0px 0px 100px red, inset -0px -0px 50px red';
			idRotation = setInterval(function () {
				angle += OnRight;
				elem.style.transform = `rotate(${angle}deg)`;
				if (angle >= endAngle && OnRight > 0 || angle <= endAngle && OnRight < 0) {
					self.endRotation();
					elem.dispatchEvent(new Event('myEvent', { 'bubbles': true, cancelable: false }));
				}
			}, 1000 / speed);
			return this;
		}
	};

	window.Speedo = speedo;
})();