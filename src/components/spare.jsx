Films

 render() {
      return (
         <main className="py-3">
            <div className="container-fluid pt-3 px-5">
               <div className="row justify-content-center">
                  {this.state.films.map(film => {
                     return <AllFilmCards key={film.id} film={film} />;
                  })}
               </div>
            </div>
         </main>
      );
}
   
///

AllFilmCards

return (
   <div className="col-md-4 mb-4">
      <div
         className="card border border-secondary rounded"
         style={{ height: '10em' }}
      >
         <div className="card-body text-center">
            <h3 className="card-title">{title}</h3>
         </div>
         <div className="card-footer">
            <Link
               to={`/film/${id}`}
               className="btn m-2 py-1 d-inline-block"
               style={{
                  background: '#e5eef0',
                  border: 'solid black 1px'
               }}
            >
               View Film
            </Link>
         </div>
      </div>
   </div>
);