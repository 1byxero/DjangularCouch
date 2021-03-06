"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var checksignin_service_1 = require('../services/checksignin.service');
var ng2_cookies_1 = require('ng2-cookies/ng2-cookies');
var router_1 = require('@angular/router');
var SigninComponent = (function () {
    function SigninComponent(signinservice, router) {
        this.signinservice = signinservice;
        this.router = router;
        this.user = {};
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.isSignedin = ng2_cookies_1.Cookie.get('SignedIn');
        if (this.isSignedin) {
            this.router.navigate(['/home']);
        }
    };
    SigninComponent.prototype.onSigninSubmit = function () {
        var _this = this;
        this.signinservice.Signin(this.user.username, this.user.password)
            .then(function (data) { return _this.logincreatesession(data); })
            .catch(function (error) { return console.log(error); });
    };
    SigninComponent.prototype.logincreatesession = function (requestresponse) {
        if (requestresponse.msg == 'User Authenticated') {
            ng2_cookies_1.Cookie.set('SignedIn', 'true');
            ng2_cookies_1.Cookie.set('username', this.user.username);
            ng2_cookies_1.Cookie.set('token', requestresponse.token);
            location.reload();
        }
        else {
            alert(requestresponse);
        }
    };
    SigninComponent = __decorate([
        core_1.Component({
            selector: 'sign-in',
            templateUrl: 'app/templates/signin.html',
            styleUrls: ['app/styles/signin.css', "app/styles/bootstrap.min.css"]
        }), 
        __metadata('design:paramtypes', [checksignin_service_1.SignInService, router_1.Router])
    ], SigninComponent);
    return SigninComponent;
}());
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map