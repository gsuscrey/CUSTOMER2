sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	"sap/m/Button"
], function (Control, RatingIndicator, Label, Button) {

	return Control.extend("logaligroup.Customers2.control.CustomerRating", {

		metadata: {
			properties: {
				value: {
					type: "float",
					defaultValue: 0
				}

			},

			aggregations: {
				_rating: {
					type: "sap.m.RatingIndicator",
					multiple: false,
					visibility: "hidden"
				},
				_label: {
					type: "sap.m.Label",
					multiple: false,
					visibility: "hidden"
				},
				_button: {
					type: "sap.m.Button",
					multiple: false,
					visibility: "hidden"
				}
			},

			events: {
				change: {
					parameters: {
						value: {
							type: "int"
						}
					}
				}
			}

		},

		init: function () {

			this.setAggregation("_rating", new RatingIndicator({
				value: this.getValue(),
				iconSize: "2rem",
				visualMode: "Half",
				liveChange: this._onRate.bind(this)
			}));

			this.setAggregation("_label", new Label({
				text: "{i18n>customerRatingLabelInitial}" // i18n value	
			}).addStyleClass("sapUiSmallMargin")); //Styles css class SapUi

			this.setAggregation("_button", new Button({
				text: "{i18n>customerRatingButtom}", //i18n value
				press: this._onSubmit.bind(this)
			}).addStyleClass("sapUiTinyMarginTopBottom"));
		}, 
		 
		reset: function(){
			// indicamos si reinicia otro product puede volver a valorar
			// cada vez que se abre la segunda vista (details)
			this.setValue(0);
			this.getAggregation("_rating").setEnabled(true); 
			this.getAggregation("_button").setEnabled(true); 
			// se coloca los textos iniciales
	    	var oRessourceBundle = this.getModel("i18n").getResourceBundle(); // texto
	    	this.getAggregation("_label").setText(oRessourceBundle.getText("customerRatingLabelInitial"));
	    	this.getAggregation("_label").setDesign("Standard");
			
		},
		setValue:function(fvalue){
			// indicamos el valor cero para reinicializar cuando el usuario, ingrese de nuevo.
			this.setProperty("value",fvalue,true);
			this.getAggregation("_rating").setValue(fvalue);
		}, 
		_onRate: function (oEvent) { // function para el rango de estrella y valor cambiado
			var oRessourceBundle = this.getModel("i18n").getResourceBundle(); // texto
			var fValue = oEvent.getParameter("value"); // del _rating

			this.setProperty("value", fValue, true); //valor obtenido
			//1) ajustamos el segundo aggregation _label		
			this.getAggregation("_label").setText(oRessourceBundle.getText("customerRatingLabelIndicator", [fValue, oEvent.getSource().getMaxValue()]));
			//el rango selecionado por el usuario y si limite (podria ser 5 harcore) pero si cambia la longitud de estrella -> error
			this.getAggregation("_label").setDesign("Bold");
		},
		//2) ajustamos el tercer aggregation _button	
		_onSubmit: function (oEvent) {
			var oResourceBundle = this.getModel("i18n").getResourceBundle(); // instanciamos i18n	

			this.getAggregation("_rating").setEnabled(false); // indicamos que no puede volver a valorar
			this.getAggregation("_label").setText(oResourceBundle.getText("customerRatingLabelFinal")); //agradecimientos
			this.getAggregation("_button").setEnabled(false); //bloquemamos el boton
			this.fireEvent("change", { // usamos el evento Change
				value: this.getValue() // unimos value(propiedad) y value (evento)
			});
		},

		renderer: function (oRm, oControl) { // se ajusta los elementos HTML.
			// como los xml con la etiquetas <content> ajusta espacios
			// oControl trabaja como la instancia general
			oRm.openStart("div", oControl); // etiqueta div
			//2) agregamos estilo
			oRm.class("clientRating"); // como la propiedad xml <content class="">
			oRm.openEnd();
			oRm.renderControl(oControl.getAggregation("_rating"));
			oRm.renderControl(oControl.getAggregation("_label"));
			oRm.renderControl(oControl.getAggregation("_button"));
			oRm.close("div");
		}

	});
});