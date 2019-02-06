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
			clearInterval(idRotation);
			return this;
		}
		this.create = function (options) {
			elem = document.createElement("img");
			elem.src = options.path;
			var geometry = options.geometry.split(",");
			elem.style = `	position:absolute;
						z-index = 1;
						transform:rotate(${angle}deg);
						left:${geometry[0]}px;
						top:${geometry[1]}px;
						width:${geometry[2]}px;
						height:${geometry[3]}px`;
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
			idRotation = setInterval(function () {
				console.log(endAngle);
				angle += OnRight;
				elem.style.transform = `rotate(${angle}deg)`;
				if (angle >= endAngle && OnRight > 0 || angle <= endAngle && OnRight < 0) self.endRotation();
				else console.log("not true");
			}, 1000 / speed);
			return this;
		}
	};

	window.Speedo = speedo;
})();