const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {

  res.sendfile(__dirname + '/index.html');

});

app.listen(PORT, () => {

  console.log(`App up at port ${PORT}`);

});
