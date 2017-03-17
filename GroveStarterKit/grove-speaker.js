module.exports = function(RED) {

    var m = require('mraa');
    var upmSpeaker = require('jsupm_grovespeaker');

    function groveSpeaker(n) {
        //init
        RED.nodes.createNode(this,n);

        //properties
        this.name = n.name;
	this.platform = n.platform;
        this.pin = n.pin;
        this.interval = n.interval;
        this.relay = new upmSpeaker.GroveSpeaker(parseInt(this.pin) + parseInt(this.platform));
        this.board = m.getPlatformName();
        this.status({});

        var node = this;

        this.timer = setInterval(function(){
		
	});

	this.on('input', function(msg){
	    if (msg.payload == "1"){
		//upmSpeaker.playAll();
                this.relay.playSound('c', true, "med");
	    }
	});

        //clear interval on exit
        this.on("close", function(){
            clearInterval(this.timer);
            //node.buzzer.off();
        });
    }
    RED.nodes.registerType('UPM-Grove-Speaker', groveSpeaker);
}
