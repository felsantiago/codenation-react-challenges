import React from 'react';

import { Container, SectionFilters } from './styles';

import Button from '../Button';

class Filters extends React.Component {
	constructor() {
		super();

		this.state = {
			selected: 'name',
			sorted: 'asc',
		}
	}

	isSelected(option) {
		return option === this.state.selected
		? true : false;
  }

	handleClick = label => {
		const { selected, sorted } = this.state;

		let order = "asc";
    if (selected === label) {
      order = sorted === "desc" ? "asc" : "desc";
    }

		this.setState({
			selected: label,
			sorted: order,
		});
		this.props.handleSort(label, order)
	}

	isSort(option) {
    let icon = "fas fa-sort-down";
    if (option === this.state.selected) {
      icon =
        this.state.sorted === "asc" ? "fas fa-sort-down" : "fas fa-sort-up";
    }
    return icon;
  }

	render() {
		return (
			<Container className="container" data-testid="filters">
				<SectionFilters>
					<div>
						<input type="text" placeholder="Pesquisar"
						onChange={(e) => this.props.handleFilter(e)} />

						<button>
							<i className="fa fa-search"/>
						</button>
					</div>

					<Button
						content="Nome"
						isSelected={this.isSelected("name")}
						classIcon={this.isSort("name")}
						handleOnClick={() => this.handleClick("name")}
          />

					<Button
						content="País"
						isSelected={this.isSelected("country")}
						classIcon={this.isSort("country")}
						handleOnClick={() => this.handleClick("country")}
          />

					<Button
						content="Empresa"
						isSelected={this.isSelected("company")}
						classIcon={this.isSort("company")}
						handleOnClick={() => this.handleClick("company")}
          />

					<Button
						content="Departamento"
						isSelected={this.isSelected("department")}
						classIcon={this.isSort("department")}
						handleOnClick={() => this.handleClick("department")}
          />

					<Button
						content="Data de admissão"
						isSelected={this.isSelected("admissionDate")}
						classIcon={this.isSort("admissionDate")}
						handleOnClick={() => this.handleClick("admissionDate")}
          />
				</SectionFilters>
			</Container>
	);
	}
}

export default Filters;
