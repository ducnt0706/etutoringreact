import React,{useState,useRef, useEffect}from 'react';
import { Multiselect } from "multiselect-react-dropdown";
import firebase from "firebase";
import "./styles.css";
import { Table } from "evergreen-ui";

const Contactadd = () => 
{
   const multiselectRef1 = useRef(null)
   const multiselectRef2 = useRef(null)

    const [students,setStudents]=useState([])
    const [tutors,setTutors]=useState([])
//     const [selectedValues,setSelectedValues]=useState([])
   const getStudents = () => {
        var students = [];
        firebase.firestore()
                .collection("students")
                .get()
                .then((query) =>
                        query.forEach((doc) => {
                                if (doc.data().supported === "no") {
                                        students.push(doc.data());
                                }
                        })
                )
                .then(() => setStudents(students) )
                .catch((err) => console.log(err));
}
    const getTutors=()=>{
        var tutors = [];
                firebase.firestore()
                        .collection("tutors")
                        .get()
                        .then((query) =>
                                query.forEach((doc) => {
                                        tutors.push(doc.data());
                                })
                        )
                        .then(() => setTutors(tutors))
                        .catch((err) => console.log(err));
    }
    useEffect(()=>{
        getStudents();
        getTutors();
       
    },[students])
  const  assinTutorWithStudent = () => {
        var stus = multiselectRef2.current.getSelectedItems();
        var tutor =multiselectRef1.current.getSelectedItems();
        if (tutor.length == 0 || stus.length == 0) {
                alert(" just have 2 items ");
        } else {
                stus.forEach((stu) => {
                        firebase.firestore()
                                .collection("contacts")
                                .doc(`${stu.studentgmail}`)
                                .set({
                                        studentgmail: stu.studentgmail,
                                        studentmobile: stu.studentmobile,
                                        studentmssv: stu.studentmssv,
                                        studentname: stu.studentname,
                                        studenttimeinteract: Date.now(),
                                        tutorgmail: tutor[0].tutorgmail,
                                        tutormobile: tutor[0].tutormobile,
                                        tutorname: tutor[0].tutorname,
                                })
                                .then(() => {
                                        firebase.firestore()
                                                .collection("students")
                                                .doc(`${stu.studentgmail}`)
                                                .update({
                                                        supported: tutor[0].tutorgmail,
                                                });
                                })
                                .then(() => getStudents())
                                .then(() => console.log("set --- success"));
                });
                multiselectRef1.current.resetSelectedValues();
                multiselectRef2.current.resetSelectedValues();
        }
};
return (
    <div class="main">
            <div>
                    <div class="row">
                            <div class="col" class="con">
                                    <Multiselect
                                            ref={multiselectRef1}
                                            styles={styles}
                                            options={tutors}
                                            displayValue="tutorgmail"
                                            selectionLimit={3}
                                            caseSensitiveSearch={true}
                                            avoidHighlightFirstOption={true}
                                            singleSelect={true}
                                            closeOnSelect={true}
                                            placeholder="select tutor"
                                    />
                            </div>
                            <div class="col" class="con">
                                    <Multiselect
                                            ref={multiselectRef2}
                                            styles={styles}
                                            options={students}
                                            displayValue="studentgmail"
                                            selectionLimit={3}
                                            caseSensitiveSearch={true}
                                            avoidHighlightFirstOption={true}
                                            //  singleSelect={true}
                                            closeOnSelect={true}
                                            placeholder="select students"
                                    />
                            </div>
                    </div>
                    <div>
                            <button onClick={assinTutorWithStudent}>
                                    <h1>Assign</h1>
                            </button>
                    </div>
                    <div class="row" style={{ marginTop: 20 }}>
                            <div>
                                    <h2 style={{ marginLeft: 20 }}>Tutors</h2>
                                    <Table style={{ marginLeft: 13 }}>
                                            <Table.Body height={240} width={450}>
                                                    {tutors.map((profile) => (
                                                            <Table.Row
                                                                    key={profile.tutorgmail}
                                                                    isSelectable
                                                                    intent="success"
                                                            >
                                                                    <Table.TextCell>
                                                                            {profile.tutorname}
                                                                    </Table.TextCell>
                                                                    <Table.TextCell>
                                                                            {profile.tutorgmail}
                                                                    </Table.TextCell>
                                                                    <Table.TextCell>
                                                                            {profile.tutormobile}
                                                                    </Table.TextCell>
                                                            </Table.Row>
                                                    ))}
                                            </Table.Body>
                                    </Table>
                            </div>
                            <div>
                                    <h2 style={{ marginLeft: 20 }}>Students have no support</h2>
                                    <Table style={{ marginLeft: 17 }}>
                                            <Table.Body height={240} width={450}>
                                                    {students.map((profile) => (
                                                            <Table.Row
                                                                    key={profile.studentgmail}
                                                                    isSelectable
                                                                    intent="success"
                                                            >
                                                                    <Table.TextCell>
                                                                            {profile.studentname}
                                                                    </Table.TextCell>
                                                                    <Table.TextCell>
                                                                            {profile.studentgmail}
                                                                    </Table.TextCell>
                                                                    <Table.TextCell>
                                                                            {profile.studentmssv}
                                                                    </Table.TextCell>
                                                            </Table.Row>
                                                    ))}
                                            </Table.Body>
                                    </Table>
                            </div>
                    </div>
            </div>
    </div>
);
}
const styles = {
        multiselectContainer: {
                // To change css for multiselect (Width,height,etc..)
                width: 300,
                height: 80,
                marginLeft: 30,
        },
        searchBox: {
                // To change search box element look
                border: 1,
                borderRadius: 10,
                fontSize: 20,
                width: 400,
                height: 30,
                minHeight: 70,
                backgroundColor: "#CEF6F5",
        },
        inputField: {
                // To change input field position or margin
                margin: 5,
        },
        chips: {
                // To change css chips(Selected options)
                //background: 'red'
        },
        optionContainer: {
                // To change css for option container
                border: 1,
                borderColor: "black",
                borderRadius: 5,
        },
        option: {
                // To change css for dropdown options
                fontSize: 20,
        },
        groupHeading: {
                // To chanage group heading style
                color: "pink",
        },
};

export default Contactadd;
