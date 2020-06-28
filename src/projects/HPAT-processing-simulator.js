import React, { Component } from 'react';
import Project from '../project.js';
import screenshot1 from '../images/scientific-imaging-screenshots/screenshot1.png';
import screenshot2 from '../images/scientific-imaging-screenshots/screenshot2.png';
import screenshot3 from '../images/scientific-imaging-screenshots/screenshot3.png';
import screenshot4 from '../images/scientific-imaging-screenshots/screenshot4.png';

class HPATProcessingSimulator extends Component {

    render() {
        const projectData = [
            'High Performance Autonomous Transaction Enterprise Simulator',
            'Ten Thousand Monkeys is a full stack application that uses server-less Oracle provided service, Functions, to simulate enterprise workloads running on an Oracle Autonomous Transaction Processing instance.',
            // eslint-disable-next-line
            "A user chooses to run transactions on an ATP with healthcare survey data or an ATP for an eCommerce business. The user then has the options of ramp, burst, and steady to choose from as the workload profile over a short period of time. Ramp, burst, and steady represent the pattern of user activity for the enterprise workload (e.g. steady like a slow day, ramp like a normal busy day, burst like a holiday or during peak season). Then the user can choose from 1,500 to 10,000 users that will be inserting, update, and reporting within a short span of time. The results of whether the transactions were successes or failures are then populated in graphs.",
            "Software Engineer\n\nI created the frontend of the application, wrote the artillery script that would run transactions and populate information into the database. I wrote the docker files that ran the server and the client in separate folders. I created the yaml files to deploy the docker images to the Oracle Kubernetes Engine.",
            ['Vue', 'Node','Express','HTML5', 'CSS3', 'Bootstrap','Docker', 'Artillery', 'SQL','Oracle Functions','Oracle Cloud Infrastructure Registry', 'Oracle Autonomous Transaction Processing' ],
            [screenshot1,screenshot2,screenshot3,screenshot4]
        ];

        return (
        <div>
            <Project valueFromParent={projectData}></Project>
        </div>
        );
    }
}

export default HPATProcessingSimulator;
