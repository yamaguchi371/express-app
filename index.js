var express = require('express');
var ejs = require("ejs");

var app = express();

app.engine('ejs', ejs.renderFile);
app.use(express.static('public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// ※トップページ
app.get('/', (req, res) => {
    var msg = 'This is Express Page!<br>'
        + '※メッセージを書いて送信して下さい。';
    res.render('index.ejs',
        {
            title: 'Index',
            content: msg,
        });
});

// ※otherページ
app.get("/other", (req, res) => {
    var name = req.query.name;
    var pass = req.query.pass;
    var msg = 'あなたの名前は「' + name +
        '」<br>パスワードは「' + pass + '」です。';
    res.render('index.ejs',
        {
            title: 'other',
            content: msg,
            link:{href:'/', text:'※トップに戻る'}
        }
    );
});

app.listen(3000, () => {
    console.log('Server is running!');
})