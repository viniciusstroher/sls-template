"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQSAws = exports.AwsConfig = exports.AWSCredentials = void 0;
const AWS = require('aws-sdk');
const AWSCredentials = () => {
    if (process.env.IS_OFFLINE) {
        process.env.AWS_ACCESS_KEY_ID = 'root';
        process.env.AWS_SECRET_ACCESS_KEY = 'root';
    }
    AWS.config = {
        //colocar em variaveis de ambiente
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            sessionToken: process.env.AWS_SESSION_TOKEN
        },
        region: process.env.AWS_DEFAULT_REGION
    };
};
exports.AWSCredentials = AWSCredentials;
const AwsConfig = () => AWS.config;
exports.AwsConfig = AwsConfig;
const SQSAws = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise(function (resolve, reject) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                exports.AWSCredentials();
                console.log(AWS.config);
                return resolve(new AWS.SQS());
            }
            catch (err) {
                return reject(`Erro ao inicializar SQS - ${err}`);
            }
        });
    });
});
exports.SQSAws = SQSAws;
