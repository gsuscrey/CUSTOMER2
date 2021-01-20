/* global QUnit */
/* template in qnitTes.qunit.html*/

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function( ) {
	sap.ui.require([
		"logaligroup/Customers2/test/unit/model/formatter"
		],function(){
		 QUnit.start();
		}); 	
});

 