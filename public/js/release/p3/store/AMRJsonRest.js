define("p3/store/AMRJsonRest", [
	"dojo/_base/declare",
	"./P3JsonRest"
], function(declare,
			Store){
	return declare([Store], {
		dataModel: "genome_amr",
		idProperty: "id",
		facetFields: []
	});
});

