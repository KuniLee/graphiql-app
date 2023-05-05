import { FC, useEffect, useMemo, useRef } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { graphql, updateSchema } from 'cm6-graphql';
import type { GraphQLSchema } from 'graphql';

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

  const viewRef = useRef<EditorView>();

  const extensions = useMemo(
    () => [keymap.of([...defaultKeymap, indentWithTab]), customTheme, graphql(schema)],
    [customTheme, schema]
  );

  useEffect(() => {
    if (viewRef.current) updateSchema(viewRef.current, schema);
  }, [schema]);

  return (
    <CodeMirror
      className="w-full p-2 h-full border-round"
      value={defaultValue}
      height="100%"
      extensions={extensions}
      theme={customTheme}
      onCreateEditor={(view) => {
        viewRef.current = view;
      }}
      basicSetup={{ autocompletion: true, bracketMatching: true, completionKeymap: true }}
      onChange={handleChange}
    />
  );
};

export default Editor;
