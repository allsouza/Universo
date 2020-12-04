import React from 'react'
import { connect } from 'react-redux'

function Ideals({language}) {
    return (
        <div className='ideals'>
            <h1>{txts.title[language]}</h1>
            {txts.song[language]}
            {txts.pledge[language]}
            {txts.law[language]}
            {txts.aim[language]}
            {txts.motto[language]}
        </div>
    )
}

const txts = {
    title: ['Pathfinder Ideals', 'Ideais dos Desbravadores'],
    pledge: [
        <section>
            <h2>Pledge</h2>
            <p>
                By the grace of God, I will be pure and kind and true.  I will keep the Pathfinder Law.  I will be a servant of God and a friend to man.
            </p>
        </section>,
        <section>
            <h2>Voto</h2>
            <p>Pela graça de Deus, serei puro, bondoso e leal; guardarei a lei do Desbravador, serei servo de Deus e amigo de todos.</p>
        </section>
    ],
    law: [
        <section>
            <h2>Law</h2>
            <ol>
                The Pathfinder law is for me to:
                <li>Keep the morning watch</li>
                <li>Do my honest part</li>
                <li>Care for my body</li>
                <li>Keep a level eye</li>
                <li>Be courteous and obedient</li>
                <li>Walk softly in the sanctuary</li>
                <li>Keep a song in my heart</li>
                <li>Go on God's errands</li>
            </ol>
        </section>,
        <section>
            <h2>Lei</h2>
            <ol>
                A lei dos Desbravadores ordena-me:
                <li>Observar a devoção matinal</li>
                <li>Cumprir fielmente a parte que me corresponde</li>
                <li>Cuidar de meu corpo</li>
                <li>Manter a consciência limpa</li>
                <li>Ser cortês e obediente</li>
                <li>Andar com reverência na casa de Deus</li>
                <li>Ter sempre um cântico no coração</li>
                <li>Ir aonde Deus mandar</li>
            </ol>
        </section>
    ],
    aim: [
        <section>
            <h2>Aim</h2>
            <p>The Advent Message to all the world in my generation.</p>
        </section>,
        <section>
            <h2>Alvo</h2>
            <p>A mensagem do advento a todo o mundo na minha geração</p>
        </section>
    ],
    motto: [
        <section>
            <h2>Motto</h2>
            <p>The love of Christ compels us.</p>
        </section>,
        <section>
            <h2>Lema</h2>
            <p>O amor de Cristo me motiva</p>
        </section>
    ],
    song: [
        <section>
            <h2>Pathfinder Song</h2>
            <iframe width="1280" 
                    height="720" 
                    src="https://www.youtube.com/embed/S34YA8COJHY" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
            <p>
                Oh, we are the Pathfinders strong,<br/>
                The servants of God are we,<br/>
                Faithful as we march along,<br/>
                In kindness, truth and purity,<br/>
                A message to tell to the world,<br/>
                A truth that will set us free,<br/>
                King Jesus the Saviour's<br/>
                coming back for you and me.
            </p>
        </section>,
        <section>
            <h2>Hino dos Desbravadores</h2>
            <iframe width="1280" 
                    height="720" 
                    src="https://www.youtube.com/embed/KedTGkblSDU" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
            </iframe>
            <p>
                Nós somos os desbravadores<br/>
                Os servos do Rei dos Reis<br/>
                Sempre avante assim marchamos<br/>
                Fiéis às Suas leis<br/>
                Devemos ao mundo anunciar<br/>
                As novas da salvação<br/>
                Que Cristo virá em breve dar o galardão
            </p>
        </section>
    ]
}

const mSTP = state => ({
    language: state.ui.language
})

export default connect(mSTP)(Ideals)