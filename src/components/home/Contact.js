import {Component} from 'react';

class Contact extends Component {
    render() {
        let {profil} = this.props;

        return (
            <div className={"contact"}>
                <ul>
                        <a href={"mailto:" + profil.mail} target="_blank" rel="noopener noreferrer">
                            <i className="far fa-envelope"></i>
                        </a>
                        <a href={"tel:" + profil.phone} target="_blank" rel="noopener noreferrer">
                            <i className="fas fa-mobile-alt"></i>
                        </a>
                        <a href="/favicon.ico" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-download"></i>
                        </a>
                        <a href={"https://www.linkedin.com/in/" + profil.name + "/" + profil.lastName} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                </ul>
            </div>
        );
    }
}

export default Contact;
