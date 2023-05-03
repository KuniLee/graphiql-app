import { useRef, useEffect, MutableRefObject, FC } from 'react';
import { basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap } from '@codemirror/view';
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { solarizedDark } from 'cm6-theme-solarized-dark';
import { graphql } from 'cm6-graphql';
import { GraphQLSchema } from 'graphql';

type EditorProps = {
  schema?: GraphQLSchema;
};

const Editor: FC<EditorProps> = ({ schema }) => {
  const editor = useRef<HTMLDivElement>();

  useEffect(() => {
    const startState = EditorState.create({
      doc: `mutation mutationName {
        setString(value: "newString")
        }`,
      extensions: [basicSetup, keymap.of([...defaultKeymap, indentWithTab]), solarizedDark, graphql(schema)],
    });

    const view = new EditorView({ state: startState, parent: editor.current });

    return () => {
      view.destroy();
    };
  }, [schema]);

  return <div ref={editor as MutableRefObject<HTMLDivElement>}></div>;
};

export default Editor;
