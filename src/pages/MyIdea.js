const MyIdeas = (props) => {
    console.log(props.ideaFav);
    return (
        <div className = 'ideaContainer'>
            {props.ideaFav && props.ideaFav.map((idea, index) => (
                <div key = {index} className= 'ideaCard'>
                    <img className = 'ideaImg' src = {idea.image}></img>
                    <h3>{idea.title}</h3>
                    <p>{idea.description}</p>
                </div>
            ))}
        </div>
    )
}

export default MyIdeas