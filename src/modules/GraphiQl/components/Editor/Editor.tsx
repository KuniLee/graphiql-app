import { useRef, useEffect, MutableRefObject, FC } from 'react';
import { basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';
import styles from './Editor.module.scss';

type EditorProps = {
  schema?: GraphQLSchema;
  defaultValue?: string;
};

const customTheme = EditorView.theme({
  '&': {
    backgroundColor: '#0e1315',
    borderRadius: '6px',
    padding: '15px',
    color: '#fff',
    height: '100%',
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

const Editor: FC<EditorProps> = ({ schema, defaultValue }) => {
  const editor = useRef<HTMLDivElement>();

  useEffect(() => {
    const startState = EditorState.create({
      doc: defaultValue || '',
      extensions: [basicSetup, keymap.of([...defaultKeymap, indentWithTab]), customTheme, graphql(schema)],
    });

    const view = new EditorView({ state: startState, parent: editor.current });

    return () => {
      view.destroy();
    };
  }, [defaultValue, schema]);

  return <div className={styles.container} ref={editor as MutableRefObject<HTMLDivElement>}></div>;
};

export default Editor;
