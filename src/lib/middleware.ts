import { IncomingForm } from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (
  req: NextApiRequest
): Promise<{ fields: any; files: any }> => {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ fields, files });
    });
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { fields, files } = await parseForm(req);

      // Extract data from fields and files
      const { title, description, slug, categoryIds } = fields;
      const imageFile = files.imageFile;

      // Implement your logic to handle the post creation, e.g., save to the database
      // You might want to move the uploaded file to a permanent location using fs.rename or fs.copyFile

      res.status(201).json({ message: "Post created successfully" });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
