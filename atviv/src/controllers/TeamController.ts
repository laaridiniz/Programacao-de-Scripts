import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Team } from '../entities/Teams';

class TeamController {
  public async cadastro(req: Request, res: Response): Promise<Response> {

    const team1 = new Team()
    team1.name = "Palmeiras"
    const teams1 = await AppDataSource.getRepository(Team).save(team1)

    const team2 = new Team()
    team2.name = "São Paulo"
    const teams2 = await AppDataSource.getRepository(Team).save(team2)

    const team3 = new Team()
    team3.name = "Flamengo"
    const teams3 = await AppDataSource.getRepository(Team).save(team3)

    const team4 = new Team()
    team4.name = "Botafogo"
    const teams4 = await AppDataSource.getRepository(Team).save(team4)

    const team5 = new Team()
    team5.name = "Santos"
    const teams5 = await AppDataSource.getRepository(Team).save(team5)

    const team6 = new Team()
    team6.name = "Juventude"
    const teams6 = await AppDataSource.getRepository(Team).save(team6)

    const team7 = new Team()
    team7.name = "São Gonçalo"
    const teams7 = await AppDataSource.getRepository(Team).save(team7)

    const team8 = new Team()
    team8.name = "Fluminense"
    const teams8 = await AppDataSource.getRepository(Team).save(team8)
    
    const teams = await AppDataSource.getRepository(Team).find({})
        return res.json({ teams })
  }

  public async getAll(req: Request, res: Response): Promise<Response> {

    try{
      const teamsRepository = AppDataSource.getRepository(Team)
      .createQueryBuilder("team")
      .orderBy("team.name", "ASC")
      .getMany()
      return res.json((await teamsRepository))
    }catch(err){
        return res.json({erro: "Não foi possivel pegar os times"})
    }
  };

  public async getTermo(req: Request, res: Response): Promise<Response> {
      
    try{
      let termoTeam = req.params.termo
      const teamRepository = AppDataSource.getRepository(Team)
       .createQueryBuilder("team")
       .where("team.name like :name", { name:`%${termoTeam}%` })
       .getMany()
      return res.json(await teamRepository)
    }catch(err){
      return res.json({erro: "Não foi possivel pegar os times"})
    }
  };

  public async create(req: Request, res: Response): Promise<Response> {

    try{
      const create = req.body
      const teamsRepository = AppDataSource.getRepository(Team)
      const insert = new Team();
      insert.name = create.name.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
      const all = await teamsRepository.save(insert)
      return res.json(all)
   } catch(err){
      return res.json({error: "O nome já existe"})
  }
  };

  public async putTeam (req: Request, res: Response) : Promise<Response> {
    try{
        const create = req.body
        const teamsRepository = AppDataSource.getRepository(Team)
        const find = await teamsRepository.findOneBy({id: create.id})
        find.name = create.name.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
        const all = await teamsRepository.save(find)
        return res.json(all)
    }catch(err){
        return res.json({error: "O nome já existe"})
    }
}

  public async delete(req: Request, res: Response): Promise<Response> {
    try{
      const create = req.body
      const teamsRepository = AppDataSource.getRepository(Team)
      const find = await teamsRepository.findOneBy({id: create.id})
      
      const all = await teamsRepository.delete(find)
      return res.json(all)
  }catch(err){
      return res.json({raw: [], affected: 0})
  }
}
}

export default new TeamController();