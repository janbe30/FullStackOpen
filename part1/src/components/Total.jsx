const Total = ({parts}) => {
    const total = parts.reduce((acc, val) =>{
        return acc + val.exercises
    }, 0 )

    return (
        <p>Number of exercises {total}</p>
    )
}

export default Total;