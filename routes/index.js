
/*
 * GET home page.
 */

var http = require('http');
var request = require('request');
var parseString = require('xml2js').parseString;

exports.index = function(req, res) {
	res.send("HELLO SUPERBRIGHT")
}

//WOWZA SYNC

// exports.index = function(req, resx){
// 	var data = "";

// 	var username = 'wowza';
// 	var password = 'i-e11002c1';
// 	var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

// 	var options = {
// 	    host: 'ec2-54-227-184-166.compute-1.amazonaws.com',
// 	    port: 8086,
// 	    path: '/connectioncounts?flat',
// 		auth: 'wowza:i-e11002c1',
// 		method: 'GET',
// 		headers: {
// 		'User-Agent': 'Mozilla'
// 		}
// 	};
	
// 	var output = '';
// 	var jsonResult;

// 	request.get('http://ec2-54-227-184-166.compute-1.amazonaws.com:8086/connectioncounts?flat', {
//   		'auth': {
//   		  'user': 'wowza',
//   		  'pass': 'i-e11002c1',
//   		  'sendImmediately': false
//   		}
// 	},function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Print the google web page.


//     parseString(body, function (err, result) {
//     		console.log("0000000000000000000000")
//     		console.log(err);
//     		console.log("0000000000000000000000")
//     		//console.log(result.WowzaStreamingEngine.Stream[0]);		

//     		var topgun = result.WowzaStreamingEngine.Stream;

//     		 var jsonObj = []; //declare object for view p

//     		 var streamsforsave = storage.getItem('streams');
			
// 			for(var z=0; z < streamsforsave.length; z++) {

// 				if(streamsforsave[z]['type'] == "live") {
// 					streamsforsave.splice(z,1);
// 				}
						
// 			}

// 			if(topgun) {
			
// 				for(var i=0; i < topgun.length; i++) {
				
// 					var exists = false;
// 					for(var z=0; z < streamsforsave.length; z++) {
						
// 						if(topgun[i]['$']['applicationName'] == 'live') {
						
// 							if(streamsforsave[z]['data'] ==  topgun[i]['$']['streamName']) {
// 								exists = true;
// 							}
							
// 						} else 
// 						{
// 							console.log(streamsforsave[z]['data']  + " " + "mp4:"+topgun[i]['$']['streamName']);
// 							if(streamsforsave[z]['data'] ==  "mp4:"+ topgun[i]['$']['streamName']) {
// 									console.log("exists " + streamsforsave[z]['data']);
// 									exists = true;
// 							}
						
// 						}
// 					}
					
// 					if(!exists) {
// 							streamsforsave.push({'name':topgun[i]['$']['streamName'],'data':topgun[i]['$']['streamName'],'type':topgun[i]['$']['applicationName'],'live':topgun[i]['$']['sessionsFlash'],'enabled':true});
// 					}
				
// 					console.info(topgun[i]['$']['streamName']);
				
// 				} //for
// 			}
		
// 			for(var z=0; z < streamsforsave.length; z++) {
				
// 					if(streamsforsave[z]['live'] == 0) {
// 						jsonObj.push({name:streamsforsave[z]['name'], live: "READY",css:"dataelement",t1:"on",t2:"off"});
// 					} else {
// 						jsonObj.push({name:streamsforsave[z]['name'], live: "IN USE",css:"dataelementgreen",t1:"on",t2:"off"});
// 					}
					
// 						if(streamsforsave[z]['enabled'] == true) {
							
// 							jsonObj[z]['t1'] = "on";
// 							jsonObj[z]['t2'] = "off";
// 							jsonObj[z]['second'] = "on";
							
// 						} else {
// 							jsonObj[z]['t1'] = "off";
// 							jsonObj[z]['t2'] = "on";
// 							jsonObj[z]['first'] = "on";
								
// 						}
// 			}
		
// 			storage.setItem('streams',streamsforsave);
// 			//console.info(" new object " +  JSON.stringify(jsonObj));
			
// 			resx.render('index', { title: 'SXSW CMS', streams: jsonObj });

    	
// 	});
//   }
// });

	