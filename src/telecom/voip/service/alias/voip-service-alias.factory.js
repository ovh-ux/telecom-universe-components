import _ from 'lodash';

/**
 *  @ngdoc object
 *  @name managerApp.object:TucVoipServiceAlias
 *
 *  @description
 *  <p>Inherits from {@link managerApp.object:TucVoipService TucVoipService}.</p>
 *  <p>Factory that describes an alias service with attributes
 *    returned by `/telephony/{billingAccount}/number/{serviceName}` API.</p>
 *
 *  @constructor
 *  @param {Object} options Options required for creating a new instance of TucVoipServiceAlias
 *                  (see {@link managerApp.object:TucVoipService `TucVoipService` constructor}
 *                          for availables options properties).
 */
export default /* @ngInject */ (TucVoipService, TUC_TELEPHONY_ALIAS) => {
  class TucVoipServiceAlias extends TucVoipService {
    constructor(options = {}) {
      super(options);

      this.TUC_TELEPHONY_ALIAS = TUC_TELEPHONY_ALIAS;
    }

    /**
     *  @ngdoc method
     *  @name managerApp.object:TucVoipServiceAlias#isAPortabilityAlias
     *  @propertyOf managerApp.object:TucVoipServiceAlias
     *
     *  @description
     *  Check if the alias is a portability one
     *
     *  @return {Boolean}
     */
    isAPortabilityAlias() {
      const publicOfferName = _.get(this, 'getPublicOffer.name', '');
      const regExp = new RegExp(/portability/);
      return regExp.test(publicOfferName);
    }

    /**
     *  @ngdoc method
     *  @name managerApp.object:TucVoipServiceAlias#isContactCenterSolution
     *  @propertyOf managerApp.object:TucVoipServiceAlias
     *
     *  @description
     *  Check if the alias feature type is equivalent to Contact Center Solution feature
     *
     *  @return {Boolean}
     */
    isContactCenterSolution() {
      return this.TUC_TELEPHONY_ALIAS.featureTypes.contactCenterSolution.includes(this.featureType);
    }
  }

  return TucVoipServiceAlias;
};
