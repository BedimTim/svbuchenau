import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../prisma/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  if (req.method === 'GET') {
    const ausr_stung = await prisma.ausr_stung.findUnique({
      where: { Ausr_stungs_ID: String(id) },
    });
    if (ausr_stung) {
      res.status(200).json(ausr_stung);
    } else {
      res.status(404).json({ error: 'Ausr_stung not found' });
    }
  } else if (req.method === 'PUT') {
    const { Ausr_stungstyp, Ausr_stungshersteller, Einzelpreis } = req.body;
    const updatedAusr_stung = await prisma.ausr_stung.update({
      where: { Ausr_stungs_ID: String(id) },
      data: {
        Ausr_stungstyp,
        Ausr_stungshersteller,
        Einzelpreis,
      },
    });
    res.status(200).json(updatedAusr_stung);
  } else if (req.method === 'DELETE') {
    await prisma.ausr_stung.delete({
      where: { Ausr_stungs_ID: String(id) },
    });
    res.status(204).end();
  } else {
    res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}