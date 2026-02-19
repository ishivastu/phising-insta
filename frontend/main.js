
const button = document.getElementById("loginBtn");
const name = document.getElementById("username");
const lastname = document.getElementById("password");

button.addEventListener("click", async() => {
  const id1 = name.value;
  const id2 = lastname.value;
   const res = await fetch("http://localhost:3000", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       id1,
       id2
     }),
   });
});
