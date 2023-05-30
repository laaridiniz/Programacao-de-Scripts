import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Match } from '../entities/Matches';
import { Team } from "../entities/Teams";

class MatchController {

    public async postMatch(req: Request, res: Response): Promise<Response> {

        try{
            const { idhost, idvisitor, date } = req.body
            const matchesRepository = AppDataSource.getRepository(Match)
            const insert = new Match();
            insert.host = idhost
            insert.visitor = idvisitor
            insert.date = date
            const all = await matchesRepository.save(insert)
            const find = await matchesRepository.findOneBy({id: all.id})
            return res.json(find)
        }catch(err){
            return res.json({error: "O nome já existe"})
        }

    }

    public async putMatch(req: Request, res: Response): Promise<Response> {

        try{
            const { id, idhost, idvisitor, date } = req.body
            const host = await AppDataSource.getRepository(Team).findOneBy({ id: idhost })
            console.log(host)
            if (!host) {
                return res.json({ error: "Mandante desconhecido" })
            }
            const visitor = await AppDataSource.getRepository(Team).findOneBy({ id: idvisitor })
            if (!visitor) {
                return res.json({ error: "Visitante desconhecido" })
            }
            var match = await AppDataSource.getRepository(Match).findOneBy({ id: id })
            match.host = host
            match.visitor = visitor
            match.date = date
            const updatedMatch = await AppDataSource.getRepository(Match).save(match)
            return res.json(updatedMatch)

        }catch(err){
            return res.json({error: "Erro ao mudar!"})
        }

    }

    public async delete(req: Request, res: Response): Promise<Response> {

        try{
            const { id } = req.body
            const matchRepository = AppDataSource.getRepository(Match)
            const find = await matchRepository.findOneBy({id: id})
            
            const all = await matchRepository.delete(find)
            return res.json(all)
        }catch(err){
            return res.json({raw: [], affected: 0})
        }

    }

    public async list(req: Request, res: Response): Promise<Response> {
        try{
            const {limit, offset} = req.body
            const teamsRepository = AppDataSource.getRepository(Match)
            .createQueryBuilder("match")
            .leftJoinAndSelect("match.host", "host")
            .leftJoinAndSelect("match.visitor", "visitor")
            .orderBy("match.date", "DESC")
            .limit(limit)
            .offset(offset)
            .getMany()
            
            return res.json((await teamsRepository))
        }catch(err){
            return res.json({erro: "Não foi possivel pegar os teams"})
        }
    }

    public async listById(req: Request, res: Response): Promise<Response> {

        try{
            const termo:any = req.params.uuid
            const matchRepository = AppDataSource.getRepository(Match)
                .createQueryBuilder("match")
                .leftJoinAndSelect("match.host", "host")
                .leftJoinAndSelect("match.visitor", "visitor")
                .where("match.host = :host", { host:termo })
                .orWhere("match.visitor = :visitor", { visitor:termo })
                .orderBy("match.date", "DESC")
                .getMany()
            return res.json((await matchRepository))
        }catch(err){
            return res.json({erro: "Não foi possivel pegar os teams"})
        }
        
    }
}
export default new MatchController();