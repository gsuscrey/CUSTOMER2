sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
	], function (Opa5, Press){
		
		var sViewName = "logaligroup.Customers2.view.HelloPanel"; //  url view
		
		Opa5.createPageObjects({
			onTheAppPage:{
				//Actions part1
				actions:{
					iSayHelloDialogButton: function(){
						return this.waitFor({
							id: "helloDialogButton", //id button
							viewName: sViewName,
							actions: new Press(),
							errorMessage: "Did not Find the 'Say Hello Dialog Button' on the HelloPanel view"
						});
					}
				},
				//Assert part2
				assertions: {
					iSeeTheHelloDialog: function (){
						return this.waitFor({
							controlType: "sap.m.Dialog",
							success: function(){
								Opa5.assert.ok(true,"The dialog was opened");
							},
							errorMessage:"Did not find the dialog control"
							});
					}
				}
			}
		});
	});