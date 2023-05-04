import { FC } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';

type EditorProps = {
  schema?: GraphQLSchema;
  defaultValue?: string;
  handleChange?: (e: string) => void;
};

const Editor: FC<EditorProps> = ({ schema, defaultValue, handleChange }) => {
  const customTheme = EditorView.theme({
    '&': {
      backgroundColor: '#0e1315',
      borderRadius: '6px',
      padding: '15px',
      color: '#fff',
    },
    '.cm-gutters': {
      backgroundColor: '#0e1315',
      borderRight: 'none',
      color: '#fff',
    },
    '.cm-activeLine, .cm-activeLineGutter': {
      backgroundColor: 'var(--gray-700)',
    },
    '.ͼb': {
      color: '#D60590',
    },
    '.ͼc': {
      color: '#009FB8',
    },
    '.cm-line': {
      color: '#007DEB',
    },
    '.ͼ1.cm-focused .cm-matchingBracket,.cm-matchingBracket': {
      backgroundColor: 'var(--primary-300) !important',
    },
    '.cm-scroller': {
      lineHeight: '1.7',
      fontSize: '1.15em',
    },
  });

  const extensions = [keymap.of([...defaultKeymap, indentWithTab]), customTheme, graphql(schema)];

  return (
    <CodeMirror
      className="overflow-auto w-full h-full border-round"
      value={defaultValue}
      height="500px"
      extensions={extensions}
      theme={customTheme}
      basicSetup={{ autocompletion: true }}
      onChange={handleChange}
    />
  );
};

export default Editor;
