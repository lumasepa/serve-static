"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const service_static_utils_1 = require("../utils/service-static.utils");
const abstract_loader_1 = require("./abstract.loader");
let ExpressLoader = class ExpressLoader extends abstract_loader_1.AbstractLoader {
    register(httpAdapter, options) {
        const app = httpAdapter.getInstance();
        const express = service_static_utils_1.loadPackage('express', 'ServeStaticModule', () => require('express'));
        const clientPath = options.rootPath;
        const indexFilePath = this.getIndexFilePath(clientPath);
        app.use(express.static(clientPath, options.serveStaticOptions));
        app.get(options.renderPath, (req, res) => res.sendFile(indexFilePath));
    }
};
ExpressLoader = __decorate([
    common_1.Injectable()
], ExpressLoader);
exports.ExpressLoader = ExpressLoader;
