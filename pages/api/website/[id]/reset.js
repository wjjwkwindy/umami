import { resetWebsite } from 'queries';
import { methodNotAllowed, ok, unauthorized } from 'next-basics';
import { allowQuery } from 'lib/auth';

export default async (req, res) => {
  const { id } = req.query;
  const websiteId = +id;

  if (req.method === 'POST') {
    if (!(await allowQuery(req))) {
      return unauthorized(res);
    }

    await resetWebsite(websiteId);

    return ok(res);
  }

  return methodNotAllowed(res);
};
