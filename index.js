import fastify from "fastify";

const app = fastify({logger: true})

app.get('/', async (req, res) => {
    return {hello: 'world'}
})

await app.listen({port: 3000})