import { FC } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { SlideMenu } from 'primereact/slidemenu';
import { MenuItem } from 'primereact/menuitem';
import { IntrospectionType } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { IArguments, IQueries } from './interface';

const Docs: FC = () => {
  const { introQuery } = useAppSelector((state) => state.graphiQl);

  const getScalarFields = (fields: readonly IntrospectionType[] | IQueries[], secondName?: string): MenuItem[] => {
    let resultArr: { label: Maybe<string> }[] | MenuItem[] = [];

    if (secondName === 'ID') {
      resultArr = (fields as readonly IntrospectionType[])
        .filter((el) => el.name === secondName)
        .map((item) => {
          return {
            label: item.description,
          };
        });

      return resultArr as MenuItem[];
    } else {
      resultArr = (fields as IQueries[])
        .filter((el) => el.name === secondName)
        .map((item) => {
          return item.inputFields.map((el) => {
            return {
              label: `${el.name}:${el.type?.name ? el.type?.name : el.type?.ofType?.name}`,
            };
          });
        })
        .flat();

      return resultArr as MenuItem[];
    }
  };

  const getFirstScalar = (arr: IArguments[], fields: readonly IntrospectionType[], scalarName: string): MenuItem[] => {
    const scalarNamesArr = ['String', 'Int', 'Boolean', 'ID', 'Float'];

    if (scalarNamesArr.some((el) => el === scalarName)) {
      return fields
        .filter((el) => el.name === scalarName)
        .map((item) => {
          return {
            label: item.description,
          };
        }) as MenuItem[];
    }

    return arr.map((el) => {
      return {
        label: `${el.name}:${el.type.name !== null ? el.type?.name : el.type?.ofType?.name}`,
        items: getScalarFields(fields, el.type?.ofType?.name),
      };
    });
  };

  const docs = () => {
    if (introQuery) {
      const fields = introQuery.__schema.types;

      const queries: IQueries[] | IntrospectionType[] = fields.filter(
        (el) => el.kind === 'OBJECT' && el.name[0] !== '_'
      );

      let arr: MenuItem[] = [];

      arr = (queries as IQueries[]).map((el) => {
        return {
          label: `${el.name}`,
          items: [
            ...el.fields.map((item) => {
              return {
                label: `${item.name}:${item.type.name !== null ? item.type?.name : item.type?.ofType?.name}`,
                items: getFirstScalar(item.args, fields, item.type?.name),
              };
            }),
          ],
        };
      });

      return arr;
    }
  };

  return (
    <div>
      <SlideMenu model={docs()} viewportHeight={500} menuWidth={280} style={{ width: '300px' }}></SlideMenu>
    </div>
  );
};

export default Docs;
