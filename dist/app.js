"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// init dotenv
const dotenv_1 = require("dotenv");
const result = dotenv_1.config();
if (result.error) {
    throw result.error;
}
console.log(`environment variable MESSAGE: ${process.env.MESSAGE}...`);
//# sourceMappingURL=app.js.map