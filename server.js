var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','index.html'));
});

app.get('/:articlename',function(req,res){
    var articlename=req.params.aritclename;
    res.send(createTemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var articles= {
    article1: {
        title:'Article 1',
        heading:'Article One',
        date:'11-03-2018',
        content:`
        This is my First article`
    },
    article2: {
        title:'Article 2',
        heading:'Article One',
        date:'12-03-2018',
        content:`
        This is my Second article`
    },
    article3:{
        title:'Article 3',
        heading:'Article One',
        date:'13-03-2018',
        content:`
        This is my Third article`
    },
}
function createTemplate (data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate = 
        `
        <html>
        <head>
            <title>
               ${title}
            </title>    
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <div>
                    ${heading}
                </div>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
        `;
    return htmlTemplate;
}


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
