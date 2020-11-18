sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {

	return ManagedObject.extend("logaligroup.Customer2.HelloDialog", {
		constructor: function (oView) {
			this._oView = oView; // atributo para obtener instancia de la vista
		},
		exit: function () {
			delete this._oView; // atributo para obtener la instancia eliminado	
		},
		open: function () {

			var oView = this._oView; // atributo usado despues del controlador

			if (!oView.byId("helloDialog")) { // condition id if not is using in this momento

				var oFragmentController = { //atributo para cerrar con variable
					onCloseDialog: function () {
						oView.byId("helloDialog").close();
					}
				};
				Fragment.load({ //using function in Fragment; with id fragment and name ubication
					id: oView.getId(),
					name: "logaligroup.Customers2.view.HelloDialog",
					controller: oFragmentController //-- reemplazada por la variable 
				}).then(function (oDialog) { //return oDialog with dependencia solo cuando la vista abra 
					oView.addDependent(oDialog);
					oDialog.open();
				});

			} else {
				oView.byId("helloDialog").open();
			}
		}
	});
});