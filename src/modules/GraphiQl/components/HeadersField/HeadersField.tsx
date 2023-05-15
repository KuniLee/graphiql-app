import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import customTheme from '@/styles/codeMirrorTheme';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setHeaders } from '@/modules/GraphiQl/store/GraphiQlSliceSlice';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { linter } from '@codemirror/lint';

const HeadersField: FC = () => {
  const { headers } = useAppSelector((state) => state.graphiQl);
  const dispatch = useAppDispatch();

  return (
    <CodeMirror
      className="w-full px-2 pb-2 h-full border-round"
      height="100%"
      basicSetup={{ highlightActiveLine: false }}
      extensions={[json(), linter(jsonParseLinter())]}
      theme={customTheme}
      onChange={(e) => dispatch(setHeaders(e))}
      value={headers}
    />
  );
};

export default HeadersField;
