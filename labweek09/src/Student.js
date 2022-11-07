function Student(props)
{
    let info = props.stuInfo
    return (
        <div>
            <h1>Welcome to Fullstack Development - I</h1>
            <h2>React.JS Programming Week-09 Lab Exercise</h2>
            <h3>Student Number: {info.stuNum}</h3>
            <h3>Student Name: {info.StuName}</h3>
            <h3>College & City: {info.college}, {info.city}</h3>
        </div>
    )
}

export default Student;