import { rankingRepository } from '../repositories/ranking.repository.js';

export const getRanking = async (req, res) => {

    try {
        const rankingData = await rankingRepository.getRanking()
        res.send(rankingData.rows).status(200)
    } catch (error) {
        res.status(500).send(error.message)
    }

}