import { Request, Response } from "express";
import { sequelize } from "./connectToDatabase";
import { QueryTypes } from "sequelize";


export const getStatsService = async (req: Request, res: Response) => {

  const stats = await sequelize.query(
    `
      SELECT category,
      COALESCE(SUM(1) FILTER(WHERE active = true), 0) AS active,
      COALESCE(SUM(1) FILTER(WHERE active = false), 0) AS archived FROM user_notes GROUP BY category;
    `,
    {
      type: QueryTypes.SELECT
    }
  );

  res.send(stats);
}