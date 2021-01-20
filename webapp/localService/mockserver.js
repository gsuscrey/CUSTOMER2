sap.ui.define(["sap/ui/core/util/MockServer",
			   "sap/base/util/UriParameters"],
			   function(MockServer, UriParameters){
			   	return{
			   		init:function(){
			   			//create
			   			var oMockServer = new MockServer({
			   				/* eslint-disable sap-no-hardcoded-url */
			   				rootUri: "https://services.odata.org/V3/Northwind/Northwind.svc/"
			   			});
			   			
			   			var oUriParameters = UriParameters.fromQuery(window.location.search);
			   			//delay
			   			MockServer.config({
			   			autoRespond: true, //boolean
			   			autoRespondAfter : oUriParameters.get("serverDelay") || 500 //int
			   				
			   			});
			   			
			   			//simulate
			   			var sPath = "../localService/";
			   			oMockServer.simulate(sPath + "/test_metadata.xml", sPath + "/mockdata");
			   			
			   			//START
			   			oMockServer.start();
			   		}
			   			
			   		};
			   	}); 