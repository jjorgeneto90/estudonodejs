




const contextMongoDB = new ContextStrategy(new MongoDB())
contextMongoDB.create()


const contextPostgres = new ContextStrategy(new Postgres())
contextPostgres.create()

contextMongoDB.read()