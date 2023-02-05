// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  navs?: string[];
  err?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await fetch(`http://127.0.0.1:9998/server/navs`);
    const data = await response.json();
    res.status(200).json({ navs: data.navs });
  } catch (error) {
    const err = error as Error;
    res.status(500).json({
      err: err.message,
    });
  }
}
