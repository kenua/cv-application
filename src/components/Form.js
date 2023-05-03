import { createRef, Component } from 'react';
import ListField from './formComponents/ListField';

class Form extends Component {
   schoolNameFieldRef = createRef();
   companyNameFieldRef = createRef();

   addEducItem = () => {
      this.props.populateEducExpList();
      this.schoolNameFieldRef.current.focus();
   }

   addWorkItem = () => {
      this.props.populateWorkExpList();
      this.companyNameFieldRef.current.focus();
   }

   render() {
      let {
         nameField, 
         jobTitleField, 
         summaryField, 
         skillField, 
         contactField, 
         schoolNameField, 
         titleOfStudyField, 
         dateOfStudyField,
         companyNameField,
         jobPositionField,
         startedJobAtField,
         endedJobAtField,
         taskAtJobField,
         taskList,
         handleInputChange,
         addListItem,
         removeListItem,
         skillList,
         contactList,
         educExpList,
         workExpList,
         toggleForm,
      } = this.props;

      const educExpLi = educExpList.map(educObj => {
         return (
            <li key={educObj.id} className="form-experience">
               <div className="form-experience__content">
                  <h3 className="form-experience__heading">
                     {educObj.schoolName} 
                     <time dateTime={educObj.dateOfStudy} className="form-experience__date">{educObj.dateOfStudy}</time>
                  </h3>
                  <h4 className="form-experience__subheading">{educObj.titleOfStudy}</h4>
               </div>
               <button 
                  className="form__button form__button--auto-height form__button--sign form__button--red" 
                  type="button" 
                  onClick={() => removeListItem('educExpList', educObj.id)}
               >
                  Delete
                  <span className="form__button-line"></span>
               </button>
            </li>
         );
      });

      const workExpLi = workExpList.map(workObj => {
         return (
            <li key={workObj.id} className="form-experience">
               <div className="form-experience__content">
                  <h3 className="form-experience__heading">
                     {workObj.companyName}

                     <span className="form-experience__date">
                        <time dateTime={workObj.startedJobAt}>{workObj.startedJobAt}</time>
                        &nbsp;-&nbsp;
                        <time dateTime={workObj.endedJobAt}>{workObj.endedJobAt}</time>
                     </span>
                  </h3>
                  <h4 className="form-experience__subheading">{workObj.jobPosition}</h4>
                  <ul className="form-experience__ul">
                     {workObj.tasks.map(task => <li key={task.id} className="form-experience__li">{task.value}</li>)}
                  </ul>
               </div>
               <button 
                  className="form__button form__button--auto-height form__button--sign form__button--red" 
                  type="button" 
                  onClick={() => removeListItem('workExpList', workObj.id)}
               >
                  Delete
                  <span className="form__button-line"></span>
               </button>
            </li>
         );
      });

      return (
         <div className="form frame">
            <form onSubmit={toggleForm}>
               <div className="form-flex-field mb-1">
                  <label htmlFor="nameField" className="form__label form-flex-field__label">Name</label>
                  <input 
                     id="nameField" 
                     className="form__input form-flex-field__input upper" 
                     type="text" 
                     value={nameField} 
                     name='nameField' 
                     onChange={handleInputChange} 
                  />
               </div>

               <div className="form-flex-field mb-1">
                  <label htmlFor="jobTitleField" className="form__label form-flex-field__label">Job title</label>
                  <input 
                     id="jobTitleField" 
                     className="form__input form-flex-field__input upper" 
                     type="text" 
                     value={jobTitleField} 
                     name='jobTitleField' 
                     onChange={handleInputChange} 
                  />
               </div>

               <div className="form__summary-container">
                  <label htmlFor="summaryField" className="form__label">Summary</label>
                  <textarea 
                     id="summaryField" 
                     className="form__input form__input--textarea" 
                     value={summaryField} 
                     name='summaryField' 
                     onChange={handleInputChange} 
                  />
               </div>

               <ListField 
                  label={'Skills'}
                  field={skillField}
                  fieldKey={'skillField'}
                  list={skillList}
                  listKey={'skillList'}
                  handleInputChange={handleInputChange}
                  addListItem={addListItem}
                  removeListItem={removeListItem}
               />

               <ListField 
                  label={'Contact'}
                  field={contactField}
                  fieldKey={'contactField'}
                  list={contactList}
                  listKey={'contactList'}
                  handleInputChange={handleInputChange}
                  addListItem={addListItem}
                  removeListItem={removeListItem}
               />
               
               <h2 className="form__heading">Education</h2>

               <div className="form-flex-field mb-1">
                  <label htmlFor="schoolNameField" className="form__label form-flex-field__label">School Name</label>
                     <input 
                        id="schoolNameField"
                        className="form__input form-flex-field__input upper"
                        type="text" 
                        ref={this.schoolNameFieldRef}
                        value={schoolNameField} 
                        name='schoolNameField' 
                        onChange={handleInputChange} 
                     />
               </div>

               <div className="form-flex-field mb-1">
                  <label htmlFor="titleOfStudyField" className="form__label form-flex-field__label">Title of study</label>
                  <input 
                     id="titleOfStudyField"
                     className="form__input form-flex-field__input upper"
                     type="text"
                     value={titleOfStudyField}
                     name='titleOfStudyField'
                     onChange={handleInputChange}
                  />
               </div>

               <div className="form-flex-field mb-1">
                  <label htmlFor="dateOfStudyField" className="form__label form-flex-field__label">Date of study</label>
                  <input 
                     id="dateOfStudyField"
                     className="form__input form-flex-field__input upper" 
                     type="number" 
                     min="1970"
                     max={(new Date()).getFullYear()}
                     value={dateOfStudyField} 
                     name='dateOfStudyField' 
                     onChange={handleInputChange} 
                  />
               </div>

               <button className="form__button mt-2 mb-2" type="button" onClick={this.addEducItem}>Add</button>

               <ul>{educExpLi}</ul>

               <h2 className="form__heading">Work experience</h2>

               <div className="form-flex-field mb-1">
                  <label htmlFor="companyNameField" className="form__label form-flex-field__label">Company Name</label>
                     <input 
                        id="companyNameField"
                        className="form__input form-flex-field__input upper" 
                        type="text"
                        ref={this.companyNameFieldRef}
                        value={companyNameField} 
                        name='companyNameField' 
                        onChange={handleInputChange}
                     />
               </div>

               <div className="form-flex-field mb-1">
                  <label htmlFor="jobPositionField" className="form__label form-flex-field__label">Job Position</label>
                  <input 
                     id="jobPositionField"
                     className="form__input form-flex-field__input upper" 
                     type="text" 
                     value={jobPositionField} 
                     name='jobPositionField' 
                     onChange={handleInputChange} 
                  />
               </div>

               <div className="form-flex-field mb-1">
                  <label htmlFor="startedJobAtField" className="form__label form-flex-field__label">Started at</label>
                  <input 
                     id="startedJobAtField"
                     className="form__input form-flex-field__input upper" 
                     type="number" 
                     min="1970"
                     max={(new Date()).getFullYear()}
                     value={startedJobAtField} 
                     name='startedJobAtField' 
                     onChange={handleInputChange} 
                  />
               </div>

               <div className="form-flex-field mb-1">
                  <label htmlFor="endedJobAtField" className="form__label form-flex-field__label">Ended at</label>
                  <input 
                     id="endedJobAtField"
                     className="form__input form-flex-field__input upper" 
                     type="number" 
                     min="1970"
                     max={(new Date()).getFullYear()}
                     value={endedJobAtField} 
                     name='endedJobAtField' 
                     onChange={handleInputChange} 
                  />
               </div>

               <ListField 
                  label={'Tasks at job'}
                  field={taskAtJobField}
                  fieldKey={'taskAtJobField'}
                  list={taskList}
                  listKey={'taskList'}
                  handleInputChange={handleInputChange}
                  addListItem={addListItem}
                  removeListItem={removeListItem}
               />

               <button className="form__button mt-2 mb-2" type="button" onClick={this.addWorkItem}>Add</button>

               <ul>{ workExpLi }</ul>

               <button className="form__button mt-2" type="submit">Generate Resume</button>
            </form>
         </div>
      );
   }
}

export default Form;