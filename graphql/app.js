const express = require('express');
const port = 8600;
const app = express();
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./Model/Schema');
app.use(cors())
app.use(
    '/graphql',
    graphqlHTTP({
        schema:schema,
        graphiql:true
    })
)

app.listen(port)