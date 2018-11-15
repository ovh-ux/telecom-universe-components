import _ from 'lodash';

export default /* @ngInject */ function (TUC_TELEPHONY_NUMBER_PLANS) {
  this.getPlanByNumber = function (number) {
    let prefixedNumber;
    let foundedPlan;

    if (number) {
      prefixedNumber = number.serviceName.replace(/^00/, '+');
      foundedPlan = _.find(TUC_TELEPHONY_NUMBER_PLANS, (plan) => {
        const founded = prefixedNumber.indexOf(plan.prefix) === 0;
        return founded;
      });
    }

    return foundedPlan;
  };
}
