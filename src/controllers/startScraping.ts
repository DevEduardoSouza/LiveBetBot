import { Request, Response } from 'express';
import scraperService from '../services/scraperService';

export const startScraping = async (req: Request, res: Response) => {
    try {
        const data = await scraperService.scrape();
        res.json(data);
    } catch (error) {
        res.status(500).send({"error": "error"});
    }
};
