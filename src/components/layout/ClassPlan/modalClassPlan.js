import React, { useState } from "react";

export const ModalClassPlan = () => {
  const [date, setDateData] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [comment, setComment] = useState("");

  const dates = new Date();
  const futureDate = dates.getDate();
  dates.setDate(futureDate);
  const defaultValue = dates.toLocaleDateString("en-CA");

  const data = {
    date,
    topic,
    content,
    comment,
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
    body: JSON.stringify(data),
    redirect: "follow",
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/lessonplan", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result);
      });
  };
  return (
    <div>
      <div className="">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <form method="POST" onSubmit={handleFormSubmit}>
            <center>
              <label className="block text-2xl font-medium text-gray-800">
                REGISTRO DEL PLAN DE CLASES
              </label>
            </center>

            <div className=" sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="company-website"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Materia
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    //value={startDate}
                    //onChange={(event) => setStartDate(event.target.value)}
                  >
                    <option selected="">Elija una materia</option>
                    <option value="Mteria1">Mteria1</option>
                    <option value="Mteria1">Materia2</option>
                    <option value="Mteria1">Materia3</option>
                    <option value="Mteria1">Materia4</option>
                  </select>

                  <div className="mt-1 flex rounded-md shadow-sm"></div>
                  <label
                    htmlFor="company-website"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Fecha
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      defaultValue={defaultValue}
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 base:text-base"
                      //placeholder="11/05/2022"
                      //value={date}
                      onChange={(event) => setDateData(event.target.value)}
                    />
                  </div>
                  <label
                    htmlFor="company-website"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Curso
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="course"
                      id="course"
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 base:text-base"
                      //placeholder="Seleccione el curso"
                      //onChange={(event) => setDegree(event.target.value)}
                    />
                  </div>
                  <label
                    htmlFor="company-website"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Docente
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="teacher"
                      id="teacher"
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 base:text-base"
                      placeholder="INgrese el docente"
                      //onChange={(event) => setDegree(event.target.value)}
                    />
                  </div>
                  <label
                    htmlFor="company-website"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Tema
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="text"
                      name="topic"
                      id="topic"
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 base:text-base"
                      placeholder="Ingrese la tematica"
                      value={topic}
                      onChange={(event) => setTopic(event.target.value)}
                    />
                  </div>
                  <label
                    htmlFor="company-website"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Actividades a tratar
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <textarea
                      id="activities"
                      name="activities"
                      rows="4"
                      class="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Ingrese sus observaciones"
                      value={content}
            onChange={(event) => setContent(event.target.value)}
                    ></textarea>
                  </div>
                  <label
                    htmlFor="company-website"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Recurso
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="file"
                      name="resource"
                      id="resource"
                      className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 base:text-base"
                    />
                  </div>
                  <label
                    htmlFor="company-website"
                    className="block text-lg font-medium text-gray-800"
                  >
                    Observaciones
                  </label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <textarea
                      id="observation"
                      name="observation"
                      rows="4"
                      class="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Ingrese sus observaciones"
                      value={comment}
            onChange={(event) => setComment(event.target.value)}
                    ></textarea>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
