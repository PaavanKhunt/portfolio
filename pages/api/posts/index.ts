import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: any[];
  credentials?: any;
};

export default async function posts(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const auth = await google.auth.getClient({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    credentials: req.body.credentials,
  });

  const sheets = google.sheets({ version: 'v4', auth });

  const range = req.body.range;

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.SHEET_ID,
    range: range,
  });

  const data = response.data.values ?? [];

  res.status(200).json({ data: data });
}
