import React from 'react'
import PropTypes from 'prop-types';

function Poem(props) {
    return (
        <div>
            {
                props.poems.map((poem, index) => {
                    return (
                        <div key={index} >
                            <h3 className="bp3-heading">{poem.title}</h3>
                            <div className="poem">{poem.content}</div>
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
}

export default Poem
