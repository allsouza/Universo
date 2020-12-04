import React from 'react';
import { connect } from 'react-redux';

function History({language}) {
    return(
        <div className="history">
            {txt.body[language]}
        </div>
    )
}

const txt = {
    body: [
        <section>
            <h1>Pathfinder History</h1>
            <p>
                Who started Pathfinders?  The short answer is that no one person did, but rather that a diverse group of youth-focused, God-loving, ministry-minded individuals in various location created "Pathfinder-like" clubs in various locations that eventually grew into the ministry we now know as Pathfinders.
            </p>
            <h2>Development</h2>
            <p>
                The first Pathfinder Club of record was in Anaheim, California directed by John McKim and Willa Steen.  This club began in the late 1920's and ran through the 1930's.   In 1944 McKim died and the Steens had moved.  In 1930 Lester and Ione Martin with co-directors Theron & Ethel Johnston began a club in Santa Ana, California.
            </p>
            <p>
                Both of these first clubs were in the Southeastern California Conference and encouraged by Youth Director Elder Guy Mann and his associate Laurance A. Skinner.  For several years there were no clubs of record.
            </p>
            <h2>Organization</h2>
            <p>
                In 1946 John H. Hancock, then the youth director for Southeastern California Conference got a club going in Riverside, California.  John designed the Pathfinder triangle emblem and got a ministerial student, Francis Hunt to direct the club.   Both John and his wife Helen Hancock taught honors.
            </p>
            <p>
                By 1947-48 Southern California Conference began having Pathfinder clubs - the first at Glendale, with Lawrence Paulson as director.  About that same time, the Central California Conference, under the direction of Youth Director Henry T. Bergh, began their Pathfinder program -- starting 23 clubs that first year.
            </p>
            <h2>Becoming official</h2>
            <p>
                Beginning with the God-directed program, called Pathfinder Clubs, in California, the General Conference of the Seventh-day Adventist church adopted the program.  It thus, in 1950, became an official worldwide organization of the Adventist church, and grew rapidly.
            </p>
            <p>
                Pathfinders is now a global ministry affecting thousands (if not millions) of young people worldwide.
            </p>
        </section>,
        <section>
            <h1>História dos Desbravadores</h1>
            <p>
                O nome Desbravadores foi usado por Theron Johnston, em 1930, quando organizou um clube em sua casa na cidade Santa Ana, Califórnia, nos Estados Unidos. Não recebeu apoio e acabou abandonando a idéia.
            </p>
            <h2>Desenvolvimento</h2> 
            <p>
                Já em 1940, a Associação do Sudoeste da Califórnia chamou o seu acampamento de "Acampamento de Desbravadores Jovens Missionários Voluntários". Nessa época, também surgiu um clube organizado pelo pastor Laurence Skinner com o nome "Locomotiva".
            </p>
            <p>
                O clube começou a tomar corpo a partir de 1946, com a liderança do pastor John Hancock, que era diretor de jovens da Associação do Sudoeste da Califórnia. Aproveitando o nome do acampamento da Associação, chamaram de "Clube dos Desbravadores Jovens Missionários Voluntários".
            </p>
            <h2>Organização</h2>
            <p>
                Em 1946, o próprio pastor Hancock desenhou o emblema em forma de triângulo, que ainda é usado em todo o mundo.
            </p>
            <p>
                Em 1947, a Associação Geral pediu à União do Pacífico para desenvolver a Organização do Clube de Desbravadores. O pastor J. R. Nelson coordenou este trabalho. Em seguida, Lawrence Paulson escreveu os primeiros manuais de orientação. Em maio de 1949, o pastor Henry Berg, mesmo não sendo músico, compôs o Hino dos Desbravadores.
            </p>
            <h2>Oficialização</h2>
            <p>
                Em 1950 o departamento de Jovens da Associação Geral adotou oficialmente o "Clube de Desbravadores Jovens Missionários Voluntários" como um programa mundial. Em 1952 o Hino dos Desbravadores foi oficializado e passou a fazer parte do programa.
            </p>
            <p>
                O clube de Desbravadores agora é um movimento global afetando milhares senão milhões de jovens pelo mundo.
            </p>

        </section>
    ]
}

const mSTP = state => ({
    language: state.ui.language
})

export default connect(mSTP)(History)