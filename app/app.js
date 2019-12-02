const people = [
  {
    title: "Mrs.",
    name: "Sonya",
    surname: "Smith",
    pesel: 66111626126,
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fringilla, diam non tempus vulputate, tellus massa viverra diam, eget scelerisque ipsum ipsum vel sem.",
    avatar: "https://image.flaticon.com/icons/svg/145/145852.svg"
  },
  {
    title: "Mr.",
    name: "Charles",
    surname: "Willard",
    pesel: 53052334461,
    bio:
      "Nullam in dignissim nibh. Sed lorem arcu, consectetur vel posuere quis, cursus sit amet massa. In eleifend ut urna in sodales. Vestibulum viverra lectus in efficitur ultricies.",
    avatar: "https://image.flaticon.com/icons/svg/145/145867.svg"
  },
  {
    title: "Ms.",
    name: "Tina",
    surname: "Robinson",
    pesel: 67032584953,
    bio:
      "Phasellus euismod leo non lacus congue dapibus. Curabitur iaculis faucibus euismod. Vestibulum sem metus, congue at lacinia eget, suscipit at nunc.",
    avatar: "https://image.flaticon.com/icons/svg/145/145862.svg"
  }
];

/* array for gathering data */
let elements = []; 

let newPeople = people.map(p =>  		/* for each person new 'div' element: */
	  <div className="person" key={p.pesel}>   
		    <img src={p.avatar}/>
		    <div>
			      <h1>{p.title} {p.name} {p.surname}</h1>
			      <p>{p.bio}</p>
		    </div>
	  </div> 
);
/* new 'div' elements to array: */
elements.push(newPeople);

/* render header and the whole array: */
ReactDOM.render(
    <React.Fragment>
	    <h1>Meet our new staff:</h1>
      { elements } 		
    </React.Fragment>,
  document.getElementById("app")
);
