
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');


const app = express();


const schema = buildSchema(`
    type Student {
        id: ID!
        name: String!
        course: String!
    }

    type Query {
        hello: String
        student(id: ID!): Student
    }
`);


const students = [
    {
        id: "1",
        name: "Vishi",
        course: "CSE"
    }
];


const root = {
    hello: () => {
        return "Hello GraphQL!";
    },

    student: ({ id }) => {
        return students.find(student => student.id === id);
    }
};


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));


app.listen(4000, () => {
    console.log('Server running at http://localhost:4000/graphql');
});
