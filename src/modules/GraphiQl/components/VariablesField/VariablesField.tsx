import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import customTheme from '@/styles/codeMirrorTheme';
import { setVars } from '@/modules/GraphiQl/store/GraphiQlSliceSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { linter } from '@codemirror/lint';

const VariablesField: FC = () => {
  const dispatch = useAppDispatch();
  const { variables } = useAppSelector((state) => state.graphiQl);

  return (
    <CodeMirror
      className="w-full px-2 pb-2 h-full border-round"
      height="100%"
      basicSetup={{ highlightActiveLine: false }}
      extensions={[json(), linter(jsonParseLinter())]}
      theme={customTheme}
      onChange={(e) => dispatch(setVars(e))}
      value={variables}
    />
  );
};

export default VariablesField;
