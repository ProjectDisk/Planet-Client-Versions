const web = require("express");
const corrosion = require("corrosion");

const proxyC = new corrosion({
    prefix: "/proxy/corrosion/go/",
    codec: "plain"
});

const site = web();

site.use("/", web.static(__dirname + "/visual"));
site.use("/", (req, res) => {
    if (req.url.startsWith("/proxy/corrosion/go/")) return proxyC.request(req, res);
    req.pathname = req.url.split('#')[0].split('?')[0];
    req.query = {};
});

site.listen(process.env.PORT || 8080);