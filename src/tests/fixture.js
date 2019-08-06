export const employees = [
    {
        id: 1,
        firstName: "Vinay",
        lastName: "Sridhara",
        supervisor: "Dhruba Banerjee",
        project1: "",
        project2: ""
    },
    {
        id: 11,
        firstName: "Dhruba",
        lastName: "Banerjee",
        supervisor: "",
        project1: "",
        project2: ""
    },
    {
        firstName: "Shruthi",
        lastName: "BV",
        supervisor: "Dhruba Banerjee",
        project1: "",
        project2: "",
        id: 12
    }
];

export const assignedTasks = [
    {
        name: "Task1",
        description: "task1",
        duration: "1",
        projectId: "1",
        id: 1
        },
        {
        name: "Task2",
        description: "task2",
        duration: "5",
        projectId: "1",
        id: 2
        }
];

export const projects = [
    {
        startDate: "2019-08-01T10:00:00.000Z",
        endDate: "2019-08-02T10:00:00.000Z",
        projectName: "New project",
        slackTime: "1",
        duration: 2,
        assignedTo: "1",
        id: 1
    },
    {
        startDate: "2019-08-15T10:00:00.000Z",
        endDate: "2019-08-25T10:00:00.000Z",
        projectName: "Another project",
        slackTime: "10",
        duration: 11,
        assignedTo: "12",
        id: 2
    }
];