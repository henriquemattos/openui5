sap.ui.predefine('testlibs/scenario13/lib3/library',['sap/ui/core/Core', 'sap/ui/core/library'], function(Core, coreLib) {
	"use strict";
	sap.ui.getCore().initLibrary({
		name: 'testlibs.scenario13.lib3',
		dependencies: [
			'testlibs.scenario13.lib4'
		],
		noLibraryCSS: true
	});
	return testlibs.scenario13.lib3; // eslint-disable-line no-undef
});
jQuery.sap.registerPreloadedModules({
	"version":"2.0",
	"name":"testlibs.scenario13.lib3",
	"modules":{
		"testlibs/scenario13/lib3/manifest.json":"{\n\t\"sap.ui5\": {\n\t\t\"dependencies\": {\n\t\t\t\"libs\": {\n\t\t\t\t\"testlibs.scenario13.lib4\": {\n\t\t\t\t\t\"minVersion\": \"1.0.0\"\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}"
	}
});