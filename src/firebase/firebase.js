// import * as firebase from 'firebase';

// const config = {
//     apiKey: "AIzaSyCb4j0Q47iufEiwNPOrVA1uv11B_P1b7BQ",
//     authDomain: "expensify-c7907.firebaseapp.com",
//     databaseURL: "https://expensify-c7907.firebaseio.com",
//     projectId: "expensify-c7907",
//     storageBucket: "expensify-c7907.appspot.com",
//     messagingSenderId: "1021491534790"
//   };

// firebase.initializeApp(config);

// const database = firebase.database();
// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();



// export { firebase, googleAuthProvider, database as default };
































// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
//   });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     })    

//     console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'Gas',
//     note: '',
//     amount: 109500,
//     createdAt: 11654
// });


// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native'
// });





// database.ref('notes/-LS5TisObsToFld59ydg').remove();



// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//     const key = snapshot.val();
//     console.log(`${key.name} is a ${key.job.title} at ${key.job.company}.`);
// });

// setTimeout(() => {
//    database.ref('job').update({
//         title: 'Tech'
// })}, 3000);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('Error fetching data', error);
//     })

// database.ref().set({
//     name: 'Ajerap',
//     age: 31,
//     stressLevel: 6,
//     job: {
//         title: 'barista',
//         company: 'JLB'
//     },
//     location: {
//         city: 'Montreal',
//         country: 'Canada'
//     },
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => { 
//     console.log('This failed.', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'amazon',
//     'location/city': 'Vancouver'
// });

// database.ref()
//         .remove()
//         .then(() => { console.log('Data removed!') })
//         .catch((error) => {
//             console.log('Something went wrong! Error: ', error)
//         });


