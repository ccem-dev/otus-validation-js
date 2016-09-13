(function() {
    'use strict';

    angular
        .module('otus.validation')
        .service('MaxDateValidatorService', MaxDateValidatorService);

    MaxDateValidatorService.$inject = ['ValidatorResponseFactory'];

    function MaxDateValidatorService(ValidatorResponseFactory) {
        var self = this;
        self.execute = execute;

        function execute(answer, data) {
            var formatedAnswer = new Date(answer.data).setHours(0, 0, 0, 0);
            var maxDate = new Date(data.reference).setHours(0, 0, 0, 0);
            var result = (formatedAnswer <= maxDate);
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
