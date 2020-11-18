sap.ui.define( //module or templates
	["sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"

],	function (Controller, MessageToast, Fragment) {
		"use strict";
		return Controller.extend("logaligroup.Customers2.controller.HelloPanel",
			//// Public instance
			{
				onInit: function () {

				 },

				onShowHello: function () {

					var sHello = this.getView().getModel("i18n").getResourceBundle().getText("sayHello");
					var sName = this.getView().getModel().getProperty("/recipient/name");
					MessageToast.show(sHello.concat(" ").concat(sName));

				},
			onOpenDialog: function () {	
				//**************** Cambiamos al Component.js ***********************************
			this.getOwnerComponent().openHelloDialog(); // llamda al component
			}	
			});
	});