sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/core/UIComponent",
	"sap/m/MessageToast"
], function (Controller,History,UIComponent,MessageToast) {
	"use strict";

	return Controller.extend("logaligroup.Customers2.controller.Detail", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf logaligroup.Customers2.view.Detail
		 */
		onInit: function () {
		     var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		    	oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched,this);
			// creamos funcion para comparar las rutas correctas
		},
	    	_onObjectMatched: function(oEvent){
			//usamos el reset
			this.byId("rating").reset();
			//llamamos a detail	    		
	 		this.getView().bindElement({
			path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").customerPath), //invoicePath definido en el manifest
	    	model: "customerWz"
			});
		},
			onNavBack: function(){
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
				if (sPreviousHash !== undefined){
					window.history.go(-1);
				}else{
					var oRouter = UIComponent.getRouterFor(this); // sap.ui.core.UIComponent = UIComponent definido arriba.
					oRouter.navTo("overview",{},true); //navegar al regreso
				}
		},
		onRatingChange: function(oEvent){
			var fValue = oEvent.getParameter("value");
			var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();//recursos i18n
			MessageToast.show(oResourceBundle.getText("ratingConfirmation",[fValue]));// obtenemos la estrella
			//con un mensaje
		}


		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf logaligroup.Customers2.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf logaligroup.Customers2.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf logaligroup.Customers2.view.Detail
		 */
		//	onExit: function() {
		//
		//	}

	});

});