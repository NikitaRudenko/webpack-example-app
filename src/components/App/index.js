import './assets/style.styl';

export class App extends React.Component {
	render() {
		return (
			<div className='app'>
				{this.props.children}
			</div>
		);
	}
}
