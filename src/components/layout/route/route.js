import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Plan } from "../../../plan";
import { ClassMain } from "../ClassPlan/classMain";
import { ClasSPlan } from "../ClassPlan/clasSPlan";
import { SignInSide } from "../login/login";
import { TeacherMain } from "../main/teacherMain";
import { StudentReport } from "../report/studentReport";
import { TeacherInstructions } from "../teacherInstructions/teacherInstructions";
import { Validation } from "../validation/validation";
import { InitialConfiguration } from "../adminUI/initialConfiguration/initialConfiguration";
import { AdminPrincipal } from "../adminUI/adminPrincipal";
import { TeacherTable } from "../adminUI/teacherTable";
import { Scheduler } from "../schedule/scheduler";






export const RoutesUI = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInSide />} />
          <Route path="/teacherI" element={<TeacherInstructions/>}></Route>
          <Route path="/students" element={<Validation />} />
          <Route path="/teacher" element={<ClassMain/>}></Route>
          <Route path="/teacher/listStudents" element={<StudentReport />} />
          <Route path="/teacher/classPlan" element={<ClasSPlan/>} />

          <Route path="/admin/confInit" element={<InitialConfiguration/>}/>
          <Route path="/admin/teachers" element={<TeacherTable/>}/>


          <Route path="/admin" element={<AdminPrincipal/>}/>
          <Route path="/test" element={<Scheduler/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
