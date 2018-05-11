
module.exports = {
    getAll: ( req, res, next ) => {
        const dbInstance = req.app.get( 'db' );
        dbInstance.getHouses()
        .then( (table) => {
            console.log(`Got the table`)
            res.status(200).send(table);
        }).catch( (errorMessage) => {
            res.status(500).send( errorMessage );
        });
    },
    deleteHouse: ( req, res, next ) => {
        const dbInstance = req.app.get( 'db' );
        const { id } = req.params;

        dbInstance.deleteAHouse([Number(id)])
        .then( (call)  => {
            dbInstance.getHouses().then( (table) =>
            res.status(200).send(table)
            )
        }).catch( err => {
            console.log(err);
        })
    },
    postNewHouse: (req, res, next) => {
        const dbInstance = req.app.get( 'db' );
        const { name, address, city, state, zip, img, mortgage, rent } = req.body;
        dbInstance.submitHouse([ name, address, city, state, zip, img, mortgage, rent ])
        .then( (callb )  => {
            res.status(200).send(callb);    
        }).catch( (err) => {
            res.status(500).send( err);
        })   
    }

};