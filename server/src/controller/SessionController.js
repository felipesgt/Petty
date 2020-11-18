import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User';
import 'dotenv/config';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) { return res.status(404).send('user not found'); }
    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordCorrect) return res.status(401).send('Wrong Password');

    return res.json({
      token: jwt.sign({ userId: user._id }, process.env.APP_SECRET, {
        expiresIn: '7d',
      }),
    });
  }
}
export default new SessionController();
