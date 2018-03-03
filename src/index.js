import {App} from './components/App';
import {Home} from './pages';

const Wrapper = () => {
	return (
		<App>
			<Home />
		</App>
	);
};

ReactDOM.render(<Wrapper />, document.getElementById('app'));
