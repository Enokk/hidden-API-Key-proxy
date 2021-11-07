import { Router, Request, Response } from 'express';
import needle from 'needle';

export const weatherRouter = Router()

weatherRouter.get('/weather', async (req: Request, res: Response) => {
    try {
        const params: URLSearchParams = new URL(req.url, 'http://dummy').searchParams;
        params.append(process.env.WEATHER_API_KEY_NAME || 'none', process.env.WEATHER_API_KEY_VALUE || 'none');

        const apiRes = await needle('get', `${process.env.WEATHER_API_URL || 'none'}?${params}`)
        
        return res.status(200).json(apiRes.body);

    } catch (error) {
      return res.status(500).json(error);
    }
});