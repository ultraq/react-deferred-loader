
import PropTypes from 'prop-types';
import React, {Component} from 'react'; // eslint-disable-line

/**
 * Delay the rendering of a loader animation/component by 1 second, used for not
 * prematurely putting users into the "passive" state of waiting.
 * 
 * @author Emanuel Rabina
 */
export default class DeferredLoader extends Component {

	static propTypes = {
		children: PropTypes.func
	};

	state = {
		showLoader: false,
		timerId: null
	};

	/**
	 * Start counting the second to showing the loader.
	 */
	componentDidMount() {

		this.setState({
			timerId: setTimeout(() => {
				this.setState({
					showLoader: true
				});
			}, 1000)
		});
	}

	/**
	 * Cancel the countdown to showing the loader.
	 */
	componentWillUnmount() {

		let {showLoader, timerId} = this.state;
		if (!showLoader) {
			clearTimeout(timerId);
		}
	}

	/**
	 * @return {*}
	 */
	render() {

		let {children} = this.props;
		let {showLoader} = this.state;

		return showLoader ? children(showLoader) : null;
	}
}
