import React, { Component } from 'react'
import './App.css'
// eslint-disable-next-line
import { Row, Col, Spin, Skeleton, PageHeader, Divider } from 'antd'


export class App extends Component {

  state = {
    poems: [
      {
        "title": "Je Ne Suis Pas De Ceux Qui Robent La Louange",
        "content": "Je ne suis pas de ceux qui robent la louange, \nFraudant indignement les hommes de valeur,\nOu qui, changeant la noire à la blanche couleur, \nSavent, comme l'on dit, faire d'un diable un ange.\n\nJe ne fais point valoir, comme un trésor étrange, \nCe que vantent si haut nos marcadants d'honneur, \nEt si ne cherche point que quelque grand seigneur \nMe baille pour des vers des biens en contr'change.\n\nCe que je quiers, Gournay, de cette soeur de roi,\nQue j'honore, révère, admire comme toi,\nC'est que de la louer sa bonté me dispense,\n\nPuisqu'elle est de mes vers le plus louable objet :\nCar en louant, Gournay, si louable sujet, \nLe los que je m'acquiers m'est trop grand' récompense.",
        "url": "https://www.poemist.com/joachim-du-bellay/je-ne-suis-pas-de-ceux-qui-robent-la-louange",
        "poet": {
          "name": "Joachim du Bellay",
          "url": "https://www.poemist.com/joachim-du-bellay"
        }
      },
      {
        "title": "Ch 08 On Rules For Conduct In Life - Maxim 78",
        "content": "The padshah is to remove oppressors; the police, murderers; and the qazi to hear complaints about thieves; but two enemies willing to agree to what is right will not apply to him.\n\n         When thou seest that it must be given what is right  \n         Pay it rather with grace than fighting and distressed.  \n         If a man pays not his tax of his own accord  \n         The officer’s man will take it by force.",
        "url": "https://www.poemist.com/saadi-shirazi/ch-08-on-rules-for-conduct-in-life-maxim-78",
        "poet": {
          "name": "Saadi Shirazi",
          "url": "https://www.poemist.com/saadi-shirazi"
        }
      },
      {
        "title": "The Father's House",
        "content": "Here, as in childhood, Brother, no one knows us.   \nAnd someone has died, and someone is not yet   \n\nborn, while our father walks through his church at night   \nand sets all the clocks for spring.  His sleeplessness   \n\nweighs heavy on my forehead, his death almost   \nnothing. in the only letter he wrote to us   \n\nhe says, No one can tell how long it takes a seed   \nto declare what death and lightning told it   \n\nwhile it slept.  But stand at a window long enough,   \nlate enough, and you may some night hear   \n\na secret you'll tomorrow, parallel to the morning,   \ntell on a wide, white bed, to a woman   \n\nlike a sown ledge of wheat.  Or you may never   \ntell it, who lean across the night and miles of the sea,   \n\nto arrive at a seed, in whose lamplit house   \nresides a thorn, or a wee man, carving   \n\na name on a stone, at afluctuating table of water,   \nthe name of the one who has died, the name of the one   \n\nnot born unknown.  Someone has died.  Someone   \nis not yet born.  And during this black interval, \n\nI sweep all three floors of our father's house,   \nand I don't count the broom strokes; I row   \n\nup and down for nothing but love: his for me, and my own   \nfor the threshold, as well as for the woman's name   \n\nI hear while I sweep, as though she swept   \nbeside me, a woman who, if she owns a face at all,   \n\nit is its own changing; and if I know her name   \nI know to say it so softly she need not   \n\nstop her work to hear me.  But when she lies down   \nat night, in the room of our arrival, she'll know   \n\nI called her, though she won't answer, who is on her way   \nto sleep, until morning, which even now,   \n\nis overwhelming, the woman combing her hair opposite   \nthe direction of my departure.   \n\nAnd only now and then do I lean at a jamb   \nto see'if I can see what I thought I heard.   \n\nI heard her ask, My love, why can't you sleep?   \nand answer, Someone has died, and someone   \n\nis not yet born.  Meanwhile, I hear the voices   \nof women telling a story in the round,   \n\nso I sit down on a rain-eaten stoop, by the saltgrasses,   \nand go on folding the laundry I was folding,   \n\nthe everyday clothes of our everyday life, the death   \nclothes wearing us clean to the bone, to the very   \n\nilium crest, where my right hand, this hand, half   \ncrab, part bird, has often come to rest on her,   \n\nwhose name I know.  And because I sat down,   \nI hear their folding sound, and know   \n\nthe tide is rising early, and I can't hope   \nto trap their story told in the round.  But the woman   \n\nwhose name I know says, Sleep, so I lie down   \non the clothes, the folded and unfolded, the life   \n\nand the death.  Ages go by When I wake, the story   \nhas changed the firmament into domain, domain   \n\ninto a house.  And the sun speaks the day,   \nunnaming, showing the story, dissipating the boundaries   \n\nof the telling, to include the one who has died   \nand the one not yet born.  Someone has died   \n\nand someone is not yet born.  How still   \nthis morning grows about the voice of one   \n\nchild reading to another, how much a house   \nis house at all due to one room where an elder   \n\nchild reads to his brother, and that younger   \nknows by heart the brother-voice.  How darker   \n\nother rooms stand, how slow morning comes, collected   \nin a name, told at one sill and listened for   \n\nat the threshold of dew What book is this we read   \ntogether, Brother, and at which window   \n\nof our father's house?  In which upper room?   \nWe read it twice: Once in two voices, to each   \n\nother; once in unison, to children,   \nanimals, and the sun, our star, that vast office   \n\nof love, the one we sit in once, and read   \ntogether twice, the third time bosomed in   \n\nthe future.  So birds may lend their church, sown   \nin air, realized in the body uttering   \n\nwindows, growing rafters, couching seeds.",
        "url": "https://www.poemist.com/li-young-lee/the-fathers-house",
        "poet": {
          "name": " Li-Young Lee",
          "url": "https://www.poemist.com/li-young-lee"
        }
      },
      {
        "title": "Happy forever",
        "content": "When I grow up\r\nI will fly away and disappear\r\nNo longer the unlucky one\r\nLight as feathers \r\nOne day i said \"This is the saddest day of my life\"\r\nBut now I am \r\nHappy forever.",
        "url": "https://www.poemist.com/a-decadent-girl/happy-forever",
        "poet": {
          "name": "A Decadent Girl",
          "url": "https://www.poemist.com/a-decadent-girl"
        }
      },
      {
        "title": "روميو وجوليت - Poem by",
        "content": "أمبتعد وما اقترب الصباح؟ \nكأن الدهر شيمته السماح\nأراعك صائح الطير المغني\nفخلت الليل ينعاه الصباح؟\nترفق لا عدمتك من حبيب \nفليس عليك من رفق جناح \nفذلك البلبل المسكين يبكي \nفيطربه كما ساء النواح \nيرف له وجنح الليل داج \nعلى رمان دوحتنا جناح \nأكنت حسبتها الورقاء حييت ؟\nلقد والله جد بك المزاح \nقليلا ما أقمت فقف مليا \nقبيل الفجر لا طلع الصباح",
        "url": "https://www.poemist.com/aabas-alaakad/romyo-ojolyt-poem-by",
        "poet": {
          "name": "عباس العقاد",
          "url": "https://www.poemist.com/aabas-alaakad"
        }
      }
    ]
  }

  componentDidMount (){
    console.log(this.state.poems);
  }

  render() {
    return (
      <div className='main'>
        <Row gutter={8} >
          <Col className="gutter-row" span={24}>
            <PageHeader
              className="site-page-header"
              title="Random Poems"
            />
            <Divider> Poems </Divider>
            {/* <Skeleton active /> */} {/* Should Render if poems is loading */}
            {this.state.poems.map((poem, index) => {
              return (
                <h1>{poem.title}</h1>
              )
            }
            )}
          </Col>
        </Row>
      </div>
    )
  }
}

export default App
