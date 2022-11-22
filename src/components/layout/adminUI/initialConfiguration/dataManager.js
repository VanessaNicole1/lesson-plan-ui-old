import React, { useState } from 'react'

export const DataManager = () => {
    const [email, setEmail] = useState("");

    const dataManager = {
        email
      };
      const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json", "Access-Control-Allow-Origin", "*");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(dataManager),
    redirect: "follow",
  };

  const handleDManagerFormSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/manager", requestOptions)
      .then((response) => response.json())
      .then((result) => {alert(result )});
  };
  return (
    <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form class="space-y-6" action="#" onSubmit={handleDManagerFormSubmit}>
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                  Director de la Carrera
                </h5>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Seleccione la carrera correspondiente
                  </label>
                  <select
                    type="text"
                    name="director"
                    id="director"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Pablo Ordoñez"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Ingrese el correo del Director de la Carrera
                  </label>
                  <input
                    type="email"
                    name="emailDirector"
                    id="emailDirector"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="direccion.cis@unl.edu.ec"
                    required=""
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Guardar Director de Carrera
                </button>
              </form>
            </div>
  )
}
