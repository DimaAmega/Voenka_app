function Speedo(options) {
	var elem,
	angle = options.startAngle,
	speed,
	OnRight,
	idRotation;
	this.getElem = function(){
		if(!elem) elem = this.create(options);
		return elem;
	}
	this.create = function(options) {
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
		if(options.parametrsOfMoving) this.setParametrsOfMoving(options.parametrsOfMoving);
		return elem;
	}
	this.setParametrsOfMoving = function(parametrsOfMoving){
		speed = parametrsOfMoving.speed;
		OnRight = parametrsOfMoving.OnRight;
		return this;
	}
	this.startRotation = function(){
		idRotation = setInterval(function(){
                angle += OnRight;
                elem.style.transform = `rotate(${angle}deg)`;
            },1000/speed);
		return this;
	}
	this.endRotation = function(){
		clearInterval(idRotation);
		return this;
	}
}