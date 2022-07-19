import React, { useEffect, useState } from "react";
import "./plan.css";
import { HeaderUNL } from "./components/headers/headerUNL";
import { TeacherInstructions } from "./components/layout/teacherInstructions/teacherInstructions";
import { InitialConfiguration } from "./components/layout/adminUI/initialConfiguration/initialConfiguration";
import { ClasSPlan } from "./components/layout/ClassPlan/clasSPlan";
import { StudentReport } from "./components/layout/report/studentReport";
import TeacherNavTabs from "./components/layout/menu/teacherNavTab";
import { Grid } from "@mui/material";

export const Plan = () => {
  const [getChange, setChange] = useState(1);
  const [getTeacherIntruction, setTeacherIntruction] = useState(true);
  const [getInitialConfiguration, setInitialConfiguration] = useState(false);
  const [getClassPlan, setClassPlan] = useState(false);
  const [getStudentReport, setStudentReport] = useState(false);

  //use Effect REndderizaado CoNDICIONAL
  useEffect(() => {
    switch (getChange) {
      case 1:
        setTeacherIntruction(true);
        setInitialConfiguration(false);
        setClassPlan(false);
        setStudentReport(false);
        break;
      case 2:
        setTeacherIntruction(false);
        setInitialConfiguration(true);
        setClassPlan(false);
        setStudentReport(false);
        break;
      case 3:
        setTeacherIntruction(false);
        setInitialConfiguration(false);
        setClassPlan(true);
        setStudentReport(false);
        break;
      case 4:
        setTeacherIntruction(false);
        setInitialConfiguration(false);
        setClassPlan(false);
        setStudentReport(true);
        break;
    }
  }, [getChange]);

  return (
    <>
      <Grid>
        <HeaderUNL></HeaderUNL>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div>
            {getTeacherIntruction ? (
              <TeacherInstructions change={setChange} />
            ) : null}
          </div>

          <div className="divInitialConf">
            {getInitialConfiguration ? (
              <InitialConfiguration change={setChange} />
            ) : null}
          </div>

          <div className="divClassPlan">
            {getClassPlan ? <ClasSPlan change={setChange} /> : null}
          </div>

          <div>{getStudentReport ? <StudentReport /> : null}</div>
        </Grid>
      </Grid>
    </>
  );
};
