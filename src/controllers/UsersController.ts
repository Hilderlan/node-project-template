import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';

class UsersControlerr {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      const createUser = new CreateUserService();

      const user = await createUser.execute({
        name,
        email,
        password,
      });

      return response.json(user);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export default UsersControlerr;
