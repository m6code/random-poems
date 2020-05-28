import React from 'react';
import PropTypes from 'prop-types';

import Poem from './Poem';


function Poemlist(props) {
    return (
        <div>
            {/* Renders a List of Peom  using the props received from App component  */}
            {props.loading ?
                <div>
                <h3 className="bp3-heading bp3-skeleton">Peom Title</h3>
                            <div className="bp3-skeleton poem">Some random long poem content goes here saying blah blah balh balh my tongue falls out of my mouth it is no longer a tongue, it is a huge calf's liver of the calf we slaughtered yesterday assures me the butcher of my favorite butcher shop but I didn't go to the butcher shop and neither do i have a favorite butcher shop it is my tongue that has fallen out of my mouth this huge liver i'm putting it back pushing it into my throat i give up when i realize that it is choking me my tongue falls out again hangs onto me creeps up my neck licks my body through my tongue through my tongue through my most grievous tongue</div>
                            <div className='bp3-skeleton bp3-text-muted author'>Author's Name</div>
                </div> :
                <Poem poems={props.poems}/>
            }
        </div>
    )
}

Poemlist.propTypes = {
    loading: PropTypes.bool.isRequired,
    poems: PropTypes.array.isRequired,
}

export default Poemlist
