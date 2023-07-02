import { useController, useCache } from '@data-client/react';
import { Tag } from 'antd';
import { Issue } from 'resources/Issue';
import { Reaction, ReactionResource, contentToIcon } from 'resources/Reaction';
import { UserResource } from 'resources/User';
import { v4 as uuid } from 'uuid';

const { CheckableTag } = Tag;

export function CreateReaction({ content, reactions = [], issue }: Props) {
  const ctrl = useController();
  const currentUser = useCache(UserResource.current);
  const userReaction =
    currentUser &&
    reactions.find((reaction) => reaction.user.login === currentUser.login);

  const handleClick = () => {
    if (userReaction || !currentUser) return;
    ctrl.fetch(
      ReactionResource.create,
      {
        owner: issue.owner,
        number: issue.number,
        repo: issue.repo,
      },
      { content, id: uuid() as any as number, user: currentUser.login as any },
    );
  };
  return (
    <CheckableTag checked={false} onChange={handleClick}>
      {contentToIcon[content]}
    </CheckableTag>
  );
}
interface Props {
  reactions: Reaction[];
  content: keyof typeof contentToIcon;
  issue: Issue;
}
