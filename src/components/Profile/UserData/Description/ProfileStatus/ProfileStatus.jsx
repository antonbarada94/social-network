import React from 'react';
import './ProfileStatus.css';

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      title: 'Yo',
   }

   activateEditMode = () => {
      this.setState ( {
         editMode: true,
      } )
   }

   deactivateEditMode = () => {
      this.setState ( {
         editMode: false,
      } )
   }

   render() {
      return (
         <div className = 'status'>
            {!this.state.editMode 
               ? <p onDoubleClick = { this.activateEditMode.bind(this) }>{this.props.status}</p>
               : <input autoFocus = {true} onBlur = {this.deactivateEditMode.bind(this)} value = {this.props.status} />
            }
         </div>
      );
   }
}

export default ProfileStatus