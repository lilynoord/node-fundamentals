const express = require("express");
const app = express();
app.listen(3000, function () {
	console.log("App on port 3000");
});

app.get("/mean", function (req, res) {
	let nums = req.query.nums.split(",");
	let n = 0;
	let i = 0;
	nums.forEach((e) => {
		n += Number(e);
		i++;
	});
	n = n / i;
	let result = {
		operation: "mean",
		result: n,
	};
	return res.send(result);
});
