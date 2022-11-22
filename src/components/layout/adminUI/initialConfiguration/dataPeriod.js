import React, { useState } from "react";

export const DataPeriod = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const dataPeriod = {
    name,
    startDate,
    endDate,
  };

  const myHeaders = new Headers();
  myHeaders.append(
    "Content-Type",
    "application/json",
    "Access-Control-Allow-Origin",
    "*"
  );

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(dataPeriod),
    redirect: "follow",
  };

  const handlePeriodFormSubmit = (event) => {
    event.preventDefault();
    console.log(startDate);
    fetch("http://localhost:3000/periods", requestOptions)
      .then((response) => response.json())
      .then((result) => {alert(result)});
  };

  return (
    <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" action="#" onSubmit={handlePeriodFormSubmit}>
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Período Académico
        </h5>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Ingrese el nombre del Período Académico
          </label>
          <input
            type="text"
            name="name"
            value={name}
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Pregrado Abril-Septiembre 2022 presencial. Régimen 2009"
            required=""
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Fecha de Inicio
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            //placeholder="Pregrado Abril-Septiembre 2022 presencial. Régimen 2009"
            required=""
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </div>

        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Fecha de Finalización
          </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            //placeholder="Pregrado Abril-Septiembre 2022 presencial. Régimen 2009"
            required=""
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </div>

        <button
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Guardar Período Académico
        </button>
      </form>
    </div>
  );
};
