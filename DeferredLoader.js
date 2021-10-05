/* 
 * Copyright 2020, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

	static defaultProps = {
		children: () => {}
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

		return children(showLoader);
	}
}
