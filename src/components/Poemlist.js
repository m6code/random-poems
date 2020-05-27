import React from 'react';
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';

import Poem from './Poem';


function Poemlist(props) {
    return (
        <div>
            {/* Renders a List of Peom  using the props received from App component  */}
            {props.loading ?
                <Skeleton active /> :
                <Poem />
            }
            {/* <Poem poems={props.poems} /> */}
        </div>
    )
}

Poemlist.propTypes = {
    loading: PropTypes.bool.isRequired,
    poems: PropTypes.array.isRequired,
}

export default Poemlist
