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

/* eslint-env jest */
import DeferredLoader from './DeferredLoader.js';

import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

configure({
	adapter: new Adapter()
});

/**
 * Tests for the deferred loader component.
 */
describe('DeferredLoader', function() {

	test('Loader value true after 1 second', function() {
		jest.useFakeTimers();

		const wrapper = mount(
			<DeferredLoader>
				{loading => loading ? (
					<div>Loading...</div>
				) : null}
			</DeferredLoader>
		);
		expect(wrapper.find('div').exists()).toBe(false);
		jest.advanceTimersByTime(1000);
		wrapper.update();
		expect(wrapper.find('div').exists()).toBe(true);

		jest.useRealTimers();
	});
});
