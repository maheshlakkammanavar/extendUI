sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'sap.btp.sapui5',
            componentId: 'BusinessPartnerAddressObjectPage',
            contextPath: '/BusinessPartner/_BusinessPartnerAddress'
        },
        CustomPageDefinitions
    );
});