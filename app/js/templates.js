angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/app.tpl.html","<nav-global\n	id=\"nav-global\"\n	class=\"dashboard-column \n			   col-xs-1 \n			   col-sm-1 \n			   col-lg-1\"\n>\n</nav-global>\n\n<ui-view></ui-view>\n\n\n\n\n\n\n");
$templateCache.put("diseaseCard/diseaseCard.tpl.html","<div class=\"row disease-card\">\n  <div class=\"col-xs-12\">\n    <div class=\"panel panel-default\"style=\"color: black\">\n      <div class=\"panel-body disease-card-body\">\n      <div class=\"row\">\n        <h5 class=\"col-xs-10\">{{$ctrl.id}}</h5>\n        <span class=\"glyphicon glyphicon-info-sign col-xs-2\"></span>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-3 samples\">\n          <h6>SAMPLES</h6>\n          <p class=\"sample-number\">{{$ctrl.add($ctrl.positives, $ctrl.negatives)}}</p>\n        </div>\n        <div class=\"col-xs-3 samples positives\">\n          <h6>POSITIVES</h6>\n          <p class=\"sample-number\">{{$ctrl.positives}}</p>\n        </div>\n        <div class=\"col-xs-3 samples negatives\">\n          <h6>NEGATIVES</h6>\n          <p class=\"sample-number\">{{$ctrl.negatives}}</p>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("geneCard/geneCard.tpl.html","<div class=\"panel panel-default gene-card\">\n  <div class=\"panel-heading gene-card-heading\">\n    <h4>{{$ctrl.id}}</h4>\n  </div>\n  <div class=\"panel-body\" style=\"color: black\">\n    <h3>{{$ctrl.name}}</h4>\n    <p>{{$ctrl.desc}}</p>\n    <a href=\"#\" class=\"card-link\"><h4>{{$ctrl.link}}</h4></a>\n  </div>\n</div>\n<!-- bind the date in here from genCard controller to fill in template with selected gene info -->\n");
$templateCache.put("home/home.tpl.html","\n\n<h1 class=\"heading -large\">{{ $ctrl.title | ExampleFilter }}!</h1>\n\n<h3 class=\"heading -medium\">Here is a fancy number served up courtesy of Angular: <span class=\"number-example\">{{ $ctrl.number }}</span></h3>\n\n<img src=\"images/angular.png\" height=\"100\" />\n<img src=\"images/gulp.png\" height=\"100\" />\n<img src=\"images/browserify.png\" height=\"100\" />\n\n<hr/>\n<div example-directive title=\"WOW!\" click-message=\"You clicked me!\">Directive is not loaded.</div>\n");
$templateCache.put("infoBox/infoBox.tpl.html","<div class=\"row info-box is-open\">\n    <span class=\"glyphicon glyphicon-info-sign\" aria-hidden=\"true\"></span>\n    <div class=\"info-box-message js-test-desc\">{{$ctrl.message}}</div>\n    <span class=\"glyphicon glyphicon-remove-circle text-danger col-lg-1\" aria-hidden=\"true\"></span>\n</div>\n");
$templateCache.put("navGlobal/navGlobal.tpl.html","<ul class=\"nav nav-pills\">\n  <li class=\"nav-pills-item\" role=\"presentation\" ui-sref-active=\"active\">\n  	<a ui-sref=\"app\" href=\"#\">Home</a>\n  </li>\n  <li class=\"nav-pills-item\" role=\"presentation\" ui-sref-active=\"active\">\n  	<a href=\"#\">Profile</a>\n  </li>\n  <li class=\"nav-pills-item\" role=\"presentation\" ui-sref-active=\"active\" >\n  		<a ui-sref=\"app.queryBuilder\" href=\"#\">Query</a>\n   </li>\n</ul>");
$templateCache.put("queryBuilder/queryBuilder.tpl.html","<section\n	ui-view=\"queryOverview\"\n	id=\"query-overview\"\n	class=\"dashboard-column\n		   col-xs-2\n		   col-sm-2\n		   col-lg-2\"\n>\n</section>\n\n\n<section \n	ui-view=\"querySet\"\n	class=\"query-set\n		   dashboard-column\n		   col-xs-3\n		   col-sm-3\n		   col-lg-3\"\n>	\n</section >\n\n\n<section\n	ui-view=\"queryParamSelector\"\n	class=\"query-param-selector\n		   dashboard-column\n		   col-xs-6\n		   col-sm-6\n		   col-lg-6\"\n>\n</section> \n");
$templateCache.put("queryBuilder/queryOverview/queryOverview.tpl.html","<div class=\"row dashboard-column-header\">\n  <h2>QUERY</h2>\n</div>\n\n\n<query-overview-control \n  class=\"row ng-isolate-scope\" \n  title=\"Mutations\" \n  set-title=\"Gene Set\" \n  desc=\"classify samples by their mutation status in selected genes\" \n  list-type=\"genes\" \n  param-list=\"$ctrl.mutationSet\">\n</query-overview-control>\n\n\n<query-overview-control \n  class=\"row ng-isolate-scope\" \n  title=\"Disease Type\" \n  set-title=\"\" \n  desc=\"Select Samples to Include in Query by Disease Type\" \n  list-type=\"disease\" \n  param-list=\"$ctrl.diseaseSet\">\n</query-overview-control >\n\n\n\n\n");
$templateCache.put("queryBuilder/queryParamSelector/queryParamSelector.tpl.html","<h1>selector</h1>");
$templateCache.put("queryBuilder/queryOverview/queryOverviewControl/queryOverviewControl.tpl.html","<div \n	class=\"query-overview--control \n			query-overview--{{$ctrl.title.toLowerCase()}}\n			\"\n>\n\n  <h4 class=\"query-overview--control-title \" >\n  	<span class=\"badge badge--counter\"  >{{$ctrl.paramList.length}}</span>\n    <span class=\"js-test-title\">{{$ctrl.title}}</span>\n  </h4>\n\n  <h5 ng-if=\"$ctrl.setTitle\" class=\"query-overview--control-setTitle js-test-setTitle\">{{$ctrl.setTitle}}</h5>\n\n  <info-box\n  	ng-if=\"$ctrl.desc\"\n  	message=\"{{$ctrl.desc}}\"\n  ></info-box>\n\n  <div class=\"row query-overview--control-params\">\n		\n  		<mutation-listing\n  			ng-if=\" $ctrl.listType == \'genes\' \"\n  			ng-repeat=\"setParam in $ctrl.paramList\"\n  			entrezid=\"{{setParam.id}}\"\n  		></mutation-listing>\n\n  		<disease-listing\n  			ng-if=\"$ctrl.listType == \'disease\'\"\n  			ng-repeat=\"setParam in $ctrl.paramList\"\n  			name=\"{{setParam.id}}\"\n        positives=\"setParam.positives\"\n        negatives=\"setParam.negatives\"\n  		></disease-listing>\n\n  		<button \n  			ng-class=\"{ \'col-xs-5\': $ctrl.listType == \'genes\',\n  						\'col-xs-10\': $ctrl.listType == \'disease\' }\"\n  			class=\"query-overview--control-param  query-overview--control-param-add\"\n        ng-click=\"$ctrl.addGene()\">\n  			ADD {{ $ctrl.listType }}\n  				\n  		</buttom>	\n\n        \n  </div>\n\n</div>");
$templateCache.put("queryBuilder/querySets/querySetDiseaseType/querySetDiseaseType.tpl.html","  <div class=\"dashboard-column-header\">\n    <h2>DISEASE Type SET</h2>\n    <span class=\"badge\">{{$ctrl.diseaseSet.length}}</span>\n  </div>\n  <div class=\"list-controls\">\n    <div class=\"col-xs-10\">\n      <span>SELECTED DISEASE TYPES</span>\n      <span class=\"glyphicon glyphicon-sort\"></span>\n    </div>\n    <div class=\"col-xs-2\">\n      <span class=\"label clear-button disease-clear-button\">CLEAR</span>\n    </div>\n  </div>\n\n  <div class=\"col-xs-12 sample-set-bar\">\n    <span>SAMPLES 100</span>\n    <span>POSTIVES\n      <span class=\"glyphicon glyphicon-plus-sign text-success\"></span>\n      60</span>\n    <span>NEGATIVES\n      <span class=\"glyphicon glyphicon-minus-sign text-danger\"></span>\n      40</span>\n  </div>\n\n  \n<!-- Disease Cards -->\n<div class=\"card-container\">\n<div class=\"disease-card-display col-xs-12\">\n  <disease-card\n    ng-if=\"$ctrl.diseaseSet.length\"\n    ng-repeat=\"setParam in $ctrl.diseaseSet\"\n    id=\"{{setParam.id}}\"\n    positives=\"{{setParam.positives}}\"\n    negatives=\"{{setParam.negatives}}\"\n  ></disease-card>\n  <div class=\"empty-card-space col-xs-12\">\n    <h4 class=\"empty-card-text\"\n      ng-if=\"!$ctrl.diseaseSet.length\"\n    >\n      DRAG AND DROP OR CLICK GENES TO ADD\n    </h4>\n  </div>\n</div>\n\n</div>\n<!-- Ng repeat the selected Gene types -->\n<!-- Empty Card Space -->\n");
$templateCache.put("queryBuilder/querySets/querySetMutations/querySetMutations.tpl.html","\n  <div class=\"dashboard-column-header\">\n    <h2>MUTATIONS SET</h2>\n    <span class=\"badge\">{{$ctrl.mutationSet.length}}</span>\n  </div>\n  <div class=\"list-controls\">\n    <div class=\"col-xs-9\">\n      <span>SELECTED GENES</span>\n      <span class=\"glyphicon glyphicon-sort\" ng-click=\"$ctrl.sortMutationsById()\"></span>\n    </div>\n    <div class=\"col-xs-2\">\n      <span class=\"label clear-button\" ng-click=\"$ctrl.clearMutationSet()\">CLEAR</span>\n    </div>\n  </div>\n<!-- Gene Cards -->\n<div class=\"card-container\">\n<ul class=\"col-xs-3\">\n  <li class=\"label gene-label\"\n    ng-repeat=\"mutation in $ctrl.mutationSet\"\n  >{{mutation.id}}</li>\n</ul>\n\n<div class=\"gene-card-display col-xs-9\">\n  <gene-card\n    ng-if=\"$ctrl.mutationSet.length\"\n    ng-repeat=\"setParam in $ctrl.mutationSet\"\n    id=\"{{setParam.id}}\"\n    name=\"{{setParam.name}}\"\n    desc=\"{{setParam.desc}}\"\n    link=\"{{setParam.link}}\"\n  ></gene-card>\n  <div class=\"empty-card-space\">\n    <h4 class=\"empty-card-text\"\n      ng-if=\"!$ctrl.mutationSet.length\"\n    >\n      DRAG AND DROP OR CLICK GENES TO ADD\n    </h4>\n  </div>\n</div>\n\n</div>\n<!-- Ng repeat the selected Gene types -->\n<!-- Empty Card Space -->\n");
$templateCache.put("queryBuilder/queryOverview/queryOverviewControl/diseaseListing/diseaseListing.tpl.html","<div class=\"col-xs-10 query-overview--control-param disease-listing\">\n  	<span class=\"query-overview--control-param-title js-test-name\">{{$ctrl.name}}</span>\n  	<summary class=\"control-param-summary\">\n  		<p class=\"sample-count\">SAMPLES  <strong class=\"js-test-sampleCount\">{{$ctrl.positives + $ctrl.negatives}}</strong> </p>\n  		<p class=\"sample-positives\"> <span class=\"glyphicon glyphicon-plus-sign\"></span> <strong class=\"js-test-positives\">{{$ctrl.positives}}</strong> </p>\n  		<p class=\"sample-negatives\"> <span class=\"glyphicon glyphicon-minus-sign\"></span> <strong class=\"js-test-negatives\">{{$ctrl.negatives}}</strong> </p>\n  	</summary>\n  	<button class=\"glyphicon glyphicon-remove-circle text-danger col-lg-1\" aria-hidden=\"true\"></button>\n </div>	  		\n");
$templateCache.put("queryBuilder/queryOverview/queryOverviewControl/mutationListing/mutationListing.tpl.html","<div class=\"col-xs-5 query-overview--control-param mutation-listing\">\n  	<span class=\"query-overview--control-param-title js-test-entrezid\">{{$ctrl.entrezid}}</span>\n  	<button \n  		class=\"glyphicon glyphicon-remove-circle text-danger col-lg-1\" \n  		aria-hidden=\"true\"\n  		ng-click=\"$ctsrl.removeMutation($ctrl.entrezid)\"\n  	></button>\n </div>	  		\n");}]);