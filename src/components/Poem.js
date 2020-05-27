import React from 'react'
import { Typography } from 'antd';
import PropTypes from 'prop-types';

const { Title, Text } = Typography

function Poem(props) {
    return (
        <div>
            {
                props.poems.map((poem, index) => {
                    return (
                        <div key={index} >
                            <Title level={3}>{poem.title}</Title>
                            <Text className="poem">{poem.content}</Text>
                            <Text type='secondary' className='author'>{poem.poet.name}</Text>
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
