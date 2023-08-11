import { useLive } from '@data-client/react';
import { List } from 'antd';
import parseLink from 'parse-link-header';
import { Issue, IssueResource } from 'resources/Issue';

import IssueListItem from './IssueListItem';
import NextPage from './NextPage';

export default function IssueList({ owner, repo, page, q }: Props) {
  const {
    results: { items: issues },
    link,
  } = useLive(IssueResource.search, {
    owner,
    repo,
    q,
  });
  const nextPage = parseLink(link)?.next?.page;

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={issues}
        renderItem={(issue) => <IssueListItem key={issue.pk()} issue={issue} />}
      />
      {nextPage ? (
        <div className="center">
          <NextPage owner={owner} repo={repo} q={q} />
        </div>
      ) : null}
    </>
  );
}

type Props = { owner: string; repo: string; page: string; q: string } & {
  state?: Issue['state'];
};
