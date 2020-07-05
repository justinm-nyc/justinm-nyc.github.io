import React, { Component } from 'react';
import Project from '../project.js';
import screenshot1 from './jeopardy-helper-screenshots/screenshot1.png';
import screenshot2 from './jeopardy-helper-screenshots/screenshot2.png';
import screenshot3 from './jeopardy-helper-screenshots/screenshot3.png';

class JeopardyHelper extends Component {

    render() {
        const projectData = [
            'JEOPARDY HELPER',
            'The Jeopardy Helper is a simple application that allows participant teams to know which ones clicked the buzzer',
            // eslint-disable-next-line
            "The Jeopardy Helper application was created during my time at Oracle in order for the employees to be able to play a jeopardy activity. I created it so that the players on each team could have a buzzer-like application. One person adds their team name to the application and then each player on that respective team selects their team name. Once it is time to answer, they can click the buzzer button and then a list is populated with the teams that buzzed in and their order. The team names and buzzer times are all saved to the database. The application was created so that everyone could go on a website and participate in the game. The application is responsive and so depending on whether it is accessed from a phone or a computer, the appearance changes.",
            "Full Stack Engineer\n\nI created the frontend and the API to communicate with the MongoDB database.",
            ['Vue','Node','Express', 'MongoDB','HTML5','CSS3','Bootstrap'],
            [screenshot1,screenshot2,screenshot3],
            'https://github.com/justinm-nyc/jeapardy-helper',
            ""
        ];

        return (
        <div>
            <Project valueFromParent={projectData}></Project>
        </div>
        );
    }
}

export default JeopardyHelper;
