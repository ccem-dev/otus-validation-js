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
          console.log(answer);
            var result = (new Date(answer.data) <= new Date(data.reference));
            return ValidatorResponseFactory.create(answer, data, result);
        }
    }

}());
