import slug from "slugster";
import Link from "next/link";
import { NextPage, GetStaticProps } from "next";
import { Stack } from "@/components/Stack";
import { Layout } from "@/components/Layout";
import { H1, Strong, Measure, A, Lead } from "@/components/Typography";
import { gql } from "@/data/api";
import { LAST_ISSUES as query } from "@/data/queries";

export const Changelog: NextPage<{ issues: any }> = ({ issues }) => (
  <Layout>
    <Measure flex="1" as="section">
      <H1>Changelog</H1>
      <Lead>
        Notes and thoughts on <Strong>software development</Strong>
      </Lead>
      <Stack as="ul" m={0} p={0} space={20}>
        {issues.map((issue: any) => (
          <li key={issue.id}>
            <Link
              as={`/changelog/${issue.id}/${slug(issue.title)}`}
              href={`/changelog/[...issue]`}
              passHref
            >
              <A>{issue.title}</A>
            </Link>
          </li>
        ))}
      </Stack>
    </Measure>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const data = await gql({
    num: 10,
    query,
    owner: "ricardocasares",
    repo: "analogical",
  });

  return {
    props: {
      // @ts-ignore
      issues: data.repository.issues.edges.map(
        // @ts-ignore
        ({ node: { number, title } }) => ({
          id: number,
          title,
        })
      ),
    },
  };
};

export default Changelog;
