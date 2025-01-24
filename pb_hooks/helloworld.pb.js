/// <reference path="../data/types.d.ts" />

routerAdd("GET", "/hello", (e) => {
    return e.string(200, "Online")
})