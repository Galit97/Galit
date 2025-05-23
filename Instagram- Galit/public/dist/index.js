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
        while (_) try {
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
function handleSendPost(event) {
    var _a;
    return __awaiter(this, void 0, void 0, function () {
        var form, title, text, imageFile, reader;
        var _this = this;
        return __generator(this, function (_b) {
            event.preventDefault();
            form = event.target;
            title = form.elements.namedItem('title').value;
            text = form.elements.namedItem('text').value;
            imageFile = (_a = form.elements.namedItem('image').files) === null || _a === void 0 ? void 0 : _a[0];
            if (!imageFile) {
                console.error('Image file is required');
                return [2 /*return*/];
            }
            reader = new FileReader();
            reader.onload = function (loadEvent) { return __awaiter(_this, void 0, void 0, function () {
                var imageBase64, response, error_1;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            imageBase64 = (_a = loadEvent.target) === null || _a === void 0 ? void 0 : _a.result;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 4, , 5]);
                            console.log('Sending post:', { title: title, text: text, imageBase64: imageBase64 });
                            return [4 /*yield*/, fetch('http://localhost:3000/api/add-post', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ title: title, text: text, image: imageBase64 })
                                })];
                        case 2:
                            response = _b.sent();
                            if (!response.ok)
                                throw new Error('Failed to add post');
                            console.log('Post added successfully!');
                            form.reset();
                            return [4 /*yield*/, fetchPosts()];
                        case 3:
                            _b.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            error_1 = _b.sent();
                            console.error('Error sending post:', error_1);
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            }); };
            reader.readAsDataURL(imageFile);
            return [2 /*return*/];
        });
    });
}
function fetchPosts() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, feedElement, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/api/get-posts')];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    feedElement = document.getElementById("feed");
                    if (!feedElement)
                        throw new Error("Feed element not found");
                    if (data.posts.length === 0)
                        return [2 /*return*/];
                    renderPosts(data.posts);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error("Error fetching posts:", error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderPosts(posts) {
    var feedElement = document.getElementById('feed');
    if (!feedElement)
        throw new Error('Feed element not found');
    var htmlPosts = posts.map(function (post) {
        return renderPost(post);
    }).filter(function (post) { return post !== null; }).join('');
    feedElement.innerHTML = htmlPosts;
}
function renderPost(post) {
    return "\n        <div class=\"post\" id=\"post-" + post.id + "\">\n            <h3 id=\"title-" + post.id + "\">" + post.title + "</h3>\n            <img src=\"" + post.image + "\" alt=\"Image\" id=\"image-" + post.id + "\" />\n            <p id=\"text-" + post.id + "\">" + post.text + "</p>\n            <button onclick=\"handleEditTitle('" + post.id + "')\">Edit Title</button>\n            <button onclick=\"handleEditText('" + post.id + "')\">Edit Text</button>\n            <button onclick=\"handleEditImage('" + post.id + "')\">Edit Image</button>\n            <button onclick=\"handleDeletePost('" + post.id + "')\">Delete</button>\n        </div>\n    ";
}
function handleEditTitle(id) {
    var _this = this;
    try {
        var titleElement_1 = document.getElementById("title-" + id);
        if (!titleElement_1)
            throw new Error('Title element not found');
        titleElement_1.contentEditable = 'true';
        titleElement_1.focus();
        titleElement_1.addEventListener("blur", function () { return __awaiter(_this, void 0, void 0, function () {
            var title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = titleElement_1.innerText;
                        titleElement_1.contentEditable = 'false';
                        return [4 /*yield*/, updatePost(id, { title: title })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, { once: true });
    }
    catch (error) {
        console.error('Error:', error);
    }
}
function handleEditText(id) {
    var _this = this;
    try {
        var textElement_1 = document.getElementById("text-" + id);
        if (!textElement_1)
            throw new Error('Text element not found');
        textElement_1.contentEditable = 'true';
        textElement_1.focus();
        textElement_1.addEventListener("blur", function () { return __awaiter(_this, void 0, void 0, function () {
            var newText;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newText = textElement_1.innerText;
                        textElement_1.contentEditable = 'false';
                        return [4 /*yield*/, updatePost(id, { text: newText })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); }, { once: true });
    }
    catch (error) {
        console.error('Error editing text:', error);
    }
}
function handleEditImage(id) {
    return __awaiter(this, void 0, void 0, function () {
        var newImageFile, reader;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve) {
                        var input = document.createElement('input');
                        input.type = 'file';
                        input.accept = 'image/*';
                        input.onchange = function (event) {
                            var _a;
                            var file = ((_a = event.target.files) === null || _a === void 0 ? void 0 : _a[0]) || null;
                            resolve(file);
                        };
                        input.click();
                    })];
                case 1:
                    newImageFile = _a.sent();
                    if (newImageFile) {
                        reader = new FileReader();
                        reader.onload = function (loadEvent) { return __awaiter(_this, void 0, void 0, function () {
                            var newImageBase64;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        newImageBase64 = (_a = loadEvent.target) === null || _a === void 0 ? void 0 : _a.result;
                                        if (!(typeof newImageBase64 === 'string')) return [3 /*break*/, 2];
                                        return [4 /*yield*/, updatePost(id, { image: newImageBase64 })];
                                    case 1:
                                        _b.sent();
                                        return [3 /*break*/, 3];
                                    case 2:
                                        console.error('Image data is not a valid string.');
                                        _b.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); };
                        reader.readAsDataURL(newImageFile);
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function updatePost(id, updatedFields) {
    return __awaiter(this, void 0, void 0, function () {
        var response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/edit-post", {
                            method: 'PUT',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify(__assign({ id: id }, updatedFields))
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error('Failed to update post');
                    console.log("Post with ID " + id + " updated successfully, title: " + updatedFields.title + ", text: " + updatedFields.text + ", image: " + updatedFields.image);
                    return [4 /*yield*/, fetchPosts()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error('Error updating post:', error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleDeletePost(id) {
    return __awaiter(this, void 0, void 0, function () {
        var response, _a, _b, _c, feedElement, postElement, error_4;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    console.log("Deleting post with ID:", id);
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, fetch("http://localhost:3000/api/delete-post", {
                            method: 'DELETE',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ id: id })
                        })];
                case 2:
                    response = _d.sent();
                    if (!!response.ok) return [3 /*break*/, 4];
                    _b = (_a = console).error;
                    _c = ['Failed to delete post. Server response:'];
                    return [4 /*yield*/, response.json()];
                case 3:
                    _b.apply(_a, _c.concat([_d.sent()]));
                    throw new Error('Failed to delete post');
                case 4:
                    console.log("Post with ID " + id + " deleted successfully");
                    feedElement = document.getElementById("feed");
                    postElement = document.getElementById("post-" + id);
                    if (feedElement && postElement) {
                        feedElement.removeChild(postElement);
                    }
                    if (feedElement && feedElement.children.length === 0) {
                        feedElement.innerHTML = "<p>No posts available.</p>";
                    }
                    return [3 /*break*/, 6];
                case 5:
                    error_4 = _d.sent();
                    console.error('Error deleting post:', error_4);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
fetchPosts();
