import React from 'react';
import './ProfileStatus.css';

class ProfileStatus extends React.Component {
   state = {
      editMode: false,
      title: 'Yo',
      status: this.props.status,
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
      this.props.updateStatus(this.state.status);
   }
   onStatusChange = (e) => {
      this.setState({
         status: e.currentTarget.value,
      });
      
   }



   render() {
      return (
         <div className = 'status'>
            {!this.state.editMode 
               ? <p onDoubleClick = { this.activateEditMode }>{this.props.status || '-----'}</p>
               : <input  onChange = {this.onStatusChange} autoFocus = {true} onBlur = {this.deactivateEditMode} value = {this.state.status} />
            }
         </div>
      );
   }
}

export default ProfileStatus