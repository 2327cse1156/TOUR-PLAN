import Card from "./Card";
function Tours({tours,removeTour})
{
    return (
      <div className="container">
          <div><h2 className="title">Plan to Enjoy</h2></div>
        <div className="cards">
            {
                tours.map( (tour) =>{
                    return <Card {...tour} key={tour.id} removeTour={removeTour}></Card>
                })
            }
        </div>
      </div>

    );
    
}

export default Tours;