"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var CommandUtils_1 = require("./CommandUtils");
var chalk = require("chalk");
var path = require('path-browserify');
/**
 * Generates a new project with TypeORM.
 */
var InitCommand = /** @class */ (function () {
    function InitCommand() {
        this.command = "init";
        this.describe = "Generates initial TypeORM project structure. " +
            "If name specified then creates files inside directory called as name. " +
            "If its not specified then creates files inside current directory.";
    }
    InitCommand.prototype.builder = function (yargs) {
        return yargs
            .option("c", {
            alias: "connection",
            default: "default",
            describe: "Name of the connection on which to run a query"
        })
            .option("n", {
            alias: "name",
            describe: "Name of the project directory."
        })
            .option("db", {
            alias: "database",
            describe: "Database type you'll use in your project."
        })
            .option("express", {
            describe: "Indicates if express should be included in the project."
        })
            .option("docker", {
            describe: "Set to true if docker-compose must be generated as well. False by default."
        });
    };
    InitCommand.prototype.handler = function (argv) {
        return __awaiter(this, void 0, void 0, function () {
            var database, isExpress, isDocker, basePath, projectName, packageJsonContents, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 16, , 17]);
                        database = argv.database || "mysql";
                        isExpress = argv.express !== undefined ? true : false;
                        isDocker = argv.docker !== undefined ? true : false;
                        basePath = process.cwd() + (argv.name ? ("/" + argv.name) : "");
                        projectName = argv.name ? path.basename(argv.name) : undefined;
                        return [4 /*yield*/, CommandUtils_1.CommandUtils.createFile(basePath + "/package.json", InitCommand.getPackageJsonTemplate(projectName), false)];
                    case 1:
                        _a.sent();
                        if (!isDocker) return [3 /*break*/, 3];
                        return [4 /*yield*/, CommandUtils_1.CommandUtils.createFile(basePath + "/docker-compose.yml", InitCommand.getDockerComposeTemplate(database), false)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, CommandUtils_1.CommandUtils.createFile(basePath + "/.gitignore", InitCommand.getGitIgnoreFile())];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, CommandUtils_1.CommandUtils.createFile(basePath + "/README.md", InitCommand.getReadmeTemplate({ docker: isDocker }), false)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, CommandUtils_1.CommandUtils.createFile(basePath + "/tsconfig.json", InitCommand.getTsConfigTemplate())];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, CommandUtils_1.CommandUtils.createFile(basePath + "/ormconfig.json", InitCommand.getOrmConfigTemplate(database))];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, CommandUtils_1.CommandUtils.createFile(basePath + "/src/entity/User.ts", InitCommand.getUserEntityTemplate(database))];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, CommandUtils_1.CommandUtils.createFile(basePath + "/src/index.ts", InitCommand.getAppIndexTemplate(isExpress))];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, CommandUtils_1.CommandUtils.createDirectories(basePath + "/src/migration")];
                    case 10:
                        _a.sent();
                        if (!isExpress) return [3 /*break*/, 13];
                        return [4 /*yield*/, CommandUtils_1.CommandUtils.createFile(basePath + "/src/routes.ts", InitCommand.getRoutesTemplate())];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, CommandUtils_1.CommandUtils.createFile(basePath + "/src/controller/UserController.ts", InitCommand.getControllerTemplate())];
                    case 12:
                        _a.sent();
                        _a.label = 13;
                    case 13: return [4 /*yield*/, CommandUtils_1.CommandUtils.readFile(basePath + "/package.json")];
                    case 14:
                        packageJsonContents = _a.sent();
                        return [4 /*yield*/, CommandUtils_1.CommandUtils.createFile(basePath + "/package.json", InitCommand.appendPackageJson(packageJsonContents, database, isExpress))];
                    case 15:
                        _a.sent();
                        if (argv.name) {
                            console.log(chalk.green("Project created inside " + chalk.blue(basePath) + " directory."));
                        }
                        else {
                            console.log(chalk.green("Project created inside current directory."));
                        }
                        return [3 /*break*/, 17];
                    case 16:
                        err_1 = _a.sent();
                        console.log(chalk.black.bgRed("Error during project initialization:"));
                        console.error(err_1);
                        process.exit(1);
                        return [3 /*break*/, 17];
                    case 17: return [2 /*return*/];
                }
            });
        });
    };
    // -------------------------------------------------------------------------
    // Protected Static Methods
    // -------------------------------------------------------------------------
    /**
     * Gets contents of the ormconfig file.
     */
    InitCommand.getOrmConfigTemplate = function (database) {
        var options = {};
        switch (database) {
            case "mysql":
                Object.assign(options, {
                    type: "mysql",
                    host: "localhost",
                    port: 3306,
                    username: "test",
                    password: "test",
                    database: "test",
                });
                break;
            case "mariadb":
                Object.assign(options, {
                    type: "mariadb",
                    host: "localhost",
                    port: 3306,
                    username: "test",
                    password: "test",
                    database: "test",
                });
                break;
            case "sqlite":
                Object.assign(options, {
                    "database": "database.db",
                });
                break;
            case "postgres":
                Object.assign(options, {
                    "type": "postgres",
                    "host": "localhost",
                    "port": 5432,
                    "username": "test",
                    "password": "test",
                    "database": "test",
                });
                break;
            case "mssql":
                Object.assign(options, {
                    "type": "mssql",
                    "host": "localhost",
                    "username": "sa",
                    "password": "Admin12345",
                    "database": "tempdb",
                });
                break;
            case "oracle":
                Object.assign(options, {
                    "type": "oracle",
                    "host": "localhost",
                    "username": "system",
                    "password": "oracle",
                    "port": 1521,
                    "sid": "xe.oracle.docker",
                });
                break;
            case "mongodb":
                Object.assign(options, {
                    "type": "mongodb",
                    "database": "test",
                });
                break;
        }
        Object.assign(options, {
            synchronize: true,
            logging: false,
            entities: [
                "src/entity/**/*.ts"
            ],
            migrations: [
                "src/migration/**/*.ts"
            ],
            subscribers: [
                "src/subscriber/**/*.ts"
            ],
            cli: {
                entitiesDir: "src/entity",
                migrationsDir: "src/migration",
                subscribersDir: "src/subscriber"
            }
        });
        return JSON.stringify(options, undefined, 3);
    };
    /**
     * Gets contents of the ormconfig file.
     */
    InitCommand.getTsConfigTemplate = function () {
        return JSON.stringify({
            compilerOptions: {
                lib: ["es5", "es6"],
                target: "es5",
                module: "commonjs",
                moduleResolution: "node",
                outDir: "./build",
                emitDecoratorMetadata: true,
                experimentalDecorators: true,
                sourceMap: true
            }
        }, undefined, 3);
    };
    /**
     * Gets contents of the .gitignore file.
     */
    InitCommand.getGitIgnoreFile = function () {
        return ".idea/\n.vscode/\nnode_modules/\nbuild/\ntmp/\ntemp/";
    };
    /**
     * Gets contents of the user entity.
     */
    InitCommand.getUserEntityTemplate = function (database) {
        return "import {Entity, " + (database === "monogdb" ? "ObjectIdColumn" : "PrimaryGeneratedColumn") + ", Column} from \"typeorm\";\n\n@Entity()\nexport class User {\n\n    " + (database === "monogdb" ? "@ObjectIdColumn()" : "@PrimaryGeneratedColumn()") + "\n    id: number;\n\n    @Column()\n    firstName: string;\n\n    @Column()\n    lastName: string;\n\n    @Column()\n    age: number;\n\n}\n";
    };
    /**
     * Gets contents of the route file (used when express is enabled).
     */
    InitCommand.getRoutesTemplate = function () {
        return "import {UserController} from \"./controller/UserController\";\n\nexport const Routes = [{\n    method: \"get\",\n    route: \"/users\",\n    controller: UserController,\n    action: \"all\"\n}, {\n    method: \"get\",\n    route: \"/users/:id\",\n    controller: UserController,\n    action: \"one\"\n}, {\n    method: \"post\",\n    route: \"/users\",\n    controller: UserController,\n    action: \"save\"\n}, {\n    method: \"delete\",\n    route: \"/users\",\n    controller: UserController,\n    action: \"remove\"\n}];";
    };
    /**
     * Gets contents of the user controller file (used when express is enabled).
     */
    InitCommand.getControllerTemplate = function () {
        return "import {getRepository} from \"typeorm\";\nimport {NextFunction, Request, Response} from \"express\";\nimport {User} from \"../entity/User\";\n\nexport class UserController {\n\n    private userRepository = getRepository(User);\n\n    async all(request: Request, response: Response, next: NextFunction) {\n        return this.userRepository.find();\n    }\n\n    async one(request: Request, response: Response, next: NextFunction) {\n        return this.userRepository.findOneById(request.params.id);\n    }\n\n    async save(request: Request, response: Response, next: NextFunction) {\n        return this.userRepository.save(request.body);\n    }\n\n    async remove(request: Request, response: Response, next: NextFunction) {\n        await this.userRepository.removeById(request.params.id);\n    }\n\n}";
    };
    /**
     * Gets contents of the main (index) application file.
     */
    InitCommand.getAppIndexTemplate = function (express) {
        if (express) {
            return "import \"reflect-metadata\";\nimport {createConnection} from \"typeorm\";\nimport * as express from \"express\";\nimport * as bodyParser from \"body-parser\";\nimport {Request, Response} from \"express\";\nimport {Routes} from \"./routes\";\nimport {User} from \"./entity/User\";\n\ncreateConnection().then(async connection => {\n\n    // create express app\n    const app = express();\n    app.use(bodyParser.json());\n\n    // register express routes from defined application routes\n    Routes.forEach(route => {\n        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {\n            const result = (new (route.controller as any))[route.action](req, res, next);\n            if (result instanceof Promise) {\n                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);\n\n            } else if (result !== null && result !== undefined) {\n                res.json(result);\n            }\n        });\n    });\n\n    // setup express app here\n    // ...\n\n    // start express server\n    app.listen(3000);\n\n    // insert new users for test\n    await connection.manager.save(connection.manager.create(User, {\n        firstName: \"Timber\",\n        lastName: \"Saw\",\n        age: 27\n    }));\n    await connection.manager.save(connection.manager.create(User, {\n        firstName: \"Phantom\",\n        lastName: \"Assassin\",\n        age: 24\n    }));\n\n    console.log(\"Express server has started on port 3000. Open http://localhost:3000/users to see results\");\n    \n}).catch(error => console.log(error));\n";
        }
        else {
            return "import \"reflect-metadata\";\nimport {createConnection} from \"typeorm\";\nimport {User} from \"./entity/User\";\n\ncreateConnection().then(async connection => {\n\n    console.log(\"Inserting a new user into the database...\");\n    const user = new User();\n    user.firstName = \"Timber\";\n    user.lastName = \"Saw\";\n    user.age = 25;\n    await connection.manager.save(user);\n    console.log(\"Saved a new user with id: \" + user.id);\n    \n    console.log(\"Loading users from the database...\");\n    const users = await connection.manager.find(User);\n    console.log(\"Loaded users: \", users);\n     \n    console.log(\"Here you can setup and run express/koa/any other framework.\");\n    \n}).catch(error => console.log(error));\n";
        }
    };
    /**
     * Gets contents of the new package.json file.
     */
    InitCommand.getPackageJsonTemplate = function (projectName) {
        return JSON.stringify({
            name: projectName || "new-typeorm-project",
            version: "0.0.1",
            description: "Awesome project developed with TypeORM.",
            devDependencies: {},
            dependencies: {},
            scripts: {}
        }, undefined, 3);
    };
    /**
     * Gets contents of the new docker-compose.yml file.
     */
    InitCommand.getDockerComposeTemplate = function (database) {
        switch (database) {
            case "mysql":
                return "version: '3'\nservices:\n\n  mysql:\n    image: \"mysql:5.7.10\"\n    ports:\n      - \"3306:3306\"\n    environment:\n      MYSQL_ROOT_PASSWORD: \"admin\"\n      MYSQL_USER: \"test\"\n      MYSQL_PASSWORD: \"test\"\n      MYSQL_DATABASE: \"test\"\n\n";
            case "mariadb":
                return "version: '3'\nservices:\n\n  mariadb:\n    image: \"mariadb:10.1.16\"\n    ports:\n      - \"3306:3306\"\n    environment:\n      MYSQL_ROOT_PASSWORD: \"admin\"\n      MYSQL_USER: \"test\"\n      MYSQL_PASSWORD: \"test\"\n      MYSQL_DATABASE: \"test\"\n\n";
            case "postgres":
                return "version: '3'\nservices:\n\n  postgres:\n    image: \"postgres:9.6.1\"\n    ports:\n      - \"5432:5432\"\n    environment:\n      POSTGRES_USER: \"test\"\n      POSTGRES_PASSWORD: \"test\"\n      POSTGRES_DB: \"test\"\n\n";
            case "sqlite":
                return "version: '3'\nservices:\n";
            case "oracle":
                throw new Error("You cannot initialize a project with docker for Oracle driver yet."); // todo: implement for oracle as well
            case "mssql":
                return "version: '3'\nservices:\n\n  mssql:\n    image: \"microsoft/mssql-server-linux:rc2\"\n    ports:\n      - \"1433:1433\"\n    environment:\n      SA_PASSWORD: \"Admin12345\"\n      ACCEPT_EULA: \"Y\"\n\n";
            case "mongodb":
                return "version: '3'\nservices:\n\n  mongodb:\n    image: \"mongo:3.4.1\"\n    container_name: \"typeorm-mongodb\"\n    ports:\n      - \"27017:27017\"\n\n";
        }
        return "";
    };
    /**
     * Gets contents of the new readme.md file.
     */
    InitCommand.getReadmeTemplate = function (options) {
        var template = "# Awesome Project Build with TypeORM\n        \nSteps to run this project:\n\n1. Run `npm i` command\n";
        if (options.docker) {
            template += "2. Run `docker-compose up` command\n";
        }
        else {
            template += "2. Setup database settings inside `ormconfig.json` file\n";
        }
        template += "3. Run `npm start` command\n";
        return template;
    };
    /**
     * Appends to a given package.json template everything needed.
     */
    InitCommand.appendPackageJson = function (packageJsonContents, database, express /*, docker: boolean*/) {
        var packageJson = JSON.parse(packageJsonContents);
        if (!packageJson.devDependencies)
            packageJson.devDependencies = {};
        Object.assign(packageJson.devDependencies, {
            "ts-node": "3.3.0",
            "@types/node": "^8.0.29",
            "typescript": "2.5.2"
        });
        if (!packageJson.dependencies)
            packageJson.dependencies = {};
        Object.assign(packageJson.dependencies, {
            "typeorm": require("../package.json").version,
            "reflect-metadata": "^0.1.10"
        });
        switch (database) {
            case "mysql":
            case "mariadb":
                packageJson.dependencies["mysql"] = "^2.14.1";
                break;
            case "postgres":
                packageJson.dependencies["pg"] = "^7.3.0";
                break;
            case "sqlite":
                packageJson.dependencies["nativescript-sqlite"] = "^3.1.10";
                break;
            case "oracle":
                packageJson.dependencies["oracledb"] = "^1.13.1";
                break;
            case "mssql":
                packageJson.dependencies["mssql"] = "^4.0.4";
                break;
            case "mongodb":
                packageJson.dependencies["mongodb"] = "^2.2.31";
                break;
        }
        if (express) {
            packageJson.dependencies["express"] = "^4.15.4";
            packageJson.dependencies["body-parser"] = "^1.18.1";
        }
        if (!packageJson.scripts)
            packageJson.scripts = {};
        Object.assign(packageJson.scripts, {
            start: /*(docker ? "docker-compose up && " : "") + */ "ts-node src/index.ts"
        });
        return JSON.stringify(packageJson, undefined, 3);
    };
    return InitCommand;
}());
exports.InitCommand = InitCommand;

//# sourceMappingURL=InitCommand.js.map
