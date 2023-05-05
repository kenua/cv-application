import { Component } from 'react';
import Form from './components/Form';
import Resume from './components/Resume';
import uniqid from 'uniqid';
import placeholderData from './placeholderData.json';

class App extends Component {
	state = {
		formFields: {
			nameField: '',
			jobTitleField: '',
			summaryField: '',
			skillField: '',
			contactField: '',
			schoolNameField: '',
			titleOfStudyField: '',
			dateOfStudyField: (new Date()).getFullYear(),
			companyNameField: '',
			jobPositionField: '',
			startedJobAtField: (new Date()).getFullYear(),
			endedJobAtField: (new Date()).getFullYear(),
			taskAtJobField: '',
		},
		printForm: true,
		skillList: [],
		contactList: [],
		educExpList: [],
		taskList: [],
		workExpList: [],
	};

	handleInputChange = (e) => {
		let stateKey = e.target.name;
		let value = e.target.value;

		this.setState({
			formFields: {
				...this.state.formFields,
				[stateKey]: value,
			}
		});
	}

	addListItem = (stateKey, value, fieldToClean) => {
		this.setState(prevState => ({
			[stateKey]: [
				...prevState[stateKey],
				{
					id: uniqid(),
					value: value
				}
			],
			formFields: {
				...prevState.formFields,
				[fieldToClean]: ''
			}
		}));
	}

	removeListItem = (stateKey, id) => {
		this.setState({
			[stateKey]: this.state[stateKey].filter(item => item.id !== id)
		});
	}

	populateEducExpList = () => {
		this.setState(prevState => ({
			// add new object to educExpList
			educExpList: [
				...prevState.educExpList,
				{
					id: uniqid(),
					schoolName: prevState.formFields.schoolNameField,
					titleOfStudy: prevState.formFields.titleOfStudyField,
					dateOfStudy: prevState.formFields.dateOfStudyField
				}
			],
			// clean form fields
			formFields: {
				...prevState.formFields,
				schoolNameField: '',
				titleOfStudyField: '',
				dateOfStudyField: ''
			},
		}));
	}

	populateWorkExpList = () => {
		this.setState(prevState => ({
			// add new object to workExpList
			workExpList: [
				...prevState.workExpList,
				{
					id: uniqid(),
					companyName: prevState.formFields.companyNameField,
					jobPosition: prevState.formFields.jobPositionField,
					startedJobAt: prevState.formFields.startedJobAtField,
					endedJobAt: prevState.formFields.endedJobAtField,
					tasks: prevState.taskList
				}
			],
			// clean form fields
			formFields: {
				...prevState.formFields,
				companyNameField: '',
				jobPositionField: '',
				startedJobAtField: '',
				endedJobAtField: ''
			},
			taskList: [],
		}));
	}

	toggleForm = (e) => {
		e.preventDefault();

		this.setState(prevState => ({
			printForm: !prevState.printForm
		}));
	}
      
	render() {
		let { formFields, skillList, contactList, educExpList, taskList, workExpList } = this.state;
		const FormComponent = <Form
			{...formFields}
			skillList={skillList} 
			contactList={contactList}
			educExpList={educExpList}
			taskList={taskList}
			workExpList={workExpList}
			handleInputChange={this.handleInputChange}
			addListItem={this.addListItem} 
			removeListItem={this.removeListItem}
			populateWorkExpList={this.populateWorkExpList}
			populateEducExpList={this.populateEducExpList}
			toggleForm={this.toggleForm}
		/>;
		const ResumeComponent = <Resume 
			name={formFields.nameField}
			jobTitle={formFields.jobTitleField}
			summary={formFields.summaryField}
			skillList={skillList}
			contactList={contactList}
			educExpList={educExpList}
			taskList={taskList}
			workExpList={workExpList}
			toggleForm={this.toggleForm}
		/>

		return (
			<div className="wrapper blob-bg-1">
				{ this.state.printForm 
				  ? FormComponent
				  : ResumeComponent
				}
			</div>
		);
   }     
	
	// Add placeholder data
	componentDidMount() {
		this.setState(prevState => ({
			formFields: {...prevState.formFields, ...placeholderData.formFields},
			skillList: [...placeholderData.skillList],
			contactList: [...placeholderData.contactList],
			educExpList: [...placeholderData.educExpList],
			workExpList: [...placeholderData.workExpList],
		}));
	}
}

export default App;
