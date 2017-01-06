import appModule from "../app";
export default class NgBlur implements ng.IDirective {
    public link: (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;

    constructor(/*list of dependencies*/) {
        NgBlur.prototype.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
            debugger;
            // element.bind('blur', () =>
            //     // scope.$apply(scope.ngBlur)
            // )
        };
    }

    public static Factory(): ng.IDirectiveFactory {
        return () => new NgBlur();
    }
}

appModule.directive('NgBlur', NgBlur.Factory());