define([
	"dojo/_base/declare","dijit/_WidgetBase","dojo/on",
	"dojo/dom-class","./Button","dojo/dom-construct"
], function(
	declare, WidgetBase, on,
	domClass,Button,domConstruct
){
	return declare([WidgetBase], {
		"baseClass": "ActionBar",
		constructor: function(){
			this._actions={}
		},

		_setSelectionAttr: function(sel){
			console.log("setSelection", sel);
			this.selection = sel;
			var valid;
			var selectionTypes = {}
			sel.forEach(function(s){
				selectionTypes[s.type]=true;
			});
	
			if (sel.length>1){
				var multiTypedSelection = (Object.keys(selectionTypes).length>1)?true:false;
				
				valid = Object.keys(this._actions).filter(function(an){
					return this._actions[an] && this._actions[an].options && this._actions[an].options.multiple && (!multiTypedSelection || this._actions[an].options.allowMultiTypes)
				},this);	

			}else if (sel.length==1){
				valid = Object.keys(this._actions)
			}else{
				valid=[];
			}

			console.log("valid: ", valid);
			var types = Object.keys(selectionTypes)
			console.log("types: ", types);

			valid = valid.filter(function(an){
				var act = this._actions[an];
				console.log("Filder Act: ", act);
				var validTypes = act.options.validTypes||[];
				console.log("ValidTypes: ", validTypes);
				return validTypes.some(function(t){
					return ((t=="*") || (types.indexOf(t)>=0));
				});		
			},this);
			console.log("Valid Actions: ", valid);	
			Object.keys(this._actions).forEach(function(an){
				var act = this._actions[an];
				if (valid.indexOf(an)>=0){
					domClass.remove(act.button, "dijitHidden");
				}else{
					domClass.add(act.button,"dijitHidden");
				}
			},this);

		},

		postCreate: function(){
			this.inherited(arguments);
			var _self=this;
			on(this.domNode, "click", function(evt){
				console.log("ActionButton clicked",evt.target.attributes.rel.value, evt.target);
				var rel = evt.target.attributes.rel.value;
				if (_self._actions[rel]) {
					_self._actions[rel].action.apply(_self,[_self.selection]);
				}
			});	
		},

		addAction: function(name,classes,opts,fn,enabled){
			console.log("AddAction", name);
			var b = domConstruct.create("i",{'className':(enabled?"":"dijitHidden ")+"ActionButton " +classes,rel:name});

			domConstruct.place(b,this.domNode,"last");

			this._actions[name]={
				options: opts,
				action: fn,
				button: b
			};
				
		}
		
	});
});