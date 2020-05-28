import React from 'react'
import PropTypes from 'prop-types';

function Poem(props) {
    return (
        <div>
            {props.loading ?
                <div>
                    <h4 className="bp3-heading bp3-skeleton">Peom Title  liver of the calf of the calf  it is a huge calf's liver of the calf </h4>
                    <div className="bp3-skeleton poem">it is a huge calf's liver of <br/>the calf we slaughtered yesterday assures me the butcher of my favorite butcher shop but I didn't go to the butcher shop and neither do i have a favorite butcher shop it is my tongue that has fallen out of my mouth this huge liver i'm putting it back pushing it into my throat i give up when i realize that it is choking me my tongue falls out again hangs onto me creeps up my neck licks my body through my tongue through my tongue through my most grievous tongue it is a huge calf's liver of the calf we slaughtered yesterday assures me the butcher of my favorite butcher shopit is a huge</div>
                    <div className='bp3-skeleton bp3-text-muted author'>Author's Name</div>
                </div> :
                props.poems.map((poem, index) => {
                    const poemz = poem.content.replace(/(\n)/g, '<br>');
                    return (
                        <div key={index} >
                            <h3 className="bp3-heading">{poem.title}</h3>
                            <div className="poem">{poemz}</div>
                            <div className='bp3-text-muted author'>{poem.poet.name}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

Poem.propTypes = {
    poems: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}

export default Poem
