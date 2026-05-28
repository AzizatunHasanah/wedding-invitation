import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmjheGQtKK1FND-b-9fuE8dcKh3TjjYUw",
  authDomain: "wedding-azizah.firebaseapp.com",
  projectId: "wedding-azizah",
  storageBucket: "wedding-azizah.firebasestorage.app",
  messagingSenderId: "587825057856",
  appId: "1:587825057856:web:56a97ac9081209e78a4fa5",
  measurementId: "G-MJB46SHCLK",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const form = document.getElementById("rsvpForm");

const wishContainer = document.getElementById("wishContainer");

const totalGuests = document.getElementById("totalGuests");

const totalAttend = document.getElementById("totalAttend");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;

  const attendance = document.getElementById("attendance").value;

  const message = document.getElementById("message").value;

  await addDoc(collection(db, "wishes"), {
    name,
    attendance,
    message,
    createdAt: Date.now(),
  });

  form.reset();
});

const q = query(collection(db, "wishes"), orderBy("createdAt", "desc"));

onSnapshot(q, (snapshot) => {
  wishContainer.innerHTML = "";

  totalGuests.innerHTML = snapshot.size;

  const attend = snapshot.docs.filter((doc) => doc.data().attendance === "Hadir").length;

  totalAttend.innerHTML = attend;

  snapshot.forEach((doc) => {
    const data = doc.data();

    wishContainer.innerHTML += `

      <div class="wish-card">

        <h4>${data.name}</h4>

        <span>
          ${data.attendance}
        </span>

        <p>
          ${data.message}
        </p>

      </div>

    `;
  });
});
