sap.ui.define([
	"logaligroup/Customers2/model/formatter", //call i18n to change status
	"sap/ui/model/resource/ResourceModel"], // recursos de plataforma
	function(formatter,ResourceModel){
		QUnit.module("Formatting Functions", { 
	     beforeEach: function(){ 
	    	this._oResourceModel = new ResourceModel({
	    		bundleUrl: sap.ui.require.toUrl("logaligroup/Customers2") + "/i18n/i18n.properties"	//use controller and model Basic
	    	});	
	     },
	     afterEach: function() {
	     	this._oResourceModel.destroy();
	     }
		});
		QUnit.test("Should return the translated text", function (assert){
		
			var oModel = this.stub(); // with template "https://openui5.hana.ondemand.com/resources/sap/ui/thirdparty/sinon-qunit.js" 
			oModel.withArgs("i18n").returns(this._oResourceModel); //instancia Model 
			
			var oViewStub = { 
				getModel: oModel
			};
			var oControllerStub = {
				getView: this.stub().returns(oViewStub)//instancia Controller 
			
			};
			var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub); //union
			///Assert
			assert.strictEqual(fnIsolatedFormatter("S"),"Sales Representative","Sales Representative S is correct");
			assert.strictEqual(fnIsolatedFormatter("O"),"Owner","Owner O is correct");
			assert.strictEqual(fnIsolatedFormatter("A"),"Order Administrator","A is correct");
		});
	});