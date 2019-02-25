description,
         director,
         producer,
         release_date,
   rt_score
         



   //




///

class EachFilm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         film: {}
      };
   }

   async componentDidMount() {
      try {
         let resFilm = await fetch(
            `https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`
         );
         let film = await resFilm.json();
         console.log('fired')
         this.setState({ film });
      } catch (e) {
         console.log(e);
      }
   }

   render() {
      let {
         title,
         
      } = this.state.film;
      return (
         <main className="py-3" style={{background: '#E5E4E2'}}>
            <div className="container-fluid pt-3 px-5">
               <div className="row justify-content-center">
                  {/* {this.state.films.map(film => {
                     return <EachFilmCard key={film.id} film={film} />;
                  })} */}
               </div>
            </div>
         </main>
      );
   }
}

export default EachFilm;


///

const EachFilm = (props) => {
   let { title, description } = props.film
   return (
      <div className="card">
         <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
               {description}
            </p>
            <Link
                  to="/films"
                  className="btn  m-2 d-inline-block "
                  style={{ background: 'white', border: 'solid black 1px' }}
               >
                  View Films
               </Link>
         </div>
      </div>
   );
};

export default EachFilm;