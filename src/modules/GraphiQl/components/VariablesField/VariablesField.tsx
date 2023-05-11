import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import customTheme from '@/styles/codeMirrorTheme';
import { setVars } from '@/modules/GraphiQl/store/GraphiQlSliceSlice';
import { useAppDispatch } from '@/hooks/redux';
import { json, jsonParseLinter } from '@codemirror/lang-json';
import { linter } from '@codemirror/lint';

const VariablesField: FC = () => {
  const dispatch = useAppDispatch();

  const handleChange = (e: string) => {
    try {
      dispatch(setVars(JSON.parse(e)));
    } catch {
      dispatch(setVars({}));
    }
  };

  return (
    <CodeMirror
      className="w-full px-2 pb-2 h-full border-round"
      height="100%"
      basicSetup={{ highlightActiveLine: false }}
      theme={customTheme}
      onChange={(e) => handleChange(e)}
      extensions={[json(), linter(jsonParseLinter())]}
    />
  );
};

export default VariablesField;
