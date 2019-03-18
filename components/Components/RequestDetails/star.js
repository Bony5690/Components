import React, { Component } from 'react';
import { View, Image,} from 'react-native';

export default class Star extends Component {
	render() {
		const value = this.props.value;
		return (
			<View style={{ width:25, height: 25}}>
				<View style={{position: 'absolute', left: 0, top: 0, bottom: 0, backgroundColor: '#F5A623', width: 25 * value, }}>
					<Image 
						style={{width:25, height: 25}} 
						source={require('../ActiveAssists/Assets/inverse-star.png')} />
				</View>
			</View>
		);
	}
}