import React from 'react';
import './Skills.css';

const Skills = (props) => {

let skillsElements = props.skills.map(skill => <p key = {skill.id} className="skill">{skill.skillname}</p>)

   return (
      <div className='skills'>
         {skillsElements}
      </div>

   );
}

export default Skills;