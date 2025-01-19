"use strict";
exports.__esModule = true;
exports.Step = void 0;
var Step = /** @class */ (function () {
    function Step() {
        this.width = Math.floor(Math.random() * (40 - 10) + 10);
        this.height = 5;
        this.positionX = Math.floor(Math.random() * (60 - 8) + 8);
        this.positionY = 0;
        this.element = null;
    }
    Step.prototype.renderStep = function (mainElement) {
        var step = document.createElement('div');
        step.classList.add('stepDesign');
        step.style.width = this.width + "vw";
        step.style.position = 'absolute';
        step.style.height = this.height + "vh";
        step.style.top = this.positionY + "vh";
        step.style.left = this.positionX + "vw";
        step.style.setProperty('--initial-positionY', this.positionY + "vh");
        var animationDuration = 10;
        step.style.animationDuration = animationDuration + "s";
        step.style.animationPlayState = 'running';
        mainElement.appendChild(step);
        this.element = step;
    };
    Step.prototype.stopAnimation = function () {
        if (this.element) {
            this.element.style.animationPlayState = 'paused';
        }
    };
    Step.prototype.resumeAnimation = function () {
        if (this.element) {
            this.element.style.animationPlayState = 'running';
        }
    };
    return Step;
}());
exports.Step = Step;
