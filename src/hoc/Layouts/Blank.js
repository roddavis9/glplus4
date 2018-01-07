import React, {Component} from 'react';

class Blank extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }

    componentDidMount(){
        $('body').addClass('gray-bg');
    }

    componentWillUnmount(){
        $('body').removeClass('gray-bg');
    }
}

export default Blank






