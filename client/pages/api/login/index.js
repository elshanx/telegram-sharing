import jwt from 'jsonwebtoken';
import dbConnect from '../../../utils/dbConnect';
import Users from '../../../models/users';

const JWT_SECRET = process.env.JWT_SECRET;

dbConnect();

export default async (req, res) => {
  if (!req.body) {
    res.status = 404;
    return res.end('Error');
  }

  const { email, password } = req.body;
  res.json({ token: jwt.sign({ email }, JWT_SECRET) });
};
