sap.ui.define([
	"logaligroup/Customers2/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/App"
], function (mockserver) { // use mockserver to test local the actions by user with data demos (Invoice.Json)
	QUnit.module("Navigation");
	opaTest("Should open the Hello Dialog", function (Given, When, Then) { // first three option the user when open dialog
		// initialize mock server	
		mockserver.init(); // data from Invoice or Odata go to ->mockserver.js

		//Arrangements
		Given.iStartMyUIComponent({ // First select to component
			componentConfig: {
				name: "logaligroup.Customers2"
			}
		});
		// Actions
		When.onTheAppPage.iSayHelloDialogButton(); // go to App. Section open app
		//Assertions
		Then.onTheAppPage.iSeeTheHelloDialog();
		//Cleanup instance
		Then.iTeardownMyApp();
	});
});