import React from 'react';
import { connect } from 'react-redux';

function About({language}) {
    return(
        <div className='about'>
            {texts.body[language]}
        </div>
    )
}

const texts = {
    body: [
        <section className='body'>
            <h1>About Pathfinders</h1>
            <p>
                Pathfinders are a worldwide organization of young people sponsored by the Seventh-day Adventist Church, though young people of any religious persuasion, or none at all, are welcome and encouraged to join the organization.
            </p>
            <p>
                Pathfinders offer a wide range of activities including, but not limited to:
            </p>
            <ul>
                <li>Camping & camping/survival skills</li>
                <li>Grade appropriate leadership training</li>
                <li>Activities promoting community pride & involvement through outreach activities such as helping in downtown soup kitchens, collecting food for the disadvantaged, cleaning & maintaining city and county parks, visiting and encouraging the elderly, and MANY more</li>
                <li>Interactive training in a variety of recreational, artistic, nature, conservation, vocational, and outreach areas, with awards (honors) given for successful completion of the interactive training modules</li>
                <li>Personal care and encouragement by a caring staff member! While many school classrooms have 10-30 students per teacher, Pathfinders offers AT LEAST a 1 staff member to every 5 Pathfinder ratio!</li>
            </ul>
            <h1>Club Universo</h1>
            
        </section>,
        <section className='body'>
            <h1>Quem são os desbravadores?</h1>
            <p>
                Meninos e meninas com idades entre 10 e 15 anos, de diferentes classes sociais, cor, religião. Reúnem-se, em geral, dois fins de semana por mês para aprender a desenvolver talentos, habilidades, percepções e o gosto pela natureza.
            </p>
            <p>
                Vibram com atividades ao ar livre. Gostam de acampamentos, caminhadas, escaladas, explorações nas matas e cavernas. Sabem cozinhar ao ar livre, fazendo fogo sem fósforo. Demonstramos habilidade com a disciplina através de ordem unida e têm a criatividade despertada pelas artes manuais. Combatem, também, o uso do fumo, álcool e drogas.
            </p>
            <p>
                Trabalham em equipe procurando sempre serem úteis à comunidade. Prestam, também, socorro em calamidades e participam ativamente de campanhas comunitárias para ajudar pessoas carentes. Em tudo o que fazem procuram desenvolver amor a Deus e à Pátria e, além disso, fazem muitos amigos!
            </p>
            <p>
                O Clube de Desbravadores está presente em mais de 160 países, com 90.000 sedes e mais de 1 milhão e meio de participantes. Existem oficialmente desde 1950, como um programa oficial da Igreja Adventista do Sétimo Dia.
            </p>

            <h1>O Clube Universo</h1>


            
        </section>
    ]
}

const mSTP = state => ({
    language: state.ui.language
})

export default connect(mSTP)(About)