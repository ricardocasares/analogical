export const ISSUE = `query issue($owner: String!, $repo: String!, $num: Int!) {
    repository(owner:$owner, name:$repo) {
        issue(number:$num) {
            title
            number
            bodyHTML
        }
    }
}`;

export const LAST_ISSUES = `query lastIssues($owner: String!, $repo: String!, $num: Int = 3) {
  repository(owner:$owner, name:$repo) {
    issues(last:$num, labels: ["published"], orderBy: { field: CREATED_AT, direction: DESC }) {
      edges {
        node {
          title
          number
        }
      }
    }
  }
}`;

export const LAST_REPOSITORIES = `query lastRepositories {
  viewer {
    repositories(last: 18, privacy: PUBLIC, affiliations: OWNER, isFork: false, orderBy: {field: PUSHED_AT, direction: ASC}) {
      nodes {
        id
        url
        name
        description
      }
    }
  }
}
`;
