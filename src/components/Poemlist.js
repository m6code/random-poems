import React from 'react';
import PropTypes from 'prop-types';

import Poem from './Poem';


function Poemlist(props) {
    return (
        <Poem
            poems={props.poems}
            loading={props.loading} />
    )
}

Poemlist.propTypes = {
    loading: PropTypes.bool.isRequired,
    poems: PropTypes.array.isRequired,
}

export default Poemlist
