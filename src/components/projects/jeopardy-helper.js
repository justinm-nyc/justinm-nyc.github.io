import React, { Component } from 'react';
import Project from '../project.js';
import screenshot1 from './images/scientific-imaging-screenshots/screenshot1.png';
import screenshot2 from './images/scientific-imaging-screenshots/screenshot2.png';
import screenshot3 from './images/scientific-imaging-screenshots/screenshot3.png';
import screenshot4 from './images/scientific-imaging-screenshots/screenshot4.png';

class JeopardyHelper extends Component {

    render() {
        const projectData = [
            'JEOPARDY HELPER',
            'The Scientific Imaging Software utilizes Oracle Blockchain Cloud Service and Object Storage to automatically upload and track data streamed from laboratory equipment.',
            // eslint-disable-next-line
            "In the scientific industry, laboratories face many challenges involving data integrity, data access, and data tracking. As a chief technology officer for a scientific laboratory, you need to understand who has access to your data, information on where that data has been accessed, and that data all needs to be auditable. Using the blockchain cloud service, an immutable ledger, you can permit access to that data and allow other people to come and audit that data directly. \n\nAfter taking an image of a slide with the USB microscope, that information is stored in object storage and a record of that image is going to be placed onto the blockchain. Then we use a web interface to view the information on the blockchain, update that blockchain and get a full and detailed history of everything that is stored on the blockchain. \n\nThe image that was captured is then populated on the interface, it can be downloaded for analysis, and the analysis document can then be uploaded using the interface. All these events like downloading and uploading are saved to the blockchain, thus when you click the \'View History\' button, you can see a table populated with the document\'s history from the blockchain. The Oracle Blockchain Cloud Service is used to store all data that is generated, all analysis and report documents, and a history of the data that is accessed. Oracle Object Storage is utilized to store and persist the data. The Oracle Scientific Imaging interface shows us how we can use blockchain to maintain a secure distributed ledger that provides value across the business from data collection, tracking, to auditing.",
            "Full Stack Engineer\n\nI created the frontend of the application, created the REST API to get and put information on the blockchain, created the API to store documents and retrieve documents from object storage, and wrote chaincode for the blockchain in go.",
            ['Vue', 'Node','Express','HTML5', 'CSS3', 'Bootstrap','Go', 'Docker', 'Kubernetes', 'Oracle Blockchain Cloud Service', 'Oracle Object Storage'],
            [screenshot1,screenshot2,screenshot3,screenshot4]
        ];

        return (
        <div>
            <Project valueFromParent={projectData}></Project>
        </div>
        );
    }
}

export default JeopardyHelper;
