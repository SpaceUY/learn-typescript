"use strict";
const app = {};
app.get((req, res) => {
    const user = req.user;
    res.send(user.firstName);
});
