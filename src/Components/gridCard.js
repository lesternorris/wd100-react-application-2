const GridCard = (props) => {
    return ( 
        <>
            <div className="col-md-4">
                <div className="card">
                    <img src={props.img} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque obcaecati error vitae nostrum sit iusto officiis fuga quos repudiandae provident sequi impedit, consequuntur explicabo earum saepe tempora dolore suscipit doloremque.</p>
                        <a href="#" className="btn btn-warning">Lear More</a>
                    </div>
                </div>

            </div>
        </>
     );
}
 
export default GridCard;