import './TripStyles.css';
import TripData from './TripData';
import Trip1 from '../assets/5.jpg';
import Trip2 from '../assets/8.jpg';
import Trip3 from '../assets/6.jpg';

function Trip() {
	return (
		<div className="trip">
			<h1>Recent Trips</h1>
			<p>You can discover unique destination using Google Maps.</p>
			<div className="tripcard">
				<TripData
					image={Trip1}
					heading="Trip in Indonesia"
					text="Indonesia, officially the public of Indonesia is a country in Southeast Asio and Oceania between the indian and Pacific oceans it consists of over 17,000 istords, including Sumatra, Jova, Sulawesi and parts of Borneo and New Guinea"
				/>
				<TripData
					image={Trip2}
					heading="Trip in Malasya"
					text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo It's known for its beaches, rainforests and mix of Malay Chinese, indian and European cultural influences"
				/>
				<TripData
					image={Trip3}
					heading="Trip in France"
					text="France in Western Europe encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower"
				/>
			</div>
		</div>
	);
}

export default Trip;
