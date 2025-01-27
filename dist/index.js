"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./loaders/abstract.loader"));
__export(require("./loaders/express.loader"));
__export(require("./loaders/fastify.loader"));
__export(require("./loaders/noop.loader"));
__export(require("./utils/service-static.utils"));
__export(require("./serve-static.constants"));
__export(require("./serve-static.module"));
__export(require("./serve-static.providers"));
