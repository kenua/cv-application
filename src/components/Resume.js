import { Component } from 'react';

class Resume extends Component {

   render() {
      let {
         name,
         jobTitle,
         summary,
         skillList,
         contactList,
         educExpList,
         taskList,
         workExpList,
         toggleForm,
      } = this.props;

      const workList = workExpList.map(workObj => {
         return (
            <div key={workObj.id} className="list-item c-black">
               <h3 className="list-item__heading space-between">
                  <span className="bold-upper">
                     { workObj.companyName }
                  </span> 
                  <span>
                     <time>{ workObj.startedJobAt }</time>
                     &nbsp;-&nbsp;
                     <time>{ workObj.endedJobAt }</time>
                  </span>
               </h3>
               <h4 className="list-item__subheading mb-1">{ workObj.jobPosition }</h4>
               <ul className="disc-list">
                  { workObj.tasks.map(task => (<li key={task.id} className="list-item__li mb-1">{ task.value }</li>)) }
               </ul>
            </div>
         );
      });

      const educList = educExpList.map(educObj => {
         return (
            <div key={educObj.id} className="list-item c-black">
               <h3 className="list-item__heading space-between">
                  <span className="bold-upper">
                     { educObj.schoolName }
                  </span> 
                  <time>{ educObj.dateOfStudy }</time>
               </h3>
               <h4 className="list-item__subheading">{ educObj.titleOfStudy }</h4>
            </div>
         );
      });

      return (
         <>
            <div className="frame c-brown fs-1">
               <section className="resume-head">
                  <h1 className="resume-head__name f-bold f-upper mb-1">{name}</h1>
                  <h2 className="fs-2 f-upper">{jobTitle}</h2>
               </section>

               <div className="resume-section resume-flex-section mb-2">
                  <section className="resume-flex-section__item">
                     <h2 className="fs-2 mb-1 f-bold f-upper">Skills</h2>
                     <ul className="disc-list c-black">
                        { skillList.map(skill => <li key={skill.id} className="resume-flex-section__li">{skill.value}</li>) }
                     </ul>
                  </section>
                  <div className="resume-flex-section__vertical-line"></div>
                  <section className="resume-flex-section__item">
                     <h2 className="fs-2 mb-1 f-bold f-upper">Contact</h2>
                     <ul className="disc-list c-black">
                        { contactList.map(contact => <li key={contact.id} className="resume-flex-section__li">{contact.value}</li>) }
                     </ul>
                  </section>
               </div>

               <section className="resume-section mb-2">
                  <h2 className="fs-2 mb-1 f-bold f-upper">Summary</h2>
                  <p className="f-height c-black">{summary}</p>
               </section>

               <section className="resume-section mb-2">
                  <h2 className="fs-2 mb-2 f-bold f-upper">Work experience</h2>

                  { workList }
               </section>

               <section className="resume-section mb-2">
                  <h2 className="fs-2 mb-2 f-bold f-upper">Education</h2>

                  { educList }
               </section>
            </div>
            
            <button 
               className="form__button mt-2 f-bold f-upper" 
               type="button"
               onClick={toggleForm}
            >
               Edit Resume
            </button>
         </>
      );
   }
}

export default Resume;