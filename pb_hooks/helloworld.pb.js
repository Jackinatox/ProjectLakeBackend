/// <reference path="../data/types.d.ts" />


routerAdd("GET", "/status", (e) => {
    return e.string(200, "Hello world!")
})


onRecordAfterCreateSuccess((e) => {
    // e.app
    // e.collection
    // e.record
    // and all RequestEvent fields...
    $app.logger().warn("trying to craete pt user");

    fetch(process.env.PT_PANEL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Indicate the format of the request body
          },
    }).

    e.next()
}, "users");


onRecordCreateRequest((e) => {
    $app.logger().warn("before" + JSON.stringify(e.record));

    e.next()
}, "users")