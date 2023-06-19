import React from 'react';

import * as S from './styles';

interface IRowProps {
  items: Array<{
    key: string;
    content: React.ReactChild;
  }>;
}

const Row: React.FC<IRowProps> = ({ items }) => (
  <S.Row>
    {items.map(item => (
      <S.TableContent key={item.key}>{item.content}</S.TableContent>
    ))}
  </S.Row>
);

interface ISectionProps {
  title: string;
}

const Section: React.FC<ISectionProps> = ({ title }) => (
  <S.SectionContent>{title}</S.SectionContent>
);

interface ITableProps {
  labels: Array<{
    title: string;
    span?: number;
  }>;
}

interface ITable extends React.FC<ITableProps> {
  Row: React.FC<IRowProps>;
  Section: React.FC<ISectionProps>;
}

const Table: ITable = (({ labels, children }) => {
  const spans = labels.map(({ span = 1 }) => span);

  return (
    <S.Table spans={spans}>
      <thead>
        <tr>
          {labels.map(label => (
            <S.TableHead key={label.title}>{label.title}</S.TableHead>
          ))}
        </tr>
      </thead>

      <tbody>{children}</tbody>
    </S.Table>
  );
}) as ITable;

Table.Row = Row;
Table.Row.displayName = 'Table.Row';
Table.Section = Section;
Table.Section.displayName = 'Table.Section';

export default Table;