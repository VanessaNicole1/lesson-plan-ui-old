const initialData={
    subject:{
        'subject1':{id:'Tesis', content: 'Tesis'},
        'subject2':{id:'Compiladores', content: 'Compiladores'},
        'subject3':{id:'Software', content: 'Software'},
        'subject4':{id:'IA', content: 'IA'},
        'subject5':{id:'Automatas', content: 'Automatas'},
    },
    rows:{
        'headerRow':{
            id:'headerRow',
            title: 'Asignaturas',
            subjectIds: ['Tesis',
            'Compiladores','Software','IA',
            'Automatas'],
        },
    },
    rowsOrder:['headerRow'],
};

export default initialData;