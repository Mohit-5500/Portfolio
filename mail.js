const firebaseConfig = {
  apiKey: "AIzaSyB4UansSJjIqN6Pe_y72wSBkzpouSKrOwU",
  authDomain: "portfolio-database-2e88c.firebaseapp.com",
  databaseURL: "https://portfolio-database-2e88c-default-rtdb.firebaseio.com",
  projectId: "portfolio-database-2e88c",
  storageBucket: "portfolio-database-2e88c.appspot.com",
  messagingSenderId: "538248934515",
  appId: "1:538248934515:web:1da1f3d1ed769d9f1e2606",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference database

var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  //   e.preventDefault();
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("emailId");
  var subject = getElementVal("subjectId");
  var message = getElementVal("message");

  saveMessages(name, email, subject, message);

  alert("Message has been sent successfully");

  document.getElementById("contactForm").reset();
  return true;

  // Start a timer
  //   console.time("formSubmission");

  //   // You can log the values if needed
  //   console.log("Name:", name);
  //   console.log("Email:", email);
  //   console.log("Subject:", subject);
  //   console.log("Message:", message);

  //   // End the timer and log the time elapsed
  //   console.timeEnd("formSubmission");
}
const saveMessages = (name, email, subject, message) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    email: email,
    subject: subject,
    message: message,
  });
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
};
