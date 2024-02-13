import executeQuery from '@/db';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const result = await executeQuery({
                query: 'SELECT * FROM cloudia_users WHERE id = ?',
                values: [ req.query.id ],
            });
            if (result.length == 0) res.status(404).send();
            res.status(200).json(result[0]);
        } catch (error) {
            console.log(error);
            res.status(500).send();
        }
    }
    if (req.method === 'PUT') {
        try {
            const result = await executeQuery({
                query: 'INSERT INTO cloudia_users VALUES (?,?) ON DUPLICATE KEY UPDATE mc = ?',
                values: [ req.query.id, req.body.mc, req.body.mc ],
            });
            if (result.length == 0) res.status(404).send();
            res.status(200).json(result[0]);
        } catch (error) {
            console.log(error);
            res.status(500).send();
        }
    }
}
