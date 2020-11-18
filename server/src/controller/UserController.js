import User from '../models/User';

class UserController {
  async store(req, res) {
    const { name, email, password } = req.body;
    const userExists = User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ error: [{ msg: 'User already exists' }] });
    }

    const user = await User.create({
      name,
      email,
      password,
    });
    const { _id } = user;
    return res.json({ _id });
  }
}

export default new UserController();
