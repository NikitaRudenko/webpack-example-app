import {App} from './components/App';
import {Home} from './pages';

const Wrapper = () => {
	return (
		<App>
			<Home />
		</App>
	);
};

render();
module.hot && module.hot.accept(() => render());

function render() {
	ReactDOM.render(<Wrapper />, document.getElementById('app'));
}
