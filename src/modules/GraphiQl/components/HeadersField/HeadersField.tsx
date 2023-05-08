import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import customTheme from '@/styles/codeMirrorTheme';

const HeadersField: FC = () => {
  return (
    <CodeMirror
      className="w-full px-2 pb-2 h-full border-round"
      height="100%"
      basicSetup={{ highlightActiveLine: false }}
      theme={customTheme}
    />
  );
};

export default HeadersField;
