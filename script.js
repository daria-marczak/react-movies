var movies = [
	{
		id: 1,
		title: "Harry Potter",
		duration: "2h 39m",
		desc: "Story about magic and how the evil is always defeated by the good",
		poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg",
		mainCharacter: "Harry Potter",
		director: "	Chris Columbus"
	},
	{
		id: 2,
		title: "Lion King",
		duration: "1h 29m",
		desc: "Your favourite childhood movie",
		poster: "http://1.fwcdn.pl/po/68/78/6878/6927221.3.jpg",
		mainCharacter: "Simba",
		director: "Rob Minkoff, Roger Allers"
	},
	{
		id: 3,
		title: "The Secret Life of Walter Mitty",
		duration: "1h 54m",
		desc: "Ben Stiller goes on an adventure",
		poster: "http://1.fwcdn.pl/po/75/87/107587/7572051.3.jpg",
		mainCharacter: "Walter Mitty",
		director: "Ben Stiller"
	},
	{
		id: 4,
		title: "Spotlight",
		duration: "2h 8m",
		desc: "Denonciation of catholic church",
		poster: "https://upload.wikimedia.org/wikipedia/en/f/f3/Spotlight_%28film%29_poster.jpg",
		mainCharacter: "Mike Rezendes",
		director: "Tom McCarthy"
	}
];
var movieElements = movies.map(function(movie) {
	return React.createElement("li", {key: movie.id},
		React.createElement("h2", {}, movie.title),
		React.createElement("p", {}, movie.desc),
		React.createElement("p", {}, movie.duration),
		React.createElement("img", {src: movie.poster, alt: "poster"}),
		React.createElement("p", {}, movie.mainCharacter),
		React.createElement("p", {}, movie.director)
	);
});

var element =
	React.createElement("div", {},
		React.createElement("h1", {}, "Movie list"),
		React.createElement("ul", {}, movieElements)
	);

ReactDOM.render(element, document.getElementById("app"));
