import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import customTheme from '@/styles/codeMirrorTheme';

import { useAppSelector } from '@/hooks/redux';

const ResponseField: FC = () => {
  const { response } = useAppSelector((state) => state.graphiQl);

  return (
    <CodeMirror
      className="w-full p-2 h-full border-round"
      value={response}
      height="100%"
      theme={customTheme}
      editable={false}
      basicSetup={{ lineNumbers: false, highlightActiveLine: false }}
    />
  );
};

export default ResponseField;
