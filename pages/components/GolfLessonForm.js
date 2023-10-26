// import React, { useState } from 'react';
// import {
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   CustomInput,
//   Button,
//   Textarea,
// } from 'reactstrap';

// const GolfLessonForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     daysForLessons: [],
//     timeOfDay: '',
//     howDidYouHear: 'Social media',
//     whyGetLessons: '',
//     yearsPlayingGolf: '',
//     handicap: '',
//     daysPracticed: '',
//     roundsPerMonth: '',
//     frustrations: '',
//     goal: '',
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       if (checked) {
//         setFormData({
//           ...formData,
//           daysForLessons: [...formData.daysForLessons, value],
//         });
//       } else {
//         setFormData({
//           ...formData,
//           daysForLessons: formData.daysForLessons.filter(
//             (day) => day !== value
//           ),
//         });
//       }
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here (e.g., send data to a server or API)
//     console.log(formData);
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label for="firstName">First Name:</Label>
//           <Input
//             type="text"
//             name="firstName"
//             id="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="lastName">Last Name:</Label>
//           <Input
//             type="text"
//             name="lastName"
//             id="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="email">Email:</Label>
//           <Input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="phone">Phone:</Label>
//           <Input
//             type="tel"
//             name="phone"
//             id="phone"
//             value={formData.phone}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label>Preferred day(s) for lessons (select all that apply):</Label>
//           <div>
//             <CustomInput
//               type="checkbox"
//               id="monday"
//               label="Monday"
//               name="daysForLessons"
//               value="Monday"
//               checked={formData.daysForLessons.includes('Monday')}
//               onChange={handleChange}
//             />
//             <CustomInput
//               type="checkbox"
//               id="tuesday"
//               label="Tuesday"
//               name="daysForLessons"
//               value="Tuesday"
//               checked={formData.daysForLessons.includes('Tuesday')}
//               onChange={handleChange}
//             />
//             <CustomInput
//               type="checkbox"
//               id="wednesday"
//               label="Wednesday"
//               name="daysForLessons"
//               value="Wednesday"
//               checked={formData.daysForLessons.includes('Wednesday')}
//               onChange={handleChange}
//             />
//             <CustomInput
//               type="checkbox"
//               id="thursday"
//               label="Thursday"
//               name="daysForLessons"
//               value="Thursday"
//               checked={formData.daysForLessons.includes('Thursday')}
//               onChange={handleChange}
//             />
//             <CustomInput
//               type="checkbox"
//               id="friday"
//               label="Friday"
//               name="daysForLessons"
//               value="Friday"
//               checked={formData.daysForLessons.includes('Friday')}
//               onChange={handleChange}
//             />
//             <CustomInput
//               type="checkbox"
//               id="saturday"
//               label="Saturday"
//               name="daysForLessons"
//               value="Saturday"
//               checked={formData.daysForLessons.includes('Saturday')}
//               onChange={handleChange}
//             />
//           </div>
//         </FormGroup>

//         <FormGroup>
//           <Label for="timeOfDay">Preferred time of day for lessons:</Label>
//           <Input
//             type="select"
//             name="timeOfDay"
//             id="timeOfDay"
//             value={formData.timeOfDay}
//             onChange={handleChange}
//           >
//             <option value="">Select...</option>
//             <option value="Morning">Morning</option>
//             <option value="Afternoon">Afternoon</option>
//             <option value="Evening">Evening</option>
//           </Input>
//         </FormGroup>

//         <FormGroup>
//           <Label>How did you hear about me?</Label>
//           <div>
//             <CustomInput
//               type="radio"
//               id="socialMedia"
//               label="Social media"
//               name="howDidYouHear"
//               value="Social media"
//               checked={formData.howDidYouHear === 'Social media'}
//               onChange={handleChange}
//             />
//             <CustomInput
//               type="radio"
//               id="driveByWalkBy"
//               label="Drive-by/Walk-by The Golf Spot"
//               name="howDidYouHear"
//               value="Drive-by/Walk-by The Golf Spot"
//               checked={
//                 formData.howDidYouHear === 'Drive-by/Walk-by The Golf Spot'
//               }
//               onChange={handleChange}
//             />
//             <CustomInput
//               type="radio"
//               id="referral"
//               label="Referral"
//               name="howDidYouHear"
//               value="Referral"
//               checked={formData.howDidYouHear === 'Referral'}
//               onChange={handleChange}
//             />
//             <CustomInput
//               type="radio"
//               id="other"
//               label="Other"
//               name="howDidYouHear"
//               value="Other"
//               checked={formData.howDidYouHear === 'Other'}
//               onChange={handleChange}
//             />
//           </div>
//         </FormGroup>

//         <FormGroup>
//           <Label for="whyGetLessons">
//             What made you think about getting lessons?
//           </Label>
//           <Textarea
//             type="text"
//             name="whyGetLessons"
//             id="whyGetLessons"
//             value={formData.whyGetLessons}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="yearsPlayingGolf">
//             How long have you been playing golf?
//           </Label>
//           <Input
//             type="text"
//             name="yearsPlayingGolf"
//             id="yearsPlayingGolf"
//             value={formData.yearsPlayingGolf}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="handicap">What is your handicap or average score?</Label>
//           <Input
//             type="text"
//             name="handicap"
//             id="handicap"
//             value={formData.handicap}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="daysPracticed">
//             How many days a week do you practice?
//           </Label>
//           <Input
//             type="text"
//             name="daysPracticed"
//             id="daysPracticed"
//             value={formData.daysPracticed}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="roundsPerMonth">
//             How many rounds of golf do you play per month?
//           </Label>
//           <Input
//             type="text"
//             name="roundsPerMonth"
//             id="roundsPerMonth"
//             value={formData.roundsPerMonth}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="frustrations">
//             What are your frustrations with your game?
//           </Label>
//           <Textarea
//             type="text"
//             name="frustrations"
//             id="frustrations"
//             value={formData.frustrations}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label for="goal">What is your goal?</Label>
//           <Textarea
//             type="text"
//             name="goal"
//             id="goal"
//             value={formData.goal}
//             onChange={handleChange}
//           />
//         </FormGroup>

//         <Button color="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default GolfLessonForm;
