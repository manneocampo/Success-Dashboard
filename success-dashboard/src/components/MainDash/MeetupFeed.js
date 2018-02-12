import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 300,
  width: 'calc(33% - 40px)',
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

export default class MeetupFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.meetup.com1/find/groups2?zip=11211&radius=1&category=253&order=members4")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
		    if (error) {
		      return <Paper style={style} zDepth={5} rounded={false}>
		      	<h3>Meetup Feed Error: {error.message}</h3>
		      	</Paper>;
		    } else if (!isLoaded) {
		      return <Paper style={style} zDepth={5} rounded={false}>
		      	<h1>Meetups Loading...</h1>
		      	</Paper>;
		    } else {
		      return (
		      	<Paper style={style} zDepth={5} rounded={false}>
		      	<p>Testing</p>
		      	</Paper>
		        // <ul>
		        //   {items.map(item => (
		        //     <li key={item.name}>
		        //       {item.name} {item.price}
		        //     </li>
		        //   ))}
		        // </ul>
		      );
		    }
  	}
}




    // fetch("https://api.meetup.com1/find/groups2?zip=11211&radius=1&category=253&order=members4")



// -------------------------------------------------------------------------------------

// export default class MeetupFeed extends React.Component {
// 	displayMeetups() {
//         // $("#meetupDisplay").empty();
//         var queryURL = "https://api.meetup.com1/find/groups2?zip=11211&radius=1&category=253&order=members4";
//         $.ajax({
//             url: queryURL,
//             crossDomain: true,
//             dataType: 'jsonp',
//             method: "GET"
//         }).done(function(response) {
//             var data = response.data;
//             console.log(data[0].name);
//             console.log(response);

//             for (var i = 0; i < data.length; i++){
//                var meetupDiv = $("<div>");

//                var meetupName = $("<p>").html("<span class='textBold'>Meetup Title: </span>" + data[i].name);
//                meetupDiv.append(meetupName);

//                var meetupLocation = $("<p>").html("<span class='textBold'>Location: </span>" + data[i].localized_location);
//                meetupDiv.append(meetupLocation);

//                var meetupLink = $("<p>").html("<span class='textBold'>Website: </span><a href='" + data[i].link + "' target= '_blank'>" + data[i].link + "</a>");
//               meetupDiv.append(meetupLink);
//               meetupDiv.append(meetupLink, $("<hr>"));

//                $("#meetupDisplay").append(meetupDiv);
//             }
//         })
//     }

// 	render() {
// 		return(

// 		)
// 	}
// };
