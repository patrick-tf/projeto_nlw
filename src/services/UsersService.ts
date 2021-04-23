import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

// interface IUserCreate {
//   email: string;
// }

class UsersService  {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create(email: string) {
    //Verifica se o usuario existe
    //Essa linha faz isso "userExists":
    // SELECT * FROM settings WHERE username = "username" LIMIT 1 ;
    const userExists = await this.usersRepository.findOne({
      email,
    });

    // Se existir, retorna o usuário
    if (userExists) {
      return userExists;
    } else {
      // se não exister, salva no bd
      const user = this.usersRepository.create({
        email,
      });

      await this.usersRepository.save(user);
      return user;
    }
  }
  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }
}

export { UsersService  };
