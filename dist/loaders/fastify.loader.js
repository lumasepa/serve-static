"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fs = require("fs");
const service_static_utils_1 = require("../utils/service-static.utils");
const abstract_loader_1 = require("./abstract.loader");
let FastifyLoader = class FastifyLoader extends abstract_loader_1.AbstractLoader {
    register(httpAdapter, options) {
        const app = httpAdapter.getInstance();
        const fastifyStatic = service_static_utils_1.loadPackage('fastify-static', 'ServeStaticModule', () => require('fastify-static'));
        const _a = options.serveStaticOptions || {}, { setHeaders, redirect, prefix } = _a, send = __rest(_a, ["setHeaders", "redirect", "prefix"]);
        const clientPath = options.rootPath;
        const indexFilePath = this.getIndexFilePath(clientPath);
        app.register(fastifyStatic, {
            root: clientPath,
            prefix,
            setHeaders,
            redirect,
            send
        });
        app.get(options.renderPath, (req, res) => {
            const stream = fs.createReadStream(indexFilePath);
            res.type('text/html').send(stream);
        });
    }
};
FastifyLoader = __decorate([
    common_1.Injectable()
], FastifyLoader);
exports.FastifyLoader = FastifyLoader;
