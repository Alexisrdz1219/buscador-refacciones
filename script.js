fetch("https://buscador-refaccionesbackend.onrender.com/health")
  .then(res => res.json())
  .then(data => {
    console.log("RESPUESTA BACKEND:", data);
  })
  .catch(err => {
    console.error("ERROR:", err);
  });
