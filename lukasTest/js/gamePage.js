
var container = $("#clone-container");
var scrollBox = $("#scroll-box");
var dropPanel = $("#drop-panel");
var tiles     = $(".tile");
var threshold = "50%";

//OLD SOUNDS THAT DOESN'T WORK ON IPAD
//var audio = new Audio('1.mp3');
//var audio2 = new Audio('2.mp3');
//var audio3 = new Audio('3.mp3');
//
var audio = new Howl({
  src: ['1.mp3']
});
var audio2 = new Howl({
  src: ['2.mp3']
});
var audio3 = new Howl({
  src: ['3.mp3']
});

tiles.each(function() {

  var element = $(this);
  var wrapper = element.parent();
  var offset  = element.position();

  var scope = {
    clone   : element.clone().addClass("clone").prependTo(container),
    element : element,
    wrapper : wrapper,
    width   : wrapper.outerWidth(),
    dropped : false,
    moved   : false,
    get x() { return getPosition(wrapper, offset).x; },
    get y() { return getPosition(wrapper, offset).y; }
  };

  scope.draggable = createDraggable(scope);

  element.on("mousedown touchstart", scope, startDraggable);
});

// VI STARTER MED AT TRÆKKE:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function startDraggable(event) {

  var tile = event.data;

  TweenLite.set(tile.element, { autoAlpha: 0 });
  TweenLite.set(tile.clone, { x: tile.x, y: tile.y, autoAlpha: 1 });

  tile.draggable.startDrag(event.originalEvent);
}

// VI LAVER BOKSENE SÅ VI KAN TRÆKKE :::::::::::::::::::::::::::::::::::::::::::::::::
function createDraggable(tile) {
	
  var clone   = tile.clone;
  var wrapper = tile.wrapper;

  tile.draggable = new Draggable(clone, {
    onPress   : setActive,
    onDrag    : collapseSpace,
    onRelease : dropTile
  });

  return tile.draggable;
  ///////

  function setActive() {
    TweenLite.to(clone, 0.15, { scale: 1.2, autoAlpha: 0.75 });
	audio.play();
  }

  function collapseSpace() {
    if (!tile.moved) {
      if (!this.hitTest(wrapper)) {
        tile.moved = true;
        TweenLite.to(wrapper, 0.3, { width: 0 });
      }
    }
  }

  function dropTile() {
	  audio2.play();
    var className = undefined;

    if (this.hitTest(dropPanel, threshold) && !tile.dropped) {
      wrapper.remove();
      tile.dropped = true;
      className = "+=dropped";
	  audio3.play();
	  switch (tile.element[0].id) {
		  
		 case "jakke":
			var img = document.getElementById('jakkeIMG');
			img.style.opacity = "1";
			break;
		case "hue":
			var img = document.getElementById('hueIMG');
			img.style.opacity = "1";
			break;
		case "stoevler":
			var img = document.getElementById('bootsIMG');
			img.style.opacity = "1";
			break;
		case "bukser":
			var img = document.getElementById('bukserIMG');
			img.style.opacity = "1";
			break;	
			
		  
	  }
    } 

    moveBack(tile, className);
  }
}

// BEVÆG TILBAGE ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function moveBack(tile, className) {

  var clone   = tile.clone;
  var element = tile.element;
  var wrapper = tile.wrapper;

  TweenLite.to(wrapper, 0.2, { width: tile.width });
  TweenLite.to(clone, 0.3, { scale: 1, autoAlpha: 1, x: tile.x, y: tile.y, onComplete: done });

  if (className) TweenLite.to([element, clone], 0.3, { className: className });

  function done() {
    tile.moved = false;
    TweenLite.set(clone, { autoAlpha: 0 });
    TweenLite.set(element, { autoAlpha: 1 });
  }
}

// FÅ POSITIONEN :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
function getPosition(wrapper, offset) {

  var position1 = wrapper.offset();
  var position2 = container.offset();

  return {
    x: position1.left - position2.left + offset.left,
    y: position1.top  - position2.top  + offset.top
  };
}

var myDiv = $("#scroll-box");
var scrollto = myDiv.offset().left + (myDiv.width() / 2);
myDiv.animate({ scrollLeft:  scrollto});



function barSize() {
	console.log(document.getElementById("scroll-box").offsetWidth);
	document.getElementById("scroll-box").style.width = document.getElementById("baggrund").offsetWidth +"px";
	console.log(document.getElementById("scroll-box").offsetWidth);
	console.log(document.getElementById("baggrund").offsetWidth);
}
document.onresize = function(){barSize();};
barSize()