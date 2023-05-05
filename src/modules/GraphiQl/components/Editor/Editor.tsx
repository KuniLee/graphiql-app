import { FC, useEffect, useMemo, useRef } from 'react';
import { useCodeMirror } from '@uiw/react-codemirror';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { graphql, updateSchema } from 'cm6-graphql';
import type { GraphQLSchema } from 'graphql';

type EditorProps = {
  schema?: GraphQLSchema;
  defaultValue?: string;
  handleChange?: (e: string) => void;
};

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
  '.ͼd': {
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
  '.cm-tooltip': {
    color: '#000',
  },
});

const Editor: FC<EditorProps> = ({ schema, defaultValue, handleChange }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const editor = useRef<any>();

  const extensions = useMemo(() => [keymap.of([...defaultKeymap, indentWithTab]), graphql(schema)], [schema]);

  const { setContainer, view } = useCodeMirror({
    container: editor.current,
    extensions,
    value: defaultValue,
    theme: customTheme,
    onChange: handleChange,
  });

  useEffect(() => {
    if (editor.current) {
      setContainer(editor.current);
    }
  }, [setContainer]);

  useEffect(() => {
    if (view) updateSchema(view, schema);
  }, [schema, view]);

  return <div className="w-full p-2 h-full border-round" ref={editor} />;
};

export default Editor;
