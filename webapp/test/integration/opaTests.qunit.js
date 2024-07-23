sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'sap/btp/sapui5/test/integration/FirstJourney',
		'sap/btp/sapui5/test/integration/pages/BusinessPartnerList',
		'sap/btp/sapui5/test/integration/pages/BusinessPartnerObjectPage',
		'sap/btp/sapui5/test/integration/pages/BusinessPartnerAddressObjectPage'
    ],
    function(JourneyRunner, opaJourney, BusinessPartnerList, BusinessPartnerObjectPage, BusinessPartnerAddressObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('sap/btp/sapui5') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheBusinessPartnerList: BusinessPartnerList,
					onTheBusinessPartnerObjectPage: BusinessPartnerObjectPage,
					onTheBusinessPartnerAddressObjectPage: BusinessPartnerAddressObjectPage
                }
            },
            opaJourney.run
        );
    }
);