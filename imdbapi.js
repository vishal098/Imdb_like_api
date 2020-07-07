const express = require("express")

const fs = require("fs")

const morgan = require("morgan")

const bodyparser = require("body-parser")

const app = express()

app.use(express.json())

app.use(morgan('dev'))


// get##################################################################
app.get('/',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	res.send(convert)
});

app.get('/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			res.send(i)
		}
	}
});


app.get('/year/:year',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	let list1=[]
	for (i of convert){
		if(i.year==req.params.year){
			list1.push(i)
		}
	}res.send(list1)
});


app.get('/director/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	let list1=[]
	for (var i of convert){
		director=i.director
		for(j of director){
			if(j==req.params.name){
				list1.push(i)
			}
		}
	}res.send(list1)
});


app.get('/gener/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	let list1=[]
	for (var i of convert){
		gener=i.gener
		for(j of gener){
			if(j==req.params.name){
				list1.push(i)
			}
		}
	}res.send(list1)
});


app.get('/language/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	let list1=[]
	for (var i of convert){
		language=i.language
		for(j of language){
			if(j==req.params.name){
				list1.push(i)
			}
		}
	}res.send(list1)
});


app.get('/country/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	let list1=[]
	for (var i of convert){
			if(i.country==req.params.name){
				list1.push(i)
			}
	}res.send(list1)
});

// update################################################

app.put('/edit/name/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			i.name="updated"
		}
	}res.send(convert)
	// fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)
});


app.put('/edit/year/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			i.year="1999"
		}
	}res.send(convert)
	// fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)
});

app.put('/edit/dir/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			let director = i.director
			director.push("vishal")
		}
	}
	res.send(convert)
	// fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)
});

app.put('/edit/gener/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			let gener = i.gener
			gener.push("comedy")
		}
	}
	res.send(convert)
	// fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)
});


app.put('/edit/language/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			let language = i.language
			language.push("sanskrit")
		}
	}
	res.send(convert)
	// fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)
});

// post############################################################################



app.post('/add/movie',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	let post1 = {
        "name": "vishal",
        "year": "1971",
        "time": "122 min",
        "bio": "The story of a terminally ill man who wishes to live life to the full before the inevitable occurs, as told by his best friend.",
        "director": [
            "Hrishikesh Mukherjee"
        ],
        "gener": [
            "Drama",
            "Musical",
            "12 March 1971 (India)\n"
        ],
        "language": [
            "sanskrit"
        ],
        "country": "pagalkhana",
        "link": "https://m.loda-amazon.com/images/M/MV5BYmYzNmM2MDctZGY3Yi00NjRiLWIxZjctYjgzYTcxYTNhYTMyXkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_UY268_CR3,0,182,268_AL__QL50.jpg"
    }
    convert.push(post1)
    res.send(convert)
	// fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)

})


// delete##########################################################################



app.delete('/delete/name/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			delete i.name
		}
	}
	res.send(convert)
	fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)

});


app.delete('/delete/year/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			delete i.year
		}
	}
	res.send(convert)
	fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)

});


app.delete('/delete/time/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			delete i.time
		}
	}
	res.send(convert)
	fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)
});


app.delete('/delete/bio/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			delete i.bio
		}
	}
	res.send(convert)
	fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)
});


app.delete('/delete/director/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			let director=i.director
			director.splice('')
		}
	}
	res.send(convert)
	// fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)
});

app.delete('/delete/language/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			let language=i.language
			language.splice('')
		}
	}
	res.send(convert)
	// fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)
});



app.delete('/delete/country/:name',(req,res) => {
	let convert = JSON.parse(fs.readFileSync("imdb.json"))
	for (i of convert){
		if(i.name==req.params.name){
			delete i.country
		}
	}
	res.send(convert)
	fs.writeFileSync("imdb.json",JSON.stringify(convert,null,4),null)
});


port = 8080

app.listen(port,()=>{
	console.log(`${port} is working`)
});