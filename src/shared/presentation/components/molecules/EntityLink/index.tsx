import React, { FC, Fragment } from 'react';

import Link from 'next/link';

import { Tooltip } from '@/shared/presentation/components/atoms';
import { PopovableEntity } from '@/shared/presentation/models';

import { Container } from './styles';

const ENTITY_TO_PAGE: Record<PopovableEntity, string> = {
  Advantage: 'advantages',
  Condition: 'conditions',
  Modifier: 'modifiers',
};

interface IEntityLinkProps {
  type: string;
  entityKey: string;
  tooltipComponent?: FC<{ entityKey: string }>;
}

const EntityLink: React.FC<IEntityLinkProps> = ({
  entityKey,
  type,
  children,
  tooltipComponent: TooltipComponent,
}) => {
  if (!(type in ENTITY_TO_PAGE)) return <Fragment>{children}</Fragment>;

  const path = `${ENTITY_TO_PAGE[type as PopovableEntity]}/#${entityKey}`;
  const title = `${type}: ${entityKey}`;

  if (TooltipComponent)
    return (
      <Tooltip content={<TooltipComponent entityKey={entityKey} />}>
        <Container>
          <Link href={path} title={title}>
            {children}
          </Link>
        </Container>
      </Tooltip>
    );

  return (
    <Container>
      <Link href={path} title={title}>
        {children}
      </Link>
    </Container>
  );
};

export default EntityLink;
