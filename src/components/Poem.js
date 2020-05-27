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

Poem.defaultProps = {
    poems: [
        {
            "title": "At What Auspicious Hour Did You Stick To Me Like A Bindi , O Dark One?",
            "content": "At what auspicious hour did you stick to me like a bindi, O dark one?\nLife of my life, I won't forsake you even for a moment, my slim beloved!\n\nAt the door, I find you leaning, and at the windows, I see you sitting near.\nI keep running into you, in any street I take,\nsweetheart, sweeter than the elixir of immortality!\n\nAt what auspicious hour did you stick to me like a bindi, O dark one?\nLife of my life, I won't forsake you even for a moment, my slim beloved!\n\nWhen I prepare to eat, I find you close, and near bed as I prepare to sleep.\nWhen I am on my way to Vrindavan, I find you embracing me!\n\nAt what auspicious hour did you stick to me like a bindi, O dark one?\nLife of my life, I won't forsake you even for a moment, my slim beloved! \n\n'You are loved by Nanda's child!' my in-laws cruelly mock me.\nWhen I go to fill water at the banks of Yamuna, you toy with my skirt!\n\nAt what auspicious hour did you stick to me like a bindi, O dark one?\nLife of my life, I won't forsake you even for a moment, my slim beloved!\n\nHow he loves to dog the ones he loves, my cherished connoisseur,\nIt is good to attain Narsaiyya's lord; he occupies the lotus of my heart!\n\nAt what auspicious hour did you stick to me like a bindi, O dark one?\nLife of my life, I won't forsake you even for a moment, my slim beloved!",
            "url": "https://www.poemist.com/narsinh-mehta/at-what-auspicious-hour-did-you-stick-to-me-like-a-bindi-o-dark-one",
            "poet": {
                "name": "Narsinh Mehta",
                "url": "https://www.poemist.com/narsinh-mehta"
            }
        },
        {
            "title": "Wise I",
            "content": "WHYS (Nobody Knows\n    The Trouble I Seen)\n    Traditional\n\nIf you ever find\nyourself, some where\nlost and surrounded\nby enemies\nwho won't let you\nspeak in your own language\nwho destroy your statues\n&amp; instruments, who ban\nyour omm bomm ba boom\nthen you are in trouble\ndeep trouble\nthey ban your\nown boom ba boom\nyou in deep deep\ntrouble\n\nhumph!\n\nprobably take you several hundred years\nto get \nout!",
            "url": "https://www.poemist.com/amiri-baraka/wise-i",
            "poet": {
                "name": "Amiri Baraka",
                "url": "https://www.poemist.com/amiri-baraka"
            }
        },
        {
            "title": "Oh When Will Autumn Moon And Spring Flowers End",
            "content": "Spring flower autumn moon what time finish?\nPast events know so many\nSmall tower last night again east wind\nOld country cot bear recollect moon bright at\nCarve balustrade marble steps must still remain\nSimply red face change\nFor gentleman can be how much sorrow?\nJust like a river spring water to east flow\t\n Oh when will autumn moon and spring flowers end?\nHow many past events I've known.\nThe east wind buffeted my room again last night,\nI cannot bear to remember the bright moon of the old country.\nThe marble steps and carved balustrades must still be there,\nThe people's rosy cheeks are all that's changed.\nHow much sorrow can one man have to bear?\nAs much as a river of spring water flowing east.",
            "url": "https://www.poemist.com/li-yu/oh-when-will-autumn-moon-and-spring-flowers-end",
            "poet": {
                "name": "Li Yu",
                "url": "https://www.poemist.com/li-yu"
            }
        },
        {
            "title": "Night In New York",
            "content": "Haunted by unknown feet—\nWays of the midnight hour!\nStrangely you murmur below me,\nStrange is your half-silent power.\nPlaces of life and of death,\nNumbered and named as streets,\nWhat, through your channels of stone,\nIs the tide that unweariedly beats?\nA whisper, a sigh-laden breath,\nIs all that I hear of its flowing.\nFootsteps of stranger and foe—\nFootsteps of friends, could we meet—\nAlike to me in my sorrow;\nAlike to a life left alone.\nYet swift as my heart they throb,\nThey fall thick as tears on the stone:\nMy spirit perchance may borrow\nNew strength from their eager tone. \nStill ever that slip and slide\nOf the feet that shuffle or glide,\nAnd linger or haste through the populous waste\nOf the shadowy, dim-lit square!\nAnd I know not, from the sound,\nAs I sit and ponder within,\nThe goal to which those steps are bound,—\nOn hest of mercy, or hest of sin,\nOr joy's short-measured round;\nYet a meaning deep they bear\nIn their vaguely muffled din. \nRoar of the multitude,\nChafe of the million-crowd,\nTo this you are all subdued\nIn the murmurous, sad night-air!\nYet whether you thunder aloud,\nOr hush your tone to a prayer,\nYou chant amain through the modern maze\nThe only epic of our days. \nStill as death are the places of life;\nThe city seems crumbled and gone,\nSunk 'mid invisible deeps—\nThe city so lately rife\nWith the stir of brain and brawn.\nHaply it only sleeps;\nBut what if indeed it were dead,\nAnd another earth should arise\nTo greet the gray of the dawn?\nFaint then our epic would wail\nTo those who should come in our stead.\nBut what if that earth were ours?\nWhat if, with holier eyes,\nWe should meet the new hope, and not fail? \nWeary, the night grows pale:\nWith a blush as of opening flowers\nDimly the east shines red.\nCan it be that the morn shall fulfil\nMy dream, and refashion our clay\nAs the poet may fashion his rhyme?\nHark to that mingled scream\nRising from workshop and mill—\nHailing some marvelous sight;\nMighty breath of the hours,\nPoured through the trumpets of steam;\nAwful tornado of time,\nBlowing us whither it will! \nGod has breathed in the nostrils of night,\nAnd behold, it is day!",
            "url": "https://www.poemist.com/george-parsons-lathrop/night-in-new-york",
            "poet": {
                "name": "George Parsons Lathrop",
                "url": "https://www.poemist.com/george-parsons-lathrop"
            }
        },
        {
            "title": "Korman",
            "content": "(Dedicated to Harvey Korman who died May 29,2008.) \n\nI watched Harvey Korman on the Carol Burnett show.\nThat fantastic program was made many years ago.\nPeople all over the world loved to see him act.\nHe's gone now and nothing can bring him back.\nHe guest starred on the Munsters once or twice.\nWe are saying goodbye to this man who was nice.\nWe've lost this man who was very funny.\nWithout Korman, the world is less sunny.\nHe died at the age of eighty-one.\nI'm sorry that we lost MR.Korman.",
            "url": "https://www.poemist.com/randy-johnson/korman",
            "poet": {
                "name": "Randy Johnson",
                "url": "https://www.poemist.com/randy-johnson"
            }
        }
    ]
}
export default Poem
