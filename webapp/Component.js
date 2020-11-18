sap.ui.define( //module or templates
	["sap/ui/core/UIComponent",
     "logaligroup/Customers2/model/models",
     "sap/ui/model/resource/ResourceModel",
	"./controller/HelloDialog"     
	], function(UIComponent, models, ResourceModel, HelloDialog){
		return UIComponent.extend("logaligroup.Customers2.Component",{
			//metadata
			metadata:{
			 	manifest: "json"
				// rootView:{
				// // 	"viewName": "logaligroup.Customers.view.App",
				// // 	"type": "XML",
				// // 	"async": "true",
				// // 	"id": "app"
				// // }
			},
			
			
			init: function() {
				  //call the init function of the parent
				    UIComponent.prototype.init.apply(this, arguments);
					this.setModel(models.createRecipient());
					// this.getView().setModel(new JSONModel(oData));
					// read text from i18n / model
					var i18nModel = new ResourceModel({ //instancia
						bundleName: "logaligroup.Customers2.i18n.i18n" // ruta completa de archivo
					});
					this.setModel(i18nModel, "i18n"); // pasamos el recurso y el tipo de dato   	

				
/***************** New atributo for Dialog xml *************************/

			this._helloDialog = new HelloDialog(this.getRootControl()); //llamamos la instancia a objeto 
			
				},

		exit: function(){  //Eliminamos inst cuando no se acaba la llamada al componente
			this._helloDialog.destroy();
			delete this._helloDialog;
		},
		openHelloDialog: function(){
			this._helloDialog.open();
		}				
				
	});
	});