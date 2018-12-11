'use strict';



var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

customElements.define('compodoc-menu', function (_HTMLElement) {
    _inherits(_class, _HTMLElement);

    function _class() {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));

        _this.isNormalMode = _this.getAttribute('mode') === 'normal';
        return _this;
    }

    _createClass(_class, [{
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.render(this.isNormalMode);
        }
    }, {
        key: 'render',
        value: function render(isNormalMode) {
            let tp = lithtml.html(
'<nav>\n    <ul class="list">\n        <li class="title">\n            \n                <a href="index.html" data-type="index-link">moq.ts documentation</a>\n            \n        </li>\n\n        <li class="divider"></li>\n        ' + (isNormalMode ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>' : '') + '\n        <li class="chapter">\n            <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n            <ul class="links">\n                \n                    <li class="link">\n                        <a href="overview.html" data-type="chapter-link">\n                            <span class="icon ion-ios-keypad"></span>Overview\n                        </a>\n                    </li>\n                    <li class="link">\n                        <a href="index.html" data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>README\n                        </a>\n                    </li>\n                \n                \n                    <li class="link">\n                        \n                            <a href="changelog.html"\n                        \n                        data-type="chapter-link">\n                            <span class="icon ion-ios-paper"></span>CHANGELOG\n                        </a>\n                    </li>\n                \n                \n            </ul>\n        </li>\n        \n        \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"') + '>\n                <span class="icon ion-ios-paper"></span>\n                <span>Classes</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"') + '>\n                \n                    <li class="link">\n                        <a href="classes/ArgumentsMatcher.html" data-type="entity-link">ArgumentsMatcher</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/CallCounter.html" data-type="entity-link">CallCounter</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/ConstantFormatter.html" data-type="entity-link">ConstantFormatter</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/ConstantMatcher.html" data-type="entity-link">ConstantMatcher</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/DefinedSetups.html" data-type="entity-link">DefinedSetups</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/ExpectedExpressionFormatter.html" data-type="entity-link">ExpectedExpressionFormatter</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/ExpectedExpressionReflector.html" data-type="entity-link">ExpectedExpressionReflector</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/ExpectedGetPropertyExpression.html" data-type="entity-link">ExpectedGetPropertyExpression</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/ExpectedMethodExpression.html" data-type="entity-link">ExpectedMethodExpression</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/ExpectedNamedMethodExpression.html" data-type="entity-link">ExpectedNamedMethodExpression</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/ExpectedSetPropertyExpression.html" data-type="entity-link">ExpectedSetPropertyExpression</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/ExpressionFormatter.html" data-type="entity-link">ExpressionFormatter</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/ExpressionMatcher.html" data-type="entity-link">ExpressionMatcher</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/GetPropertyExpression.html" data-type="entity-link">GetPropertyExpression</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/GetPropertyExpressionFormatter.html" data-type="entity-link">GetPropertyExpressionFormatter</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/GetPropertyExpressionMatcher.html" data-type="entity-link">GetPropertyExpressionMatcher</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Interceptor.html" data-type="entity-link">Interceptor</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/InterceptorCallbacks.html" data-type="entity-link">InterceptorCallbacks</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/InterceptorCallbacksLooseStrategy.html" data-type="entity-link">InterceptorCallbacksLooseStrategy</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/InterceptorCallbacksStrictStrategy.html" data-type="entity-link">InterceptorCallbacksStrictStrategy</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/It.html" data-type="entity-link">It</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/MethodExpression.html" data-type="entity-link">MethodExpression</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/MethodExpressionFormatter.html" data-type="entity-link">MethodExpressionFormatter</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/MethodExpressionMatcher.html" data-type="entity-link">MethodExpressionMatcher</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Mock.html" data-type="entity-link">Mock</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/MockCore.html" data-type="entity-link">MockCore</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/NamedMethodExpression.html" data-type="entity-link">NamedMethodExpression</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/NamedMethodExpressionFormatter.html" data-type="entity-link">NamedMethodExpressionFormatter</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/NamedMethodExpressionMatcher.html" data-type="entity-link">NamedMethodExpressionMatcher</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/PlayTimes.html" data-type="entity-link">PlayTimes</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SequenceId.html" data-type="entity-link">SequenceId</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SetPropertyExpression.html" data-type="entity-link">SetPropertyExpression</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SetPropertyExpressionFormatter.html" data-type="entity-link">SetPropertyExpressionFormatter</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/SetPropertyExpressionMatcher.html" data-type="entity-link">SetPropertyExpressionMatcher</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Setup.html" data-type="entity-link">Setup</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Times.html" data-type="entity-link">Times</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/TrackedExpressionsFormatter.html" data-type="entity-link">TrackedExpressionsFormatter</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Tracker.html" data-type="entity-link">Tracker</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/Verifier.html" data-type="entity-link">Verifier</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/VerifyError.html" data-type="entity-link">VerifyError</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="classes/VerifyFormatter.html" data-type="entity-link">VerifyFormatter</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n                ' + (isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"') + '>\n                <span class="icon ion-md-information-circle-outline"></span>\n                <span>Interfaces</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"') + '>\n                \n                    <li class="link">\n                        <a href="interfaces/IExpectedExpression.html" data-type="entity-link">IExpectedExpression</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/IInterceptorCallbacks.html" data-type="entity-link">IInterceptorCallbacks</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/IInterceptorCallbacksStrategy.html" data-type="entity-link">IInterceptorCallbacksStrategy</a>\n                    </li>\n                \n                    <li class="link">\n                        <a href="interfaces/IPredicate.html" data-type="entity-link">IPredicate</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n        \n        <li class="chapter">\n            <div class="simple menu-toggler" data-toggle="collapse"\n            ' + (isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"') + '>\n                <span class="icon ion-ios-cube"></span>\n                <span>Miscellaneous</span>\n                <span class="icon ion-ios-arrow-down"></span>\n            </div>\n            <ul class="links collapse"\n            ' + (isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"') + '>\n                \n                    <li class="link">\n                      <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>\n                    </li>\n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                    </li>\n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>\n                    </li>\n                \n                \n                    <li class="link">\n                      <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                    </li>\n                \n            </ul>\n        </li>\n        \n        \n            \n        \n        \n        <li class="chapter">\n            <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n        </li>\n        \n        \n        \n        <li class="divider"></li>\n        <li class="copyright">\n                Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                    \n                        \n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        \n                    \n                </a>\n        </li>\n        \n    </ul>\n</nav>'
);
        this.innerHTML = tp.strings;
        }
    }]);

    return _class;
}(HTMLElement));