var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.send(path.join(__dirname,'ui','index.html'));
});

app.get('/article',function(req,res){
    res.sendFile(createTemplate(article1));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var article1 = {
    title:'Article 1',
    heading:'Article One',
    date:'11-03-2018',
    content:`
    <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <div>
                Article 1    
            </div>
            <div>
                11-03-2018
            </div>
            <div>
                This is my first article :)
            </div>
    </div>`
};
function createTemplate (data)
{
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    var htmlContent = 
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
}


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
