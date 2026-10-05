function greet(name) {
  const lastname = "Doe";
  console.log("Hello " + name + " " + lastname);
}

greet("Bree");

const apiUrl = import.meta.env.VITE_API_URL;
console.log(apiUrl);
