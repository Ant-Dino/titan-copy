﻿/// <reference path="C:\Users\avidyarthi\Desktop\Tower\Tower\FA.LVIS.Tower.UI\Scripts/angular.js" />
/// <reference path="C:\Users\avidyarthi\Desktop\Tower\Tower\FA.LVIS.Tower.UI\Scripts/angular-route.js" />

"use strict";

angular.module('psMenu').directive('psMenuItem', function () {
    return {
        require: '^psMenu',
        scope: {
            label: '@',            
            route: '@',
            icon: '@'
        },
        templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
        link: function (scope, el, attr, ctrl) {
            
            scope.isActive = function () {
                return el === ctrl.getActiveElement();
            };

            scope.isVertical = function () {
                return ctrl.isVertical() || el.parents('.ps-subitem-section').length > 0;
            }

            el.on('click', function (evt) {
                evt.stopPropagation();
                evt.preventDefault();
                scope.$apply(function () {                   
                    ctrl.setActiveElement(el);
                    ctrl.setRoute(scope.route);

                });
            });
        }
    };
});

