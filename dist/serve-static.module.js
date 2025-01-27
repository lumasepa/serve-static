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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var ServeStaticModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const serve_static_constants_1 = require("./serve-static.constants");
const serve_static_providers_1 = require("./serve-static.providers");
const abstract_loader_1 = require("./loaders/abstract.loader");
let ServeStaticModule = ServeStaticModule_1 = class ServeStaticModule {
    constructor(ngOptions, loader, httpAdapterHost) {
        this.ngOptions = ngOptions;
        this.loader = loader;
        this.httpAdapterHost = httpAdapterHost;
    }
    static forRoot(options = {}) {
        options.rootPath = options.rootPath || serve_static_constants_1.DEFAULT_ROOT_PATH;
        options.renderPath = options.renderPath || serve_static_constants_1.DEFAULT_RENDER_PATH;
        return {
            module: ServeStaticModule_1,
            providers: [
                {
                    provide: serve_static_constants_1.SERVE_STATIC_MODULE_OPTIONS,
                    useValue: options
                }
            ]
        };
    }
    onModuleInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const httpAdapter = this.httpAdapterHost.httpAdapter;
            this.loader.register(httpAdapter, this.ngOptions);
        });
    }
};
ServeStaticModule = ServeStaticModule_1 = __decorate([
    common_1.Module({
        providers: [...serve_static_providers_1.serveStaticProviders]
    }),
    __param(0, common_1.Inject(serve_static_constants_1.SERVE_STATIC_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object, abstract_loader_1.AbstractLoader,
        core_1.HttpAdapterHost])
], ServeStaticModule);
exports.ServeStaticModule = ServeStaticModule;
