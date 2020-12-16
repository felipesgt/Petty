/* eslint-disable object-curly-newline */
import Schedule from '../models/Schedule';

class ScheduleController {
  async store(req, res) {
    const { name, email, phone, location, problem } = req.body;
    const scheduleExists = Schedule.findOne({ where: { email } });

    const schedule = await Schedule.create({
      name,
      email,
      phone,
      location,
      problem,
    });
    const { _id } = schedule;
    return res.json({ _id });
  }
}
export default new ScheduleController();
