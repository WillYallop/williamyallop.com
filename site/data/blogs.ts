interface Blog {
  title: string;
  slug: string;
  date_created: string;
  date_modified: string;
  date_published: string;
  summary: string;
}

export const LIMIT = 10;

export const blogs: Array<Blog> = [
  {
    title: "Blog 1",
    slug: "blog-1",
    date_created: new Date("2021-08-03").toISOString(),
    date_modified: new Date("2021-08-28").toISOString(),
    date_published: new Date("2021-08-20").toISOString(),
    summary: "Blog 1 summary",
  },
  {
    title: "Blog 2",
    slug: "blog-2",
    date_created: new Date("2021-08-03").toISOString(),
    date_modified: new Date("2021-08-28").toISOString(),
    date_published: new Date("2021-08-20").toISOString(),
    summary: "Blog 2 summary",
  },
  {
    title: "Blog 3",
    slug: "blog-3",
    date_created: new Date("2021-08-03").toISOString(),
    date_modified: new Date("2021-08-28").toISOString(),
    date_published: new Date("2021-08-20").toISOString(),
    summary: "Blog 3 summary",
  },
  {
    title: "Blog 4",
    slug: "blog-4",
    date_created: new Date("2021-08-03").toISOString(),
    date_modified: new Date("2021-08-28").toISOString(),
    date_published: new Date("2021-08-20").toISOString(),
    summary: "Blog 4 summary",
  },
  {
    title: "Blog 5",
    slug: "blog-5",
    date_created: new Date("2021-08-03").toISOString(),
    date_modified: new Date("2021-08-28").toISOString(),
    date_published: new Date("2021-08-20").toISOString(),
    summary: "Blog 5 summary",
  },
  {
    title: "Blog 6",
    slug: "blog-6",
    date_created: new Date("2021-08-03").toISOString(),
    date_modified: new Date("2021-08-28").toISOString(),
    date_published: new Date("2021-08-20").toISOString(),
    summary: "Blog 6 summary",
  },
  {
    title: "Blog 7",
    slug: "blog-7",
    date_created: new Date("2021-08-03").toISOString(),
    date_modified: new Date("2021-08-28").toISOString(),
    date_published: new Date("2021-08-20").toISOString(),
    summary: "Blog 7 summary",
  },
  {
    title: "Blog 8",
    slug: "blog-8",
    date_created: new Date("2021-08-03").toISOString(),
    date_modified: new Date("2021-08-28").toISOString(),
    date_published: new Date("2021-08-20").toISOString(),
    summary: "Blog 8 summary",
  },
  {
    title: "Blog 9",
    slug: "blog-9",
    date_created: new Date("2021-08-03").toISOString(),
    date_modified: new Date("2021-08-28").toISOString(),
    date_published: new Date("2021-08-20").toISOString(),
    summary: "Blog 9 summary",
  },
  {
    title: "Blog 10",
    slug: "blog-10",
    date_created: new Date("2021-08-03").toISOString(),
    date_modified: new Date("2021-08-28").toISOString(),
    date_published: new Date("2021-08-20").toISOString(),
    summary: "Blog 10 summary",
  },
  {
    title: "Blog 11",
    slug: "blog-11",
    date_created: new Date("2021-08-03").toISOString(),
    date_modified: new Date("2021-08-28").toISOString(),
    date_published: new Date("2021-08-20").toISOString(),
    summary: "Blog 11 summary",
  },
];
