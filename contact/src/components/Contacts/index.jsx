import React from "react";

import { Container, Section, ArticleContact } from './styles';

import Contact from '../Contact';

class Contacts extends React.Component {
	render() {
		const { contacts } = this.props;

		return (
			<Container className="container" data-testid="contacts">
				<Section>
					<ArticleContact>
						<span className="contact__avatar" />
						<span className="contact__data">Nome</span>
						<span className="contact__data">Telefone</span>
						<span className="contact__data">País</span>
						<span className="contact__data">Admissão</span>
						<span className="contact__data">Empresa</span>
						<span className="contact__data">Departamento</span>
					</ArticleContact>
					{contacts?.map(contact => (
						<Contact key={contact.id} data={contact} />
					))}
				</Section>
			</Container>
		);
	}
}

export default Contacts;
