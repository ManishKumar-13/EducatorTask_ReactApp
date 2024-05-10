// import React, { useState, useEffect } from 'react';

// const EducationPlanner = () => {
//   // State for managing subject data
//   const [subjects, setSubjects] = useState([]);
//   const [newSubjectName, setNewSubjectName] = useState('');
//   const [newSubjectHours, setNewSubjectHours] = useState('');

//   // Effect hook for loading data from local storage on initial render
//   useEffect(() => {
//     const savedSubjects = JSON.parse(localStorage.getItem('subjects'));
//     if (savedSubjects) {
//       setSubjects(savedSubjects);
//     }
//   }, []);

//   // Function to handle adding a new subject
//   const addSubject = () => {
//     if (newSubjectName && newSubjectHours) {
//       const newSubject = {
//         name: newSubjectName,
//         hours: parseInt(newSubjectHours)
//       };
//       setSubjects([...subjects, newSubject]);
//       setNewSubjectName('');
//       setNewSubjectHours('');
//     }
//   };

//   // Function to handle updating study hours
//   const handleHoursChange = (index, change) => {
//     const updatedSubjects = [...subjects];
//     updatedSubjects[index].hours += change;
//     setSubjects(updatedSubjects);
//   };

//   // Function to save data to local storage
//   useEffect(() => {
//     localStorage.setItem('subjects', JSON.stringify(subjects));
//   }, [subjects]);

//   return (
//     <div>
//       <h1>Education Planner</h1>
//       <div>
//         <input
//           type="text"
//           value={newSubjectName}
//           placeholder="Subject Name"
//           onChange={(e) => setNewSubjectName(e.target.value)}
//         />
//         <input
//           type="number"
//           value={newSubjectHours}
//           placeholder="Hours"
//           onChange={(e) => setNewSubjectHours(e.target.value)}
//         />
//         <button onClick={addSubject}>Add Subject</button>
//       </div>
//       {subjects.map((subject, index) => (
//         <div key={index}>
//           <span>{subject.name} - {subject.hours} hours</span>
//           <button onClick={() => handleHoursChange(index, 1)}>+</button>
//           <button onClick={() => handleHoursChange(index, -1)}>-</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EducationPlanner;



import React, { useState, useEffect } from 'react';
// import './EducationPlanner.css'; // Import CSS file for styling

const EducationPlanner = () => {
  // State for managing subject data
  const [subjects, setSubjects] = useState([]);
  const [newSubjectName, setNewSubjectName] = useState('');
  const [newSubjectHours, setNewSubjectHours] = useState('');

  // Effect hook for loading data from local storage on initial render
useEffect(() => {
    console.log("Loading data from local storage...");
    const savedSubjects = JSON.parse(localStorage.getItem('subjects'));
    console.log("Saved subjects:", savedSubjects);
    if (savedSubjects && savedSubjects.length > 0) {
      setSubjects(savedSubjects);
    }
  }, []);
  

  // Function to handle adding a new subject
  const addSubject = () => {
    if (newSubjectName && newSubjectHours) {
      const newSubject = {
        name: newSubjectName,
        hours: parseInt(newSubjectHours)
      };
      setSubjects([...subjects, newSubject]);
      setNewSubjectName('');
      setNewSubjectHours('');
    }
  };

  // Function to handle updating study hours
  const handleHoursChange = (index, change) => {
    const updatedSubjects = [...subjects];
    if (updatedSubjects[index].hours + change >= 0) {
        updatedSubjects[index].hours += change;
        setSubjects(updatedSubjects);
      }
  };

  // Function to save data to local storage
  useEffect(() => {
    console.log("Saving data to local storage...");
    localStorage.setItem('subjects', JSON.stringify(subjects));
  }, [subjects]);

  return (
    <div className="education-planner">
      <h1 className="title">Education Planner</h1>
      <div className="add-subject">
        <input
          className="input-field"
          type="text"
          value={newSubjectName}
          placeholder="Subject Name"
          onChange={(e) => setNewSubjectName(e.target.value)}
        />
        <input
          className="input-field"
          type="number"
          value={newSubjectHours}
          placeholder="Hours"
          onChange={(e) => setNewSubjectHours(e.target.value)}
        />
        <button className="add-button" onClick={addSubject}>Add Subject</button>
      </div>
      {subjects.map((subject, index) => (
        <div key={index} className="subject-container">
          <span className="subject-name">{subject.name}</span>
          <div className="hours-container">
            <button className="hours-button" onClick={() => handleHoursChange(index, 1)}>+</button>
            <span className="hours">{subject.hours} hours</span>
            <button className="hours-button" onClick={() => handleHoursChange(index, -1)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationPlanner;
