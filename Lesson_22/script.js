var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var Elements = {
    form: document.querySelector(".js-search"),
    addBtn: document.querySelector(".js-add"),
    inputContainer: document.querySelector(".js-form-container"),
    list: document.querySelector(".js-list"),
};
Elements.addBtn.addEventListener("click", handlerAddField);
function handlerAddField() {
    Elements.inputContainer.insertAdjacentHTML("beforeend", '<input type="text" name="country" />');
}
Elements.form.addEventListener("submit", handlerSubmit);
function handlerSubmit(ev) {
    return __awaiter(this, void 0, void 0, function () {
        var countries, capitals, weatherData, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ev.preventDefault();
                    countries = getFormData(ev.target);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, serviceGetCapitals(countries)];
                case 2:
                    capitals = _a.sent();
                    return [4 /*yield*/, serviceGetWeatherData(capitals || [])];
                case 3:
                    weatherData = _a.sent();
                    Elements.list.innerHTML = createMarkup(weatherData);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
function createMarkup(data) {
    return data
        .map(function (_a) {
        var name = _a.name, country = _a.country, temp_c = _a.temp_c, icon = _a.icon, text = _a.text;
        return "\n        <li>\n          <img src=\"".concat(icon, "\" alt=\"").concat(text, "\">\n          <h2>").concat(name, "</h2>\n          <p>").concat(country, "</p>\n          <p class=\".temp\">").concat(temp_c, "</p>\n          <p>").concat(text, "</p>\n        </li>\n        ");
    })
        .join("");
}
function serviceGetWeatherData(capitals) {
    return __awaiter(this, void 0, void 0, function () {
        var responses, data, error_2;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    responses = capitals.map(function (city) { return __awaiter(_this, void 0, void 0, function () {
                        var params, response;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    params = new URLSearchParams({
                                        key: "6410346f89264d6e919165208231505",
                                        q: city,
                                        lang: "uk",
                                    });
                                    return [4 /*yield*/, fetch("http://api.weatherapi.com/v1/current.json?".concat(params))];
                                case 1:
                                    response = _a.sent();
                                    if (!response.ok) {
                                        throw new Error("Wrong city name");
                                    }
                                    return [2 /*return*/, response.json()];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.allSettled(responses)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, data
                            .filter(function (_a) {
                            var status = _a.status;
                            return status === "fulfilled";
                        })
                            .map(function (el) {
                            if (el.status === "fulfilled") {
                                var _a = __assign({}, el.value.location), _b = _a.name, name_1 = _b === void 0 ? "" : _b, _c = _a.country, country = _c === void 0 ? "" : _c;
                                var _d = __assign({}, el.value.current), _e = _d.temp_c, temp_c = _e === void 0 ? 0.0 : _e, _f = _d.condition, _g = _f === void 0 ? {} : _f, _h = _g.icon, icon = _h === void 0 ? "" : _h, _j = _g.text, text = _j === void 0 ? "" : _j;
                                return { name: name_1, country: country, temp_c: temp_c, icon: icon, text: text };
                            }
                        })];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function getFormData(data) {
    return new FormData(data)
        .getAll("country")
        .map(function (el) { return el.toString().trim(); })
        .filter(function (el) { return el !== ""; });
}
function serviceGetCapitals(countries) {
    return __awaiter(this, void 0, void 0, function () {
        var responses, data, error_3;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    responses = countries.map(function (country) { return __awaiter(_this, void 0, void 0, function () {
                        var response;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, fetch("https://restcountries.com/v3.1/name/".concat(country))];
                                case 1:
                                    response = _a.sent();
                                    if (!response.ok) {
                                        throw new Error("Wrong country name");
                                    }
                                    return [2 /*return*/, response.json()];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.allSettled(responses)];
                case 1:
                    data = _a.sent();
                    return [2 /*return*/, (data
                            .filter(function (_a) {
                            var status = _a.status;
                            return status === "fulfilled";
                        })
                            .map(function (el) { return (el.status === "fulfilled" ? el.value[0].capital[0] : ""); }))];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
