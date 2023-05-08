import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import customTheme from '@/styles/codeMirrorTheme';

import { useAppSelector } from '@/hooks/redux';

const VariablesField: FC = () => {
  const { response } = useAppSelector((state) => state.graphiQl);

  return (
    <CodeMirror
      className="w-full px-2 pb-2 h-full border-round"
      value={response}
      height="100%"
      basicSetup={{ highlightActiveLine: false }}
      theme={customTheme}
    />
  );
};

export default VariablesField;
