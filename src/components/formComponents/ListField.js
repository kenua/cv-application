import { createRef, Component } from 'react';

class ListField extends Component {
   textInput = createRef();

   add = () => {
      let { 
         field,
         fieldKey,
         listKey,
         addListItem,
      } = this.props;

      addListItem(listKey, field, fieldKey);
      this.textInput.current.focus();
   }

   render() {
      let { 
         label,
         field,
         fieldKey,
         list,
         listKey,
         handleInputChange,
         removeListItem,
      } = this.props;

      let li = list.map(item => {
         return (
            <li key={item.id} className="list__item">
               <div className="list__content">
                  {item.value}
               </div>
               <button 
                  className="button button--sign button--red"
                  type="button" 
                  onClick={() => removeListItem(listKey, item.id)}
                  title="Remove"
               >
                  Delete
                  <span className="button-line"></span>
               </button>
            </li>
         );
      });

      return (
         <>
            <div className="form-flex-field">
               <label htmlFor={fieldKey} className="form__label form-flex-field__label f-upper f-bold">{label}</label>
               <input
                  id={fieldKey}
                  className="form__input form-flex-field__input"
                  type="text"
                  ref={this.textInput}
                  value={field} 
                  name={fieldKey} 
                  onChange={handleInputChange} 
               />
               <button className="button button--sign" type="button" onClick={this.add} title="Add Item">
                  Add
                  <span className="button-line"></span>
                  <span className="button-line button-line--rotated"></span>
               </button>
            </div>
            <ul className=" mb-1">
               { li }
            </ul>
         </>
      );
   }
}

export default ListField;