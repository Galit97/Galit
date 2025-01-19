"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(x, y, imageUrl, velocityY, gravity, isJumping, isFailed) {
        this.positionX = x;
        this.positionY = y;
        this.imageUrl = imageUrl;
        this.velocityY = velocityY;
        this.gravity = gravity;
        this.isJumping = true;
        this.isPaused = false;
        this.element = null;
        this.isFailed = false;
        this.firstJump = true;
    }
    Player.prototype.renderPlayer = function (mainElement) {
        var player = document.createElement('img');
        player.src = this.imageUrl;
        player.style.position = 'absolute';
        player.style.bottom = this.positionY + "px";
        player.style.left = this.positionX + "vw";
        player.classList.add('player');
        player.style.zIndex = '1';
        mainElement.appendChild(player);
        this.element = player;
        this.addEventListeners();
        this.update();
    };
    Player.prototype.addEventListeners = function () {
        var _this = this;
        window.addEventListener('keydown', function (event) {
            if (!_this.isPaused) {
                if (event.key === 'ArrowRight') {
                    _this.moveRight();
                }
                if (event.key === 'ArrowLeft') {
                    _this.moveLeft();
                }
                if (event.key === ' ' || event.key === 'ArrowUp') {
                    _this.jump();
                }
                _this.firstJump = false;
            }
        });
    };
    return Player;
}());
exports.Player = Player;
