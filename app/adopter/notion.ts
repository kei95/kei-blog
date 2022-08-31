import { Client } from "@notionhq/client";

export const notion = new Client({
  auth: process.env.NOTION_SECRET,
  notionVersion: "2022-06-28",
});
