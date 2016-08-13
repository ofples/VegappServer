import { version } from '../../package.json';
import { Router } from 'express';
import recipes from './recipes';
import restaurants from './restaurants';
import ingredients from './ingredients';


export default ({ config, db }) => {
	let api = Router();

	// mount the recipes resource
	api.use('/recipes', recipes({ config, db }));
	api.use('/restaurants', restaurants({ config, db }));
	api.use('/ingredients', ingredients({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
