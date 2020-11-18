sap.ui.define( //module or templates
	["sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
//		"sap/ui/model/json/JSONModel",
//		"logaligroup/Customers/model/models",
//		"sap/ui/model/resource/ResourceModel"

],	function (Controller, MessageToast) {
		"use strict";
		return Controller.extend("logaligroup.Customers2.controller.App",
			//// Public instance
			{
				onInit: function () {
				 },
				 
				 
		onOpenDialog: function(){
			this.getOwnerComponent().openHelloDialog(); // llamda al component				 
				 
		}
			});
	});