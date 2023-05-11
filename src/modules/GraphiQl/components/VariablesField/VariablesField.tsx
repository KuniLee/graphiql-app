import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import customTheme from '@/styles/codeMirrorTheme';
import { setVars } from '@/modules/GraphiQl/store/GraphiQlSliceSlice';
import { useAppDispatch } from '@/hooks/redux';

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
    />
  );
};

export default VariablesField;
